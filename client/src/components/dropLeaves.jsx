import '../pages/townscene/townscene.css';
import { PersonStanding } from 'lucide-react';


function DropLeaves({ hasAppeared=[], dropAllLeaves, resetLeaves, hotspots=[] }) {

    return (
        <div className="dropLeaves absolute z-9999 top-4 left-4 bg-white/90 opacity-70 p-4 rounded-lg shadow-lg max-w-sm">
        <PersonStanding />
        <p className="text-xs overflow-hidden text-wrap text-gray-700 mb-2 font-gothic">
          Hover the town to make leaves fall<br></br><br></br>
          Release the leaves to visit the shops
        </p>
        <p className="text-xs text-gray-600 mb-3 font-courier">
          Fallen leaves: {hasAppeared.length} / {hotspots.length}
        </p>
        <div className="flex gap-2">
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
    )
}

export default DropLeaves;
