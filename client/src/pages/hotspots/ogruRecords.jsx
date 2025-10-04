import "./hotspots.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useNavigate } from "react";
import "./ogruRecords.css";
import "../../fonts/fonts.css";
import Ogru from "./ogru.jsx";
import Listen from "./listen.jsx";
import Discover from "./discover.jsx";
import Typewriter from "../../components/typewriter.jsx";
import Button from "../../components/button.jsx";
import "../townscene/townscene.css";
import "../home/home.css";

const optionCards = [
    {
        id: "ogru",
        label: "Read",
        color: "rgba(120, 178, 32, 0.621)",
        colorTwo: "rgb(105, 120, 81)",
        p: "Read the story",
    },
    {
        id: "listen",
        label: "Listen",
        color: "rgba(135, 206, 250, 0.51)",
        colorTwo: "rgb(82, 107, 122)",
        p: "Listen to Recordings",
    },
    {
        id: "discover",
        label: "Discover",
        color: "rgba(89, 37, 37, 0.502)",
        colorTwo: "rgb(100, 81, 81)",
        p: "Browse the collection",
    },
];

function OgruRecords(text) {
    const [clicked, setClicked] = useState();

    //const navigate = useNavigate();

    return (
        <motion.div
            className="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="ogruContainer">
                <motion.div
                    className="backdrop"
                    initial={{ y: 500 }}
                    transition={{ duration: 1.5, ease: "easeIn" }}
                    animate={{ y: 0, height: "auto" }}
                >
                    <Greetings />
                    <motion.div className="ogruCardContainer">
                        {optionCards.map(
                            ({ id, label, color, colorTwo, p }) => (
                                <OgruOptionCard
                                    key={id}
                                    id={id}
                                    label={label}
                                    p={p}
                                    color={color}
                                    colorTwo={colorTwo}
                                    onClick={() => {
                                        setClicked(id);
                                        setTimeout(() => {
                                            document
                                                .getElementById(
                                                    "contentSection"
                                                )
                                                .scrollIntoView({
                                                    behavior: "smooth",
                                                });
                                        }, 200); // small delay to allow animation if needed
                                    }}
                                />
                            )
                        )}
                    </motion.div>
                    <motion.div id="contentSection" className="optionPage">
                        <AnimatePresence mode="wait">
                            {clicked === "ogru" && (
                                <motion.div
                                    key="ogru"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -50 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Ogru />
                                </motion.div>
                            )}
                            {clicked === "listen" && (
                                <motion.div
                                    key="listen"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -50 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Listen />
                                </motion.div>
                            )}
                            {clicked === "discover" && (
                                <motion.div
                                    key="discover"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -50 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Discover />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                    <motion.div className="magicLeafDiv">
                        <Button
                            className="magicLeafBack"
                            text="To the Town"
                        ></Button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}

function Greetings() {
    return (
        <>
            <motion.div className="greetings">
                <motion.h1 className="ogruTitle">Ogru Records</motion.h1>
                <Typewriter
                    lines={[
                        " Good day to you. ",
                        " What would you like to do? ",
                    ]}
                    speed={100}
                    pauseBetween={2000}
                    className="ogruText"
                />
            </motion.div>
        </>
    );
}

function OgruOptionCard({ label, color, p, colorTwo, onClick }) {
    return (
        <motion.button
            className="ogruOptionCard"
            style={{ backgroundColor: color }}
            onClick={onClick}
            whileHover={{ backgroundColor: colorTwo }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.2 }}
        >
            <motion.h1 className="optionTitle">{label}</motion.h1>
            <motion.p className="optionText">{p}</motion.p>
        </motion.button>
    );
}

export default OgruRecords;
