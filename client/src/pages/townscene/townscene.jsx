import town from '../../assets/townStreetEdited.png';
import './townscene.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const hotspots = [
    { id: 'ogruRecords', label: 'Ogru Records', position: '8%' },
    { id: 'songbirdDesigns', label: 'Songbird Design', position: '33%' },
    { id: 'noticeboard', label: 'Noticeboard', position: '53%' },
    { id: 'songbirdSites', label: 'Songbird Sites', position: '75%' },
];

function TownScene() {

    const navigate = useNavigate();

    const handleNavigation = (destination) => {
        navigate(`/${destination}`);
    };

    return (
        <motion.button
            className="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="townContainer">
                <div className="townWrapper">
                    <img src={town} alt="Town" className="town" />
                    {hotspots.map(({ id, label, position }) => (
                        <HotspotButton key={id} label={label} position={position}
                            onClick={() => {
                                console.log({ label }, "was clicked");
                                handleNavigation(id);
                            }}
                        />
                    ))}

                </div>
            </div >
        </motion.button>
    );
}

function HotspotButton({ label, position, onClick }) {

    const [hasAppeared, setHasAppeared] = useState(false);

    const buttonVariants = {
        initial: { opacity: 0, y: -300, rotate: -10, scale: 0.8 },
        visible: {
            opacity: 1,
            y: [-300, 80],
            rotate: [-40, 20],
            transition: {
                duration: 1.6,
                ease: 'easeOut',
                type: 'spring',
                stiffness: 50,
            },
        },
    };

    return (

        <motion.div
            style={{ position: 'absolute', top: '50%', left: position, zIndex: 200 }}
            className="hotspot"
            onMouseEnter={() => {
                console.log('Hovered', label)
                setHasAppeared(true)
            }}
        >
            <AnimatePresence>
                {hasAppeared && (
                    <motion.button
                        className="leafButton"
                        whileHover={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 5, -5, 0],
                            transition: {
                                duration: 2, repeat: Infinity
                            },
                        }}
                        whileTap={{ scale: 0.8 }}
                        onClick={onClick}
                        variants={buttonVariants}
                        initial="initial"
                        animate="visible"
                        exit="initial"
                    >
                        <p className="buttonText">
                            {label}
                        </p>
                    </motion.button>
                )}
            </AnimatePresence>
        </motion.div >

    );

};

export default TownScene;