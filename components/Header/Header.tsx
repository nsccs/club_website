import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    HStack,
    IconButton,
    Text,
    useDisclosure,
    VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import headerLogo from "../../public/North_Seattle_College_Logo_2.jpeg";
import React from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

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
        name: "Join The Club!",
        url: "/join",
    },
];

const Header: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box as="header" w="100%">
            <Flex
                as="nav"
                w="100%"
                minH="100px"
                px={{ base: "16px", md: "50px", lg: "100px" }}
                alignItems="center"
                bg="#004da8"
            >
                <Box w={{ base: "50px", md: "75px" }}>
                    <Image src={headerLogo} alt="North Seattle College Logo" />
                </Box>

                <Box flexGrow={1} />

                <HStack
                    display={{ base: "none", md: "initial" }}
                    spacing="40px"
                >
                    {menuItems.map(({ name, url }) => (
                        <Link key={name} href={url}>
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
                        </Link>
                    ))}
                </HStack>

                <Box display={{ base: "initial", md: "none" }}>
                    <IconButton
                        aria-label="Menu"
                        icon={<FaBars />}
                        onClick={onOpen}
                    />
                </Box>
                <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                    <DrawerOverlay />

                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader borderBottomWidth="1px">
                            Menu
                        </DrawerHeader>

                        <DrawerBody>
                            <VStack spacing="30px">
                                {menuItems.map(({ name, url }) => (
                                    <Link key={name} href={url}>
                                        <Text fontSize="1.5em">{name}</Text>
                                    </Link>
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
