import town from '../../assets/townExtended-4.png';
import './townscene.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PanoramaViewer from '../../components/panoramaViewer.jsx';
import Bird2 from '../../components/bird2.jsx';
import Snail2 from '../../components/snail2.jsx';
import Loading from '../../components/loading.jsx';
import DropLeaves from '../../components/dropLeaves.jsx'


const hotspots = [
    { id: 'ogruRecords', label: 'Ogru Records', position: '20%' },
    { id: 'songbirdDesigns', label: 'Songbird Design', position: '38%' },
    { id: 'noticeboard', label: 'Noticeboard', position: '52%' },
    { id: 'songbirdSites', label: 'Songbird Sites', position: '70%' },
];

function TownScene() {
    const navigate = useNavigate();
    const [hasAppeared, setHasAppeared] = useState([]);
    const [loading, setLoading] = useState(true);


    //load saved state on mount
    useEffect(() => {
        loadLeafState();
    }, []);

    useEffect(() => {
    if(!loading && hasAppeared.length >= 0) {
        saveLeafState();
    }
    }, [hasAppeared, loading]);

    const loadLeafState = () => {
        console.log('local storage exists?', localStorage.getItem('leaf-state'));
        try {
            const result = localStorage.getItem('leaf-state');
            console.log('loaded result:', result);
            if (result) {
                setHasAppeared(JSON.parse(result));
            }
        } catch (error) {
            console.log('No saved state yet', error);
        } finally {
            setLoading(false);
        }
    }

    const saveLeafState = () => {
        console.log('trying to save:', hasAppeared);
        try {
            localStorage.setItem('leaf-state', JSON.stringify(hasAppeared));
            console.log('save successful!', hasAppeared);
        } catch (error) {
            console.error('Failed to save state:', error);
        }
    };

    const dropLeaf = (leafId) => {
        if (!hasAppeared.includes(leafId)) {
            setHasAppeared([...hasAppeared, leafId])
        }
    };

    const dropAllLeaves = () => {
        console.log("drop all leaves was clicked");
        const allLeafIds = hotspots.map(leaf => leaf.id);
        setHasAppeared(allLeafIds);
    };

    const resetLeaves = () => {
        console.log('reset leaves was clicked');
        setHasAppeared([]);
        try {
            localStorage.removeItem('leaf-state');
        } catch (error) {
            console.error("Failed to delete state:", error);
        }
    };

    const handleNavigation = (destination) => {
        navigate(`/${destination}`);
    };

    if (loading) return <Loading className="w-sm" />;

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
                    {hotspots.map(({ id, label, position }) => {
                        return (
                        <HotspotButton 
                        key={id} 
                        id={id}
                        label={label} 
                        position={position}
                        hasAppeared={hasAppeared.includes(id)}
                        onHover={() => dropLeaf(id)}
                        onClick={() => {
                            console.log({ label }, "was clicked");
                            handleNavigation(id);
                            }}
                        />
                    );
                })}
               <div style={{ 
                width: "100%", 
                height: "100vh", 
                position: 'absolute',
                top: 0,
                left: 0,
                overflow: "hidden",
                pointerEvents: "none",
                zIndex: 100

                }}>
                   <DropLeaves 
                   hasAppeared={hasAppeared}  
                   dropAllLeaves={dropAllLeaves} 
                   resetLeaves={resetLeaves} 
                   hotspots={hotspots} 
                   />
                    <Bird2 />
                    <Snail2 />
                    </div>
                </PanoramaViewer>
        </motion.div>
    );
}

function HotspotButton({ label, position, onClick, hasAppeared, onHover }) {

    const buttonVariants = {
        initial: { opacity: 0, y: -300, rotate: -10, scale: 1 },
        visible: {
            opacity: 1,
            y: ["-500%", "10px"],
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
            tabIndex={0}
            focusable="true"
            whileFocus={{ backgroundColor: 'rgba(24, 239, 67, 0.256)'}}
            whileHover={{ backgroundColor: 'rgba(24, 239, 67, 0.256)'}}
            onMouseEnter={() => {
                console.log('Hovered', label)
                onHover();
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