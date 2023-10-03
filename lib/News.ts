import { getNews } from "./Mariadb";

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

/**
 * Gets the data needed to display several news cards.
 * @param count - is the maximum number of entries to return.
 */
export async function getNewsCards(count: number): Promise<NewsItem[] | null> {
    const news = await getNews(count);
    news.map(row => {
        row.date = row.date.toString();
        return row;
    });
    return news;
}
