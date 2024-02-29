import React, { CSSProperties } from "react";

import {
    Box,
    Flex,
    Grid,
    Heading,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Popover,
    PopoverArrow,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Stack,
    Text,
    VStack,
    useDisclosure,
} from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import NextLink from "next/link";

import { Variants, motion, spring } from "framer-motion";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header";

import Footer from "../components/Footer/Footer";
import greetingBackground from "../img/VeryNiceGreeting.gif";
import mcImages from "../lib/MCScreenshots";

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

/**
 * A viewable image that can be maximized
 * @param daImage the image that will be viewed
 * @param altText accesability text for the image
 * @param buttonStyle CSS properties to be applied to the preview
 * @param imageTitle Title of the image in the maximized view
 */
const ViewableImage: React.FC<{
    daImage?: StaticImageData;
    altText?: string;
    buttonStyle?: CSSProperties;
    imageTitle?: string;
}> = ({ daImage, altText, buttonStyle, imageTitle }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            {/* image preview */}
            <button onClick={onOpen} style={buttonStyle}>
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

            {/* maximized image section */}
            <Modal
                closeOnOverlayClick={true}
                isOpen={isOpen}
                onClose={onClose}
                size="full"
            >
                <ModalOverlay backdropFilter="blur(20px)" />
                <ModalContent bgColor={"#FFFFFF00"}>
                    <ModalHeader color="white">{imageTitle}</ModalHeader>
                    <ModalCloseButton color="red" size="lg" />
                    <ModalBody>
                        <Box
                            borderRadius="20px"
                            overflow="hidden"
                            marginX="10%"
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
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

const Minecraft = () => {
    return (
        <>
            <SEO url="https://northcs.org/minecraft" />
            <Header />
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
                <motion.div
                    style={{
                        display: "flex",
                        marginTop: "auto",
                        marginBottom: "auto",
                        flexDirection: "column",
                        justifyContent: "center",
                        textAlign: "center",
                    }}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: false, amount: 0.9 }}
                >
                    <motion.div variants={textAnimVariants}>
                        <Heading
                            as="h1"
                            fontFamily={'"Impact", sans-serif'}
                            color="white"
                        >
                            <b>NSC MODDED MC SERVER</b>
                        </Heading>
                    </motion.div>
                    <motion.div variants={textAnimVariants}>
                        <Heading as="h2">
                            A server made by <i>you</i>
                        </Heading>
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
                                    <Text
                                        as="span"
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
                                    </Text>
                                </NextLink>
                            </motion.div>
                            <motion.div variants={textAnimVariants}>
                                <NextLink
                                    href="https://modrinth.com/modpack/rubberducky"
                                    target="_blank"
                                    style={{ textDecoration: "none" }}
                                >
                                    <Text
                                        as="span"
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
                                    </Text>
                                </NextLink>
                            </motion.div>
                            <motion.div variants={textAnimVariants}>
                                <Popover>
                                    <PopoverTrigger>
                                        <button
                                            onClick={() => {
                                                navigator.clipboard.writeText(
                                                    "mc.northcs.org",
                                                );
                                            }}
                                        >
                                            <Text
                                                as="span"
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
                                                Join the server
                                            </Text>
                                        </button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverHeader>
                                            Copied to clipboard!
                                        </PopoverHeader>
                                        <PopoverContent>
                                            Paste the server address into the
                                            address bar when adding the server
                                        </PopoverContent>
                                    </PopoverContent>
                                </Popover>
                            </motion.div>
                        </Stack>
                    </motion.div>
                </motion.div>
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
                    <Heading as="h2" color="white">
                        Gallary
                    </Heading>
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
                    <Heading as="h2" color="white">
                        Live map
                    </Heading>
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

            <Footer brightBg={false} bg={"black"} />
        </>
    );
};

export default Minecraft;
