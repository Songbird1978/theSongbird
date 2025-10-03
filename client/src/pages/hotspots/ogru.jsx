import './ogruRecords.css';
import { motion } from 'framer-motion';
import Typewriter from '../../components/typewriter.jsx';
import AnimatedLeafButton from '../../components/button.jsx';


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
                        "Ogru Records was born from a state of mind. A love connection with music and a deep sense of belonging, family and partnership. ",
                        "Over the years, The Songbird has been involved in many amazing projects and her musical family continues to grow and evolve with new compositions, projects and collaborations being created all the time. ",
                        "Hayley is a pianist and singer. She studied music and sound technology and production. Each project contained here incorporates one or more of her skills. You can read more about individual projects and follow the links to external sites. "
                    ]}
                    speed={50}
                    pauseBetween={1000}
                ></Typewriter>
            </div>
        </motion.div>
    );
}

export default Ogru;