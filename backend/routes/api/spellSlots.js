const express = require('express');
const { SpellSlot } = require('../../db/models');

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

// Update the amount of spell slots for a character
router.put('/', async (req, res) => {
    const characterId = req.params.characterId;

    let { slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8, slot9 } = req.body;

    let spellSlot = await SpellSlot.findOne({ where: { characterId } });

    if (spellSlot) {
        const update = await spellSlot.update({
            slot1,
            slot2,
            slot3,
            slot4,
            slot5,
            slot6,
            slot7,
            slot8,
            slot9
        });

        res.status(200);
        res.json(update);
    } else {
        const e = new Error("no spell Slots found, no changes made");
        e.status = 404;
        return next(e);
    };

});

// Exhaust Spell Slots for a character
router.put('/exhaust', async (req, res) => {
    const characterId = req.params.characterId;

    let { slot1Exhaust, slot2Exhaust, slot3Exhaust, slot4Exhaust, slot5Exhaust, slot6Exhaust, slot7Exhaust, slot8Exhaust, slot9Exhaust } = req.body;

    let spellSlot = await SpellSlot.findOne({ where: { characterId } });

    if (spellSlot) {
        const update = await spellSlot.update({
            slot1Exhaust,
            slot2Exhaust,
            slot3Exhaust,
            slot4Exhaust,
            slot5Exhaust,
            slot6Exhaust,
            slot7Exhaust,
            slot8Exhaust,
            slot9Exhaust
        });

        res.status(200);
        res.json(update);
    } else {
        const e = new Error("no spell Slots found, no changes made");
        e.status = 404;
        return next(e);
    };

});

module.exports = router;
