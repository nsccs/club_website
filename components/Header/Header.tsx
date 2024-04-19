import Image from "next/image";
import headerLogo from "@/public/img/CS_Club_Logo_White.png";

import NextLink from "next/link";
import linkUnderline from "@/style/link-underline.module.scss";

import { css } from "@/styled-system/css";

import MobileHeaderUI from "./MobileHeaderUI";
import React from "react";

const menuItems = [
    {
        name: "Events",
        url: "/events",
    },
    {
        name: "News",
        url: "/news",
    },
    {
        name: "Minecraft",
        url: "/minecraft",
    },
    {
        name: "Game Dev",
        url: "/gamedev",
    },
    {
        name: "Join",
        url: "/join",
    },
];

const Header: React.FC = () => {
    return (
        <header className={css({ w: "100%" })}>
            <nav
                className={css({
                    w: "100%",
                    minH: { base: "75px", sm: "87.5px", md: "100px" },
                    px: { base: "16px", md: "25px", lg: "100px" },
                    alignItems: "center",
                    bg: "CSClubBlue",
                    display: "flex",
                    flexDirection: "row",
                })}
            >
                <div
                    className={css({
                        h: { base: "70px", sm: "82.5px", md: "90px" },
                    })}
                >
                    <NextLink href="/" style={{ height: "inherit" }}>
                        <Image
                            src={headerLogo}
                            alt="North Seattle College CS Club Logo"
                            style={{
                                height: "inherit",
                                objectFit: "scale-down",
                                objectPosition: "left center",
                            }}
                        />
                    </NextLink>
                </div>

                <div style={{ flexGrow: 1 }} />

                <div
                    className={css({
                        display: {
                            base: "none",
                            sm: "none",
                            md: "flex",
                        },
                        gap: "40px",
                        pl: { base: "20px", lg: "5px" },
                    })}
                >
                    {menuItems.map(({ name, url }) => (
                        <NextLink
                            key={name}
                            href={url}
                            className={
                                css({
                                    fontSize: {
                                        base: "1.2em",
                                        sm: "1.3em",
                                        md: "1.4em",
                                        lg: "1.7em",
                                    },
                                    color: "white",
                                }) +
                                " " +
                                linkUnderline.main
                            }
                        >
                            {name}
                        </NextLink>
                    ))}
                </div>
                <MobileHeaderUI menuItems={menuItems} />
            </nav>
        </header>
    );
};

export default Header;
