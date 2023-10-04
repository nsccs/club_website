import React from "react";
import { GetServerSideProps } from "next";
import CardList from "../components/ItemList/CardList";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header";
import { Heading } from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";
import { EventCard, getEventCards } from "../lib/Event";

/**
 * Events page that displays n events where n is the count passed to getEventCards within getServerSideProps.
 * @param events
 * @constructor
 */
const Events = ({ events }: { events: EventCard[] }) => {
  return (
    <>
      <SEO url="https://northcs.org" />
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
      <CardList listItems={events} />
      <Footer whiteBg />
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
