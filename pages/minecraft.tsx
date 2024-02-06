import React from "react";
import { GetServerSideProps } from "next";
import { getNewsCards, NewsCard } from "../lib/News";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";

const Minecraft: React.FC<{ news: NewsCard[]}> = ({ news }) => {

    return (
        <>
            <SEO url="https://northcs.org/minecraft" />
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
                {/*Add cool showcase of player builds*/}
              <SimpleGrid
                columns={{ sm: 1, md: 1, lg: 2 }}
                spacing={10}
                ml={ 10 }
                mr={ 10 }
              >
                
              </SimpleGrid>
            </Box>
            <Footer brightBg={false, "black"}  />
        </>
    );
};

export default Minecraft;