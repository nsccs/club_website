import {
    Box,
    Flex,
    Text,
    Heading,
    Link,
    Stack,
    UnorderedList,
    ListItem,
    Divider,
} from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SEO from "../components/SEO/SEO";

import ImpactathonBanner from "../img/Impactathon-Banner.png";
import Image from "next/image";
import React from "react";
import { FaCalendar, FaClock, FaLocationDot } from "react-icons/fa6";

const Impactathon = () => {
    return (
        <>
            <SEO
                title="Impactathon | NSC Computer Science Club"
                url="https://northcs.org/impactathon"
                description="Get ready for an exhilarating and impactful journey at the Data-Centric Social Justice Hackathon!"
                image={{
                    url: ImpactathonBanner.src,
                    width: ImpactathonBanner.width,
                    height: ImpactathonBanner.height,
                    alt: 'An image with text reading "Impactathon 2024".',
                    large: true,
                }}
            />

            <Flex flexDir="column" minW="100%" minH="100%">
                <Header />

                <Box
                    width="100%"
                    maxHeight={{ base: "400px", md: "300px" }}
                    overflow="hidden"
                >
                    <Image
                        src={ImpactathonBanner}
                        alt="A banner with the words Impactathon 2024"
                    />
                </Box>

                <Stack
                    direction={{ base: "column", md: "row" }}
                    py={{ base: "10px", sm: "20px", md: "30px", lg: "40px" }}
                    px={{ base: "10px", sm: "50px", md: "10%", lg: "15%" }}
                >
                    <Box
                        w={{ base: "100%", md: "70%" }}
                        textAlign={{ base: "center", md: "left" }}
                    >
                        <Heading as="h1" pb="20px" textAlign="center">
                            Spring 2024 Impactathon
                        </Heading>
                        <Text fontSize="xl">
                            Get ready for an exhilarating and impactful journey
                            at the Data-Centric Social Justice Hackathon!
                        </Text>
                        <Text fontSize="xl" pt="20px">
                            Taking place at the dynamic venue of the Grove on
                            the North Seattle College campus from April 20th to
                            April 21st, this event unites students, innovators,
                            and advocates from diverse backgrounds to tackle
                            social justice issues through the power of data and
                            technology. Participants will collaborate on
                            projects aimed at addressing systemic disparities,
                            championing fairness, and igniting positive
                            transformation within our communities.
                        </Text>
                        <Text fontSize="xl" pt="20px">
                            Whether you{"'"}re a coding virtuoso, data
                            aficionado, design guru, or passionate activist,
                            there{"'"}s a pivotal role awaiting you at our
                            Hackathon. Join our community of participants and
                            become a catalyst for change, leveraging your unique
                            talents to drive impactful solutions and leave an
                            enduring mark on the world.
                        </Text>
                    </Box>
                    <Divider
                        display={{ base: "none", md: "initial" }}
                        orientation="vertical"
                        height="auto"
                    />
                    <Box w={{ base: "100%", md: "30%" }} p="20px">
                        <Box display="flex">
                            <FaLocationDot
                                style={{ fontSize: "25px", display: "inline" }}
                            />
                            <Box pl="5px">
                                <Text>
                                    9600 College Way N, Seattle, WA 98103
                                </Text>
                            </Box>
                        </Box>

                        <Box display="flex" pt="40px">
                            <FaCalendar
                                style={{ fontSize: "25px", display: "inline" }}
                            />
                            <Box pl="5px">
                                <Text>4/20/2024 and 4/21/2024</Text>
                            </Box>
                        </Box>

                        <Box display="flex" pt="40px">
                            <FaClock
                                style={{ fontSize: "25px", display: "inline" }}
                            />
                            <Box pl="5px">
                                <Text>9 AM to 7 PM</Text>
                            </Box>
                        </Box>

                        <Divider pt="30px" />

                        <Heading
                            as="h2"
                            fontSize="xl"
                            textAlign="center"
                            pt="30px"
                        >
                            Team Sizes
                        </Heading>

                        <UnorderedList pt="20px">
                            <ListItem>2-4 people per team</ListItem>
                            <ListItem>
                                Opportunity to form teams at the event
                            </ListItem>
                            <ListItem>
                                Flexibility for participants to join pre-formed
                                teams or create new ones onsite
                            </ListItem>
                        </UnorderedList>

                        <Box pt="30px" textAlign="center">
                            <Link
                                href="https://docs.google.com/forms/d/e/1FAIpQLScSCnhsT6jqB4WKRe1ngWZjUzhlYGAaqb5ekeV9X5yOFcoT_A/viewform"
                                textDecoration="none"
                                _hover={{ textDecoration: "none" }}
                                isExternal
                            >
                                <Text
                                    as="span"
                                    fontSize={{
                                        base: "1.5em",
                                        md: "1.6em",
                                        lg: "1.7em",
                                    }}
                                    color="black"
                                    bg="#95ca59"
                                    p={{ base: "5px", md: "15px" }}
                                    borderRadius="50px"
                                    transition="all 0.3s ease"
                                    _hover={{
                                        bg: "#004da8",
                                        color: "white",
                                    }}
                                >
                                    Sign Up
                                </Text>
                            </Link>
                        </Box>
                    </Box>
                </Stack>

                <Stack
                    direction={{ base: "column", md: "row" }}
                    py={{ base: "10px", sm: "20px", md: "30px", lg: "40px" }}
                    px={{ base: "10px", sm: "50px", md: "10%", lg: "15%" }}
                >
                    <Box w={{ base: "100%", md: "50%" }}>
                        <Heading as="h2" fontSize="3xl" textAlign="center">
                            About Participants
                        </Heading>
                        <UnorderedList fontSize="xl">
                            <ListItem>
                                Enthusiastic individuals committed to social
                                justice and technology-driven change
                            </ListItem>
                            <ListItem>
                                Diverse backgrounds and interests welcome, from
                                coding wizards to communicators
                            </ListItem>
                            <ListItem>
                                Problem-solving, collaboration, or creativity
                                skills desired
                            </ListItem>
                            <ListItem>
                                Passion for social justice essential
                            </ListItem>
                            <ListItem>
                                Interest in leveraging data and technology to
                                drive positive change
                            </ListItem>
                            <ListItem>
                                Prior experience with data science or
                                application development beneficial but not
                                required
                            </ListItem>
                            <ListItem>
                                All skill levels welcome, from beginners to
                                experts
                            </ListItem>
                            <ListItem>
                                Willingness to learn, collaborate, and
                                contribute to meaningful projects
                            </ListItem>
                            <ListItem>
                                Example tech stacks: Python for data analysis,
                                JavaScript for web development, SQL for database
                                management
                            </ListItem>
                            <ListItem>
                                Participants encouraged to use tools they{"'"}re
                                comfortable with and explore new ones throughout
                                the event
                            </ListItem>
                        </UnorderedList>
                    </Box>
                    <Box w={{ base: "0%", md: "50px" }} />
                    <Box w={{ base: "100%", md: "50%" }}>
                        <Heading as="h2" fontSize="3xl" textAlign="center">
                            What{"'"}s Involved
                        </Heading>
                        <UnorderedList fontSize="xl">
                            <ListItem>
                                Engage in collaborative project work, addressing
                                real-world social justice challenges through
                                innovative data-driven solutions.
                            </ListItem>
                            <ListItem>
                                Participate in workshops, brainstorming
                                sessions, and skill-building exercises to
                                enhance your knowledge and expertise.
                            </ListItem>
                            <ListItem>
                                Network with fellow participants, mentors, and
                                industry professionals, forging valuable
                                connections and fostering interdisciplinary
                                collaboration.
                            </ListItem>
                            <ListItem>
                                Present your project to a panel of judges,
                                showcasing your team{"'"}s ingenuity, impact,
                                and potential for social change.
                            </ListItem>
                            <ListItem>
                                Immerse yourself in a supportive and inclusive
                                environment, where every voice is valued, and
                                every contribution matters.
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </Stack>

                <Text
                    fontSize="xl"
                    fontWeight="bold"
                    textAlign="center"
                    py={{ base: "10px", sm: "20px", md: "30px", lg: "40px" }}
                    px={{ base: "10px", sm: "50px", md: "10%", lg: "15%" }}
                >
                    Join us for an unforgettable experience that transcends
                    boundaries, sparks creativity, and drives meaningful change.
                    Together, let{"'"}s harness the power of data and technology
                    to create a more just and equitable world.
                </Text>

                <Box pt="20px" pb="75px" textAlign="center">
                    <Link
                        href="https://docs.google.com/forms/d/e/1FAIpQLScSCnhsT6jqB4WKRe1ngWZjUzhlYGAaqb5ekeV9X5yOFcoT_A/viewform"
                        textDecoration="none"
                        _hover={{ textDecoration: "none" }}
                        isExternal
                    >
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
                            p={{ base: "5px", md: "15px" }}
                            borderRadius="50px"
                            transition="all 0.3s ease"
                            _hover={{
                                bg: "#004da8",
                                color: "white",
                            }}
                        >
                            Sign Up
                        </Text>
                    </Link>
                </Box>

                <Box flexGrow={1} />

                <Footer />
            </Flex>
        </>
    );
};

export default Impactathon;
