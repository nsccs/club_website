import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Box, Flex, Center, Heading, Text, Link } from "@chakra-ui/react";

const Index = () => {
    return (
        <Flex flexDir="column">
            <Header />

            <Box
                w="100%"
                h={{ base: "30vh", md: "50vh", lg: "75vh", xl: "90vh" }}
            >
                {/* Insert background image set to object-fit: cover */}

                <Box h={{ base: "30%", md: "40%", lg: "50%" }} />

                <Heading
                    as="h1"
                    pb={{ base: "30px", md: "40px", lg: "50px" }}
                    textAlign="center"
                >
                    Heading Text
                </Heading>
                <Box textAlign="center">
                    <Link href="/join">
                        <Text
                            as="span"
                            fontSize={{
                                base: "1.2em",
                                sm: "1.3em",
                                md: "1.4em",
                                lg: "1.7em",
                            }}
                            color="white"
                            bg="#004da8"
                            p="10px"
                            borderRadius="50px"
                            _hover={{
                                bg: "black",
                                color: "#95ca59",
                            }}
                        >
                            Join The Club!
                        </Text>
                    </Link>
                </Box>
            </Box>

            <Box py="20px" px="30px" bg="white">
                <Heading as="h2" color="#698a2c" pb="30px" textAlign="center">
                    Who We Are
                </Heading>
                <Text pb="30px" textAlign="center">
                    Example text
                </Text>
            </Box>

            <Box py="30px" px="20px" bg="#004da8">
                <Center w="100%" h="100%">
                    Unfinished - what to put here while we don't have a news
                    system?
                </Center>
            </Box>

            <Box flexGrow={1} />

            <Footer />
        </Flex>
    );
};

export default Index;
