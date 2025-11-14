import town from '../../assets/townExtended-4.png';
import './townscene.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PanoramaViewer from '../../components/panoramaViewer.jsx';
import Bird from '../../components/bird.jsx';
import Snail from '../../components/snail.jsx';
import Bird2 from '../../components/bird2.jsx';
import Snail2 from '../../components/snail2.jsx';


const hotspots = [
    { id: 'ogruRecords', label: 'Ogru Records', position: '20%' },
    { id: 'songbirdDesigns', label: 'Songbird Design', position: '38%' },
    { id: 'noticeboard', label: 'Noticeboard', position: '54%' },
    { id: 'songbirdSites', label: 'Songbird Sites', position: '70%' },
];

function TownScene() {


    const navigate = useNavigate();
    const handleNavigation = (destination) => {
        navigate(`/${destination}`);
    };

    const variants = {
        initial: { opacity: 0, x: 200 },
        animate: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" }},
        exit: { opacity: 0, x: -200, transition: { duration: 1}},
    };

    return (
        <motion.div
            className="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
                <PanoramaViewer src={town} className="townContainer">
                    {hotspots.map(({ id, label, position }) => (
                        <HotspotButton key={id} label={label} position={position}
                            onClick={() => {
                                console.log({ label }, "was clicked");
                                handleNavigation(id);
                            }}
                        />
                    ))}
               <div style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <Bird2 />
                    <Snail2 style={{ transform: 'rotate(-180deg)'}}/>
                    </div>
                </PanoramaViewer>
        </motion.div>
    );
}

function HotspotButton({ label, position, onClick }) {

    const [hasAppeared, setHasAppeared] = useState(false);

    const buttonVariants = {
        initial: { opacity: 0, y: -300, rotate: -10, scale: 1 },
        visible: {
            opacity: 1,
            y: ["-500%", "1px"],
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
            style={{ position: 'absolute', top: '60%', left: position, zIndex: 200 }}
            className="hotspot"
            role="button"
            tabIndex="true"
            focusable="true"
            whileFocus={{ backgroundColor: 'rgba(24, 239, 67, 0.256)'}}
            whileHover={{ backgroundColor: 'rgba(24, 239, 67, 0.256)'}}
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