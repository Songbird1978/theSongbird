import React, { useCallback, useState, useEffect } from "react";
import {
    ArrowCircleLeftIcon,
    ArrowCircleRightIcon,
    LinkIcon,
    PlayCircleIcon,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRecord } from "../contexts/RecordContext";
import useEmblaCarousel from "embla-carousel-react";
import Nav from "../components/nav.jsx";
import Loading from "../components/loading.jsx";

function Show() {
    const { selectedRecord } = useRecord();
    const [isLoading, setIsLoading] = useState(true);

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const navigate = useNavigate();

    const handleNavigateBack = () => {
        navigate(-1);
    };

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    useEffect(() => {
        // Give localStorage time to load
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isLoading && !selectedRecord) {
            navigate("/townscene");
        }
    }, [isLoading, selectedRecord, navigate]);

    if (isLoading) {
        return <Loading />;
    }

    if (!selectedRecord) {
        return null; // Don't render anything while redirecting
    }

    return (
        <div //OUTER CONTAINERS AND BACKGROUND
            style={{
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "courierPrime",
            }}
        >
            <div
                className="show overflow-y-scroll no-scrollbar border"
                style={{
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "8px",
                    width: "90%",
                    maxWidth: "1000px",
                    height: "90vh",
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "10px",
                }}
            >
                <button //BUTTON TO HANDLE NAVIGATION BACK TO THE PREVIOUS PAGE
                    onClick={handleNavigateBack}
                    style={{
                        alignSelf: "flex-end",
                        padding: "10px 20px",
                        marginBottom: "10px",
                        cursor: "pointer",
                        pointerEvents: "auto",
                    }}
                >
                    Back
                </button>
                <motion.div className="pageContent">
                    <Card //TOP CARD
                        key={selectedRecord.id}
                        className="max-w-100 p-2 mb-5 bg-stone-100  "
                    >
                        <CardHeader>
                            <CardTitle className="text-left text-xl">
                                {selectedRecord.title}

                                <CardTitle className="text-left text-sm">
                                    {selectedRecord?.artist?.name ||
                                        selectedRecord?.type}
                                </CardTitle>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-justify text-sm">
                                {selectedRecord.description}
                            </p>
                            {selectedRecord.imageUrl.length == 0 && (
                                <img
                                    src={selectedRecord.imageUrl[0]}
                                    alt={selectedRecord.title}
                                    className="w-full h-auto justify-center"
                                />
                            )}
                        </CardContent>
                    </Card>

                    {selectedRecord?.imageUrl?.length > 0 && ( //FIRST CAROUSEL - GENERAL - FOR ALL
                        <div className="embla w-full">
                            <div
                                className="embla__viewport border max-w-lg mt-6 mb-6 w-full h-66 mx-auto"
                                ref={emblaRef}
                                style={{
                                    overflow: "hidden",
                                    flex: "0 0 90%",
                                }}
                            >
                                <div className="embla__container flex h-full">
                                    {selectedRecord.imageUrl.map(
                                        (
                                            image,
                                            index //ORIGINAL MAPPING OF ALL GENERAL IMAGES
                                        ) => (
                                            <div
                                                className="embla__slide flex items-center justify-center object-cover"
                                                key={index}
                                                style={{
                                                    flex: "0 0 100%",
                                                    minWidth: 0,
                                                    objectFit: "cover",
                                                }}
                                            >
                                                <img
                                                    src={image}
                                                    alt={`${
                                                        selectedRecord.title
                                                    } - Image ${index + 1}`}
                                                    className="object-cover w-full p-2"
                                                    style={{
                                                        width: "100%",
                                                        height: "auto",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                            <div className="buttonsAll w-full flex justify-between bg-transparent">
                                <div className="buttonsLandR">
                                    <ArrowCircleLeftIcon //BUTTONS AREA FOR CAROUSEL 1
                                        size={80}
                                        weight="bold"
                                        label="back one image"
                                        aria-label="back one image"
                                        onClick={scrollPrev}
                                        className="leftIcon embla__prev bg-0 p-4"
                                        style={{
                                            color: "rgba(38, 33, 27, 0.783)",
                                            opacity: " 80%",
                                        }}
                                    />

                                    <ArrowCircleRightIcon
                                        size={80}
                                        weight="bold"
                                        label="forward one image"
                                        aria-label="forward one image"
                                        className="rightIcon embla__next bg-0 p-4 cursor-pointer"
                                        onClick={scrollNext}
                                        style={{
                                            color: "rgba(38, 33, 27, 0.783)",
                                            opacity: " 80%",
                                        }}
                                    />
                                </div>
                                <div>
                                    <a
                                        href={
                                            selectedRecord?.link ||
                                            selectedRecord?.links
                                        }
                                    >
                                        <LinkIcon
                                            size={80}
                                            weight="bold"
                                            label="Link to website"
                                            aria-label="Link to website"
                                            className="linkIcon bg-0 p-4 cursor-pointer"
                                            style={{
                                                color: "rgba(38, 33, 27, 0.783)",
                                                opacity: " 80%",
                                            }}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                    {selectedRecord?.artist ? ( //AUDIOPLAYER OR EMBED 
                        <Card w-full h-auto>
                            {selectedRecord?.artist?.audioUrl}
                        </Card>
                    ) : null}
                    {selectedRecord?.artist ? ( //ARTIST CAROUSEL OF IMAGES
                        <Card>
                            <CardTitle className="text-lg p-6">
                                {selectedRecord.artist.name}
                            </CardTitle>
                            <div className="w-100">
                                {selectedRecord?.artist?.imageUrl?.length >
                                    -1 && (
                                    <div className="embla w-full">
                                        <div
                                            className="embla__viewport max-w-lg max-h-48  w-full  mx-auto"
                                            ref={emblaRef}
                                            style={{
                                                overflow: "hidden",
                                                flex: "0 0 90%",
                                            }}
                                        >
                                            <div className="embla__container flex h-full">
                                                {selectedRecord.artist.imageUrl.map(
                                                    (image, index) => (
                                                        <div
                                                            className="embla__slide flex items-center justify-center object-cover"
                                                            key={index}
                                                            style={{
                                                                flex: "0 0 100%",
                                                                minWidth: 0,
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                        >
                                                            <img
                                                                src={image}
                                                                alt={`${
                                                                    selectedRecord.title
                                                                } - Image ${
                                                                    index + 1
                                                                }`}
                                                                className="object-cover w-full p-2"
                                                                style={{
                                                                    width: "100%",
                                                                    height: "auto",
                                                                    objectFit:
                                                                        "cover",
                                                                }}
                                                            />
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                        <div className="buttonsAll w-full flex justify-between bg-transparent">
                                            <div className="buttonsLandR">
                                                <ArrowCircleLeftIcon
                                                    size={80}
                                                    weight="bold"
                                                    label="back one image"
                                                    aria-label="back one image"
                                                    onClick={scrollPrev}
                                                    className="leftIcon embla__prev bg-0 p-4"
                                                    style={{
                                                        color: "rgba(38, 33, 27, 0.783)",
                                                        opacity: " 80%",
                                                    }}
                                                />

                                                <ArrowCircleRightIcon
                                                    size={80}
                                                    weight="bold"
                                                    label="forward one image"
                                                    aria-label="forward one image"
                                                    className="rightIcon embla__next bg-0 p-4 cursor-pointer"
                                                    onClick={scrollNext}
                                                    style={{
                                                        color: "rgba(38, 33, 27, 0.783)",
                                                        opacity: " 80%",
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <a
                                                    href={
                                                        selectedRecord?.links ||
                                                        selectedRecord?.artist
                                                            ?.links ||
                                                        selectedRecord?.link
                                                    }
                                                >
                                                    <LinkIcon
                                                        size={80}
                                                        weight="bold"
                                                        label="Link to website"
                                                        aria-label="Link to website"
                                                        className="linkIcon bg-0 p-4 cursor-pointer"
                                                        style={{
                                                            color: "rgba(38, 33, 27, 0.783)",
                                                            opacity: " 80%",
                                                        }}
                                                    />
                                                </a>

                                                <a
                                                    href={
                                                        selectedRecord.artist
                                                            .links
                                                    }
                                                >
                                                    <PlayCircleIcon
                                                        size={80}
                                                        weight="bold"
                                                        label="Link to website"
                                                        aria-label="Link to website"
                                                        className="linkIcon bg-0 p-4 cursor-pointer"
                                                        style={{
                                                            color: "rgba(38, 33, 27, 0.783)",
                                                            opacity: " 80%",
                                                        }}
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <p className="text-justify text-sm">
                                {selectedRecord.artist.description}
                            </p>
                        </Card>
                    ) : null}
                    {selectedRecord?.techstack ? ( //TECHSTACK CARD
                        <Card>
                            <CardHeader>
                                <CardTitle
                                    className=" text-left text-xl"
                                    style={{ fontFamily: "courierPrime" }}
                                >
                                    Technology
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Card className="grid grid-flow-row xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {selectedRecord.techstack.map(
                                        (tech, index) => (
                                            <Card
                                                className="p-1 h-32 flex justify-center text-center bg-stone-300"
                                                key={index}
                                            >
                                                <CardTitle className="text-center align-center p-4">
                                                    {tech}
                                                </CardTitle>
                                            </Card>
                                        )
                                    )}
                                </Card>
                            </CardContent>
                        </Card>
                    ) : null}
                    {selectedRecord?.artist?.genres ? ( //GENRE CARD
                        <Card>
                            <CardHeader>
                                <CardTitle
                                    className=" text-left text-xl"
                                    style={{ fontFamily: "courierPrime" }}
                                >
                                    Styles
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Card className="grid grid-flow-row xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {selectedRecord.artist.genres.map(
                                        (genre, index) => (
                                            <Card
                                                className="p-1 h-32 flex justify-center text-center bg-stone-300"
                                                key={index}
                                            >
                                                <CardTitle className="text-center align-center p-4">
                                                    {genre}
                                                </CardTitle>
                                            </Card>
                                        )
                                    )}
                                </Card>
                            </CardContent>
                        </Card>
                    ) : null}
                    <Nav className="p-6 m-4" />
                </motion.div>
            </div>
        </div>
    );
}

export default Show;
