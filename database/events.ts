import { pool } from "./db";

/**
 * An event that the club is hosting (or otherwise displaying on the website).
 */
export interface ClubEvent {
    /**
     * A numerical, unique, immutable ID for this event.
     */
    id: number;

    /**
     * The unique URL slug for the event.
     * This is how the event is identified by any site visitors.
     */
    url: string;

    /**
     * The event's title / headline.
     */
    title: string;

    /**
     * A description of the event.
     */
    description: string;

    /**
     * The datetime when the event will begin.
     */
    eventDate: string;

    /**
     * The datetime when the event was created (in the database).
     */
    createdDate: string;
}

// TODO: Realistically shouldn't be used as events might become very large; instead, opt ot sort on the database (such as sorting by event_date in order to facilitate the "up-coming events" page).
/**
 * Looks up and retrieves every event.
 */
export async function selectAllEvents(): Promise<ClubEvent[]> {
    const rows = await pool.query(
        "SELECT id, url, title, description, event_date, created_date FROM events",
    );
    // create the object to return to the view
    return rows.map((row) => ({
        id: row.id,
        url: row.url,
        title: row.title,
        description: row.description,
        createdDate: row.created_date.toString(),
        eventDate: row.event_date.toString(),
    }));
}

/**
 * Creates an event, returning back the event object with its ID.
 * @param event - is the data for the new event.
 */
export async function insertEvent(
    event: Omit<ClubEvent, "id">,
): Promise<ClubEvent> {
    const result = await pool.query(
        "INSERT INTO events (url, title, description, event_date) VALUES (?, ?, ?, ?)",
        [event.url, event.title, event.description, event.eventDate],
    );

    // Return back the full event object, plus the ID.
    return {
        ...event,
        id: Number(result.insertId),
    };
}

// TODO: THIS IS UNTESTED
export async function batchInsertEvents(values: string[][]) {
    let conn;
    try {
        conn = await pool.getConnection();
        // Insert query with parameter placeholders
        const insertQuery =
            "INSERT INTO events (first_name, last_name, email) VALUES ?";
        const result = await conn.batch(insertQuery, values);
        // TODO: create object to return?
        return result;
    } catch (err) {
        console.log(err);
    } finally {
        if (conn) await conn.release();
    }
}

/**
 * Deletes an event by its ID.
 * @param id - is the ID of the event to delete.
 */
export async function deleteEvent(id: string): Promise<void> {
    await pool.query("DELETE FROM events WHERE id = ?", [id]);
}

/**
 * Updates an event's data.
 * @param event - is the new data of the event, as well as the ID of the event to update.
 */
async function updateEvent(event: ClubEvent): Promise<void> {
    await pool.query(
        "UPDATE events SET url=?, title=?, description=?, event_date=? WHERE id = ?",
        [event.url, event.title, event.description, event.eventDate],
    );
}
