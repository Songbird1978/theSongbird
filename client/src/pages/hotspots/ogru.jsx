import './ogruRecords.css';
import { motion } from 'framer-motion';
import Typewriter from '../../components/typewriter.jsx';

function Ogru() {
    return (
        <motion.div
            className="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="topicContainer">
                <h1 className="topicTitle">Ogru</h1>
                <Typewriter
                    className="topicText ogruText"
                    lines={[
                        "Welcome to Ogru Records. This is the place where I bring all my musical endeavours together under one roof.  Ogru refers to a state of mind. A love connection with music and a deep sense of belonging, family and partnership that music has provided for me over the years.  ",
                        "I have been involved in many amazing projects and my musical family continues to grow and evolve with new compositions, projects and collaborations. ",
                        "I studied classical music and piano from an early age and continued my musical journey to study sound technology and music production. ", 
                        "Each project contained here showcases, songwriting and composition, sometimes full compositions and sometimes top-lines for other bands and collaborations. ", 
                        "You can read more about individual projects and follow the links to external sites above by clicking DISCOVER. "
                    ]}
                    speed={50}
                    pauseBetween={1000}
                ></Typewriter>
            </div>
        </motion.div>
    );
}

export default Ogru;