import {
    Box,
    Center,
    CircularProgress,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";

const Loading = () => {
    return (
        <>
            <Box
                zIndex={5}
                display="block"
                position="fixed"
                backgroundColor="#FFFFFF"
                width="100vw"
                height="100vh"
            >
                <Center py="45vh">
                    <VStack>
                        <CircularProgress
                            isIndeterminate
                            size="25vmin"
                            alignSelf="center"
                            justifySelf="center"
                        />
                        <Text>Loading</Text>
                    </VStack>
                </Center>
            </Box>
        </>
    );
};

export default Loading;
