require('dotenv').config();
const { Pool } = require('pg');

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL,
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: process.env.DB_SSL === 'true' || process.env.DATABASE_URL ? { rejectUnauthorized: false } : undefined,
});
