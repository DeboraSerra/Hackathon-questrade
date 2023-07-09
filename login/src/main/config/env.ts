import 'dotenv/config';

export default {
  db_user: process.env.DB_USER,
  db_host: process.env.DB_HOST,
  db_port: process.env.DB_PORT,
  db_pass: process.env.DB_PASS,
  port: process.env.APP_PORT,
  jwt_secret: process.env.JWT_SECRET,
}
