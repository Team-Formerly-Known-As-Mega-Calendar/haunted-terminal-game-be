const User = require('../models/user');
const bcrypt = require('bcryptjs');

const create = async ({ email, password }) => {
  const passwordHash = await bcrypt.hash(password, 3);
  return User.insert({ email, passwordHash });
};

const authorize = async ({ email, password }) => {
  const user = await User.findByEmail(email);
  if (!user) throw new Error('Invalid email/password');

  const passwordsMatch = await bcrypt.compare(password, user.passwordHash);
  if (!passwordsMatch) throw new Error('Invalid email/password');

  return user;
};

module.exports = {
  create,
  authorize
};
