import PageCard from "../components/PageCard/PageCard";
import { getEventCards } from "../lib/Event";
import { getNewsCards } from "../lib/News";
import { Box, Flex, VStack, styled } from "../styled-system/jsx";

const NewsCardsComponet = async (): Promise<JSX.Element> => {
    const events = await getEventCards(2);
    const news = await getNewsCards(2);

    return (
        <>
            <Box py="30px" px="20px" bg="#004da8">
                <Flex flexDir={{ base: "column", lg: "row" }} w="100%" h="100%">
                    <Box
                        w={{ base: "100%", lg: "50%" }}
                        p={{
                            base: "10px",
                            sm: "20px",
                            md: "30px",
                            lg: "40px",
                            xl: "50px",
                        }}
                    >
                        <styled.h2
                            color="#95ca59"
                            py={{
                                base: "20px",
                                sm: "25px",
                                md: "30px",
                            }}
                            textAlign="center"
                            // size="2xl"
                            whiteSpace="nowrap"
                        >
                            News
                        </styled.h2>

                        <VStack gap="100px">
                            {news.map((newsItem) => (
                                <PageCard
                                    key={newsItem.id}
                                    title={newsItem.title}
                                    time={new Date(newsItem.date)}
                                    description={newsItem.description}
                                    url={"/news/" + newsItem.id}
                                />
                            ))}
                        </VStack>
                    </Box>

                    <Box
                        w={{ base: "100%", lg: "50%" }}
                        p={{
                            base: "10px",
                            sm: "20px",
                            md: "30px",
                            lg: "40px",
                            xl: "50px",
                        }}
                    >
                        <styled.h2
                            color="#95ca59"
                            py={{
                                base: "20px",
                                sm: "25px",
                                md: "30px",
                            }}
                            textAlign="center"
                            // size="2xl"
                            whiteSpace="nowrap"
                        >
                            Upcoming Events
                        </styled.h2>

                        <VStack gap={100}>
                            {events.map((eventItem) => (
                                // TODO: Use event images.
                                <PageCard
                                    key={eventItem.slugID}
                                    title={eventItem.title}
                                    time={new Date(eventItem.date)}
                                    description={eventItem.description}
                                    url={
                                        "https://gdsc.community.dev/e/" +
                                        eventItem.slugID
                                    }
                                />
                            ))}
                        </VStack>
                    </Box>
                </Flex>
            </Box>
        </>
    );
};

export default NewsCardsComponet;
