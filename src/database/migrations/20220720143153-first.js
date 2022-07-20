module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('first', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: Sequelize.STRING, allowNull: false },
      processed: { type: Sequelize.DATE, allowNull: true },

      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
      deletedAt: { type: Sequelize.DATE, allowNull: true },
    }),

  down: async (queryInterface) => queryInterface.dropTable('first'),
};
