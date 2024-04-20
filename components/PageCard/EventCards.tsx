import PageCard from "./PageCard";
import { getEventCards } from "@/lib/Event";

/**
 * Get the upcoming events as PageCard components
 *
 * @param {number} [numOfCards] amount of cards you want, if null will give you all the events
 * @returns  {Promise<JSX.Element>} All the page cards requested as PageCard components
 */
const EventCards: React.FC<{ numOfCards?: number }> = async ({
    numOfCards,
}): Promise<JSX.Element> => {
    const events = await getEventCards(numOfCards);

    return (
        <>
            {events.map((eventItem) => (
                // TODO: Use event images.
                <PageCard
                    key={eventItem.slugID}
                    title={eventItem.title}
                    time={new Date(eventItem.date)}
                    description={eventItem.description}
                    url={"https://gdsc.community.dev/e/" + eventItem.slugID}
                />
            ))}
        </>
    );
};
export default EventCards;
