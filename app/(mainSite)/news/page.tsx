import React, { Suspense } from "react";
import Footer from "@/components/Footer/Footer";
import { Box, Center, Grid, styled } from "@/styled-system/jsx";
import NewsCards from "@/components/PageCard/NewsCards";
import { css } from "@/styled-system/css";
import { getMetadata } from "@/lib/SEO";

export const metadata = getMetadata({
    title: "News | NSC Computer Science Club",
    url: "https://northcs.org/news",
});

/**
 * Events page that displays n events where n is the count passed to getNewsCards within getServerSideProps.
 * @param news
 * @constructor
 */
const News: React.FC = () => {
    return (
        <>
            <Box mt={0.5} pt={2} pb={2} bg="#95ca59">
                <styled.h2
                    color="black"
                    textAlign="center"
                    whiteSpace="nowrap"
                    fontSize={{
                        base: "1.5rem",
                        md: "2rem",
                    }}
                >
                    News
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
                                    width: "100%",
                                    height: "100%",
                                    bg: "CSClubBlue",
                                })}
                            >
                                Loading news
                            </Center>
                        }
                    >
                        <NewsCards />
                    </Suspense>
                </Grid>
            </Box>
            <Footer brightBg />
        </>
    );
};

export default News;
