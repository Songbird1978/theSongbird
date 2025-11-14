import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import snail from '../assets/snail.png';
import '../pages/townscene/townscene.css';

function Snail () {

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
            setDirection((prev) => (prev === 'right' ? "left" : "right"));
            setMoveKey(prev => prev + 1);
        }, 30000); // syncs with the x transition duration (10s)

        return () => clearTimeout(timer);
    }, [moveKey]); // triggers when animation restarts

    const startX = direction === "right" ? -1000 : screenWidth;
    const endX = direction === "right" ? screenWidth : -1000;

    return (

    <div className="snailContainer" id="snail">
        <div className="snailImgDiv">
            <AnimatePresence>
                <motion.div 
                key={`${direction}-${moveKey}`}
                initial={{
                    x: startX,
                    scaleX: direction === "right" ? 1 : -1
                }}
                animate={{
                    x: endX,
                    scaleX: direction === "right" ? 1 : -1,
                    rotate: [0, 0, 0,  1, 2, 2, 3, 4, 5, 4, 3, 2, 1, 0, 0, 0]
                }}
                transition={{
                    rotate: { duration: 10, repeat: Infinity },
                    x: { duration: 30, ease: "linear" }
                }}
                onAnimationComplete={() => {
                    console.log("Animation done, Turning snail banner.");
                    setDirection((prev) => (prev === "left" ? "right" : "left"));
                    setMoveKey(prev => prev + 1); //re-triggers animation
                }}
                alt="snail"
                className="snailDiv"

                >
                 
                <img src={snail} alt="snail moving slowly across the screen" style={{ position: 'relative', zIndex: 5000, width: "20rem", transform: "rotate(-8deg)"}} />
                  
                </motion.div>
                
            </AnimatePresence>
        </div>      

    </div>

    )
}

export default Snail;
