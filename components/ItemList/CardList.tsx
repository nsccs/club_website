import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import PageCard from "../PageCard/PageCard";

/** The data needed for a news card. */
export interface listItem {
    /** The news item's ID (in the database). */
    id: number;

    /** The date when the news item was posted as a string. */
    date: string;

    /** The news item's title/headline. */
    title: string;

    /** The news item's description. */
    description: string;
}

/**
 * A SimpleGrid layout that holds PageCards.
 * Will work with any object that fits the listItem interface.
 * @param listItems {} - list of items to display in grid.
 */
const CardList = ({ listItems }: { listItems: listItem[] }) => {
    return (
        <SimpleGrid columns={{ sm: 1, md: 1, lg: 3 }} spacing={10} m={20}>
            {listItems.map((listItem) => (
                <PageCard
                    key={listItem.id}
                    title={listItem.title}
                    time={new Date(listItem.date)}
                    description={listItem.description}
                    url={"/news/" + listItem.id}
                />
            ))}
        </SimpleGrid>
    );
};
export default CardList;
