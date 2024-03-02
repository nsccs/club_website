"use client";
import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";

import "../style/index.scss";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body>
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
            </body>
        </html>
    );
}
