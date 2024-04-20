import Footer from "@/components/Footer/Footer";

import Link from "next/link";

import ImpactathonBanner from "@/public/img/Impactathon-Banner.png";
import Image from "next/image";
import React from "react";
import { FaCalendar, FaClock, FaLocationDot } from "react-icons/fa6";
import { Box, Flex, Stack } from "@/styled-system/jsx";
import { css } from "@/styled-system/css";
import { getMetadata } from "@/lib/SEO";

export const metadata = getMetadata({
    title: "Impactathon | NSC Computer Science Club",
    url: "https://northcs.org/impactathon",
    description:
        "Get ready for an exhilarating and impactful journey at the Data-Centric Social Justice Hackathon!",
    image: {
        url: ImpactathonBanner.src,
        width: ImpactathonBanner.width,
        height: ImpactathonBanner.height,
        alt: 'An image with text reading "Impactathon 2024".',
        large: true,
    },
});

const iconStyle = css({
    alignSelf: "center",
    fontSize: "25px",
    display: "inline",
});

const Impactathon = () => {
    return (
        <>
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
                <div
                    className={css({
                        display: "flex",
                        pt: "20px",
                        pb: "75px",
                        justifyContent: "center",
                        flexDir: "column",
                        marginX: "15%",
                        "& a": {
                            color: "cyan.500",
                        },
                        "& a:hover": {
                            textDecoration: "underline",
                        },
                        "& h3": { paddingTop: "15px" },
                    })}
                >
                    <h2
                        className={css({
                            fontSize: "3xl",
                        })}
                    >
                        F.A.Q:
                    </h2>
                    <hr />
                    <ul className={css({ fontSize: "xl" })}>
                        <li>
                            <h3>What is a Hackathon?</h3>
                            <p>
                                A hackathon is an event where individuals come
                                together to collaborate on projects, typically
                                related to software development or
                                problem-solving, over a short period of time,
                                usually lasting a day or a weekend.
                            </p>
                        </li>
                        <li>
                            <h3>What is the Impactathon event?</h3>
                            <p>
                                The Impactathon is a two-day hackathon event
                                hosted by the North Seattle College Impactful
                                Investing and Computer Science Clubs that brings
                                together students, professionals, and activists
                                to address pressing social justice issues using
                                data and technology to create solutions.
                            </p>
                        </li>
                        <li>
                            <h3>Who can participate in the Impactathon?</h3>
                            <p>
                                The Impactathon is open to anyone passionate
                                about social justice and technology-driven
                                change. Whether you{"'"}re a student,
                                professional, activist, or community member, you
                                {"'"}re welcome to join us!
                            </p>
                        </li>
                        <li>
                            <h3>Do I need technical skills to participate?</h3>
                            <p>
                                No technical skills are required to participate
                                in the Impactathon. We welcome participants with
                                diverse backgrounds and interests, including
                                coding, design, communication, and activism.
                            </p>
                        </li>
                        <li>
                            <h3>How do I register for the Impactathon?</h3>
                            <p>
                                To register for the Impactathon, simply fill out
                                the
                                <Link href="https://forms.gle/e2HqxdvS8zNVi4aGA">
                                    {" "}
                                    registration form.
                                </Link>
                                Registration is free and open to all interested
                                individuals.
                            </p>
                        </li>
                        <li>
                            <h3>What happens after I register?</h3>
                            <p>
                                After registering for the Impactathon, you{"'"}
                                ll receive a confirmation email with further
                                instructions and details about the event. You
                                {"'"}ll also be added to our mailing list to
                                receive updates and announcements.
                            </p>
                        </li>
                        <li>
                            <h3>Can I participate as part of a team?</h3>
                            <p>
                                Yes, participants are encouraged to form teams
                                of 2-4 individuals. You can either come with a
                                pre-formed team or join a team at the event.
                            </p>
                        </li>
                        <li>
                            <h3>What will I be doing at the Impactathon?</h3>
                            <p>
                                During the Impactathon, participants will
                                collaborate on projects aimed at addressing
                                social justice issues using data and technology.
                                You{"'"}ll have the opportunity to attend
                                workshops, network with industry professionals,
                                and work on hands-on projects.
                            </p>
                        </li>
                        <li>
                            <h3>
                                Will participants be expected to prepare a
                                presentation or demo for their project?{" "}
                            </h3>
                            <p>
                                Yes, participants are expected to prepare either
                                a PowerPoint presentation or a live demo to
                                showcase their project to the judges and other
                                attendees. Presentations should effectively
                                communicate the problem being addressed, the
                                solution developed, and any key features or
                                functionalities of the project. Demos should
                                demonstrate the project{"'"}s functionality and
                                highlight its innovative aspects. Teams will
                                have an opportunity to present their projects
                                during the designated presentation/demo sessions
                                at the hackathon
                            </p>
                        </li>
                        <li>
                            <h3>
                                Is there a fee to participate in the
                                Impactathon?
                            </h3>
                            <p>
                                No, participation in the Impactathon is free of
                                charge and meals will be provided. However, we
                                may offer optional add-ons or merchandise for
                                purchase.
                            </p>
                        </li>
                        <li>
                            <h3>Will there be prizes for winning projects?</h3>
                            <p>
                                Yes, there will be prizes awarded to winning
                                projects at the Impactathon. Prizes may include
                                cash awards and other exciting rewards.
                            </p>
                        </li>
                        <li>
                            <h3>
                                How can I get involved as a mentor or sponsor?
                            </h3>
                            <p>
                                If you{"'"}re interested in volunteering as a
                                mentor or sponsoring the Impactathon, please
                                fill out the mentor{" "}
                                <Link
                                    href={"https://forms.gle/RtPikWQS2dADvzpS6"}
                                >
                                    registration form
                                </Link>
                                . Sponsors please email
                                <Link href="mailto:impactfulinvesting@seattlecollges.edu">
                                    {" "}
                                    impactfulinvesting@seattlecollges.edu
                                </Link>
                            </p>
                        </li>
                        <li>
                            <h3>
                                What can I do to increase my chances of success?
                            </h3>
                            <ol
                                className={css({
                                    listStyle: "upper-roman outside",
                                    width: "90%",
                                    marginX: "auto",
                                    "& li": {
                                        paddingTop: "10px",
                                    },
                                })}
                            >
                                <li>
                                    <p>
                                        Familiarize yourself with relevant
                                        technologies and tools: Take some time
                                        to learn about the programming
                                        languages, frameworks, or software that
                                        might be used during the hackathon. This
                                        will help you contribute effectively to
                                        your team{"'"}s project.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Form or join a team: Hackathons often
                                        involve teamwork, so consider forming or
                                        joining a team with individuals who have
                                        complementary skills and interests.
                                        Collaborating with others can enhance
                                        your creativity and problem-solving
                                        abilities.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Brainstorm ideas: Think about potential
                                        project ideas or problems you{"'"}d like
                                        to address during the hackathon. Come
                                        prepared with a few concepts that you
                                        can discuss with your team and
                                        potentially develop into a project.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Get plenty of rest: Hackathons can be
                                        intense and require a lot of energy and
                                        focus. Make sure to get enough rest
                                        leading up to the event so that you{"'"}
                                        re well-rested and ready to tackle
                                        challenges during the hackathon.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Bring necessary supplies: Pack any
                                        essential items you{"'"}ll need for the
                                        hackathon, such as a laptop, chargers,
                                        notebooks, pens, snacks, and water.
                                        Having everything you need on hand will
                                        help you stay productive throughout the
                                        event.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Stay open-minded and flexible:
                                        Hackathons often involve pivoting and
                                        adapting to new challenges or ideas.
                                        Stay open-minded and be willing to
                                        explore different approaches or
                                        solutions, even if they{"'"}re different
                                        from your initial plans.
                                    </p>
                                </li>
                            </ol>
                        </li>
                    </ul>
                    <hr className={css({ margin: "20px" })} />
                    <p>
                        By following these tips, you{"'"}ll be better prepared
                        to participate in the hackathon and make the most of the
                        experience.
                    </p>
                </div>
                <Box flexGrow={1} />
            </Flex>

            <footer>
                Site hosted on North Seattle College CS Club site ;)
            </footer>
        </>
    );
};

export default Impactathon;
