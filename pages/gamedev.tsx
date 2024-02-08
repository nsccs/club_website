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
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SEO from "../components/SEO/SEO";

import renpyLogo from "../img/RenpyLogo.png";
import godotLogo from "../img/GodotIcon.svg";

const Gamedev = () => {
    return (
        <>
            <SEO
                title="GameDev | NSC Computer Science Club"
                url="https://northcs.org/gamedev"
            />
            <Flex flexDir="column" minW="100%" minH="100%">
                <Header />

                {/* Top of the page including the Renpy and godot logo */}
                <Flex flexDir="column" bg="gray" flexGrow={1} pb="20px">
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
                                <Link href="https://npr.org">
                                    <Button>RSVP</Button>
                                </Link>
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
                                <Link href="a.com">
                                    <Button>Coming Soon</Button>
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
                    <Text
                        textAlign="center"
                        fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
                    >
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
                <Footer />
            </Flex>
        </>
    );
};

export default Gamedev;
