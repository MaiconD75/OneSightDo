require('dotenv/config');

module.exports = {
  type: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  useUnifiedTopology: true,
  entities: ['./src/app/data/schemas/*.ts'],
};
