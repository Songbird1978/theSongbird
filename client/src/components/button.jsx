import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import leafImg from '../assets/redLeaf.png';
import '../pages/hotspots/ogruRecords.jsx';
import '../pages/home/home.css';




const AnimatedLeafButton = ({ to, text }) => {
    const navigate = useNavigate();

    return (
        <motion.button
            src={leafImg}
            className="magicLeafBack"
            //whileHover={{ scale: 1.2, rotate: -5 }}
            whileHover={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
                transition: {
                    duration: 2, repeat: Infinity
                },
                y: ["0%", "-10%", "0%"], // Adds slight bounce
                x: ["0%", "-5%", "0%"], // Adds slight bounce
            }}

            whileTap={{ scale: 0.9 }}
            onClick={() => {
                // Add sound or animation delay here if needed
                setTimeout(() => navigate(to), 300);
            }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <p className="buttonTextHome" text={text}>
                {text}
            </p>
        </motion.button>
    );
};

export default AnimatedLeafButton;