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
});

//Get all spells on a character
router.get('/', async (req, res) => {
    let characterId = req.params.characterId;

    let spells = await Spell.findAll({ where: { characterId } })

    res.status(200);
    res.json(spells);
})

//Get one specific spell on a character
router.get('/:spellId', async (req, res, next) => {
    let spellId = req.params.spellId;
    let characterId = req.params.characterId;

    let spell = await Spell.findByPk(spellId);
    // console.log(typeof spell.characterId, "<---- characterId on spell")
    // console.log(typeof characterId, "<---- characterId on reqparams")

    if (spell.characterId !== Number(characterId)) {
        const e = new Error("you don't have access to this spell")
        e.status = 404;
        return next(e);
    }

    res.status(200);
    res.json(spell);
})

//Update a specific spell on a character
router.put('/:spellId', async (req, res, next) => {
    let { characterId, spellId } = req.params;

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

    let spell = await Spell.findByPk(spellId);

    if (spell && spell.characterId == characterId) {
        const update = await spell.update({
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
        });

        res.status(200);
        res.json(update);
    } else {
        const e = new Error("No spell found, no changes made");
        e.status = 404;
        return next(e)
    }
})

module.exports = router;
