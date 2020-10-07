const client = require('../lib/client');
const broData = require('./bro');
const domData = require('./dom');
const soulData = require('./soul');
const endData = require('./end');

run();

async function run() {
  try {
    await client.connect();

    const stages = broData.concat(domData, soulData, endData);

    await Promise.all(
      stages.map(stage => {
        return client.query(`
                            INSERT INTO stages (stage_id, message, choices, img, sound)
                            VALUES ($1, $2, $3, $4, $5)
                            RETURNING *;
                        `,
        [stage.stageId, stage.message, stage.choices, stage.img, stage.sound]);
      })
    );

    console.log('seed data load complete');
  }
  catch(err) {
    console.log(err);
  }
  finally {
    client.end();
  }
}
