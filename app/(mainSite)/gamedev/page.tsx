import { Box, Center, Flex, Stack, styled } from "@/styled-system/jsx";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";

import renpyLogo from "@/public/img/RenpyLogo.png";
import godotLogo from "@/public/img/GodotIcon.svg";

import renpyExampleImg from "@/public/img/RenpyScreenshotExample.png";
import godotExampleImg from "@/public/img/GodotScreenshotExample.png";
import { css } from "@/styled-system/css";
import { getMetadata } from "@/lib/SEO";

export const metadata = getMetadata({
    title: "GameDev | NSC Computer Science Club",
    url: "https://northcs.org/gamedev",
});

const textSettings = {
    fontSize: { base: "xl", sm: "2xl", md: "3xl" },
};

const buttonStyle = css({
    fontSize: {
        base: "1em",
        sm: "1.5em",
        md: "1.75em",
    },
    color: "white",
    bg: "CSClubBlue",
    p: "15px",
    width: "auto",
    borderRadius: "50px",
    transition: "all 0.3s ease",
    cursor: "pointer",
    _hover: {
        bg: "#95ca59",
        color: "black",
    },
});

const Gamedev = () => {
    return (
        <>
            <Flex flexDir="column" minW="100%" minH="100%">
                {/* Top of the page including the Renpy and godot logo */}
                <Flex
                    flexDir="column"
                    backgroundImage="url(/img/Homepage-Background.svg)"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    backgroundAttachment="fixed"
                    backgroundPosition="bottom"
                    flexGrow={1}
                    pb="20px"
                >
                    <h1
                        style={{
                            textAlign: "center",
                            fontSize: "4rem",
                        }}
                    >
                        Welcome creators
                    </h1>
                    <Center flexGrow={1}>
                        <Stack
                            direction={{ base: "column", md: "row" }}
                            h={{ base: "initial", md: "50vmin" }}
                            w={{ base: "50vmin", md: "initial" }}
                            gap="10vmax"
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
                                <button className={buttonStyle}>
                                    Returning Spring Quarter
                                </button>
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
                                    <button className={buttonStyle}>
                                        Coming Soon
                                    </button>
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
                    <styled.p textAlign="center" {...textSettings}>
                        Go from player to creator in are game development
                        workshops, where we introduce you to the wonderful world
                        of your mind! Journey through the deepest pits of the
                        abyss, smuggle potatoes, become a lvl 100 Mafia{" "}
                        <b>BOSS</b>, or make your dream home in the cosmos.{" "}
                        <br /> The world is your oyster! <br />
                        <br />
                        We are here to get you started, to start we must first
                        choose are tool of choice
                    </styled.p>
                </Box>

                {/* more info on each engine*/}
                <Stack
                    direction={{ base: "column", md: "row" }}
                    h={{ base: "initial", md: "auto" }}
                    w={{ base: "inital", md: "auto" }}
                    gap="5vmax"
                    justifyContent="center"
                    px={{ base: "20px", md: "5px" }}
                    alignSelf="center"
                >
                    <Stack w={{ base: "inherit", md: "45%" }}>
                        <styled.h2 textAlign="center">Ren{"'"}Py</styled.h2>
                        <p>
                            Great for beginners! Perfect for story focused
                            games, with capabilities to make more advanced
                            interactions with python
                        </p>
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
                        <p>
                            Recommended: CSC 110
                            <br /> Minimum: Passion ;)
                        </p>
                        <Link
                            href="404"
                            style={{
                                alignSelf: "center",
                                marginBottom: "20px",
                            }}
                        >
                            <button className={buttonStyle}>
                                Returning Spring Quarter
                            </button>
                        </Link>
                    </Stack>
                    <Stack w={{ base: "inherit", md: "45%" }}>
                        <styled.h2 textAlign="center">Godot</styled.h2>
                        <p>
                            A 2D/3D fully featured open source game engine, your
                            only limitations are your imagination and your
                            skills! Not an engine for the faint of heart, but in
                            return it will give you the world.
                        </p>
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
                        <p>
                            Recommended: CSC 142
                            <br /> Minimum: CSC 110
                        </p>
                        <Link
                            href="404"
                            style={{
                                alignSelf: "center",
                                marginBottom: "20px",
                            }}
                        >
                            <button className={buttonStyle}>Coming Soon</button>
                        </Link>
                    </Stack>
                </Stack>
                <Footer />
            </Flex>
        </>
    );
};

export default Gamedev;
