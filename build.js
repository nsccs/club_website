// eslint-disable-next-line @typescript-eslint/no-var-requires
const ncp = require("ncp").ncp;
ncp.limit = 16;

ncp("public", ".next/standalone/public");
ncp(".next/static", ".next/standalone/.next/static");
