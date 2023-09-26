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
    /** The news item's author (name). */
    author: string;

    /** The text (as markdown) to display on the news item's page. */
    content: string;
}

const tempNewsItems = [
    {
        id: 0,
        date: 1693961460,
        title: "The Club Website is Up and Running!",
        description: "The CS Club has a brand new website so people can learn about the club and events without needing a Discord account.",
        author: "Jonah Uellenberg",
        content: `# Club Website
The club website is still a work-in-progress, but it's officially complete enough to serve as the club's front page! Currently, the website supports
giving people information about the club, directing them towards joining the Discord server, and showing recent events/news.

## Contributing
There's still a lot that can be added to the website. If you're interested in learning about web development and working on the website with other students, then
stay tuned for a Club Website event. Alternatively, you can view and contribute to the website's source code at https://github.com/nsccs/club_website.`,
    }
];

/**
 * Gets a news item, or null if it doesn't exist.
 * @param id - is the ID to look up the news item.
 */
export async function getNewsItem(id: number): Promise<NewsItem | null> {
    // TODO: Implement.
    return tempNewsItems[id] || null;
}

/**
 * Gets the data needed to display several news cards.
 * @param count - is the maximum number of entries to return.
 */
export async function getNewsCards(count: number): Promise<NewsCard[]> {
    // TODO: Implement.
    return tempNewsItems;
}
