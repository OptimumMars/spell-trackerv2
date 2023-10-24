'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

options.tableName = 'Spells'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(options, [
      {
        name: "Acid Arrow",
        level: 2,
        description: "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.",
        range: "90 feet",
        attackType: "ranged",
        damage: '4d4',
        duration: "Instantaneous",
        components: "V,S,M",
        material: "a flea or something",
        concentration: false,
        castTime: "1 turn",
        ritual: false,
        characterId: 1
      },
      {
        name: "Acid Splash",
        level: 0,
        description: "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a dexterity saving throw or take 1d6 acid damage.",
        range: "60 feet",
        attackType: null,
        damage: '1d6',
        duration: "Instantaneous",
        components: "V,S",
        material: null,
        concentration: false,
        castTime: "1 turn",
        ritual: false,
        characterId: 1
      },
      {
        name: "Arcane Sword",
        level: 7,
        description: "You create a sword-shaped plane of force that hovers within range. It lasts for the duration. When the sword appears, you make a melee spell attack against a target of your choice within 5 feet of the sword. On a hit, the target takes 3d10 force damage. Until the spell ends, you can use a bonus action on each of your turns to move the sword up to 20 feet to a spot you can see and repeat this attack against the same target or a different one.",
        range: "60 feet",
        attackType: "melee",
        damage: '3d10',
        duration: "Up to 1 minute",
        components: "V,S,M",
        material: "A miniature platinum sword with a grip and pommel of copper and zinc, worth 250 gp.",
        concentration: true,
        castTime: "1 action",
        ritual: false,
        characterId: 2
      },
      {
        name: "Arcane Sword",
        level: 7,
        description: "You create a sword-shaped plane of force that hovers within range. It lasts for the duration. When the sword appears, you make a melee spell attack against a target of your choice within 5 feet of the sword. On a hit, the target takes 3d10 force damage. Until the spell ends, you can use a bonus action on each of your turns to move the sword up to 20 feet to a spot you can see and repeat this attack against the same target or a different one.",
        range: "60 feet",
        attackType: "melee",
        damage: '3d10',
        duration: "Up to 1 minute",
        components: "V,S,M",
        material: "A miniature platinum sword with a grip and pommel of copper and zinc, worth 250 gp.",
        concentration: true,
        castTime: "1 action",
        ritual: false,
        characterId: 3
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete(options, null, {});
  }
};
