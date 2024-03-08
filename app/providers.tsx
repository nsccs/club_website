"use client";
import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ChakraBaseProvider
            theme={extendTheme({
                config: {
                    initialColorMode: "light",
                    useSystemColorMode: false,
                },
            })}
        >
            {children}
        </ChakraBaseProvider>
    );
};
export default Providers;
