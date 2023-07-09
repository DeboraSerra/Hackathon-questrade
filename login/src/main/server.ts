import { connection } from "../infra/mysql/configs/connection";
import { createDbQuery } from "../infra/mysql/script";
import app from "./config/app";
import env from "./config/env";

connection.query(createDbQuery);

app.listen(env.port, () => console.log("Server is Running!", env.port));
