import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import birdImg from '../assets/birdImg.png';
import banner from '../assets/birdBanner.png';
import '../pages/townscene/townscene.css';

function Bird ({ imagewidth }) {

    const [direction, setDirection] = useState ("right");
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [moveKey, setMoveKey] = useState(0);

    //calculate innwidth of the window for different screen sizes 
    useEffect (() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener ("resize", handleResize);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDirection((prev) => (prev === 'right' ? "right" : "right"));
            setMoveKey(prev => prev + 1);
        }, 20000); // syncs with the x traisition duration (10s)

        return () => clearTimeout(timer);
    }, [moveKey]); // triggers when animation restarts

    const startX = direction === "left" ? -1000 : screenWidth;
    const endX = direction === "left" ? screenWidth : -1000;

    return (

    <div className="birdContainer" id="bird" >
        <div className="birdImgDiv">
            <AnimatePresence>
                <motion.div 
                style={{ width: "100%", height: 'auto' }}
                key={`${direction}-${moveKey}`} 
                initial={{
                    x: startX,
                    scaleX: direction === "right" ? 1 : -1
                }}
                animate={{
                    x: endX,
                    scaleX: direction === "right" ? 1 : -1,
                    rotate: [0, 0, 0,  0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0, 0, 0, 0, 0]
                }}
                transition={{
                    rotate: { duration: 0.5, repeat: Infinity },
                    x: { duration: 20, ease: "linear" }
                }}
                onAnimationComplete={() => {
                    console.log("Animation done, Turning bird banner");
             
                
                    setMoveKey(prev => prev + 1); //re-triggers animation
                }}
                alt="bird with message"
                className="birdBanner"
                >
                 
                <img src={banner} alt="bird carrying banner with instructions for use - use keyboard arrows or mouse to explore the town" style={{ width: 600}} />
                  
                </motion.div>
                
            </AnimatePresence>
        </div>      

    </div>

    )
}

export default Bird;
