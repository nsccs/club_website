import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "../style/index.scss";

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
    Component,
    pageProps,
}) => {
    return (
        <>
            <Head>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/android-chrome-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="512x512"
                    href="/android-chrome-512x512.png"
                />
                <link
                    rel="icon"
                    type="image/x-icon"
                    sizes="16x16 32x32 48x48 128x128 256x256"
                    href="/favicon.ico"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link rel="manifest" href="/site.webmanifest" />

                <meta
                    content="#ffffff"
                    data-react-helmet="true"
                    name="theme-color"
                />

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta charSet="utf-8" />
            </Head>

            <ChakraProvider
                theme={extendTheme({
                    config: {
                        initialColorMode: "light",
                        useSystemColorMode: false,
                    },
                })}
            >
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
};

export default App;
