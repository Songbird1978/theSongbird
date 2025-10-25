import { useState } from 'react'
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import StartScreen from './pages/startScreen/startScreen.jsx';
import Townscene from './pages/townscene/townscene.jsx';
import OgruRecords from './pages/hotspots/ogruRecords.jsx';
import Noticeboard from './pages/hotspots/noticeboard.jsx';
import SongbirdDesigns from './pages/hotspots/songbirdDesigns.jsx';
import SongbirdSites from './pages/hotspots/songbirdSites.jsx';
import './pages/hotspots/hotspots.css';
import { AnimatePresence } from 'framer-motion';

function App() {

  const location = useLocation();

  return (
    <>

      <div className="App">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<StartScreen />} />
            <Route path="/garden" element={<Home />} />
            <Route path="/townscene" element={<Townscene />} />
            <Route path="/ogruRecords" element={<OgruRecords />} />
            <Route path="/noticeboard" element={<Noticeboard />} />
            <Route path="/songbirdDesigns" element={<SongbirdDesigns />} />
            <Route path="/songbirdSites" element={<SongbirdSites />} />

          </Routes>
        </AnimatePresence>
      </div>

    </>
  )
}

export default App
