import Redis from "ioredis";
import { MockRedis } from "./MockRedis";

export const redisClient =
    process.env.NODE_ENV === "production"
        ? new Redis()
        : (new MockRedis() as unknown as Redis);

export const SECOND = 1;
export const MINUTE = SECOND * 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;
