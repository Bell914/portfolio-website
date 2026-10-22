const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/photo_caption_contest', {
  logging: false,
  dialect: 'postgres'
});

const User = sequelize.define('User', {
  email: { type: Sequelize.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
  passwordHash: { type: Sequelize.STRING, allowNull: false }
});

const Image = sequelize.define('Image', {
  url: { type: Sequelize.STRING, allowNull: false }
});

const Caption = sequelize.define('Caption', {
  text: { type: Sequelize.STRING, allowNull: false }
});

User.hasMany(Caption);
Image.hasMany(Caption);
Caption.belongsTo(User);
Caption.belongsTo(Image);

module.exports = { sequelize, User, Image, Caption };
