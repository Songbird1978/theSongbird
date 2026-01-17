import { motion } from "framer-motion";
import { useState, useEffect, useNavigate } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "../../components/loading";
import "./ogruRecords.css";

function Designs() {
    const [designs, setDesigns] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedRecord, setSelectedRecord] = useState(null);
    const [showRecord, setShowRecord] = useState(false);

    console.log("designs list ", designs, typeof designs);

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
        fetch("/api/designs")
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status:, ${res.status}`);
                }
                return res.json(); //parse as JSON
            })
            .then((data) => {
                console.log("response", data, Array.isArray(data));
                setDesigns(Array.isArray(data) ? data : []); //make sure it's an array
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
            <div className="topicContainer w-full flex justify-center  opacity-80">
                <h1 className="topicTitle">Designs</h1>

                <motion.div
                    className="grid p-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4 justify-items-right"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {designs.map((design) => (
                        <motion.div key={design.id} variants={itemVariants}>
                            <Card
                                key={design.id}
                                className="max-w-100 flex-col-reverse mb-10 bg-stone-200"
                            >
                                <CardContent>
                                    <p className="font-courier optionTitle text-left text-md">
                                        {design.title}
                                    </p>{" "}
                                    {/* ← Artist info available! */}
                                    <img
                                        src={design.imageUrl[0]}
                                        alt={design.title}
                                        className="w-full h-50"
                                    />
                                </CardContent>
                                <CardHeader>
                                    <CardTitle className="font-courier text-gray-500 text-left text-sm">
                                        {design.type}
                                    </CardTitle>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
                {showRecord && selectedRecord && (
                    <Show
                        id={selectedRecord.id}
                        title={selectedRecord.title}
                        description={selectedRecord.description}
                        imageUrl={selectedRecord.imageUrl[0]}
                        images={selectedRecord.imageUrl}
                        link={selectedRecord.link}
                        techstack={selectedRecord.techstack}
                        type={selectedRecord.type}
                        setShowRecord={setShowRecord}
                    />
                )}
            </div>
        </motion.div>
    );
}

export default Designs;
