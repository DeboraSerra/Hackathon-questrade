import { connection } from "../infra/mysql/configs/connection";
import { createDB, createDbQuery, createTable } from "../infra/mysql/script";
import app from "./config/app";
import env from "./config/env";

connection.execute(createDB);
connection.execute(createTable);

app.listen(env.port, () => console.log("Server is Running!", env.port));
