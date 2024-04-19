import React, { Suspense } from "react";

import Footer from "@/components/Footer/Footer";
import EventCards from "@/components/PageCard/EventCards";
import { Box, Grid, styled } from "@/styled-system/jsx";
import Loading from "../loading";
import { getMetadata } from "@/lib/SEO";

export const metadata = getMetadata({
    title: "Events | NSC Computer Science Club",
    url: "https://northcs.org/events",
});

/**
 * The events page containing all the events
 *
 * @returns The page
 */
const Events: React.FC = () => {
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
                    <Suspense fallback={<Loading />}>
                        <EventCards />
                    </Suspense>
                </Grid>
            </Box>
            <Footer brightBg />
        </>
    );
};

export default Events;
