import "./hotspots.css";
import Video from "../../assets/NoticeVideo.mp4";
import NoticeboardImage from "../../assets/NoticeBackground.png";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import CVButton from "../../assets/CVButton.png";
import aboutMe from "../../assets/aboutme.png";
import linkedIn from "../../assets/linkedIn.png";
import github from "../../assets/github.png";
import paper from "../../assets/pages.mp3";
import badge from "../../assets/greenBadge.png";
import click from "../../assets/clickButton.mp3";
import Bee from '../../assets/bumblebee.png';

export default function Noticeboard() {
    const navigate = useNavigate();

    const [hasPlayed, setHasPlayed] = useState(false);
    const [showPDF, setShowPDF] = useState(false);
    const videoRef = useRef(null);

    const paperSound = new Audio(paper);
    const clickButton = new Audio(click);

    clickButton.volume = 0.6;
    clickButton.preload = "auto";

    paperSound.volume = 0.6;
    paperSound.preload = "auto";

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.play();
        } else {
            setHasPlayed(true);
        }
    }, []);

    const handleVideoEnd = () => {
        //console.log("The video has ended");
        setHasPlayed(true);
    };

    return (
        <motion.div
            className="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="noticeboardContainer videoNoticeWrapper">
                {/* VIDEO */}
                <AnimatePresence>
                    {!hasPlayed && (
                        <motion.video
                            ref={videoRef}
                            key="intro-video"
                            className="noticeVideo"
                            autoPlay
                            muted
                            playsInline
                            onEnded={handleVideoEnd}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ scale: 2, opacity: 0 }}
                            transition={{ duration: 3, ease: "easeOut" }}
                        >
                            <source src={Video} type="video/mp4" />
                        </motion.video>
                    )}
                </AnimatePresence>

                {/* NOTICEBOARD IMAGE */}
                {hasPlayed && (
                    <motion.div className="newsInfo">
                        <motion.img
                            src={NoticeboardImage}
                            alt="noticeboard image"
                            className="noticeImage"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                        />

                        {/* Noticeboard GRID */}
                        <div className="noticeGrid grid p-10 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                            <h1 className="noticeTitle pt-5 place-self-center">
                                The Songbird Noticeboard
                            </h1>

                            <motion.img
                                src={badge}
                                alt="badge"
                                className="badgeGreen badge h-20 md:h-28 lg:h-28 place-self-center"
                                transition={{ type: "spring", stiffness: 300 }}
                                whileTap={{ scale: 0.9 }}
                                onAnimationStart={() => clickButton.play()}
                                onClick={() => {
                                    setTimeout(() => {
                                        navigate("/townscene");
                                    }, 600);
                                }}
                            />
                            
                            <motion.img
                                src={CVButton}
                                alt="CV Button"
                                className="cv cvButton h-48 sm:h-48 md:h-64 lg:h-80"
                                onAnimationStart={() => paperSound.play()}
                                initial={{ rotate: 0, x: 0, y: 0 }}
                                transition={{
                                    duration: 0.2,
                                    ease: "easeOut",
                                    spring: "light",
                                }}
                                whileHover={{
                                    rotate: -5,
                                    x: 0,
                                    y: 0,
                                    scale: 1.1,
                                }}
                                whileTap={{ rotate: 5, x: 0, y: 0 }}
                                onClick={() => {
                                    setShowPDF(true);
                                    //console.log("cv clicked", showPDF);
                                }}
                            />

                            {showPDF && (
                                <div
                                    style={{
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        width: "100vw",
                                        height: "100vh",
                                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                                        zIndex: 99999,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div
                                        style={{
                                            backgroundColor: "white",
                                            padding: "20px",
                                            borderRadius: "8px",
                                            width: "90%",
                                            maxWidth: "1000px",
                                            height: "90vh",
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <button
                                            onClick={() => setShowPDF(false)}
                                            style={{
                                                alignSelf: "flex-end",
                                                padding: "10px 20px",
                                                marginBottom: "10px",
                                                cursor: "pointer",
                                            }}
                                        >
                                            Close
                                        </button>
                                        <iframe
                                            src="/cv.pdf"
                                            style={{
                                                width: "100%",
                                                height: "100svh",
                                                border: "none",
                                            }}
                                            title="CV"
                                        />
                                    </div>
                                </div>
                            )}

                            <motion.img
                                src={aboutMe}
                                alt="about me"
                                className="about h-48 md:h-64 place-self-center"
                                onAnimationStart={() => paperSound.play()}
                                initial={{ rotate: 0, x: 0, y: 0, scale: 1.2 }}
                                transition={{
                                    duration: 0.2,
                                    ease: "easeOut",
                                    spring: "light",
                                }}
                                whileHover={{
                                    rotate: -5,
                                    x: 0,
                                    y: 0,
                                    scale: 1.5,
                                }}
                                whileTap={{ rotate: 5, x: 0, y: 0, scale: 1.5 }}
                            />

                            <motion.img
                                src={linkedIn}
                                style={{ cursor: "pointer" }}
                                alt="linkedIn"
                                className="linkedIn h-32 md:h-40 lg:h-48 xl:h-64"
                                onAnimationStart={() => paperSound.play()}
                                initial={{ rotate: 0, x: 0, y: 0 }}
                                transition={{
                                    duration: 0.2,
                                    ease: "easeOut",
                                    spring: "light",
                                }}
                                whileHover={{
                                    rotate: 5,
                                    x: 0,
                                    y: 0,
                                    scale: 1.4,
                                }}
                                whileTap={{ rotate: -5, x: 0, y: 0 }}
                                onClick={() =>
                                    window.open(
                                        "https://uk.linkedin.com/in/hayley-callender",
                                        "_blank"
                                    )
                                }
                            />

                            <motion.img
                                src={github}
                                style={{ cursor: "pointer" }}
                                alt="gitHub"
                                className="gitHub h-32 md:h-40 lg:h-48 xl:h-64"
                                onAnimationStart={() => paperSound.play()}
                                initial={{ rotate: 0, x: 0, y: 0 }}
                                transition={{
                                    duration: 0.2,
                                    ease: "easeOut",
                                    spring: "light",
                                }}
                                whileHover={{
                                    rotate: -5,
                                    x: 0,
                                    y: 0,
                                    scale: 1.4,
                                }}
                                whileTap={{ rotate: 7, x: 0, y: 0 }}
                                onClick={() =>
                                    window.open(
                                        "https://github.com/HayleyCallender",
                                        "_blank"
                                    )
                                }
                            />
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}
