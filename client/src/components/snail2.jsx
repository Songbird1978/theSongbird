import { motion, AnimatePresence } from 'framer-motion';
import snail from '../assets/snail.png';
import '../pages/townscene/townscene.css';

function Snail2 ({ imagewidth }) {

    console.log("image width is:", imagewidth);

    return (

            <AnimatePresence>
                <motion.div 
                initial={{
                    x: -1000,
                }}
                animate={{
                    x: +3000,
                    rotate: [0, 0, 0,  1, 2, 2, 3, 4, 5, 4, 3, 2, 1, 0, 0, 0]
                }}
                transition={{
                    rotate: { duration: 10, repeat: Infinity },
                    x: { duration: 30, ease: "linear", repeat: Infinity }
                }}>
               
                <img className="snailImg"
                src={snail} alt="snail moving slowly across the screen" 
                style={{ position: 'relative', zIndex: 5000, width: "20rem", transform: "rotate(-8deg)"}}
                /> 
                </motion.div>
                
            </AnimatePresence>
    )
}

export default Snail2;
