const express = require('express');
const { Character } = require('../../db/models');

const router = express.Router();

router.post("/", async (req, res) => {
    let { name, race, userId } = req.body;

    const newCharacter = await Character.create({
        userId,
        name,
        race,
        class: req.body.class
    });

    res.json(newCharacter)
});

module.exports = router;
