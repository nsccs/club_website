import db from "./db";

export async function selectAllEvents() {
    let conn;
    try {
        conn = await db.pool.getConnection();
        const rows = await conn.query(
            "SELECT id, title, description, event_date, created_date FROM events",
        );
        // create the object to return to the view
        const result = rows.map((row) => ({
            id: row.id,
            title: row.title,
            description: row.description,
            createdDate: row.created_date.toString(),
            eventDate: row.event_date.toString(),
        }));
        return result;
    } catch (err) {
        console.log(err);
    } finally {
        if (conn) await conn.release();
    }
}

export async function insertEvent(eventId: string, title: string, description: string, eventDate: string) {
    let conn;
    try {
        conn = await db.pool.getConnection();
        // Insert query with parameter placeholders
        const insertQuery =
            "INSERT INTO events (id, title, description, eventDate) VALUES (?, ?, ?, ?)";
        // Insert new customer record using pool.query function
        const result = await conn.query(insertQuery, [
            eventId,
            title,
            description,
            eventDate,
        ]);
        // TODO: result here? what is it?
        return result;
    } catch (err) {
        console.log(err);
    } finally {
        if (conn) await conn.release();
    }
}

// TODO: THIS IS UNTESTED
export async function batchInsertEvents(values: string[][]) {
    let conn;
    try {
        conn = await db.pool.getConnection();
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

export async function deleteEvent(eventId: string) {
    let conn;
    try {
        conn = await db.pool.getConnection();
        // Update contact data
        const result = await db.pool.query("DELETE FROM events WHERE id = ?", [eventId]);
        return result;
    } catch (err) {
        console.log(err);
    } finally {
        if (conn) await conn.release();
    }
}

async function updateEvent(
    eventId: string,
    title: string,
    description: string,
    eventDate: string,
) {
    let conn;
    try {
        // Acquire a connection from the connection pool
        conn = await db.pool.getConnection();
        // Update event data with passed parameters
        const result = await conn.query(
            "UPDATE events SET title = ? description = ? event-date WHERE id = ?",
            [title, description, eventDate, eventId],
        );
        console.log(result);
    } catch (err) {
        console.log(err);
    } finally {
        if (conn) await conn.release();
    }
}