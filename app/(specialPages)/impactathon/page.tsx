import Footer from "components/Footer/Footer";
// import SEO from "../../components/SEO/SEO";

import Link from "next/link";

import ImpactathonBanner from "/public/img/Impactathon-Banner.png";
import Image from "next/image";
import React from "react";
import { FaCalendar, FaClock, FaLocationDot } from "react-icons/fa6";
import { Box, Flex, Stack } from "../../../styled-system/jsx";
import { css } from "../../../styled-system/css";

const iconStyle = css({
    alignSelf: "center",
    fontSize: "25px",
    display: "inline",
});

const Impactathon = () => {
    return (
        <>
            {/* <SEO
                title="Impactathon | NSC Computer Science Club"
                url="https://northcs.org/impactathon"
                description="Get ready for an exhilarating and impactful journey at the Data-Centric Social Justice Hackathon!"
                image={{
                    url: ImpactathonBanner.src,
                    width: ImpactathonBanner.width,
                    height: ImpactathonBanner.height,
                    alt: 'An image with p reading "Impactathon 2024".',
                    large: true,
                }}
            /> */}

            <Flex flexDir="column" minW="100%" minH="100%">
                <Box
                    width="100%"
                    maxHeight={{ base: "400px", md: "500px" }}
                    overflow="hidden"
                >
                    <Image
                        className={css({ w: "100%" })}
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
                        // pAlign={{ base: "center", md: "left" }}
                    >
                        <h1>Spring 2024 Impactathon</h1>
                        <p className={css({ fontSize: "xl" })}>
                            Get ready for an exhilarating and impactful journey
                            at the Data-Centric Social Justice Hackathon!
                        </p>
                        <p className={css({ fontSize: "xl", pt: "20px" })}>
                            Taking place at the dynamic venue of the Grove on
                            the North Seattle College campus from April 20th to
                            April 21st, this event unites students, innovators,
                            and advocates from diverse backgrounds to tackle
                            social justice issues through the power of data and
                            technology. Participants will collaborate on
                            projects aimed at addressing systemic disparities,
                            championing fairness, and igniting positive
                            transformation within our communities.
                        </p>
                        <p className={css({ fontSize: "xl", pt: "20px" })}>
                            Whether you{"'"}re a coding virtuoso, data
                            aficionado, design guru, or passionate activist,
                            there{"'"}s a pivotal role awaiting you at our
                            Hackathon. Join our community of participants and
                            become a catalyst for change, leveraging your unique
                            talents to drive impactful solutions and leave an
                            enduring mark on the world.
                        </p>
                    </Box>
                    <hr
                        className={css({
                            display: { base: "none", md: "initial" },
                            margin: 0,
                            height: "auto",
                            opacity: 0.6,
                            color: "gray.500",
                            borderWidth: "0px 0px 0px 1px",
                            borderColor: "gray.500",
                            borderStyle: "solid",
                            boxSizing: "content-box",
                        })}
                    />
                    <Box w={{ base: "100%", md: "30%" }} p="20px">
                        <Box display="flex">
                            <FaLocationDot className={iconStyle} />
                            <Box pl="5px">
                                <p>9600 College Way N, Seattle, WA 98103</p>
                            </Box>
                        </Box>

                        <Box display="flex" pt="40px">
                            <FaCalendar className={iconStyle} />
                            <Box pl="5px">
                                <p>4/20/2024 and 4/21/2024</p>
                            </Box>
                        </Box>

                        <Box display="flex" pt="40px">
                            <FaClock className={iconStyle} />
                            <Box pl="5px">
                                <p>9 AM to 7 PM</p>
                            </Box>
                        </Box>

                        <hr
                            className={css({
                                pt: "30px",
                                color: "gray.500",
                                opacity: 0.6,
                                borderTopWidth: "0px",
                                borderBottomWidth: "1px",
                                borderColor: "gray.500",
                                borderStyle: "solid",
                                boxSizing: "content-box",
                            })}
                        />

                        <h2
                            className={css({
                                fontSize: "xl",
                                pt: "30px",
                            })}
                        >
                            Team Sizes
                        </h2>

                        <ul className={css({ pt: "20px" })}>
                            <li>2-4 people per team</li>
                            <li>Opportunity to form teams at the event</li>
                            <li>
                                Flexibility for participants to join pre-formed
                                teams or create new ones onsite
                            </li>
                        </ul>

                        <Flex pt="30px" justifyContent="center">
                            <Link
                                href="https://docs.google.com/forms/d/e/1FAIpQLScSCnhsT6jqB4WKRe1ngWZjUzhlYGAaqb5ekeV9X5yOFcoT_A/viewform"
                                className={css({
                                    alignSelf: "center",
                                    textDecoration: "none",
                                    _hover: { textDecoration: "none" },
                                })}
                                target="_blank"
                            >
                                <span
                                    className={css({
                                        fontSize: {
                                            base: "1.5em",
                                            md: "1.6em",
                                            lg: "1.7em",
                                        },
                                        color: "black",
                                        bg: "#95ca59",
                                        p: { base: "5px", md: "15px" },
                                        borderRadius: "50px",
                                        transition: "all 0.3s ease",
                                        _hover: {
                                            bg: "#004da8",
                                            color: "white",
                                        },
                                    })}
                                >
                                    Sign Up
                                </span>
                            </Link>
                        </Flex>
                    </Box>
                </Stack>
                <Stack
                    direction={{ base: "column", md: "row" }}
                    py={{ base: "10px", sm: "20px", md: "30px", lg: "40px" }}
                    px={{ base: "10px", sm: "50px", md: "10%", lg: "15%" }}
                >
                    <Box w={{ base: "100%", md: "50%" }}>
                        <h2
                            className={css({
                                fontSize: "3xl",
                                textAlign: "center",
                            })}
                        >
                            About Participants
                        </h2>
                        <ul className={css({ fontSize: "xl" })}>
                            <li>
                                Enthusiastic individuals committed to social
                                justice and technology-driven change
                            </li>
                            <li>
                                Diverse backgrounds and interests welcome, from
                                coding wizards to communicators
                            </li>
                            <li>
                                Problem-solving, collaboration, or creativity
                                skills desired
                            </li>
                            <li>Passion for social justice essential</li>
                            <li>
                                Interest in leveraging data and technology to
                                drive positive change
                            </li>
                            <li>
                                Prior experience with data science or
                                application development beneficial but not
                                required
                            </li>
                            <li>
                                All skill levels welcome, from beginners to
                                experts
                            </li>
                            <li>
                                Willingness to learn, collaborate, and
                                contribute to meaningful projects
                            </li>
                            <li>
                                Example tech stacks: Python for data analysis,
                                JavaScript for web development, SQL for database
                                management
                            </li>
                            <li>
                                Participants encouraged to use tools they{"'"}re
                                comfortable with and explore new ones throughout
                                the event
                            </li>
                        </ul>
                    </Box>
                    <Box w={{ base: "0%", md: "50px" }} />
                    <Box w={{ base: "100%", md: "50%" }}>
                        <h2
                            className={css({
                                fontSize: "3xl",
                                textAlign: "center",
                            })}
                        >
                            What{"'"}s Involved
                        </h2>
                        <ul className={css({ fontSize: "xl" })}>
                            <li>
                                Engage in collaborative project work, addressing
                                real-world social justice challenges through
                                innovative data-driven solutions.
                            </li>
                            <li>
                                Participate in workshops, brainstorming
                                sessions, and skill-building exercises to
                                enhance your knowledge and expertise.
                            </li>
                            <li>
                                Network with fellow participants, mentors, and
                                industry professionals, forging valuable
                                connections and fostering interdisciplinary
                                collaboration.
                            </li>
                            <li>
                                Present your project to a panel of judges,
                                showcasing your team{"'"}s ingenuity, impact,
                                and potential for social change.
                            </li>
                            <li>
                                Immerse yourself in a supportive and inclusive
                                environment, where every voice is valued, and
                                every contribution matters.
                            </li>
                        </ul>
                    </Box>
                </Stack>
                <p
                    className={css({
                        fontSize: "xl",
                        fontWeight: "bold",
                        textAlign: "center",
                        py: {
                            base: "10px",
                            sm: "20px",
                            md: "30px",
                            lg: "40px",
                        },
                        px: { base: "10px", sm: "50px", md: "10%", lg: "15%" },
                    })}
                >
                    Join us for an unforgettable experience that transcends
                    boundaries, sparks creativity, and drives meaningful change.
                    Together, let{"'"}s harness the power of data and technology
                    to create a more just and equitable world.
                </p>
                <Flex pt="20px" pb="75px" justifyContent="center">
                    <Link
                        href="https://docs.google.com/forms/d/e/1FAIpQLScSCnhsT6jqB4WKRe1ngWZjUzhlYGAaqb5ekeV9X5yOFcoT_A/viewform"
                        className={css({
                            textDecoration: "none",
                            _hover: { textDecoration: "none" },
                        })}
                        target="_blank"
                    >
                        <span
                            className={css({
                                fontSize: {
                                    base: "1.5em",
                                    sm: "1.8em",
                                    md: "2.1em",
                                    lg: "2.4em",
                                },
                                color: "black",
                                bg: "#95ca59",
                                p: { base: "5px", md: "15px" },
                                borderRadius: "50px",
                                transition: "all 0.3s ease",
                                _hover: {
                                    bg: "#004da8",
                                    color: "white",
                                },
                            })}
                        >
                            Sign Up
                        </span>
                    </Link>
                </Flex>
                <Box flexGrow={1} />
            </Flex>
            <footer>
                Site hosted on North Seattle College CS Club site ;)
            </footer>
        </>
    );
};

export default Impactathon;
