import { createContext, useContext, useState, useEffect } from "react";

const RecordContext = createContext();

export function RecordProvider({ children }) {
    const [selectedRecord, setSelectedRecordState] = useState(null);

    // Load from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem("selectedRecord");
        if (saved) {
            setSelectedRecordState(JSON.parse(saved));
        }
    }, []);

    // Custom setter that also saves to localStorage
    const setSelectedRecord = (record) => {
        setSelectedRecordState(record);
        if (record) {
            localStorage.setItem("selectedRecord", JSON.stringify(record));
        } else {
            localStorage.removeItem("selectedRecord");
        }
    };

    return (
        <RecordContext.Provider value={{ selectedRecord, setSelectedRecord }}>
            {children}
        </RecordContext.Provider>
    );
}

export function useRecord() {
    return useContext(RecordContext);
}
