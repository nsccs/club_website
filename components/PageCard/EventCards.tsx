import PageCard from "./PageCard";
import { getEventCards } from "../../lib/Event";

export const EventCards = async (): Promise<JSX.Element> => {
    const events = await getEventCards(2);

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
