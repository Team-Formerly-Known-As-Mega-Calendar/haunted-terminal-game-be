const client = require('../lib/client');

// async/await needs to run in a function
run();

async function run() {

  try {
    // initiate connecting to db
    await client.connect();

    // run a query to create tables
    await client.query(`
                        CREATE TABLE users (
                            id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                            email TEXT NOT NULL,
                            password_hash TEXT NOT NULL
                        );
                        
                        CREATE TABLE stages (
                            stage_id TEXT PRIMARY KEY,
                            message TEXT NOT NULL,
                            choices JSONB NOT NULL,
                            img TEXT,
                            sound TEXT
                        );
                `);


    console.log('create tables complete');
  }
  catch(err) {
    // problem? let's see the error...
    console.log(err);
  }
  finally {
    // success or failure, need to close the db connection
    client.end();
  }

}
