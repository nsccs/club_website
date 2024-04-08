import React, { Suspense } from "react";
import { GetServerSideProps } from "next";
import SEO from "../../components/SEO/SEO";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import EventCards from "../../components/PageCard/EventCards";
import { Box, Center, Grid, styled } from "../../styled-system/jsx";
import { css } from "../../styled-system/css";

/**
 * Events page that displays n events where n is the count passed to getEventCards within getServerSideProps.
 * @param events
 * @constructor
 */
const Events: React.FC = () => {
    return (
        <>
            {/* <SEO url="https://northcs.org/events" /> */}
            <Box mt={0.5} pt={2} pb={2} bg="#95ca59">
                <styled.h2
                    color="black"
                    textAlign="center"
                    fontSize="lg"
                    whiteSpace="nowrap"
                >
                    Events
                </styled.h2>
            </Box>
            <Box bg="#dff0d8" pt={10} pb={10}>
                <Grid
                    columns={{ sm: 1, md: 1, lg: 2 }}
                    gap={10}
                    ml={10}
                    mr={10}
                >
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
                        <EventCards />
                    </Suspense>
                </Grid>
            </Box>
            <Footer brightBg />
        </>
    );
};

export default Events;
