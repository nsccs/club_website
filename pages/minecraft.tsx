import React from "react";
import { GetServerSideProps } from "next";
import { getNewsCards, NewsCard } from "../lib/News";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";

const Minecraft: React.FC<{ news: NewsCard[] }> = ({ news }) => {
    return (
        <>
            <SEO url="https://northcs.org/minecraft" />
            <Header />

            <Footer brightBg={false} bg={"black"} />
        </>
    );
};

export default Minecraft;
