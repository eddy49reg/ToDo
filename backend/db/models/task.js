const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Task.init({
    title: { type: DataTypes.STRING, allowNull: false },
    body: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false },
    time: { type: DataTypes.DATE },
    userId: { type: DataTypes.INTEGER },
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};
