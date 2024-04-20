"use client";
import * as dialog from "@zag-js/dialog";
import { useMachine, normalizeProps, Portal } from "@zag-js/react";
import { GrClose } from "react-icons/gr";

import Image, { StaticImageData } from "next/image";
import React, { CSSProperties, useId } from "react";
import { Box, Flex, VStack } from "@/styled-system/jsx";
import { css, sva } from "@/styled-system/css";

const imageModalStylesFunc = sva({
    slots: ["backdrop", "positioner", "closeButton", "contentWrapper", "title"],
    base: {
        backdrop: {
            position: "fixed",
            display: "block",

            top: "0px",
            left: "0px",

            width: "100vw",
            height: "100vh",

            backdropFilter: "auto",
            backdropBlur: "2xl",

            transitionDuration: "500ms",
        },
        positioner: {
            position: "fixed",
            display: "block",

            top: "0px",
            left: "0px",

            // justifyContent: "center",
            // alignContent: "center",
        },

        contentWrapper: {
            transitionDuration: "500ms",
            scale: "0",
            maxH: "95vh",
            _closed: { scale: "0" },
            _open: { scale: "1" },
        },

        title: {
            color: "white",
            fontWeight: "bold",
        },
        closeButton: {
            display: "inline",
            marginLeft: "auto",
            height: "4vh",
            alignSelf: "center",
            scale: 1,
            transitionDuration: "300ms",
            cursor: "pointer",
            _hover: {
                scale: 1.5,
            },
        },
    },
});

/**
 * A viewable image that can be maximized
 * @param daImage the image that will be viewed
 * @param altText accesability text for the image
 * @param buttonStyle CSS properties to be applied to the preview
 * @param imageTitle Title of the image in the maximized view
 */
const ViewableImage: React.FC<{
    daImage: StaticImageData;
    altText?: string;
    buttonStyle?: CSSProperties;
    imageTitle?: string;
}> = ({ daImage, altText, buttonStyle, imageTitle }) => {
    altText = altText == null ? "A screenshot from the server" : altText;
    const [state, send] = useMachine(
        dialog.machine({ id: useId(), closeOnInteractOutside: true }),
    );
    const api = dialog.connect(state, send, normalizeProps);

    const imageModalStyles = imageModalStylesFunc();
    return (
        <>
            {/* image preview */}

            <button
                style={{ ...buttonStyle, cursor: "pointer" }}
                {...api.triggerProps}
            >
                <Box borderRadius="10px" overflow="hidden" marginX="10%">
                    <Image
                        src={daImage}
                        alt={altText}
                        className={css({
                            maxWidth: "100%",
                            maxHeight: "100%",
                            width: "auto",
                            height: "auto",
                        })}
                    />
                </Box>
            </button>

            {/* Maximized Image*/}
            {api.isOpen && (
                <Portal>
                    <div
                        {...api.backdropProps}
                        className={imageModalStyles.backdrop}
                    />
                    <div
                        {...api.positionerProps}
                        className={imageModalStyles.positioner}
                    >
                        <div
                            {...api.contentProps}
                            className={imageModalStyles.contentWrapper}
                        >
                            <VStack
                                padding="2%"
                                width="auto"
                                height="auto"
                                maxH="95vh"
                            >
                                <Flex
                                    width="95vw"
                                    marginX="2vw"
                                    columnCount={2}
                                    {...api.titleProps}
                                    className={imageModalStyles.title}
                                >
                                    <h2>{imageTitle}</h2>
                                    <button
                                        {...api.closeTriggerProps}
                                        className={imageModalStyles.closeButton}
                                    >
                                        <GrClose stroke="red" size="100%" />
                                    </button>
                                </Flex>

                                <div
                                    className={css({
                                        borderRadius: "20px",
                                        overflow: "hidden",
                                        maxH: "80vh",
                                        maxW: "100%",
                                        w: "auto",
                                        height: "80vh",
                                        alignContent: "center",
                                    })}
                                >
                                    <div
                                        className={css({
                                            borderRadius: "20px",
                                            overflow: "hidden",
                                            maxH: "80vh",
                                            maxW: "100%",
                                            w: "auto",
                                            height: "80vh",
                                            alignContent: "center",
                                        })}
                                    >
                                        <Image
                                            src={daImage}
                                            alt={altText}
                                            className={css({
                                                display: "block",
                                                aspectRatio: "auto",
                                                justifySelf: "center",
                                                alignSelf: "center",
                                                maxW: "100%",
                                                maxH: "100%",
                                                w: "auto",
                                                h: "auto",
                                            })}
                                        />
                                    </div>
                                </div>
                                <div className={css({ flexGrow: 1 })} />
                            </VStack>
                        </div>
                    </div>
                </Portal>
            )}
        </>
    );
};

export default ViewableImage;
