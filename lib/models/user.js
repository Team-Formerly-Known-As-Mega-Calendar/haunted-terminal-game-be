const pool = require('../utils/pool');

module.exports = class User {
  id;
  email;
  passwordHash;
  name;

  constructor(row) {
    this.id = row.id;
    this.email = row.email;
    this.passwordHash = row.password_hash;
    this.name = row.name;
  }

  static async insert(user) {
    const { rows } = await pool.query(`
      INSERT INTO users (email, password_hash, name)
      VALUES ($1, $2, $3)
      RETURNING *
      `,
    [user.email, user.passwordHash, user.name]);
    
    return new User(rows[0]);
  }

  toJSON() {
    return {
      id: this.id,
      email: this.email,
      name: this.name
    };
  }
};
