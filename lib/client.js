require('dotenv').config();
// "require" pg (after `npm i pg`)
const pg = require('pg');
// Use the pg Client
const Client = pg.Client;
// note: you will need to create the database!
const client = new Client({
<<<<<<< HEAD
  connectionString: process.env.DATABASE_URL_DEV,
=======
  connectionString: process.env.DATABASE_URL_MAIN,
>>>>>>> 4dca9721dff3d7b00a29fcf92ea4f8d87c3e9325
  ssl: process.env.PGSSLMODE && { rejectUnauthorized: false }
});

// export the client
module.exports = client;
