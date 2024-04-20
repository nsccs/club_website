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

/** Dummy data placeholder to p sent if no database connected. */
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
    } as NewsItem,
];

// // code used for testing
// interface GetActivityData {
//     activity: string;
//     accessibility: number;
//     type: string;
//     participants: bigint;
//     price: number;
//     link: string;
//     key: number;

// }

/**
 * Get news rows from database.
 * If no database connection has been made and process.env.NODE_ENV is not production
 * then provide dummy data so that it does not block development.
 * @param count - is the maximum number of entries to return.
 */
export async function getNews(count: number): Promise<NewsItem[]> {
    // // Testing code
    // const tempNewsClone = [...tempNewsItems];

    // const curDate = new Date().toISOString();

    // const randActivity = await fetch("http://www.boredapi.com/api/activity/", { next:{ revalidate: 20 } })
    // .then((res) => res.json())
    // .then((data: GetActivityData) => {
    //     return({
    //         id: data.key,
    //         date: curDate.toString(),
    //         title: data.activity,
    //         description: "Accessibility: " + data.accessibility + "\n Price: " + data.price,
    //         author: "Bored API",
    //         content: "Accessibility: " + data.accessibility + "\n Price: " + data.price,
    //     } as NewsItem);
    // });

    // tempNewsClone.push(randActivity);
    // return tempNewsClone;

    if (process.env.NODE_ENV === "production") {
        // TODO: Add actual news database
        return tempNewsItems;
    } else {
        console.log("NO DATABASE CONNECTION WILL USE MOCK NEWS ITEMS.");
        console.log(
            "If this is not what you expected inspect your database configuration.",
        );
        return tempNewsItems;
    }
}

/**
 * Gets the data needed to display several news cards.
 * @param count - is the maximum number of entries to return.
 */
export async function getNewsCards(count: number): Promise<NewsItem[] | null> {
    const news = await getNews(count);

    return news;
}
