'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spell extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Spell.belongsTo(models.Character, {
        foreignKey: 'characterId'
      });
    }
  }
  Spell.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    range: DataTypes.STRING,
    attackType: DataTypes.STRING,
    damage: DataTypes.STRING,
    duration: DataTypes.STRING,
    components: DataTypes.STRING,
    concentration: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    material: DataTypes.STRING,
    castTime: DataTypes.STRING,
    ritual: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    characterId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Spell',
  });
  return Spell;
};
