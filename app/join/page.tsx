"use client";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import { Box, Center, Flex, styled } from "../../styled-system/jsx";
import Link from "next/link";

const Join = () => {
    return (
        <>
            {/* <SEO
                title="Join | NSC Computer Science Club"
                url="https://northcs.org/join"
            /> */}

            <Flex flexDir="column" minW="100%" minH="100%">
                <Header />

                <Box>
                    <styled.h1
                        fontSize="5xl"
                        fontWeight="400"
                        color="#004da8"
                        py="1em"
                        textAlign="center"
                    >
                        We Sure Hope You Find Us Amicable
                    </styled.h1>
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
                        <styled.h2
                            fontSize="3xl"
                            fontWeight="400"
                            pt="30px"
                            pb="20px"
                        >
                            Having Trouble?
                        </styled.h2>
                    </Center>
                </Box>

                <styled.p textAlign="center" fontSize="xl" pb="20px">
                    Click the {'"'}Join Discord{'"'} button above.
                    Alternatively, you can go to{" "}
                    <Link href="https://discord.gg/PG2re4Zb4h">
                        <styled.span color="cyan.600">
                            https://discord.gg/PG2re4Zb4h
                        </styled.span>
                    </Link>
                </styled.p>

                <Box flexGrow={1} />

                <Footer />
            </Flex>
        </>
    );
};

export default Join;
