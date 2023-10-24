'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SpellSlots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      slot1: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      slot1Exhaust: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      slot2: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      slot2Exhaust: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      slot3: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      slot3Exhaust: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      slot4: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      slot4Exhaust: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      slot5: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      slot5Exhaust: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      slot6: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      slot6Exhaust: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      slot7: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      slot7Exhaust: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      slot8: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      slot8Exhaust: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      slot9: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      slot9Exhaust: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      characterId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Characters',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    }, options);
  },
  async down(queryInterface, Sequelize) {
    options.tableName = "SpellSlots"
    await queryInterface.dropTable(options);
  }
};
