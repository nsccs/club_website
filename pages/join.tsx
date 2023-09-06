import {
    Box,
    Center,
    Flex,
    Text,
    useBreakpointValue,
    Heading,
} from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Join = () => {
    return (
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
                        Information About Us
                    </Heading>
                </Center>
            </Box>

            <Text textAlign="center" fontSize="lg">
                Lorem Ipsum Text Goes Here
            </Text>

            <Box flexGrow={1} />

            <Footer />
        </Flex>
    );
};

export default Join;
