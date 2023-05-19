import { selectAllEvents } from "../database/events";

// TODO: Complete this page! Take a look at ../components/Event/Event.tsx
// in connection with this piece of work.
export default function Events({ rows }) {
    return (
        <ul>
            {rows.map((clubEvent) => (
                // change this to Event component
                <li key={clubEvent.id}>{clubEvent.title} {clubEvent.eventDate}</li>
            ))}
        </ul>
    );
}

// This function gets called with every request
export async function getServerSideProps() {
    // Calls select function that queries the database
    const rows = await selectAllEvents();
    // When Next.js builds this module jsonData is passed into Events({ rows }) above
    return {
        props: {
            rows,
        },
    };
}
