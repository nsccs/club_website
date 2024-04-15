// /**
//  * Creates a simple mock data store for development purposes.
//  * This is API compatible with redisClient for only things actually used
//  * by the website.
//  */
// export class MockRedis {
//     store: Record<string, string> = {};

//     public get(key: string): string {
//         return this.store[key] ?? null;
//     }

//     public setex(key: string, _: never, value: string) {
//         this.store[key] = value;
//     }
// }
