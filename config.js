
require('dotenv').config();



module.exports = {
  database: process.env.PGNAME,
  user: process.env.PGUSER,
  password: process.env.PGPASS,
  host: process.env.PGHOST,
  port: 5432,
  ssl: false,
  max: 10,
};
