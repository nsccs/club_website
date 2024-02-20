import React from "react";
import { GetServerSideProps } from "next";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";
import { EventCard, getEventCards } from "../lib/Event";
import PageCard from "../components/PageCard/PageCard";

/**
 * Events page that displays n events where n is the count passed to getEventCards within getServerSideProps.
 * @param events
 * @constructor
 */
const Events: React.FC<{ events: EventCard[]}> = ({ events }) => {

  return (
    <>
      <SEO url="https://northcs.org/events" />
      <Header />
      <Box mt={0.5} pt={2} pb={2} bg="#95ca59">
        <Heading
          as="h2"
          color="black"
          textAlign="center"
          size="lg"
          whiteSpace="nowrap"
        >
          Events
        </Heading>
      </Box>
      <Box bg="#dff0d8" pt={10} pb={10}>
        <SimpleGrid
          columns={{ sm: 1, md: 1, lg: 2 }}
          spacing={10}
          ml={10}
          mr={10}
        >
          {events.map((listItem) => (
            <PageCard
              key={listItem.slugID}
              title={listItem.title}
              time={new Date(listItem.date)}
              description={listItem.description}
              url={"https://gdsc.community.dev/e/" + listItem.slugID}
            />
          ))}
        </SimpleGrid>
      </Box>
      <Footer brightBg />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (props) => {
  const events = await getEventCards(10);

  return {
    props: {
      events,
    },
  };
};

export default Events;
