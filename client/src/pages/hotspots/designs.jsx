import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "../../components/loading";
import { useRecord } from "../../contexts/RecordContext";
import "./ogruRecords.css";

// JSON mock data
import designsMock from "../../../mocks/Design.json";

function Designs() {
    const [designs, setDesigns] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const { setSelectedRecord } = useRecord();
    const navigate = useNavigate();

    //console.log("designs list ", designs, typeof designs);

    const isDev = import.meta.env.DEV;

    const handleRecordClick = (record) => {
        setSelectedRecord(record);
        navigate("/show");
    };
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Delay between each child
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };


useEffect(() => {
    const loadDesigns = async () => {
        try {
            if (isDev) {
                // DEV: use local JSON
                setDesigns(designsMock);
            } else {
                // PROD: fetch from API
                const res = await fetch("/api/designs");
                if (!res.ok) {
                    throw new Error(`HTTP error ${res.status}`);
                }
                const data = await res.json();
                setDesigns(Array.isArray(data) ? data : []);
            }
        } catch (err) {
            console.error("Designs load error:", err);
            setError(err.message);
        } finally {
            // ALWAYS stop loading
            setLoading(false);
        }
    };

    loadDesigns();
}, [isDev]);


    useEffect(() => {
        localStorage.setItem("designStoreView", "projects");
    }, []);

    if (loading) return <Loading className="p-10" />;
    if (error) return <div>Error: {error}</div>;

    return (
        <motion.div
            className="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="topicContainer w-full flex justify-center  opacity-80">
                <h1 className="topicTitle">Designs</h1>

                <motion.div
                    className="grid p-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-items-right"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {designs.map((record) => (
                        <motion.div key={record.id} variants={itemVariants}>
                            <Card
                                key={record.id}
                                className="max-w-100 flex-col-reverse mb-10 bg-stone-200"
                                onClick={() => {
                                    setSelectedRecord(record);
                                    handleRecordClick(record);
                                    //console.log( "selected card is:",record.title);
                                }}
                            >
                                <CardContent>
                                    <p className="font-courier optionTitle text-left text-md">
                                        {record.title}
                                    </p>
                                    {/* ← Artist info available! */}
                                    <img
                                        src={record.imageUrl[0]}
                                        alt={record.title}
                                        className="w-full h-50"
                                    />
                                </CardContent>
                                <CardHeader>
                                    <CardTitle className="font-courier text-gray-500 text-left text-sm">
                                        {record.type}
                                    </CardTitle>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Designs;
