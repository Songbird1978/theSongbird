import "../pages/townscene/townscene.css";
import { PersonStanding } from "lucide-react";

function DropLeaves({
    hasAppeared = [],
    dropAllLeaves,
    resetLeaves,
    hotspots = [],
}) {
    return (
        <div
            className="dropLeaves fixed pointer-events-auto cursor-pointer z-10000 top-4 left-4 bg-white/90 opacity-95 p-4 rounded-lg shadow-lg max-w-sm "
            style={{ zIndex: 10000 }}
        >
            <PersonStanding />
            <p className="text-sm overflow-hidden text-wrap text-gray-700 mb-4 font-courier">
                Hover the shops to make leaves fall<br></br>
                <br></br>
                Release the leaves to visit the shops
            </p>
            <p className="text-sm text-gray-600 mb-4 font-courier">
                Fallen leaves: {hasAppeared.length} / {hotspots.length}
            </p>
            <div className="flex gap-4">
                <button
                    onClick={dropAllLeaves}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-xs font-gothic"
                    aria-label="Release all leaves"
                >
                    Release
                </button>
                <button
                    onClick={resetLeaves}
                    className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors text-xs font-gothic"
                    aria-label="Reset leaves to initial position"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default DropLeaves;
