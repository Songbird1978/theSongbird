import './hotspots.css';
import { motion } from 'framer-motion';
import MusicPlayer from '../../components/musicPlayer.jsx';
import '../../pages/hotspots/ogruRecords.css';
import '../../fonts/fonts.css';


function Listen() {
    return (
        <motion.div
            className="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="topicContainer">
                <h1 className="topicTitle">Listen</h1>
                <MusicPlayer />
            </div>
        </motion.div>
    );
}

export default Listen;