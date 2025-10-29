import './hotspots.css';
import Video from '../../assets/NoticeVideo.mp4';
import NoticeboardImage from '../../assets/NoticeBackground.png';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CVButton from '../../assets/CVButton.png';
import aboutMe from '../../assets/aboutme.png';
import linkedIn from '../../assets/linkedIn.png';
import github from '../../assets/github.png';
import soundcloud from '../../assets/soundcloud.png';
import paper from '../../assets/pages.mp3';
import badge from '../../assets/greenBadge.png';
import click from '../../assets/clickButton.mp3';



export default function Noticeboard() {


    const navigate = useNavigate();

    const [hasPlayed, setHasPlayed] = useState(false);
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
        console.log("The video has ended");
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
                            transition={{ duration: 3, ease: 'easeOut' }}
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
                        <div className="noticeGrid">

                            <section className="header">
                                <h1 className="noticeTitle ">The Songbird Noticeboard</h1>
                                <h2 className="noticeDescription"> <i>General news and information</i></h2>
                            </section>

                            <section className="cvButton">

                                <motion.img
                                    src={CVButton}
                                    alt="CV Button"
                                    className="cv"
                                    onAnimationStart={() => paperSound.play()}
                                    initial={{ rotate: 0, x: 0, y: 0 }}
                                    transition={{ duration: 0.2, ease: "easeOut", spring: "light" }}
                                    whileHover={{ rotate: -5, x: 0, y: 0, scale: 1.1 }}
                                    whileTap={{ rotate: 5, x: 0, y: 0 }}
                                />
                            </section>

                            <section className="badge">
                                <motion.img
                                    src={badge}
                                    alt="badge"
                                    className="badgeGreen"
                                    transition={{ type: "spring", stiffness: 300 }}
                                    whileTap={{ scale: 0.9 }}
                                    onAnimationStart={() => clickButton.play()}
                                    onClick={() => {
                                        setTimeout(() => {
                                            navigate('/townscene');
                                        }, 600);
                                    }}
                                />
                            </section>

                            <section className="about">
                                <motion.img
                                    src={aboutMe}
                                    alt="about me"
                                    className="aboutMe"
                                    onAnimationStart={() => paperSound.play()}
                                    initial={{ rotate: 0, x: 0, y: 0, scale: 1.2 }}
                                    transition={{ duration: 0.2, ease: "easeOut", spring: "light" }}
                                    whileHover={{ rotate: -5, x: 0, y: 0, scale: 1.3 }}
                                    whileTap={{ rotate: 5, x: 0, y: 0 }}
                                />

                            </section>

                            <section className="links">
                                <motion.img src={linkedIn}
                                    alt="linkedIn"
                                    className="linkedIn"
                                    onAnimationStart={() => paperSound.play()}
                                    initial={{ rotate: 0, x: 0, y: 0 }}
                                    transition={{ duration: 0.2, ease: "easeOut", spring: "light" }}
                                    whileHover={{ rotate: 5, x: 0, y: 0, scale: 1.4 }}
                                    whileTap={{ rotate: -5, x: 0, y: 0 }}
                                />
                                <motion.img
                                    src={github}
                                    alt="gitHub"
                                    className="gitHub"
                                    onAnimationStart={() => paperSound.play()}
                                    initial={{ rotate: 0, x: 0, y: 0 }}
                                    transition={{ duration: 0.2, ease: "easeOut", spring: "light" }}
                                    whileHover={{ rotate: -5, x: 0, y: 0, scale: 1.4 }}
                                    whileTap={{ rotate: 7, x: 0, y: 0 }}
                                />
                                <motion.img
                                    src={soundcloud}
                                    alt="soundcloud"
                                    className="soundcloud"
                                    onAnimationStart={() => paperSound.play()}
                                    initial={{ rotate: 0, x: 0, y: 0 }}
                                    transition={{ duration: 0.2, ease: "easeOut", spring: "light" }}
                                    whileHover={{ rotate: 2, x: 0, y: 0, scale: 1.4 }}
                                    whileTap={{ rotate: -8, x: 0, y: 0 }}
                                />
                            </section>

                        </div>

                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}

