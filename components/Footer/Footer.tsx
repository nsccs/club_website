import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { IoLogoDiscord } from "react-icons/io5";

const Footer: React.FC<{ whiteBg?: boolean }> = ({ whiteBg }) => {
    return (
        <Flex
            h="75px"
            flexDir="column"
            backgroundColor={whiteBg ? undefined : "#004da8"}
        >
            <Box flexGrow={1} />

            <Flex p="5px">
                <Box h="100%" textAlign="center">
                    <Text fontSize="xl" color={whiteBg ? undefined : "white"}>
                        Questions? Email: nsccs@seattlecolleges.edu
                    </Text>
                </Box>

                <Box flexGrow={1} />

                <Link
                    href="https://discord.gg/PG2re4Zb4h"
                    isExternal
                    _hover={{ textDecoration: "none" }}
                >
                    <Text
                        h="100%"
                        textAlign="center"
                        color={whiteBg ? undefined : "white"}
                        fontSize="xl"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        Discord:{" "}
                        <IoLogoDiscord
                            style={{
                                display: "inline",
                                fontSize: "32px",
                                marginLeft: "6px",
                            }}
                        />
                    </Text>
                </Link>
            </Flex>

            <Box flexGrow={1} />
        </Flex>
    );
};

export default Footer;
