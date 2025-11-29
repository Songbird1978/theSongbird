import {  useState } from "react";
import "./startScreen.css";
import { motion } from 'framer-motion';
import songbirdLogo from '../../assets/theSongbirdLogo.png';

function Loading() {
    const [isLoaded, setIsLoaded] = useState(false);


    return (
        <div className="loadingContainer">
                    <motion.img
                        className="loadingImage"
                        key='loadingImage'
                        src={songbirdLogo}
                        alt="songbird Logo"
                        animate={{
                            rotate: 360, //rotation 360
                            y: ["0%", "-5%", "0%"], // Adds slight bounce
                        }}
                        transition={{
                            repeat: Infinity, //continuous rotation
                            duration: 5, // 5 seconds to rotate
                            ease: "linear" // no stopping 
                        }}
                    >
                    </motion.img>
                    <p className="loadingText">Loading ...</p>
        </div>
    );
}

export default Loading;
