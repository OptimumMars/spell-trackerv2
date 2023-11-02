const express = require('express');
const { Character } = require('../../db/models');
const spellSlotsRouter = require('./spellSlots.js');
const spellsRouter = require('./spells.js');

const router = express.Router();

//Create a new character
router.post("/", async (req, res) => {
    let { name, race, userId } = req.body;

    const newCharacter = await Character.create({
        userId,
        name,
        race,
        class: req.body.class
    });

    res.status(201)
    res.json(newCharacter)
});

//Get all characters
router.get("/", async (req, res) => {
    let userId = req.user.id;

    const allCharacters = await Character.findAll({
        where: { userId }
    });

    res.status(200);
    res.json(allCharacters);
});

//Get one character
router.get("/:characterId", async (req, res) => {
    const character = await Character.findByPk(req.params.characterId);

    res.status(200);
    res.json(character);
});

//Update Character
router.put("/:characterId", async (req, res) => {
    let character = await Character.findByPk(req.params.characterId);

    let { name, race } = req.body;

    if (character) {
        const update = await character.update({
            name,
            race,
            class: req.body.class
        });

        res.status(200);
        res.json(update)
    } else {
        const e = new Error("Problem finding character, no changes made");
        e.status = 404;
        return next(e);
    }

});

router.delete("/:characterId", async (req, res) => {
    let character = await Character.findByPk(req.params.characterId);

    if (character) {
        await character.destroy();

        res.status(200);
        res.json('Character deleted')
    } else {
        const e = new Error('No character with specified ID found');
        e.status = 404;
        return next(e);
    }
});

//Connects spell slot and spell routers to have the character prefix
router.use('/:characterId/spell-slots', spellSlotsRouter);
router.use('/:characterId/spells', spellsRouter);

module.exports = router;
