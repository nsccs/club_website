import {
    Box,
    Center,
    Flex,
    Text,
    Heading,
    HStack,
    Button,
    VStack,
    Stack,
    extendTheme,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SEO from "../components/SEO/SEO";

import renpyLogo from "../img/RenpyLogo.png";
import godotLogo from "../img/GodotIcon.svg";
import greetingBackground from "../img/Homepage-Background.svg";

import renpyExampleImg from "../img/RenpyScreenshotExample.png";
import godotExampleImg from "../img/GodotScreenshotExample.png";

const textSettings = {
    fontSize: { base: "xl", sm: "2xl", md: "3xl" },
};

const buttonSettings = {
    color: "white",
    bg: "#004da8",
    transition: "all 0.3s ease",
    _hover: {
        bg: "#95ca59",
        color: "black",
    },
};

const Gamedev = () => {
    return (
        <>
            <SEO
                title="GameDev | NSC Computer Science Club"
                url="https://northcs.org/gamedev"
            />
            <Header />
            <Flex flexDir="column" minW="100%" minH="100%">
                {/* Top of the page including the Renpy and godot logo */}
                <Flex
                    flexDir="column"
                    backgroundImage={greetingBackground.src}
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    backgroundAttachment="fixed"
                    backgroundPosition="bottom"
                    flexGrow={1}
                    pb="20px"
                >
                    <Heading
                        as="h1"
                        style={{
                            textAlign: "center",
                            fontSize: "4rem",
                        }}
                    >
                        Welcome creators
                    </Heading>
                    <Center flexGrow={1}>
                        <Stack
                            direction={{ base: "column", md: "row" }}
                            h={{ base: "initial", md: "50vmin" }}
                            w={{ base: "50vmin", md: "initial" }}
                            spacing="10vmax"
                        >
                            <Flex flexDir="column" h="100%" alignItems="center">
                                <Image
                                    src={renpyLogo}
                                    alt="Ren'py Logo"
                                    style={{
                                        height: "80%",
                                        width: "auto",
                                    }}
                                />
                                <Box flexGrow={1} />
                                <Button {...buttonSettings}>
                                    Returning Spring Quarter
                                </Button>
                            </Flex>
                            <Flex flexDir="column" h="100%" alignItems="center">
                                <Image
                                    src={godotLogo}
                                    alt="Godot logo"
                                    style={{
                                        height: "80%",
                                        width: "auto",
                                    }}
                                />
                                <Box flexGrow={1} />
                                <Link href="404">
                                    <Button {...buttonSettings}>
                                        Coming Soon
                                    </Button>
                                </Link>
                            </Flex>
                        </Stack>
                    </Center>
                </Flex>

                {/* Content and stuff */}
                <Box
                    px={{
                        base: "5vw",
                    }}
                    py={{
                        base: "5vmin",
                    }}
                >
                    <Text textAlign="center" {...textSettings}>
                        Go from player to creator in are game development
                        workshops, where we introduce you to the wonderful world
                        of your mind! Journey through the deepest pits of the
                        abyss, smuggle potatoes, become a lvl 100 Mafia{" "}
                        <b>BOSS</b>, or make your dream home in the cosmos.{" "}
                        <br /> The world is your oyster! <br />
                        <br />
                        We are here to get you started, to start we must first
                        choose are tool of choice
                    </Text>
                </Box>

                {/* more info on each engine*/}
                <Stack
                    direction={{ base: "column", md: "row" }}
                    h={{ base: "initial", md: "auto" }}
                    w={{ base: "inital", md: "auto" }}
                    spacing="5vmax"
                    justifyContent="center"
                    px={{ base: "20px", md: "5px" }}
                    alignSelf="center"
                >
                    <Stack w={{ base: "inherit", md: "45%" }}>
                        <Heading as="h2" textAlign="center">
                            Ren{"'"}Py
                        </Heading>
                        <Text fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}>
                            Great for beginners! Perfect for story focused
                            games, with capabilities to make more advanced
                            interactions with python
                        </Text>
                        <Box flexGrow={1} />
                        <Box borderRadius="20px" overflow="hidden">
                            <Image
                                src={renpyExampleImg}
                                alt="an image example of something made in RenPy"
                                style={{
                                    alignSelf: "center",
                                }}
                            />
                        </Box>
                        <Box flexGrow={1} />
                        <Text fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}>
                            Recommended: CSC 110
                            <br /> Minimum: Passion ;)
                        </Text>
                        <Link
                            href="https://forms.office.com/Pages/ResponsePage.aspx?id=OP_YAhHXMU6pFWy1z_eI3wVkLwZrVwRFqtH05cTl-O5URDFDTUczTzBNM0xZWVo2STVBVEZHMk9LSS4u"
                            style={{
                                alignSelf: "center",
                                marginBottom: "20px",
                            }}
                        >
                            <Button {...buttonSettings}>RSVP</Button>
                        </Link>
                    </Stack>
                    <Stack w={{ base: "inherit", md: "45%" }}>
                        <Heading as="h2" textAlign="center">
                            Godot
                        </Heading>
                        <Text {...textSettings}>
                            A 2D/3D fully featured open source game engine, your
                            only limitations are your imagination and your
                            skills! Not an engine for the faint of heart, but in
                            return it will give you the world.
                        </Text>
                        <Box flexGrow={1} />
                        <Box borderRadius="20px" overflow="hidden">
                            <Image
                                src={godotExampleImg}
                                alt="an image example of something made in Godot"
                                style={{
                                    alignSelf: "center",
                                }}
                            />
                        </Box>
                        <Box flexGrow={1} />
                        <Text {...textSettings}>
                            Recommended: CSC 142
                            <br /> Minimum: CSC 110
                        </Text>
                        <Link
                            href="404"
                            style={{
                                alignSelf: "center",
                                marginBottom: "20px",
                            }}
                        >
                            <Button {...buttonSettings}>Coming Soon</Button>
                        </Link>
                    </Stack>
                </Stack>
                <Footer />
            </Flex>
        </>
    );
};

export default Gamedev;
