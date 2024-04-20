"use client";

import Image from "next/image";
import greetingBackground from "@/img/VeryNiceGreeting.gif";
import { Box, Flex, Grid, Stack, styled, VStack } from "@/styled-system/jsx";
import { motion, Variants } from "framer-motion";
import NextLink from "next/link";
import JoinServerButton from "@/app/(mainSite)/minecraft/JoinServerButton";
import ViewableImage from "@/app/(mainSite)/minecraft/ViewableImage";
import mcImages from "@/lib/MCScreenshots";
import React from "react";

const textAnimVariants: Variants = {
    offscreen: {
        y: "-20vh",
        opacity: 0,
    },
    onscreen: {
        y: "0",
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 2,
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

export const PageBody: React.FC = () => {
    return (
        <>
            {/* top of page */}
            <div
                style={{
                    position: "fixed",
                    overflow: "hidden",
                    zIndex: -90,
                    width: "100vw",
                    height: "100vh",
                    top: "0",
                    left: "0",
                }}
            >
                <Image
                    src={greetingBackground}
                    alt="background"
                    style={{
                        minHeight: "100%",
                        minWidth: "100%",
                        width: "auto",
                        height: "auto",
                        maxWidth: "none",
                        maxHeight: "none",
                        position: "absolute",
                    }}
                />
                <video
                    muted
                    autoPlay
                    controlsList="nodownload, nofullscreen, noremoteplayback"
                    disablePictureInPicture
                    loop
                    style={{
                        minHeight: "100%",
                        minWidth: "100%",
                        width: "auto",
                        height: "auto",
                        maxWidth: "none",
                        maxHeight: "none",
                        position: "absolute",
                        pointerEvents: "none",
                        filter: "blur(5px)",
                    }}
                >
                    <source src="../Minecraft-cinematic.mp4" />
                </video>
            </div>
            <Flex w="100vw" h="100vh" justifyContent="center">
                <Box
                    marginTop={{ base: "50px", md: "auto" }}
                    marginBottom="auto"
                >
                    <motion.div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            textAlign: "center",
                        }}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false, amount: 0.9 }}
                    >
                        <motion.div variants={textAnimVariants}>
                            <styled.h1
                                fontFamily={'"Impact", sans-serif'}
                                color="white"
                                fontSize={{
                                    base: "2.25rem",
                                    md: "3rem",
                                }}
                            >
                                <b>NSC MODDED MC SERVER</b>
                            </styled.h1>
                        </motion.div>
                        <motion.div variants={textAnimVariants}>
                            <styled.h2
                                fontSize={{
                                    base: "2rem",
                                    md: "2.5rem",
                                }}
                            >
                                A server made by <i>you</i>
                            </styled.h2>
                        </motion.div>
                        <motion.div
                            variants={textAnimVariants}
                            style={{ marginTop: "3%" }}
                        >
                            {/* buttons in top of page */}
                            <Stack
                                direction={{ base: "column", md: "row" }}
                                marginTop="2vh"
                                rowGap="5vh"
                                columnGap="20px"
                            >
                                <motion.div variants={textAnimVariants}>
                                    <NextLink
                                        href="/join"
                                        target="_blank"
                                        style={{ textDecoration: "none" }}
                                    >
                                        <styled.span
                                            fontSize={{
                                                base: "1.3em",
                                                sm: "1.8em",
                                                md: "2.1em",
                                                lg: "2.4em",
                                            }}
                                            color="white"
                                            bg="#004da8"
                                            p="15px"
                                            whiteSpace="nowrap"
                                            borderRadius="50px"
                                            transition="all 0.3s ease"
                                            _hover={{
                                                bg: "#95ca59",
                                                color: "black",
                                            }}
                                        >
                                            Join The Club!
                                        </styled.span>
                                    </NextLink>
                                </motion.div>
                                <motion.div variants={textAnimVariants}>
                                    <NextLink
                                        href="https://modrinth.com/modpack/rubberducky"
                                        target="_blank"
                                        style={{ textDecoration: "none" }}
                                    >
                                        <styled.span
                                            fontSize={{
                                                base: "1.3em",
                                                sm: "1.8em",
                                                md: "2.1em",
                                                lg: "2.4em",
                                            }}
                                            color="white"
                                            bg="#004da8"
                                            p="15px"
                                            whiteSpace="nowrap"
                                            borderRadius="50px"
                                            transition="all 0.3s ease"
                                            _hover={{
                                                bg: "#95ca59",
                                                color: "black",
                                            }}
                                        >
                                            Download The ModPack!
                                        </styled.span>
                                    </NextLink>
                                </motion.div>
                                <motion.div variants={textAnimVariants}>
                                    <JoinServerButton />
                                </motion.div>
                            </Stack>
                        </motion.div>
                    </motion.div>
                </Box>
            </Flex>

            {/* image gallary section */}
            <Flex
                w="100vw"
                h="100vh"
                justifyContent="center"
                direction="column"
                backgroundImage="linear-gradient(to bottom, #80ADFE00, #80ADFEEE, #2F2FBFAA, #000000D9)"
            >
                {/* header part */}
                <motion.div
                    variants={textAnimVariants}
                    style={{ marginTop: "3%", alignSelf: "center" }}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <styled.h2
                        color="white"
                        fontSize={{
                            base: "2rem",
                            md: "2.5rem",
                        }}
                    >
                        Gallery
                    </styled.h2>
                </motion.div>

                {/* Images part*/}
                <motion.div
                    variants={textAnimVariants}
                    style={{
                        width: "inherit",
                        height: "inherit",
                    }}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <Grid
                        gridAutoFlow="row"
                        gridTemplateColumns={{
                            base: "repeat(2, 1fr)",
                            sm: "repeat(3, 1fr)",
                            md: "repeat(4, 1fr)",
                        }}
                        rowGap="10vmin"
                        width="auto"
                        height="auto"
                        marginY="20px"
                        marginX="5%"
                    >
                        <ViewableImage
                            daImage={mcImages.LucHouse}
                            buttonStyle={{}}
                            imageTitle="VP's Cliffside House"
                        ></ViewableImage>
                        <ViewableImage
                            daImage={mcImages.SpawnBridge}
                            buttonStyle={{
                                width: "inherit",
                            }}
                        ></ViewableImage>
                        <ViewableImage
                            daImage={mcImages.TheDarkThiefPowerStation}
                            buttonStyle={{
                                width: "auto",
                            }}
                        ></ViewableImage>
                        <ViewableImage
                            daImage={mcImages.aFactory}
                            buttonStyle={{
                                width: "auto",
                            }}
                        ></ViewableImage>
                        <ViewableImage
                            daImage={mcImages.TheDarkThiefHome}
                            imageTitle="TheDarkThief's Hobbit Home"
                        ></ViewableImage>
                        <ViewableImage
                            daImage={mcImages.openSubmission}
                            buttonStyle={{
                                width: "inherit",
                            }}
                        ></ViewableImage>
                        <ViewableImage
                            daImage={mcImages.openSubmission}
                            buttonStyle={{
                                width: "auto",
                            }}
                        ></ViewableImage>
                        <ViewableImage
                            daImage={mcImages.openSubmission}
                            buttonStyle={{
                                width: "auto",
                            }}
                        ></ViewableImage>
                    </Grid>
                </motion.div>
            </Flex>

            {/* integraged mc map */}
            <VStack
                w="100vw"
                h="100vh"
                justifyContent="center"
                backgroundImage="linear-gradient(to bottom, #000000D9 10%, #302008E9, #6F3F1AFF 30%, #5F5F5EFF , #000000FF)"
            >
                <motion.div
                    variants={textAnimVariants}
                    style={{ marginTop: "3%", alignSelf: "center" }}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <styled.h2
                        color="white"
                        fontSize={{
                            base: "2rem",
                            md: "2.5rem",
                        }}
                    >
                        Live map
                    </styled.h2>
                </motion.div>
                <iframe
                    src="/mcmap"
                    style={{
                        height: "80%",
                        width: "80%",
                        verticalAlign: "center",
                        borderRadius: "20px",
                    }}
                />
            </VStack>
        </>
    );
};
