import { motion } from "framer-motion";
import { useState, useEffect, useNavigate } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "../../components/loading";
import "./ogruRecords.css";
import Show from "../../components/show.jsx";

function Discover() {
    const [records, setRecords] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedCard, setSelectedCard] = useState(null);
    const [showRecord, setShowRecord] = useState(false);

    console.log("records list ", records, typeof records);

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
            <div className="topicContainer w-full flex justify-center bg-stone-200 opacity-80">
                <h1 className="topicTitle">Discover</h1>

                <motion.div
                    className="grid p-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {records.map((record) => (
                        <motion.div key={record.id} variants={itemVariants}>
                            <Card
                                key={record.id}
                                className="max-w-100 flex-col-reverse mb-10 bg-stone-100"
                                onClick={() => {
                                    setSelectedCard(record.id);
                                    setShowRecord(true);
                                    console.log(
                                        "selected card is:",
                                        record.title
                                    );
                                }}
                            >
                                <CardContent>
                                    <p className="font-gothic optionTitle text-left text-md">
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
                            {showRecord && (
                                <div
                                    style={{
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        width: "100vw",
                                        height: "100vh",
                                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                                        zIndex: 99999,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div
                                        style={{
                                            backgroundColor: "white",
                                            padding: "20px",
                                            borderRadius: "8px",
                                            width: "90%",
                                            maxWidth: "1000px",
                                            height: "90vh",
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <button
                                            onClick={() => setShowRecord(false)}
                                            style={{
                                                alignSelf: "flex-end",
                                                padding: "10px 20px",
                                                marginBottom: "10px",
                                                cursor: "pointer",
                                            }}
                                        >
                                            Close
                                        </button>
                                        <Show
                                            id={selectedCard}
                                            title={record.title}
                                            description={record.description}
                                            imageUrl={record.imageUrl[0]}
                                            link={record.links[0]}
                                            name={record.artist.name}
                                        />
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Discover;
