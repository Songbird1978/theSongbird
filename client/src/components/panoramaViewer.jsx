import React, { useRef, useEffect, useState } from 'react';

const PanoramaViewer = ({ src, alt = "explore the Panorama", children }) => {
const containerRef = useRef(null);
const imgRef = useRef(null);
const contentRef = useRef(null);
const [imagewidth, setImageWidth] = useState(0);


//measure image width 
useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    if (img.complete) setImageWidth(img.naturalWidth);
    else img.onload = () => setImageWidth(img.naturalWidth);
    console.log("panorama img width = ", imagewidth);
}, [src]);

useEffect(() => {
    const img = imgRef.current;
    const content = contentRef.current;
    if (!img || !content) return;

    // measure screen width / calculate 
const updateWidth = () => {
    if (!img.naturalWidth || !img.naturalHeight) {
        return;
    }
    const displayedHeight = window.innerHeight; 
    const aspectRatio = img.naturalWidth / img.naturalHeight;
    const displayedWidth = Math.round(displayedHeight * aspectRatio);
    content.style.width = `${displayedWidth}px`;
};

if (img.complete && img.naturalWidth) {
    updateWidth();
} else {
    const onLoad = () => updateWidth();
    img.addEventListener("load", onLoad);
    return () => img.removeEventListener("load", onLoad);
}

window.addEventListener("resize", updateWidth);
return () => window.removeEventListener("resize", updateWidth);

}, [src]);


//dragging to explore
useEffect(() => {
    const container = containerRef.current;
    let isDragging = false;
    let startX; 
    let scrollStart;

    const isTouchDevice = 
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice) {
        const handleMouseDown = (e) => {
            isDragging = true; 
            startX = e.pageX - container.offsetLeft;
            scrollStart = container.scrollLeft;
        };

        const handleMouseLeave = () => (isDragging = false);
        const handleMouseUp = () => (isDragging = false);

        const handleMouseMove = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 1.5;
            container.scrollLeft = scrollStart - walk;
        };

        container.addEventListener("mousedown", handleMouseDown);
        container.addEventListener("mouseLeave", handleMouseLeave);
        container.addEventListener("mouseup", handleMouseUp);
        container.addEventListener("mousemove", handleMouseMove);

        return () => {
            container.removeEventListener("mousedown", handleMouseDown);
            container.removeEventListener("mouseLeave", handleMouseLeave);
            container.removeEventListener("mouseup", handleMouseUp);
            container.removeEventListener("mousemove", handleMouseMove); 
        };
    }
}, []);

//keystrokes to explore 

useEffect(() => {
    const container = containerRef.current;

    const handleKeyDown = (e) => {
        const step = 100;
        switch (e.key) {
            case "ArrowLeft":
            case "a":
            case "A":
                container.scrollLeft -+ step;
                break;
            case "ArrowRight":
            case "d":
            case "D":
                container.scrollLeft += step;
                break;
            case "Home":
                container.scrollLeft = 0;
                break;
            case "End":
                container.scrollLeft = container.scrollWidth;
                break;
            default:
                break;
        }
    };


    container.addEventListener("keydown", handleKeyDown);
    container.focus();

    return () => container.removeEventListener("keydown", handleKeyDown);
}, []);

return (
    <div 
    ref={containerRef}
    tabIndex={0}
    style={{
        height: "100vh",
        overflowX: "auto",
        overflowY: "hidden",
        display: 'flex',
        whiteSpace: "nowrap",
        scrollBehaviour: "smooth",
        WebkitOverflowScrolling: "touch",
        cursor: "grab", 
        alignItems: "right",
    }} 
    className="panorama-container"
    >
        <div 
        className="panorama-wrapper"
        ref={contentRef}
        style={{
            position: 'relative',
            display: 'inline-block',
            height: "100%",
        }}
        >
            <img 
            ref={imgRef}
            src={src} 
            alt={alt} 
            style={{ 
                height: "100vh",
                width: "auto",
                display: "block",
                userSelect: "none",
                }} 
            />
            <div
            className="hotspot-layer"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 400,
                pointerevents: 'auto',
            }}
            >
            {children}
            </div>
        </div> 
    </div>
);
};

export default PanoramaViewer;