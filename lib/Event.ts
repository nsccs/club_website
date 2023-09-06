/** The data needed for an event card. */
export interface EventCard {
    /** The event item's ID/URL slug (in Bevy). */
    id: string;

    /** The URL of this event's image. */
    image: string | null;

    /** The date when the event item was posted as a unix timestamp. */
    date: number;

    /** The event item's title/headline. */
    title: string;

    /** The event item's description. */
    description: string;
}

/**
 * Gets the data needed to display several event cards.
 * @param count - is the maximum number of entries to return.
 */
export async function getEventCards(count: number): Promise<EventCard[]> {
    // TODO: Implement.
    return [
        {
            id: "example-item",
            image: null,
            date: 1693961460,
            title: "This is an Event Item",
            description: "A sample event item to use.",
        },
        {
            id: "example-item-2",
            image: null,
            date: 1793961460,
            title: "This is a Second Event Item",
            description: "A second sample event item to use.",
        },
    ];
}
