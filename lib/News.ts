import { HOUR, redisClient } from "./redis";
import { pool } from "./Mariadb";

/** The data needed for a news card. */
export interface NewsCard {
    /** The news item's ID (in the database). */
    id: number;

    /** The date when the news item was posted as a string. */
    date: string;

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

/** Dummy data placeholder to present if no database connected. */
const tempNewsItems = [
    {
        id: 0,
        date: "2023-10-03T02:28:52.000Z",
        title: "The Club Website is Up and Running!",
        description:
          "The CS Club has a brand new website so people can learn about the club and events without needing a Discord account.",
        author: "Jonah Uellenberg",
        content: `# Club Website
The club website is still a work-in-progress, but it's officially complete enough to serve as the club's front page! Currently, the website supports
giving people information about the club, directing them towards joining the Discord server, and showing recent events/news.

## Contributing
There's still a lot that can be added to the website. If you're interested in learning about web development and working on the website with other students, then
stay tuned for a Club Website event. Alternatively, you can view and contribute to the website's source code at https://github.com/nsccs/club_website.`,
    },
];

/**
* Get news rows from database.
* If no database connection has been made and process.env.NODE_ENV is not production
* then provide dummy data so that it does not block development.
* @param count - is the maximum number of entries to return.
*/
export async function getNews(count: number): Promise<NewsItem[]> {
    try {
        const rows = await pool.query("SELECT * FROM news LIMIT ?;", [count]);
        rows.map(row => ({
            date: row["date"].toString(),
            title: row["title"],
            description: row["description"],
            author: row["author"],
            content: row["content"],
        }));
        return rows;
    } catch (err) {
        if (process.env.NODE_ENV === "production") {
            throw err;
        } else {
            console.log("NO DATABASE CONNECTION WILL USE MOCK NEWS ITEMS.");
            console.log("If this is not what you expected inspect your database configuration.");
            return tempNewsItems;
        }
    }
}

/**
 * Gets the data needed to display several news cards.
 * @param count - is the maximum number of entries to return.
 */
export async function getNewsCards(count: number): Promise<NewsItem[] | null> {
    // Try to use cached data.
    const cached = await redisClient.get("cache_news_cards:" + count);
    if (cached) {
        return JSON.parse(cached);
    }
    const news = await getNews(count);
    // Save the data in the cache.
    await redisClient.setex(
      "cache_news_cards:" + count,
      HOUR,
      JSON.stringify(news),
    );
    return news;
}
