import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

function Show({
    id,
    title,
    name,
    description,
    imageUrl,
    link,
    images = [],
    setShowRecord,
    audio = [],
    artistInfo,
    techstack,
    type,
}) {
    return (
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
                class="show"
                style={{
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "8px",
                    width: "90%",
                    maxWidth: "1000px",
                    height: "90vh",
                    display: "flex",
                    flexDirection: "column",
                    overflowY: "scroll",
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
                <motion.div className="">
                    <Card
                        key={id}
                        className="max-w-100 p-5 flex-col-reverse mb-10 bg-stone-100 grid p-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4 justify-items-right"
                    >
                        <CardContent>
                            <p className="font-gothic optionTitle text-left text-md">
                                {title}
                            </p>
                            <CardHeader>
                                <CardTitle className="font-courier text-left text-md">
                                    {name}
                                </CardTitle>
                            </CardHeader>
                            <p className="font-courier text-justify text-sm">
                                {description}
                            </p>

                            <img
                                src={imageUrl}
                                alt={title}
                                className="w-80 h-auto justify-center"
                            />
                            <p className="font-courier text-justify text-sm">
                                {artistInfo}
                            </p>
                        </CardContent>
                    </Card>
                    {images.length > 0 ? (
                        <Carousel className="w-full max-w-xs">
                            <CarouselContent>
                                {console.log("images =", images) &
                                    images.map((_, index) => (
                                        <CarouselItem key={index}>
                                            <div className="p-1">
                                                <Card>
                                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                                        <span className="text-4xl font-semibold">
                                                            {index + 1}
                                                        </span>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    ) : (
                        <div></div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}

export default Show;
