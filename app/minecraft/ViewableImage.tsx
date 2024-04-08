"use client";
import Image, { StaticImageData } from "next/image";
import { CSSProperties, useState } from "react";
import { Box, HStack } from "../../styled-system/jsx";
import { css } from "../../styled-system/css";

const ViewableImage: React.FC<{
    daImage: StaticImageData;
    altText?: string;
    buttonStyle?: CSSProperties;
    imageTitle?: string;
}> = ({ daImage, altText, buttonStyle, imageTitle }) => {
    altText = altText == null ? "A screenshot from the server" : altText;

    const [isImageMaximized, toggleImage] = useState(false);
    const toggleImageFunc = () => {
        toggleImage(!isImageMaximized);
    };
    return (
        <>
            {/* image preview */}

            <button style={buttonStyle} onClick={toggleImageFunc}>
                <Box borderRadius="10px" overflow="hidden" marginX="10%">
                    <Image
                        src={daImage}
                        alt={altText}
                        style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            width: "auto",
                            height: "auto",
                        }}
                    />
                </Box>
            </button>

            {/* Maximized Image*/}
            <div
                className={css({
                    display: isImageMaximized ? "block" : "none",
                    position: "fixed",
                    top: "0",
                    left: "0",
                })}
                onClick={toggleImageFunc}
            >
                <Box
                    backdropFilter="blur(20px)"
                    w="100vw"
                    h="100vh"
                    zIndex={-1}
                />
                <HStack margin="10%">
                    <h2>{imageTitle}</h2>
                    <Box
                        borderRadius="20px"
                        overflow="hidden"
                        height="auto"
                        width="auto"
                    >
                        <Image
                            src={daImage}
                            alt={altText}
                            style={{
                                display: "block",
                                maxHeight: "100%",
                                maxWidth: "100%",
                                width: "100%",
                                height: "auto",
                            }}
                        />
                    </Box>
                </HStack>
            </div>
        </>
    );
};

export default ViewableImage;
