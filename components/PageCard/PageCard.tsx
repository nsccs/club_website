import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    Link,
    Text,
} from "@chakra-ui/react";

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
        <Card
            w="100%"
            bg="white"
            borderRadius={{ base: "40px", sm: "60px", md: "80px", lg: "100px" }}
            flexDir="column"
            px="7.5%"
            py="7.5%"
            boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        >
            <CardHeader>
                <Text
                    as="span"
                    color="black"
                    fontSize={{ base: "md", sm: "lg", md: "lg", lg: "2xl" }}
                    fontStyle="italic"
                    whiteSpace="nowrap"
                >
                    {time.toLocaleString("default", {
                        month: "long",
                        day: "numeric",
                    })}
                </Text>

                <Heading
                    as="h3"
                    color="black"
                    size={{ base: "lg", md: "xl", lg: "2xl" }}
                    paddingTop="20px"
                    textAlign="center"
                >
                    {title}
                </Heading>
            </CardHeader>

            <CardBody>
                <Text fontSize={{ base: "lg", md: "2xl", lg: "4xl" }}>
                    {description}
                </Text>
            </CardBody>

            <CardFooter justifyContent={{ base: "center", md: "right" }}>
                <Link href={url} style={{ textDecoration: "none" }}>
                    <Text
                        as="span"
                        fontSize={{
                            base: "1.75em",
                            sm: "2.3em",
                            md: "2.6em",
                            lg: "2.9em",
                        }}
                        color="black"
                        bg="#95ca59"
                        py={{ base: "10px", md: "15px" }}
                        px={{ base: "25px", md: "15px" }}
                        borderRadius="10px"
                        transition="all 0.3s ease"
                        _hover={{
                            bg: "#004da8",
                            color: "white",
                        }}
                    >
                        View
                    </Text>
                </Link>
            </CardFooter>
        </Card>
    );
};

export default PageCard;
