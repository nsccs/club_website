import { createPool } from "mariadb";

// Expose the Pool object within this module

export default Object.freeze({
    pool: createPool({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        connectionLimit: 5,
    }),
});
