import "./hotspots.css";
import { motion } from "framer-motion";

function SongbirdSites() {
    return (
        <motion.div
            className="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="backdrop scrollbar-hide"
                initial={{ y: 500 }}
                transition={{ duration: 1.5, ease: "easeIn" }}
                animate={{ y: 0, height: "auto" }}
            >
                <Greetings setComplete={setComplete} />
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
                <motion.div id="contentSection" className="mt-10 optionPage">
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
                <div className="magicLeafDiv">
                    <Button
                        className="magicLeafBack"
                        id="magicLeafText"
                        text="Exit"
                        to={"/townscene"}
                        style={{ cursor: "pointer" }}
                    ></Button>
                </div>
            </motion.div>
            <div className="sitesContainer">
                <h1>SongbirdSites</h1>
                <p>
                    This is the page for SongbirdSites. Here you can see my
                    music work, albums, etc.
                </p>
            </div>
        </motion.div>
    );
}

export default SongbirdSites;
