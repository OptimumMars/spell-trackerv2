'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Spells', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(800),
        allowNull: false
      },
      range: {
        type: Sequelize.STRING(80)
      },
      attackType: {
        type: Sequelize.STRING(30)
      },
      damage: {
        type: Sequelize.STRING(30)
      },
      duration: {
        type: Sequelize.STRING(80)
      },
      components: {
        type: Sequelize.STRING(10)
      },
      concentration: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      material: {
        type: Sequelize.STRING(100)
      },
      castTime: {
        type: Sequelize.STRING(80)
      },
      ritual: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
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
    options.tableName = "Spells"
    await queryInterface.dropTable(options);
  }
};
