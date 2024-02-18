import React, {
    CSSProperties,
} from "react";

import {
    Box,
    Button,
    Flex,
    Grid,
    Heading,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    VStack,
    useDisclosure,
} from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { Variants, motion, spring } from "framer-motion";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header";

import Footer from "../components/Footer/Footer";
import greetingBackground from "../img/Homepage-Background.svg";

import LucHouse from "../img/MCScreenShots/LucHouse.png";

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
            staggerChildren: 0.5,
            delayChildren: 0.5,
            when: "afterChildren",
        },
    },
};

const ViewableImage: React.FC<{
    daImage?: StaticImageData;
    altText?: string;
    buttonStyle?: CSSProperties;
    imageTitle?: string;
}> = ({ daImage, altText, buttonStyle, imageTitle }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
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
                        >
                            <Image src={daImage} alt={altText} />
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
            <Flex
                w="100vw"
                h="100vh"
                justifyContent="center"
                backgroundImage={greetingBackground.src}
            >
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
                </motion.div>
            </Flex>

            {/* image gallary section */}
            <Flex
                w="100vw"
                h="100vh"
                justifyContent="center"
                direction="column"
                backgroundImage="linear-gradient(to bottom, #2F2FBF, #FFFFFF, #000000)"
            >
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
                        gridAutoFlow={{ base: "column", md: "row" }}
                        gridTemplateColumns="repeat(4, 1fr)"
                        rowGap="30%"
                        width="auto"
                        height="auto"
                        marginY="20px"
                        marginX="5%"
                    >
                        <ViewableImage
                            daImage={LucHouse}
                            buttonStyle={{}}
                        ></ViewableImage>
                        <ViewableImage
                            daImage={greetingBackground}
                            buttonStyle={{
                                width: "inherit",
                            }}
                        ></ViewableImage>
                        <ViewableImage
                            daImage={greetingBackground}
                            buttonStyle={{
                                width: "auto",
                            }}
                        ></ViewableImage>
                        <ViewableImage
                            daImage={greetingBackground}
                            buttonStyle={{
                                width: "auto",
                            }}
                        ></ViewableImage>
                        <ViewableImage
                            daImage={LucHouse}
                            buttonStyle={{}}
                        ></ViewableImage>
                        <ViewableImage
                            daImage={greetingBackground}
                            buttonStyle={{
                                width: "inherit",
                            }}
                        ></ViewableImage>
                        <ViewableImage
                            daImage={greetingBackground}
                            buttonStyle={{
                                width: "auto",
                            }}
                        ></ViewableImage>
                        <ViewableImage
                            daImage={greetingBackground}
                            buttonStyle={{
                                width: "auto",
                            }}
                        ></ViewableImage>
                    </Grid>
                </motion.div>
            </Flex>
            <Footer brightBg={false} bg={"black"} />
        </>
    );
};

export default Minecraft;
