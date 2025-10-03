// StartScreen.jsx
import { useNavigate } from "react-router-dom";
import leaf from "../../assets/leaf.png";
import birdSound from '../../assets/birds.mp3';
import { useEffect, useRef, useState } from "react";
import "./startScreen.css";
import { motion } from 'framer-motion';
import leavesFull from '../../assets/leavesFull.png';
import leavesLeft from '../../assets/leaves2NoBgL.png';
import leavesRight from '../../assets/leaves2noBgFlipR.png';
import rustle from '../../assets/rustle.mp3';
import rustleQuiet from '../../assets/rustleQuietHover.mp3';
import secretGardenDoor from '../../assets/secretGardenDoorSquare.png';
import songbirdLogo from '../../assets/theSongbirdLogo.png';

function StartScreen({ onEnter }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [audio] = useState(new Audio(birdSound));
    const navigate = useNavigate();


    useEffect(() => {
        //preload images
        const preLoadImage = (src) => {
            const img = new Image();
            img.src = src;
        };

        preLoadImage(leaf);
        preLoadImage(leavesFull);
        preLoadImage(leavesLeft);
        preLoadImage(leavesRight);
        preLoadImage(secretGardenDoor);
        preLoadImage(songbirdLogo);

        //preload sounds

        const quietRustle = new Audio(rustleQuiet);
        quietRustle.preload = 'auto';

        const rustleSound = new Audio(rustle);
        rustleSound.preload = 'auto';

        //fake loading delay or real check
        setTimeout(() => setIsLoaded(true), 1500);
    }, []);

    const handleClick = () => {
        audio.loop = true;
        audio.volume = 0.3;
        audio.play().catch((e) => console.error("Autoplay block:", err));
        navigate("/garden");
    };

    return (
        <div className="startScreenContainer">
            {isLoaded ? (
                <>
                    <motion.img
                        src={leaf}
                        key='leaf'
                        alt="Enter The Songbird"
                        className="leafInto"
                        whileHover={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0],
                            transition: {
                                duration: 2, repeat: Infinity
                            },
                            y: ["0%", "-10%", "0%"], // Adds slight bounce
                            x: ["0%", "-5%", "0%"], // Adds slight bounce
                        }}
                        onClick={handleClick}
                    />
                    <div className="callToAction">Enter The Songbird Garden</div>
                </>

            ) : (
                <>


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
                </>
            )}
        </div>
    );
}

export default StartScreen;
