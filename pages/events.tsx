import React from "react";
import { GetServerSideProps } from "next";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header";
import { Heading, SimpleGrid } from "@chakra-ui/react";
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
      <Heading
        as="h2"
        color="#95ca59"
        textShadow="1px 1px #000000"
        textAlign="center"
        size="2xl"
        whiteSpace="nowrap"
        m={20}
      >
        Events
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 1, lg: 3 }} spacing={10} m={20}>
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
      <Footer />
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
