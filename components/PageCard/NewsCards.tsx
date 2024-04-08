import PageCard from "./PageCard";
import { getNewsCards } from "../../lib/News";

const NewsCards = async (): Promise<JSX.Element> => {
    const news = await getNewsCards(2);

    return (
        <>
            {news
                ? news.map((newsItem) => (
                      <PageCard
                          key={newsItem.id}
                          title={newsItem.title}
                          time={new Date(newsItem.date)}
                          description={newsItem.description}
                          url={"/news/" + newsItem.id}
                      />
                  ))
                : null}
        </>
    );
};

export default NewsCards;
