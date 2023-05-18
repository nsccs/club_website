// Typescript interface defines what the prop passed to Event must look like
interface EventProp {
    id: string;
    title: string;
    description: string;
    eventDate: string;
    createdDate: string;
}

const Event = (prop: EventProp) => {
    // TODO: create this event component!
    // see the wireframe for what this page should look like for inspiration
    return (
        <h3>{prop.title}</h3>
    );
};

export default Event;
