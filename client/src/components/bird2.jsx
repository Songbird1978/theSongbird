
import { motion, AnimatePresence } from 'framer-motion';
import banner from '../assets/birdBanner.png';
import '../pages/townscene/townscene.css';

function Bird2 ({ imagewidth }) {

    console.log("image width is:", imagewidth);
  
    return (
            <AnimatePresence>
                <motion.div 
                style={{ width: "100%", height: 'auto' }}
                initial={{
                    x: +3000,
                }}
                animate={{
                    x: -1000,
                    rotate: [0, 0, 0,  0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0, 0, 0, 0, 0]
                }}
                transition={{
                    rotate: { duration: 0.5, repeat: Infinity, repeatType: 'reverse' },
                    x: { duration: 20, ease: "linear", repeat: Infinity  }
                }}
                alt="bird with instructions banner"
                className="birdBanner"
                >                
                <img src={banner} alt="bird carrying banner with instructions for use - use keyboard arrows or mouse to explore the town" style={{ width: 600}} />
                </motion.div>
                
            </AnimatePresence>
    )
}

export default Bird2;
