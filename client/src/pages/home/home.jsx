import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import leavesLeft from "../../assets/leaves2NoBgL.png";
import leavesRight from "../../assets/leaves2NoBgFlipR.png";
import leavesFull from "../../assets/leavesFull.png";
import secretGardenDoorSquare from "../../assets/secretGardenDoorSquare.png";
import redLeaf from "../../assets/redLeaf.png";
import "../home/home.css";
import rustleSound from '../../assets/rustle.mp3';
import rustleQuietHover from '../../assets/rustleQuietHover.mp3';
import birdSound from '../../assets/birds.mp3';


function Home() {
    const [exitIndex, setExitIndex] = useState(0);

    const navigate = useNavigate();

  

    const handleClick = () => {
        setExitIndex((prev) => prev + 1);
    };

    const rustle = new Audio(rustleSound);
    const birds = new Audio(birdSound);
    const rustleQuiet = new Audio(rustleQuietHover);

    // Optional: so it doesn’t overlap repeatedly
    rustle.volume = 0.6;
    rustle.preload = "auto";

    birds.volume = 0.3;

    rustleQuiet.volume = 0.4;
    rustleQuiet.preload = 'auto';

    return (
        <motion.div
            className="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="secretGardenContainer">
                <motion.button
                    src={redLeaf}
                    alt="leaf button"
                    className="leaf"
                    onClick={handleClick}
                    whileHover={{
                        scale: [1.3, 1.5, 1.2],
                        rotate: [0, 5, -5, 0],
                        transition: {
                            duration: 2, repeat: Infinity
                        },
                        y: ["0%", "-10%", "0%"], // Adds slight bounce
                        x: ["0%", "-5%", "0%"], // Adds slight bounce
                    }}

                >
                    <p className="buttonTextHome">
                        Click Me
                    </p>
                </motion.button>

               {/*{exitIndex >= 1 && <TownScene />}    could use this if you want to stay on the garden - otherwise - navigate to the townscene*/ }

                {/* Left and Right Leaves */}

                <div className="secretGardenBush">
                    <AnimatePresence>
                        {/* Left */}
                        {exitIndex < 1 && (
                            <motion.div
                                key="LLeftD"
                                className="leavesLeftDiv"
                                onAnimationStart={() => rustle.play()}
                                initial={{ x: 0, opacity: 1 }}
                                exit={{ x: "-100vw", opacity: 1, rotate: [0, 2, -2, 1, -1, 0] }}
                                transition={{ duration: 1.2 }}
                            >
                                <motion.img
                                    key="leavesLeft"
                                    src={leavesLeft}
                                    onHoverStart={() => rustleQuiet.play()}
                                    whileHover={{
                                        rotate: [0, -2, 2, -1, 1, 0],
                                        transition: { duration: 0.6 },
                                        scale: [1, 1.01, 1]
                                    }}
                                    alt="leaves left"
                                    className="leavesLeft" />
                            </motion.div>
                        )}
                        {/* Right */}
                        {exitIndex < 2 && (
                            <motion.div
                                key="LRightD"
                                className="leavesRightDiv"
                                onAnimationStart={() => rustle.play()}
                                initial={{ x: 0, opacity: 1 }}

                                exit={{ x: "100vw", opacity: 1, rotate: [0, 2, -2, 1, -1, 0] }}
                                transition={{ duration: 1.2 }}
                            >
                                <motion.img
                                    key="leavesright"
                                    src={leavesRight}
                                    onHoverStart={() => rustleQuiet.play()}
                                    whileHover={{
                                        rotate: [0, 2, -2, 1, -1, 0],
                                        transition: { duration: 0.6 },
                                        scale: [1, 1.01, 1]
                                    }}
                                    alt="leaves right"
                                    className="leavesRight"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>


                {/* Full Leaves */}
                <AnimatePresence>
                    {exitIndex < 3 && (
                        <motion.div
                            key="fullLeaves"
                            className="leavesFullDiv"
                            onAnimationStart={() => rustle.play()}
                            initial={{ opacity: 1 }}
                            exit={{
                                opacity: 0,
                                scale: [1, 1.03, 1],
                                rotate: [0, 0.5, 0],

                            }}
                            transition={{ duration: 1.5 }}
                            onClick={handleClick}
                        >
                            <motion.img
                                key="leavesFull"
                                src={leavesFull}
                                alt="leaves full"
                                className="leavesFull"
                                onHoverStart={() => rustleQuiet.play()}
                                whileHover={{
                                    scale: [1, 1.03, 1],
                                    rotate: [0, -1, 1, -1, 1, 0],
                                    transition: { duration: 0.6 }
                                }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Secret Garden Door */}
                <AnimatePresence>
                    {exitIndex < 4 && (
                        <motion.div
                            key="door"
                            className="secretGardenDoorSqu"
                            initial={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            exit={{ opacity: 0, scale: 1.3 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            onClick={handleClick}
                            onAnimationComplete={() => {
                                navigate("/townscene")}}
                        >
                            <img
                                src={secretGardenDoorSquare}
                                alt="secret garden door"
                                className="secretGardenDoorSqu"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

export default Home;

