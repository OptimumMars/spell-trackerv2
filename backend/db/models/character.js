'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Character.belongsTo(models.User, {
        foreignKey: 'userId'
      });

      Character.hasOne(models.SpellSlot, {
        onDelete: 'cascade',
        hooks: true,
        foreignKey: 'characterId'
      });

      Character.hasMany(models.Spell, {
        onDelete: 'cascade',
        hooks: true,
        foreignKey: 'characterId'
      });
    }
  }
  Character.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    race: {
      type: DataTypes.STRING,
      allowNull: false
    },
    class: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};
