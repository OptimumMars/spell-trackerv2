const express = require('express');
const { Spell } = require('../../db/models');

const router = express.Router({ mergeParams: true });

//Create a new Spell for a character;
router.post('/', async (req, res) => {
    let characterId = req.params.characterId;

    let {
        name,
        level,
        description,
        range,
        attackType,
        damage,
        duration,
        components,
        material,
        concentration,
        castTime,
        ritual
    } = req.body

    const newSpell = await Spell.create({
        name,
        level,
        description,
        range,
        attackType,
        damage,
        duration,
        components,
        material,
        concentration,
        castTime,
        ritual,
        characterId
    })

    res.status(201);
    res.json(newSpell);
})

module.exports = router;
