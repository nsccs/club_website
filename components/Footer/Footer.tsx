import React from "react";
import { IoLogoDiscord } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import { flex } from "../../styled-system/patterns";
import { Box, styled } from "../../styled-system/jsx";
import { css } from "../../styled-system/css";

/**
 * The footer, used on all pages.
 * @param brightBg - is whether or not the bg is set to bright.
 *                   If bg is not set but this is true, the bg will be white.
 * @param bg - is the background color. Ensure that you set the corresponding value for brightBg.
 */
const Footer: React.FC<{ brightBg?: boolean; bg?: string }> = ({
    brightBg,
    bg,
}) => {
    // If bg is specified, use it, otherwise if it's a bright bg, use white by default, otherwise the default color.
    const bgColor = bg ? bg : brightBg ? "white" : "#004da8";
    // Use black (undefined) if the background is bright, otherwise use white.
    const textColor = brightBg ? undefined : "white";

    return (
        <div
            className={flex({
                direction: "column",
                h: "75px",
                backgroundColor: bgColor,
            })}
        >
            <Box flexGrow={1} />

            <div className={css({ p: "5px" })}>
                <Box h="100%" textAlign="center">
                    <styled.p fontSize="xl" color={textColor}>
                        Questions? Email: csclub.north@seattlecolleges.edu
                    </styled.p>
                </Box>

                <div className={css({ flexGrow: 1 })} />

                <a
                    href="https://discord.gg/PG2re4Zb4h"
                    target="_blank"
                    className={css({ _hover: { textDecoration: "none" } })}
                >
                    <styled.p
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
                    </styled.p>
                </a>
                <a
                    href="https://github.com/nsccs"
                    target="_blank"
                    className={css({ _hover: { textDecoration: "none" } })}
                >
                    <styled.p
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
                    </styled.p>
                </a>
            </div>

            <div className={css({ flexGrow: 1 })} />
        </div>
    );
};

export default Footer;
