import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "../../components/loading";
import "./ogruRecords.css";
import { useRecord } from "../../contexts/RecordContext";
import sitesMock from "../../../mocks/Site.json";

function Sites() {
    const [sites, setSites] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const { setSelectedRecord } = useRecord();
    const navigate = useNavigate();

    //console.log("sites list ", sites, typeof sites);

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

    /*

    useEffect(() => {
        fetch("/api/sites")
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status:, ${res.status}`);
                }
                return res.json(); //parse as JSON
            })
            .then((data) => {
                console.log("response", data, Array.isArray(data));
                setSites(Array.isArray(data) ? data : []); //make sure it's an array
                console.log("sites is:", sites);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                console.error("fetch error:", error);
                setLoading(false);
            });
    }, []);

    */


    useEffect(() => {
        const loadSites = async () => {
            try {
                if (isDev) {
                    // DEV: use local JSON
                    setSites(sitesMock);
                } else {
                    // PROD: fetch from API
                    const res = await fetch("/api/sites");
                    if (!res.ok) {
                        throw new Error(`HTTP error ${res.status}`);
                    }
                    const data = await res.json();
                    setSites(Array.isArray(data) ? data : []);
                }
            } catch (err) {
                console.error("Records load error:", err);
                setError(err.message);
            } finally {
                // ALWAYS stop loading
                setLoading(false);
            }
        };
    
        loadSites();
    }, [isDev]);
    

    useEffect(() => {
        localStorage.setItem("webDevStoreView", "projects");
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
            <div className="topicContainer w-full flex justify-center ">
                <h1 className="topicTitle">Songbird Sites</h1>

                <motion.div
                    className="grid p-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 justify-items-right"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {sites.map((record) => (
                        <motion.div key={record.id} variants={itemVariants}>
                            <Card
                                key={record.id}
                                className="max-w-100 flex-col-reverse mb-10 bg-stone-100 opacity-80"
                                onClick={() => {
                                    setSelectedRecord(record);
                                    handleRecordClick(record);

                                    console.log(
                                        "selected card is:",
                                        record.title
                                    );
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
                                    <CardTitle className="font-courier text-left text-gray-500 text-sm">
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

export default Sites;
