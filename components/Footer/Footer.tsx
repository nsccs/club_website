import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { IoLogoDiscord } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";

/**
 * The footer, used on all pages.
 * @param brightBg - is whether or not the bg is set to bright.
 *                   If bg is not set but this is true, the bg will be white.
 * @param bg - is the background color. Ensure that you set the corresponding value for brightBg.
 */
const Footer: React.FC<{ brightBg?: boolean, bg?: string; }> = ({ brightBg, bg }) => {
    // If bg is specified, use it, otherwise if it's a bright bg, use white by default, otherwise the default color.
    const bgColor = bg ? bg : (brightBg ? "white" : "#004da8");
    // Use black (undefined) if the background is bright, otherwise use white.
    const textColor = brightBg ? undefined : "white";

    return (
        <Flex
            h="75px"
            flexDir="column"
            backgroundColor={bgColor}
        >
            <Box flexGrow={1} />

            <Flex p="5px">
                <Box h="100%" textAlign="center">
                    <Text fontSize="xl" color={textColor}>
                        Questions? Email: csclub.north@seattlecolleges.edu
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
                        color={textColor}
                        fontSize="xl"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <IoLogoDiscord
                            style={{
                                display: "inline",
                                fontSize: "32px",
                                marginLeft: "6px",
                            }}
                        />
                    </Text>
                </Link>
                <Link
                  href="https://github.com/nsccs"
                  isExternal
                  _hover={{ textDecoration: "none" }}
                >
                    <Text
                      h="100%"
                      textAlign="center"
                      color={textColor}
                      fontSize="xl"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                        <FaGithubSquare
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
