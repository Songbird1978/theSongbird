import "./hotspots.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ogruRecords.css";
import "../../fonts/fonts.css";
import Ogru from "./ogru.jsx";
import Discover from "./discover.jsx";
import Typewriter from "../../components/typewriter.jsx";
import Button from "../../components/button.jsx";
import BackToTop from "../../components/backToTop/backToTop.jsx";
import Nav from '../../components/nav.jsx';
import "../townscene/townscene.css";
import "../home/home.css";
//import TownScene from '../townscene/townscene.jsx';

const optionCards = [
    {
        id: "ogru",
        label: "Read",
        color: "rgba(135, 206, 250, 0.51)",
        colorTwo: "rgb(82, 107, 122)",
        p: "Read more",
    },
    {
        id: "discover",
        label: "Discover",
        color: "rgba(89, 37, 37, 0.502)",
        colorTwo: "rgb(100, 81, 81)",
        p: "Browse the collection",
    },
];

function OgruRecords() {
    const [clicked, setClicked] = useState();
    const [complete, setComplete] = useState(false);
    const [showingProjects, setShowingProjects] = useState(false);
    const navigate = useNavigate();

    // When they click the button
    const handleShowProjects = () => {
        setShowingProjects(true);
        localStorage.setItem("recordStoreView", "projects");
    };

    useEffect(() => {
        const savedView = localStorage.getItem("recordStoreView");
        if (savedView === "projects") {
            setShowingProjects(true);
        }
    }, []);

    return (
        <motion.div
            className="page scrollbar-hide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="ogruContainer">
                <motion.div
                    className="backdrop scrollbar-hide"
                    initial={{ y: 500 }}
                    transition={{ duration: 1.5, ease: "easeIn" }}
                    animate={{ y: 0, height: "auto" }}
                >
                    <Greetings setComplete={setComplete} id="top" />
                    {complete && (
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
                                            setShowingProjects(true);
                                            handleShowProjects;
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
                    )}
                    <motion.div
                        id="contentSection"
                        className="mt-10 optionPage"
                    >
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
                            {clicked === "discover" && (
                                <motion.div
                                    key="discover"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -50 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {showingProjects && <Discover />}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    <div className="magicLeafDiv">
                        <Button
                            className="magicLeafBack"
                            id="magicLeafText"
                            text="Exit"
                            to={"/townscene"}
                            style={{ cursor: "pointer" }}
                        ></Button>
                    </div>
                    <Nav />
                </motion.div>
            </div>
            <BackToTop containerSelector=".App" />
        </motion.div>
    );
}

function Greetings({ setComplete }) {
    return (
        <>
            <motion.div className="greetings">
                <motion.h1 className="ogruTitle">Ogru Records</motion.h1>
                <Typewriter
                    lines={[
                        " Good day to you. ",
                        " What would you like to do? ",
                    ]}
                    speed={70}
                    pauseBetween={200}
                    className="ogruText"
                    onComplete={() => {
                        setComplete(true);
                    }} // trigger when typing is complete
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
