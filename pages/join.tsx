import {
    Box,
    Center,
    Flex,
    Text,
    useBreakpointValue,
    Heading,
    Link,
} from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SEO from "../components/SEO/SEO";

const Join = () => {
    return (
        <>
            <SEO
                title="Join | NSC Computer Science Club"
                url="https://northcs.org/join"
            />

            <Flex flexDir="column" minW="100%" minH="100%">
                <Header />

                <Box>
                    <Heading
                        as="h1"
                        fontSize="5xl"
                        fontWeight="400"
                        color="#004da8"
                        py="1em"
                        textAlign="center"
                    >
                        We Sure Hope You Find Us Amicable
                    </Heading>
                </Box>

                <Box w="100%" py="20px">
                    <Center w="100%">
                        <Box
                            w={{
                                base: "90%",
                                sm: "85%",
                                md: "80%",
                                lg: "75%",
                                xl: "70%",
                            }}
                        >
                            <iframe
                                src="https://discord.com/widget?id=564559681339785228&theme=dark"
                                width="100%"
                                height={useBreakpointValue({
                                    base: "700",
                                    sm: "600",
                                    md: "550",
                                    lg: "500",
                                    xl: "450",
                                })}
                                allowTransparency
                                frameBorder="0"
                                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                            />
                        </Box>
                    </Center>
                </Box>

                <Box>
                    <Center>
                        <Heading
                            as="h2"
                            fontSize="3xl"
                            fontWeight="400"
                            pt="30px"
                            pb="20px"
                        >
                            Having Trouble?
                        </Heading>
                    </Center>
                </Box>

                <Text textAlign="center" fontSize="lg">
                    Click the "Join Discord" button above. Alternatively, you can go to 
                    <Link href="https://discord.gg/PG2re4Zb4h" isExternal>https://discord.gg/PG2re4Zb4h</Link>.
                </Text>

                <Box flexGrow={1} />

                <Footer />
            </Flex>
        </>
    );
};

export default Join;
