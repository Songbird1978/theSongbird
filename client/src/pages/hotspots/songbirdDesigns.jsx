import "./hotspots.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ogruRecords.css";
import "../../fonts/fonts.css";
import "./songbirdDesigns.css";
import Typewriter from "../../components/typewriter.jsx";
import Button from "../../components/button.jsx";
import "../townscene/townscene.css";
import "../home/home.css";

function SongbirdDesigns() {
    const [designs, setDesigns] = useState([]);
    const [clicked, setClicked] = useState();
    const [complete, setComplete] = useState(false);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Delay between each child
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <motion.div
            className="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="designContainer w-full flex justify-center bg-stone-200 opacity-80">
                <h1 className="topicTitle">Songbird Designs</h1>
            </div>
        </motion.div>
    );
}

export default SongbirdDesigns;
