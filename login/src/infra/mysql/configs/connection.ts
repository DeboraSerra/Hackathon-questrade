import mysql2 from "mysql2/promise";
import env from "../../../main/config/env";

export const connection = mysql2.createPool({
  host: env.db_host,
  user: env.db_user,
  password: env.db_pass,
  port: Number(env.db_port)
});
