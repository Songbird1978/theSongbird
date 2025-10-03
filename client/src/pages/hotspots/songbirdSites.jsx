import './hotspots.css';
import { motion } from 'framer-motion';


function SongbirdSites() {
    return (
        <motion.div
            className="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="hotspotContainer">
                <h1>SongbirdSites</h1>
                <p>This is the page for SongbirdSites. Here you can see my music work, albums, etc.</p>
            </div>
        </motion.div>
    );
}

export default SongbirdSites;