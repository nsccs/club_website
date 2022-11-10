import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Box, Flex } from "@chakra-ui/react";

const Index = () => {
    return (
        <Flex>
            <Header />

            <Box flexGrow={1}>{/* <Body /> */}</Box>

            <Footer />
        </Flex>
    );
};

export default Index;
