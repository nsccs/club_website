import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import headerLogo from "../public/North_Seattle_College_Logo_2.jpeg";
import HeroImage from "./HeroImage";

const Header = () => {
    return (
        <Flex
            flexDir="column"
            h="100px"
            fontSize={{ base: "md", sm: "lg" }}
            bg="blue"
        >
            {/* Box and not show because we want the image for SEO. */}
            <Box display={{ base: null, sm: "none" }}>
                <HeroImage />
            </Box>

            <Flex flexDir="row" fontSize={{ base: "1.4em", sm: "1.8vw" }}>
                <Image src={headerLogo} alt="North Seattle College Logo" />

                <Box>
                    <Box>North Seattle College</Box>
                    <Box>Computer Science Club</Box>
                </Box>

                <Box>Home</Box>
                <Box>Resources</Box>
                <Box>Events</Box>
                <Box>News</Box>
                <Box>Join The Club!</Box>
            </Flex>
        </Flex>
    );
};

export default Header;
