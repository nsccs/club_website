import React from "react";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";

export interface PageCardInfo {
    title: string;
    time: Date;
    description: string;
    url: string;
}

/**
 * A card providing information about a page.
 * This is used for news articles and events.
 * @param title {string} - is the title of the page/card.
 * @param time {Date} - is the date that will show up on the card.
 * This can be the created date, or the event time (if it's an event).
 * @param description {string} - is the description that will be shown for the card.
 * @param url {string} - is the URL for the page.
 */
const PageCard: React.FC<PageCardInfo> = ({
    title,
    time,
    description,
    url,
}) => {
    return (
        <Flex
            w="100%"
            h={{
                base: "150px",
                sm: "200px",
                md: "250px",
                lg: "275px",
                xl: "300px",
            }}
            bg="white"
            borderRadius={{ base: "40px", sm: "60px", md: "80px", lg: "100px" }}
            flexDir="column"
            px="7.5%"
            py="7.5%"
            boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        >
            <Flex w="100%" flexDir="row">
                <Heading
                    as="span"
                    color="black"
                    size={{ base: "md", sm: "lg", md: "lg", lg: "2xl" }}
                    whiteSpace="nowrap"
                >
                    {time.toLocaleString("default", {
                        month: "long",
                        day: "numeric",
                    })}
                </Heading>
                <Box flexGrow={1} />

                <Heading
                    as="h3"
                    color="black"
                    size={{ base: "md", sm: "lg", md: "xl", lg: "2xl" }}
                    textAlign="center"
                >
                    {title}
                </Heading>
            </Flex>

            <Box w="100%">
                <Text fontSize={{ base: "md", sm: "lg", md: "2xl", lg: "4xl" }}>
                    {description}
                </Text>
            </Box>

            <Flex w="100%" flexDir="row">
                <Box flexGrow={1} />

                <Link href={url}>
                    <Text
                        as="span"
                        fontSize={{
                            base: "1.5em",
                            sm: "1.8em",
                            md: "2.1em",
                            lg: "2.4em",
                        }}
                        color="black"
                        bg="#95ca59"
                        p="10px"
                        borderRadius="50px"
                        _hover={{
                            bg: "#004da8",
                            color: "white",
                        }}
                    >
                        Join The Club!
                    </Text>
                </Link>
            </Flex>
        </Flex>
    );
};

export default PageCard;
