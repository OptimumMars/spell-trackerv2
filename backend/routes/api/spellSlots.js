const express = require('express');
const { SpellSlot } = require('../../db/models');
const spell = require('../../db/models/spell');

const router = express.Router({ mergeParams: true });

//creates a new spell slot chart for a character
router.post('/', async (req, res) => {
    let characterId = req.params.characterId;
    console.log(req.params)

    let { slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8, slot9 } = req.body;

    const newSpellSlot = await SpellSlot.create({
        slot1,
        slot2,
        slot3,
        slot4,
        slot5,
        slot6,
        slot7,
        slot8,
        slot9,
        characterId: characterId
    });

    res.status(201);
    res.json(newSpellSlot);
});

// Get spell slots for a character
router.get('/', async (req, res) => {
    const characterId = req.params.characterId;

    const spellSlot = await SpellSlot.findOne({ where: { characterId } })

    res.status(200);
    res.json(spellSlot);
});

module.exports = router;
