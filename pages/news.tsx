import React from "react";
import { GetServerSideProps } from "next";
import { getNewsCards, NewsCard } from "../lib/News";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
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
            <Box mt={0.5} pt={2} pb={2} bg="#95ca59">
              <Heading
                  as="h2"
                  color="#black"
                  textAlign="center"
                  size="lg"
                  whiteSpace="nowrap"
              >
                  News
              </Heading>
            </Box>
            <Box bg="#dff0d8" pt={10} pb={10}>
              <SimpleGrid
                columns={{ sm: 1, md: 1, lg: 2 }}
                spacing={10}
                ml={ 10 }
                mr={ 10 }
              >
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
            </Box>
            <Footer whiteBg />
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