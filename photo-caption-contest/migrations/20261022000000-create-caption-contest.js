module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      email: { type: Sequelize.STRING, allowNull: false, unique: true },
      passwordHash: { type: Sequelize.STRING, allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false }
    });
    await queryInterface.createTable('Images', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      url: { type: Sequelize.STRING, allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false }
    });
    const now = new Date();
    await queryInterface.bulkInsert('Images', [1, 2, 3, 4].map((id) => ({
      url: `/images/contest-${id}.jpg`, createdAt: now, updatedAt: now
    })));
    await queryInterface.createTable('Captions', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      text: { type: Sequelize.STRING, allowNull: false },
      UserId: { type: Sequelize.INTEGER, references: { model: 'Users', key: 'id' } },
      ImageId: { type: Sequelize.INTEGER, references: { model: 'Images', key: 'id' } },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Captions');
    await queryInterface.dropTable('Images');
    await queryInterface.dropTable('Users');
  }
};
