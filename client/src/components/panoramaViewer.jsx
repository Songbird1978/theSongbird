import React, { useRef, useEffect } from 'react';

const PanoramaViewer = ({ src, alt = "explore the Panorama", children }) => {
const containerRef = useRef(null);

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
        position: 'relative',
        width: "100%",
        height: "100vh",
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        scrollBehaviour: "smooth",
        WebkitOverflowScrolling: "touch",
        cursor: "grab",
        outline: "none", //hide focus outline
    }} 
    className="panorama-container"
    >
        <div 
        className="panorama-wrapper"
        style={{
            position: 'relative',
            display: 'inline-block',
            height: "100%",
        }}
        >
            <img 
            src={src} 
            alt={alt} 
            style={{ 
                height: "100%",
                width: "auto",
                display: "inline-block",
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