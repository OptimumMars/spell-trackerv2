'use strict';

// const { Character } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

options.tableName = 'SpellSlots'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(options, [
      {
        slot1: 5,
        slot1Exhaust: 3,
        slot2: 4,
        slot2Exhaust: 1,
        slot3: 3,
        slot3Exhaust: 1,
        slot4: 2,
        slot4Exhaust: 0,
        slot5: 1,
        slot5Exhaust: 0,
        slot6: 0,
        slot6Exhaust: 0,
        slot7: 0,
        slot7Exhaust: 0,
        slot8: 0,
        slot8Exhaust: 0,
        slot9: 0,
        slot9Exhaust: 0,
        characterId: 1
      },
      {
        slot1: 3,
        slot1Exhaust: 0,
        slot2: 2,
        slot2Exhaust: 0,
        slot3: 1,
        slot3Exhaust: 0,
        slot4: 0,
        slot4Exhaust: 0,
        slot5: 0,
        slot5Exhaust: 0,
        slot6: 0,
        slot6Exhaust: 0,
        slot7: 0,
        slot7Exhaust: 0,
        slot8: 0,
        slot8Exhaust: 0,
        slot9: 0,
        slot9Exhaust: 0,
        characterId: 2
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete(options, null, {});
  }
};
