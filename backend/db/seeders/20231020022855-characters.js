'use strict';

// const { Character } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

options.tableName = 'Characters'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(options, [
      {
        name: "Alucard",
        race: "Half-Elf",
        class: "Warlock",
        userId: 1
      },
      {
        name: "Dante",
        race: "Tiefling",
        class: "Fighter",
        userId: 1
      },
      {
        name: "Rivers Cuomo",
        race: "human",
        class: "Bard",
        userId: 1
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete(options, null, {});
  }
};
