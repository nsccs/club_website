import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const Footer: React.FC = () => {
    return (
        <Flex h="75px" flexDir="column">
            <Box flexGrow={1} />

            <Flex p="5px">
                <Box h="100%" textAlign="center">
                    Questions? Email: nsccs@seattlecolleges.edu
                </Box>

                <Box flexGrow={1} />

                <Box h="100%" textAlign="center">
                    Discord
                </Box>
            </Flex>

            <Box flexGrow={1} />
        </Flex>
    );
};

export default Footer;
