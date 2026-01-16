import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Show({ id, title, name, description, imageUrl, link }) {
    return (
        <motion.div className="">
            <Card
                key={id}
                className="max-w-100 flex-col-reverse mb-10 bg-stone-100"
            >
                <CardContent>
                    <p className="font-gothic optionTitle text-left text-md">
                        {title}
                    </p>
                    <p className="font-courier text-justify text-sm">
                        {description}
                    </p>
                    {/* ← Artist info available! */}
                    <img src={imageUrl} alt={title} className="w-50 h-50" />
                </CardContent>
                <CardHeader>
                    <CardTitle className="font-courier text-left text-md">
                        {name}
                    </CardTitle>
                </CardHeader>
            </Card>
        </motion.div>
    );
}

export default Show;
