const pool = require('../utils/pool');

module.exports = class Story {
  storyId;
  name;
  message;
  choices;
  img;
  sound;

  constructor(row) {
    this.storyId = row.story_id;
    this.name = row.name;
    this.message = row.message;
    this.choices = row.choices;
    this.img = row.img;
    this.sound = row.sound;
  }

  static async insert(story) {
    const { rows } = await pool.query(`
    INSERT INTO stories (story_id, name, message, choices, img, sound)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
    `,
    [story.storyId, story.name, story.message, story.choices, story.img, story.sound]);

    return new Story(rows[0]);
  }
};
