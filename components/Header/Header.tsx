import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    Flex,
    HStack,
    Text,
    useDisclosure,
    VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import headerLogo from "../../img/CS_Club_Logo_White.png";
import React, { useRef } from "react";
import NextLink from "next/link";
import linkUnderline from "../../style/link-underline.module.scss";
import { FaBars } from "react-icons/fa";

const menuItems = [
    {
        name: "Home",
        url: "/",
    },
    {
        name: "Resources",
        url: "/resources",
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
        name: "Join",
        url: "/join",
    },
];

const Header: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const headerRef = useRef<HTMLDivElement>(null);

    return (
        <Box as="header" w="100%" ref={headerRef}>
            <Flex
                as="nav"
                w="100%"
                minH={{ base: "75px", sm: "87.5px", md: "100px" }}
                px={{ base: "16px", md: "25px", lg: "100px" }}
                alignItems="center"
                bg="#004da8"
            >
                <Box h={{ base: "70px", sm: "82.5px", md: "90px" }}>
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
                </Box>

                <Box flexGrow={1} />

                <HStack
                    display={{ base: "none", md: "inherit" }}
                    spacing="40px"
                    pl={{ base: "20px", lg: "5px" }}
                >
                    {menuItems.map(({ name, url }) => (
                        <NextLink
                            key={name}
                            href={url}
                            className={linkUnderline.main}
                        >
                            <Text
                                as="span"
                                fontSize={{
                                    base: "1.2em",
                                    sm: "1.3em",
                                    md: "1.4em",
                                    lg: "1.7em",
                                }}
                                color="white"
                            >
                                {name}
                            </Text>
                        </NextLink>
                    ))}
                </HStack>

                <Box display={{ base: "initial", md: "none" }} pl="20px">
                    <Button onClick={onOpen} bg="#95ca59" borderRadius="3px">
                        <FaBars />
                    </Button>
                </Box>
                <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                    <DrawerOverlay />

                    <DrawerContent>
                        <DrawerCloseButton
                            right="initial"
                            top={
                                // The button is 32px in length.
                                ((headerRef.current?.clientHeight || 0) - 32) /
                                    2 +
                                "px"
                            }
                            left="20px"
                            color="white"
                            fontSize="20px"
                        />

                        <DrawerBody p="initial">
                            <Box
                                w="100%"
                                h={headerRef.current?.clientHeight || 0}
                                bg="#004da8"
                            />

                            <VStack spacing="30px" p="20px">
                                {menuItems.map(({ name, url }) => (
                                    <NextLink
                                        style={{ width: "100%" }}
                                        key={name}
                                        href={url}
                                    >
                                        <Text fontSize="1.5em" color="#004da8">
                                            {name}
                                        </Text>
                                    </NextLink>
                                ))}
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Flex>
        </Box>
    );
};

export default Header;
