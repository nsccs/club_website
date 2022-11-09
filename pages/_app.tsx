import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
    Component,
    pageProps,
}) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta charSet="utf-8" />
            </Head>

            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
};

export default App;
