import Image from "next/image";
import headerLogo from "../../public/img/CS_Club_Logo_White.png";
import React, { useRef, useState } from "react";
import NextLink from "next/link";
import linkUnderline from "../../style/link-underline.module.scss";
import { FaBars } from "react-icons/fa";
import { HStack, VStack, styled } from "../../styled-system/jsx";
import { css } from "../../styled-system/css";
import { Menu, Presence } from "@ark-ui/react";

const menuItems = [
    {
        name: "Home",
        url: "/",
    },
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
    // const headerRef = useRef<HTMLDivElement>(null);

    return (
        <header className={css({ w: "100%" })}>
            <styled.nav
                w="100%"
                minH={{ base: "75px", sm: "87.5px", md: "100px" }}
                px={{ base: "16px", md: "25px", lg: "100px" }}
                alignItems="center"
                bg="#004da8"
                display="flex"
                flexDirection="row"
            >
                <styled.div h={{ base: "70px", sm: "82.5px", md: "90px" }}>
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
                </styled.div>

                <styled.div flexGrow={1} />

                <HStack
                    display={{ base: "none", md: "inherit" }}
                    gap="40px"
                    pl={{ base: "20px", lg: "5px" }}
                >
                    {menuItems.map(({ name, url }) => (
                        <NextLink
                            key={name}
                            href={url}
                            className={linkUnderline.main}
                        >
                            <styled.span
                                fontSize={{
                                    base: "1.2em",
                                    sm: "1.3em",
                                    md: "1.4em",
                                    lg: "1.7em",
                                }}
                                color="white"
                            >
                                {name}
                            </styled.span>
                        </NextLink>
                    ))}
                </HStack>

                {/* <styled.div display={{ base: "initial", md: "none" }} pl="20px">
                    <button
                        onClick={() => setPresent(!present)}
                        className={css({ bg: "#95ca59", borderRadius: "3px" })}
                    >
                        <FaBars />
                    </button>
                </styled.div> */}
                <Menu.Root>
                    <Menu.Trigger asChild>
                        <FaBars />
                    </Menu.Trigger>
                    <Menu.Positioner>
                        <Menu.Content>
                            {menuItems.map(({ name, url }) => (
                                <Menu.Item id={name} key={name}>
                                    <NextLink
                                        style={{ width: "100%" }}
                                        key={name}
                                        href={url}
                                    >
                                        <styled.p
                                            fontSize="1.5em"
                                            color="#004da8"
                                        >
                                            {name}
                                        </styled.p>
                                    </NextLink>
                                </Menu.Item>
                            ))}
                        </Menu.Content>
                    </Menu.Positioner>
                </Menu.Root>
            </styled.nav>
        </header>
    );
};

export default Header;
