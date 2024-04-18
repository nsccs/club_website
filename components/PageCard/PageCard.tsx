import React from "react";

import { styled } from "@/styled-system/jsx";
import Link from "next/link";
import { css } from "@/styled-system/css";

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
        <styled.div
            w="100%"
            bg="white"
            borderRadius={{ base: "40px", sm: "60px", md: "80px", lg: "100px" }}
            flexDir="column"
            px="7.5%"
            py="7.5%"
            boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        >
            <styled.span
                color="black"
                fontSize={{ base: "md", sm: "lg", md: "lg", lg: "2xl" }}
                fontStyle="italic"
                whiteSpace="nowrap"
            >
                {time.toLocaleString("default", {
                    month: "long",
                    day: "numeric",
                    // Show years only if the date refers to a future year.
                    year:
                        new Date().getFullYear() === time.getFullYear()
                            ? undefined
                            : "numeric",
                })}
            </styled.span>

            <styled.h3
                color="black"
                paddingTop="20px"
                paddingBottom="30px"
                textAlign="left"
                fontWeight="bold"
            >
                {title}
            </styled.h3>

            <p
                className={css({
                    fontSize: { base: "lg", md: "xl", lg: "2xl" },
                    display: "-webkit-box",
                    overflow: "hidden",
                    lineClamp: "2",
                    boxSizing: "border-box",
                    textOverflow: "ellipsis",
                    wordWrap: "break-word",
                })}
            >
                {description}
            </p>
            <div className={css({ marginTop: "30px" })}>
                <Link
                    href={url}
                    className={css({
                        textDecoration: "none",
                        float: "right",
                    })}
                >
                    <span
                        className={css({
                            fontSize: { base: "lg", md: "xl", lg: "2xl" },
                            color: "black",
                            bg: "#95ca59",
                            py: { base: "10px", md: "12px" },
                            px: { base: "25px", md: "15px" },
                            borderRadius: "10px",
                            transition: "all 0.3s ease",
                            _hover: {
                                bg: "CSClubBlue",
                                color: "white",
                            },
                        })}
                    >
                        View
                    </span>
                </Link>
            </div>
        </styled.div>
    );
};

export default PageCard;
