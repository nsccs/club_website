import mariadb from "mariadb";
import { NewsItem } from "./News";

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

const pool = mariadb.createPool({
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: parseInt(process.env.DB_PORT),
  password: process.env.DB_PASSWORD,
  connectionLimit: 5,
  allowPublicKeyRetrieval: true,
});
export async function getNews(count: number): Promise<NewsItem[]> {
  let conn;
  let rows;
  try {
    conn = await pool.getConnection();
    rows = await conn.query("SELECT * FROM news LIMIT ?;", [count]);
  } catch (err) {
    if (process.env.NODE_ENV === "production") {
      return null;
    } else {
      console.log("NO DATABASE CONNECTION WILL USE MOCK NEWS ITEMS.");
      console.log("If this is not what you expected inspect your database configuration.");
      return tempNewsItems;
    }
  } finally {
    if (conn) {
      conn.end();
    }
  }
  return rows;
}