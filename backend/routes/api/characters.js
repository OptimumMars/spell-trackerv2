const express = require('express');
const { Character } = require('../../db/models');

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
    const allCharacters = await Character.findAll();

    res.status(200);
    res.json(allCharacters);
})

module.exports = router;
