import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PageCard from "../components/PageCard/PageCard";

import { flex, vstack } from "../styled-system/patterns";
import { Box, Center, Flex, Stack, styled, VStack } from "../styled-system/jsx";

import NextLink from "next/link";
import Image from "next/image";
import bannerImg from "../public/img/Homepage-Background.svg";
import bannerImgCover from "../public/img/Homepage-Background-Text.svg";
import { GetServerSideProps } from "next";
import { getNewsCards, NewsCard } from "../lib/News";
import { EventCard, getEventCards } from "../lib/Event";
import SEO from "../components/SEO/SEO";
import { ScriptProps } from "next/script";
import newsCardsComponet from "./newsCardSection";
import { Suspense } from "react";
import NewsCardsComponet from "./newsCardSection";
import { css } from "../styled-system/css";

const Index = () => {
    return (
        <>
            {/* <SEO url="https://northcs.org" /> */}

            <div
                className={flex({
                    flexDir: "column",
                    minW: "100%",
                    minH: "100%",
                })}
            >
                <Header />

                <Box>
                    {/* I don't like using pixels here, but the flex breaks percentages. */}
                    <Box
                        w="100%"
                        h={{
                            base: "300px",
                            sm: "400px",
                            md: "500px",
                            lg: "600px",
                            xl: "700px",
                        }}
                        // Needed for the image.
                        pos="relative"
                    >
                        <Image
                            src={bannerImg}
                            alt=""
                            style={{
                                objectFit: "cover",
                                userSelect: "none",
                                pointerEvents: "none",
                                position: "absolute",
                                zIndex: "-1000",
                                width: "100%",
                                height: "100%",
                            }}
                        />

                        <Image
                            src={bannerImgCover}
                            alt=""
                            style={{
                                userSelect: "none",
                                pointerEvents: "none",
                                position: "absolute",
                                zIndex: "-999",
                                width: "100%",
                                height: "100%",
                            }}
                        />

                        <Box h={{ base: "25%", md: "30%", lg: "35%" }} />

                        <styled.h1
                            mx="10%"
                            pb={{ base: "30px", md: "70px", lg: "100px" }}
                            textAlign="center"
                            // size={{
                            //     base: "xl",
                            //     sm: "2xl",
                            //     md: "3xl",
                            //     lg: "4xl",
                            // }}
                            fontSize="7xl"
                            fontWeight="bold"
                            fontFamily="sans"
                        >
                            {/* TODO: Change this to something better. */}
                            Turn Your Theory Into Practice
                        </styled.h1>
                        <Stack
                            direction={{ base: "column", md: "row" }}
                            justifyContent="center"
                            rowGap={{ md: "5vmin" }}
                        >
                            <Box textAlign="center">
                                <NextLink
                                    href="/join"
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
                            </Box>
                            <Box
                                textAlign="center"
                                pt={{ base: "12.5px", sm: "0px" }}
                            >
                                <NextLink
                                    href="/minecraft"
                                    style={{ textDecoration: "none" }}
                                >
                                    <styled.span
                                        fontSize={{
                                            base: "1em",
                                            sm: "1.8em",
                                            md: "2.1em",
                                            lg: "2.4em",
                                        }}
                                        color="white"
                                        bg="#004da8"
                                        p={{ base: "5px", md: "15px" }}
                                        borderRadius="50px"
                                        transition="all 0.3s ease"
                                        _hover={{
                                            bg: "#95ca59",
                                            color: "black",
                                        }}
                                    >
                                        Here For MC?
                                    </styled.span>
                                </NextLink>
                            </Box>
                        </Stack>
                    </Box>

                    <Box
                        py={{ base: "10px", sm: "15px", md: "20px" }}
                        px={{
                            base: "30px",
                            sm: "50px",
                            md: "75px",
                            lg: "100px",
                            xl: "150px",
                        }}
                        bg="white"
                    >
                        <styled.h2
                            color="#95ca59"
                            py={{ base: "20px", sm: "25px", md: "30px" }}
                            textAlign="center"
                            // size="2xl"
                        >
                            Who We Are
                        </styled.h2>
                        <styled.p
                            pb="15px"
                            textAlign="center"
                            fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
                        >
                            The North Seattle College CS Club is a group of
                            people on campus with a passion for Computer
                            Science. It{"'"}s open to people of all skill
                            levels, and we don{"'"}t have any attendance or
                            participation requirements. Our Discord (
                            <NextLink href="/join">
                                <span style={{ color: "cyan.600" }}>
                                    join here
                                </span>
                            </NextLink>
                            ) is where we coordinate, chat, ask questions, and
                            announce upcoming events. You can use the Discord to
                            meet and talk to like-minded individuals, seek
                            support from your peers, share interesting things,
                            and really, anything else!
                        </styled.p>
                        <styled.p
                            pb="30px"
                            textAlign="center"
                            fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
                        >
                            We also frequently host events like workshops,
                            meetings / game nights, and club projects (like this
                            website!). You can see some of our events below (and
                            on the{" "}
                            <NextLink href="/events">
                                <span style={{ color: "cyan.600" }}>
                                    events page
                                </span>
                            </NextLink>
                            ), and if you have any ideas or suggestions, feel
                            free to post them on our Discord. We can{"'"}t wait
                            to meet you!
                        </styled.p>
                    </Box>
                    <Suspense
                        fallback={
                            <Center
                                className={css({
                                    width: "100vw",
                                    height: "40vw",
                                    bg: "#004da8",
                                })}
                            >
                                Loading news
                            </Center>
                        }
                    >
                        <NewsCardsComponet />
                    </Suspense>
                </Box>

                <styled.div flexGrow={1} />

                <Footer brightBg />
            </div>
        </>
    );
};

// export const getServerSideProps: GetServerSideProps = async (props) => {
//     const news = await getNewsCards(2);
//     const events = await getEventCards(2);

//     return {
//         props: {
//             news,
//             events,
//         },
//     };
// };

export default Index;
