import "./hotspots.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./ogruRecords.css";
import "../../fonts/fonts.css";
import Ogru from "./ogru.jsx";
import Listen from "./listen.jsx";
import Discover from "./discover.jsx";
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

    return (
        <motion.div
            className="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="ogruContainer">
                <h1>SongbirdDesigns</h1>
                <p>This is the page for SongbirdDesigns. Here you can see my music work, albums, etc.</p>
            </div>
        </motion.div>
    );
}

export default SongbirdDesigns;