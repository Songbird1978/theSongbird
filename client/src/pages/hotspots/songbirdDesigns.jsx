import "./hotspots.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ogruRecords.css";
import "../../fonts/fonts.css";
import Typewriter from "../../components/typewriter.jsx";
import Button from "../../components/button.jsx";
import "../townscene/townscene.css";
import "../home/home.css";

function SongbirdDesigns() {
    const [designs, setDesigns] = useState([]);
    const [clicked, setClicked] = useState();
    const [complete, setComplete] = useState(false);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    r;
    return (
        <motion.div
            className="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="designContainer w-full flex justify-center bg-stone-200 opacity-80">
                <h1 className="topicTitle">Songbird Designs</h1>

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
                                className="max-w-60 flex-col mb-10"
                            >
                                <CardContent>
                                    <img
                                        src={record.imageUrl[0]}
                                        alt={record.title}
                                        className="w-full h-50"
                                    />
                                    <p className="font-gothic optionTitle text-left text-md">
                                        {record.title}
                                    </p>{" "}
                                    {/* ← Artist info available! */}
                                </CardContent>
                                <CardHeader>
                                    <CardTitle className="font-gothic text-left optionTitle text-sm">
                                        by {record.artist.name}
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

export default SongbirdDesigns;
