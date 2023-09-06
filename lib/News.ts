/** The data needed for a news card. */
export interface NewsCard {
    /** The news item's ID (in the database). */
    id: number;

    /** The date when the news item was posted as a unix timestamp. */
    date: number;

    /** The news item's title/headline. */
    title: string;

    /** The news item's description. */
    description: string;
}

/** The data needed for a full news page. */
export interface NewsItem extends NewsCard {
    // TODO: News author.

    /** The text (as markdown) to display on the news item's page. */
    content: string;
}

/**
 * Gets a news item, or null if it doesn't exist.
 * @param id - is the ID to look up the news item.
 */
export async function getNewsItem(id: number): Promise<NewsItem | null> {
    // TODO: Implement.
    return {
        id: 0,
        date: 1693961460,
        title: "This is a News Item",
        description: "A sample news item to use.",
        content: "# News Item\nWith **markdown** support!",
    };
}

/**
 * Gets the data needed to display several news cards.
 * @param count - is the maximum number of entries to return.
 */
export async function getNewsCards(count: number): Promise<NewsCard[]> {
    // TODO: Implement.
    return [
        {
            id: 0,
            date: 1693961460,
            title: "This is a News Item",
            description: "A sample news item to use.",
        },
        {
            id: 0,
            date: 1793961460,
            title: "This is a Second News Item",
            description: "A second sample news item to use.",
        },
    ];
}
