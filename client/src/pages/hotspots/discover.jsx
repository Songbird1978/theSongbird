import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "../../components/loading";
import "./ogruRecords.css";
import Show from "../../components/show.jsx";
import { useRecord } from "../../contexts/RecordContext";

function Discover() {
    const [records, setRecords] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { setSelectedRecord } = useRecord();

    const navigate = useNavigate();

    const handleRecordClick = (record) => {
        setSelectedRecord(record);
        navigate("/show");
    };

    //console.log("records list ", records, typeof records);

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
        fetch("/api/records")
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status:, ${res.status}`);
                }
                return res.json(); //parse as JSON
            })
            .then((data) => {
                console.log("response", data, Array.isArray(data));
                setRecords(Array.isArray(data) ? data : []); //make sure it's an array
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                console.error("fetch error:", error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        localStorage.setItem("recordStoreView", "projects");
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
            <div className="topicContainer w-full flex justify-center opacity-80">
                <h1 className="topicTitle">Discover</h1>

                <motion.div
                    className="grid w-full p-1 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {records.map((record) => (
                        <motion.div key={record.id} variants={itemVariants}>
                            <Card
                                key={record.id}
                                className="max-w-100 flex-col-reverse mb-10 bg-stone-100 p-2"
                                onClick={() => {
                                    handleRecordClick(record);
                                    console.log(
                                        "selected card is:",
                                        record.title
                                    );
                                }}
                            >
                                <CardContent>
                                    <p className="font-courier text-left text-md">
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
                                    <CardTitle className="font-courier text-left text-sm">
                                        {record.artist.name}
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

export default Discover;
