//import { useState } from 'react'
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import StartScreen from "./pages/startScreen/startScreen.jsx";
import Townscene from "./pages/townscene/townscene.jsx";
import OgruRecords from "./pages/hotspots/ogruRecords.jsx";
import Noticeboard from "./pages/hotspots/noticeboard.jsx";
import SongbirdDesigns from "./pages/hotspots/songbirdDesigns.jsx";
import SongbirdSites from "./pages/hotspots/songbirdSites.jsx";
import SnailBait from "./pages/snailBait/snailBait2.jsx";
import Show from "./components/show.jsx";
import "./pages/hotspots/hotspots.css";
import { AnimatePresence } from "framer-motion";
import { SoundProvider } from "./contexts/SoundContext";
import { RecordProvider } from "./contexts/RecordContext";
import Background from './components/background';

function App() {
    const location = useLocation();

    const backgrounds =  {
        "/ogruRecords": "https://res.cloudinary.com/djajtxjpr/image/upload/w_2000,h_2000,c_fill,f_auto,q_auto,dpr_auto/v1769088596/ogruRecords_tzeohb.png",
        "/songbirdDesigns": "https://res.cloudinary.com/djajtxjpr/image/upload/w_2000,h_2000,c_fill,f_auto,q_auto,dpr_auto/v1769088583/SongbirdDesigns_jito0m.png",
        "/songbirdSites" : "https://res.cloudinary.com/djajtxjpr/image/upload/w_2000,h_2000,c_fill,f_auto,q_auto,dpr_auto/v1769088588/SongbirdSites_bybkpr.png"
    };

    return (
        <>
            <div className="App">
                <AnimatePresence mode="wait">
                    <SoundProvider>
                        <RecordProvider>
                            <Background bgImage={backgrounds[location.pathname]} />
                            <Routes location={location} key={location.pathname}>
                                <Route path="/" element={<StartScreen />} />
                                <Route path="/garden" element={<Home />} />
                                <Route
                                    path="/townscene"
                                    element={<Townscene />}
                                />
                                <Route
                                    path="/snailBait"
                                    element={<SnailBait />}
                                />
                                <Route path="/show" element={<Show />} />
                                <Route
                                    path="/ogruRecords"
                                    element={<OgruRecords />}
                                />
                                <Route
                                    path="/noticeboard"
                                    element={<Noticeboard />}
                                />
                                <Route
                                    path="/songbirdDesigns"
                                    element={<SongbirdDesigns />}
                                />
                                <Route
                                    path="/songbirdSites"
                                    element={<SongbirdSites />}
                                />
                            </Routes>
                        </RecordProvider>
                    </SoundProvider>
                </AnimatePresence>
            </div>
        </>
    );
}

export default App;
