import { motion, AnimatePresence } from 'framer-motion';
import snail from '../assets/snail.png';
import '../pages/townscene/townscene.css';

function Snail2 () {

  console.log("Snail2 rendering!");

    return (

            <AnimatePresence>
                <motion.div 
                style={{ position: 'absolute', bottom: "5%", left: 0, zIndex: "5000"
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
