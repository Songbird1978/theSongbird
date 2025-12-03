import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import snail from '../assets/snail.png';
import '../pages/townscene/townscene.css';
import snailSlime from '../assets/snailSlime.mp3';

function Snail2 () {

  console.log("Snail2 rendering!");
 
 
  useEffect(() => {
    const snailSound = new Audio(snailSlime)

    snailSound.loop = true;
    snailSound.volume = 0.3;
    snailSound.preload = 'auto';
    snailSound.play();
    // cleanup function - runs when component unmounts
    return () => {
    
            console.log("snail sound paused", snailSound.currentime)
            snailSound.pause();
            snailSound.currentTime = 0; //reset to beginning
    };
    }, []);
      

    return (

            <AnimatePresence>
                <motion.div 
                style={{ position: 'absolute', bottom: "5%", left: 0, zIndex: "9999"
                }}
                initial={{
                    x: '-400px',
                }}
                animate={{
                    x: 'calc(100vw + 400px)',
                    rotate: [0, 0, 0,  1, 2, 2, 3, 4, 5, 4, 3, 2, 1, 0, 0, 0]
                }}
                transition={{
                    rotate: { duration: 10, repeat: Infinity },
                    x: { duration: 40, ease: "linear", repeat: Infinity }
                }}>
                <img className="snailImg"
                src={snail} alt="snail moving slowly across the screen" 
                style={{ transform: "rotate(-8deg)", width: 300}}
                /> 
                </motion.div>
            </AnimatePresence>
    )
}

export default Snail2;
