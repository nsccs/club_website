import React from "react";
import { Flex } from "@chakra-ui/react";

const Footer: React.FC = () => {
    return (
        <Flex flexDir="column">
            <Box h="100%" textAlign="center">
                Questions? Email: nsccs@seattlecolleges.edu
            </Box>
            
            <Box flexGrow={1} />
            
            <Box h="100%" textAlign="center">
                Discord
            </Box>
        </Flex>
    );
};

export default Footer;
