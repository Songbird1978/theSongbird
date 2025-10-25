import { useEffect, useState } from "react";
import '../fonts/fonts.css';
import '../pages/hotspots/ogruRecords.css';

export default function Typewriter({
    lines = [],
    speed = 80,
    pauseBetween = 1000,
    onComplete,
    className = ""
}) {
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [typedLines, setTypedLines] = useState([]);

    useEffect(() => {
        if (currentLineIndex >= lines.length) {
            if (onComplete) onComplete()
            return;
        }
        

        const line = lines[currentLineIndex];
        let charIndex = 0;

        const charInterval = setInterval(() => {
            // Check if character exists before appending
            if (charIndex < line.length) {
                const nextChar = line.charAt(charIndex);
                setCurrentText((prev) => prev + nextChar);
                charIndex++;
            } else {
                clearInterval(charInterval);

                setTimeout(() => {
                    setTypedLines((prev) => [...prev, line]);
                    setCurrentText(""); // reset for next line
                    setCurrentLineIndex((prev) => prev + 1);
                }, pauseBetween);
            }
        }, speed);

        return () => clearInterval(charInterval);
    }, [currentLineIndex, lines, speed, pauseBetween, onComplete]);


    return (
        <div className={className}>
            {typedLines.map((line, i) => (
                <div key={i}>{line}
                    <br></br> <br></br>
                </div>
            ))}
            {currentText && <div>{currentText}<span className="cursor">|</span></div>}
        </div>
    );
}
