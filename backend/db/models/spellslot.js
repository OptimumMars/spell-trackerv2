'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SpellSlot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SpellSlot.belongsTo(models.Character, {
        foreignKey: 'characterId'
      });
    }
  }
  SpellSlot.init({
    slot1: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    slot1Exhaust: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    slot2: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    slot2Exhaust: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    slot3: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    slot3Exhaust: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    slot4: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    slot4Exhaust: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    slot5: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    slot5Exhaust: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    slot6: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    slot6Exhaust: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    slot7: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    slot7Exhaust: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    slot8: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    slot8Exhaust: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    slot9: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    slot9Exhaust: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    characterId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'SpellSlot',
  });
  return SpellSlot;
};
