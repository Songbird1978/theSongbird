import './ogruRecords.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typewriter from '../../components/typewriter.jsx';

function Read() {

    const [ typingComplete, setTypingComplete ] = useState(false);

    useEffect(() => {
        const typing = lines;
        if (!typingComplete) {
            setTypingComplete(false)
        } else {
            setTypingComplete(true)
        };


    }, [typingComplete]);



    return (
        <motion.div
            className="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="topicContainer">
                <h1 className="topicTitle">About</h1>
                <Typewriter
                    className="topicText ogruText"
                    lines={[
                        "I have always been interested in computing and programming and naturally curious and able to solve technical problems with equipment, software and hardware.",
                        "Growing up, I had games consoles (NES, Amstrad CPC 464 and my parents would buy me software magazines. I would painstakingly type out the code, not understanding a word, but eager to see the results. Needless to say, it rarely worked, but I enjoyed the process nevertheless.",
                        "I am a musician (piano & voice) and I trained classically throughout my youth, and studied Music & Sound Technology at University. I have always been involved in music creation and performance. I then trained as a music teacher in 2007 and taught at all levels, primary to level 5 at schools & colleges.",
                        "After Covid and some soul-searching, I decided to move away from teaching and change career. I enrolled on a Front-End Development Bootcamp. Web Development and design has always been an interest and I have dabbled over the years, but I didn't get the opportunity to follow that pathway until now.",
                        "Since completing a Front-end Web Development bootcamp, I have continued to develop, adding some understanding of backend development, databases, accessibility and new technologies to my array of skills.",
                        "I have included projects here that have led to employment and I would dearly love to work in a web development team and develop more skills and knowledge in the future."
                    ]}
                    onComplete={setTypingComplete}
                    speed={50}
                    pauseBetween={1000}
                ></Typewriter>
            </div>
        </motion.div>
    );
}

export default Read;