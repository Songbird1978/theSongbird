import './hotspots.css';
import { motion } from 'framer-motion';


function Discover() {
    return (
        <motion.div
            className="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="topicContainer">
                <h1 className="topicTitle">Discover</h1>
                <p className="ogruText topicText">This is the page for you to browse all the works that I have been involved with. Here you can learn about the history of my music work, albums, etc.</p>
            </div>
        </motion.div>
    );
}

export default Discover;