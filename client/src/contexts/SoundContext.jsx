// Create a new file: contexts/SoundContext.jsx
import { createContext, useContext, useState, useRef, useEffect } from 'react';
import birds from '../assets/birds.mp3';


const SoundContext = createContext();

export function SoundProvider({ children }) {
    const birdSoundRef = useRef(null);
    const [isBirdSoundPlaying, setIsBirdSoundPlaying] = useState(false);

    useEffect(() => {
        // Initialize the bird sound
        birdSoundRef.current = new Audio(birds);
        birdSoundRef.current.loop = true;
        birdSoundRef.current.volume = 0.3;
        
        return () => {
            if (birdSoundRef.current) {
                birdSoundRef.current.pause();
                birdSoundRef.current = null;
            }
        };
    }, []);

    const playBirdSound = () => {
        if (birdSoundRef.current && !isBirdSoundPlaying) {
            birdSoundRef.current.play();
            setIsBirdSoundPlaying(true);
        }
    };

    const stopBirdSound = () => {
        if (birdSoundRef.current && isBirdSoundPlaying) {
            birdSoundRef.current.pause();
            setIsBirdSoundPlaying(false);
        }
    };

    return (
        <SoundContext.Provider value={{ playBirdSound, stopBirdSound, isBirdSoundPlaying }}>
            {children}
        </SoundContext.Provider>
    );
}

export function useSound() {
    return useContext(SoundContext);
}