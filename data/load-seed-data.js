const client = require('../lib/client');
const broData = require('./bro')

run();

async function run() {
    try {
        await client.connect();

        await Promise.all(
            broData.map(broStage => {
                return client.query(`
                            INSERT INTO stages (stage_id, message, choices, img, sound)
                            VALUES ($1, $2, $3, $4, $5)
                            RETURNING *;
                        `,
                [broStage.stageId, broStage.message, broStage.choices, broStage.img, broStage.sound])
            })
        );

        console.log('seed data load complete')
    }
    catch(err) {
        console.log(err);
    }
    finally {
        client.end();
    }
}