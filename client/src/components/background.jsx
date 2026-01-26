export default function Background({ bgImage }) {
    return (
    
    <div 
    className="app-bg" 
    style={{ backgroundImage: `url(${bgImage})`}}
    />
)}