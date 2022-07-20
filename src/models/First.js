module.exports = (sequelize, Sequelize) => {
  const First = sequelize.define('first', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false },
    processed: { type: Sequelize.DATE, allowNull: true },
  });

  return First;
};
