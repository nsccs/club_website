import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {
    Box,
    Flex,
    Center,
    Heading,
    Text,
    Link,
    Wrap,
    WrapItem,
    HStack,
    VStack,
} from "@chakra-ui/react";
import Image from "next/image";

import bannerImg from "../img/400.jpeg";
import PageCard, { PageCardInfo } from "../components/PageCard/PageCard";

const Index = () => {
    const news: PageCardInfo[] = [
        {
            title: "Title Goes Here",
            time: new Date(),
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "/news/1",
        },
        {
            title: "Title Goes Here",
            time: new Date(),
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "/news/2",
        },
    ];

    const events: PageCardInfo[] = [
        {
            title: "Title Goes Here",
            time: new Date(),
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "/event/1",
        },
        {
            title: "Title Goes Here",
            time: new Date(),
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "/event/2",
        },
    ];

    return (
        <Flex flexDir="column" minW="100%" minH="100%">
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
                        alt="FILL LATER"
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

                    <Box h={{ base: "30%", md: "40%", lg: "50%" }} />

                    <Heading
                        as="h1"
                        pb={{ base: "30px", md: "40px", lg: "50px" }}
                        textAlign="center"
                        color="white"
                        size={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
                    >
                        Inspirational and Welcoming Words!
                    </Heading>
                    <Box textAlign="center">
                        <Link href="/join">
                            <Text
                                as="span"
                                fontSize={{
                                    base: "1.5em",
                                    sm: "1.8em",
                                    md: "2.1em",
                                    lg: "2.4em",
                                }}
                                color="white"
                                bg="#004da8"
                                p="10px"
                                borderRadius="50px"
                                _hover={{
                                    bg: "black",
                                    color: "#95ca59",
                                }}
                            >
                                Join The Club!
                            </Text>
                        </Link>
                    </Box>
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
                    <Heading
                        as="h2"
                        color="#698a2c"
                        py={{ base: "20px", sm: "25px", md: "30px" }}
                        textAlign="center"
                        size="2xl"
                    >
                        Who We Are
                    </Heading>
                    <Text
                        pb="30px"
                        textAlign="center"
                        fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec at ipsum convallis, pretium ex vitae, malesuada
                        est. Suspendisse vitae fermentum justo, ut elementum
                        justo. In ligula ante, sagittis id nulla ac, rhoncus
                        congue ante. Proin sollicitudin sapien eget viverra
                        eleifend. Aliquam quis sem ut diam porttitor consequat
                        nec id urna. Donec venenatis commodo sem, id volutpat
                        neque ullamcorper elementum. Mauris in lorem at turpis
                        elementum aliquam. Ut blandit pretium accumsan.
                    </Text>
                </Box>

                {/* This needs to be changed. It works for XL and base, but not for anything in between. */}
                <Box py="30px" px="20px" bg="#004da8">
                    <Flex
                        flexDir={{ base: "column", md: "row" }}
                        w="100%"
                        h="100%"
                    >
                        <Box
                            w={{ base: "100%", md: "50%" }}
                            p={{
                                base: "10px",
                                sm: "20px",
                                md: "30px",
                                lg: "40px",
                                xl: "50px",
                            }}
                        >
                            <Heading
                                as="h2"
                                color="#698a2c"
                                py={{ base: "20px", sm: "25px", md: "30px" }}
                                textAlign="center"
                                size="2xl"
                            >
                                News
                            </Heading>

                            <VStack spacing="100px">
                                {news.map((event) => (
                                    <PageCard
                                        key={event.url}
                                        title={event.title}
                                        time={event.time}
                                        description={event.description}
                                        url={event.url}
                                    />
                                ))}
                            </VStack>
                        </Box>

                        <Box
                            w={{ base: "100%", md: "50%" }}
                            p={{
                                base: "10px",
                                sm: "20px",
                                md: "30px",
                                lg: "40px",
                                xl: "50px",
                            }}
                        >
                            <Heading
                                as="h2"
                                color="#698a2c"
                                py={{ base: "20px", sm: "25px", md: "30px" }}
                                textAlign="center"
                                size="2xl"
                            >
                                Upcoming Events
                            </Heading>

                            <VStack spacing="100px">
                                {events.map((event) => (
                                    <PageCard
                                        key={event.url}
                                        title={event.title}
                                        time={event.time}
                                        description={event.description}
                                        url={event.url}
                                    />
                                ))}
                            </VStack>
                        </Box>
                    </Flex>
                </Box>
            </Box>

            <Box flexGrow={1} />

            <Footer />
        </Flex>
    );
};

export default Index;
