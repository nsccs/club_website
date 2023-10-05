import React from "react";
import { GetServerSideProps } from "next";
import { getNewsCards, NewsCard } from "../lib/News";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";
import PageCard from "../components/PageCard/PageCard";

/**
 * Events page that displays n events where n is the count passed to getNewsCards within getServerSideProps.
 * @param news
 * @constructor
 */
const News: React.FC<{ news: NewsCard[]}> = ({ news }) => {
    return (
        <>
            <SEO url="https://northcs.org/news" />
            <Header />
            <Heading
                as="h2"
                color="#95ca59"
                textShadow="1px 1px #000000"
                textAlign="center"
                size="2xl"
                whiteSpace="nowrap"
                m={20}
            >
                News
            </Heading>
            <SimpleGrid columns={{ sm: 1, md: 1, lg: 3 }} spacing={10} m={20}>
              {news.map((listItem) => (
                <PageCard
                  key={listItem.id}
                  title={listItem.title}
                  time={new Date(listItem.date)}
                  description={listItem.description}
                  url={"/news/" + listItem.id}
                />
              ))}
            </SimpleGrid>
            <Footer />
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (props) => {
    const news = await getNewsCards(10);

    return {
        props: {
            news,
        },
    };
};

export default News;
