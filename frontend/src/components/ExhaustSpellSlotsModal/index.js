import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { exhaustSpellSlotsThunk } from "../../store/character";

function ExhaustSpellSlotsModal ({ characterId, spellSlots }) {
    const dispatch = useDispatch();

    const [slot1Exhaust, setSlot1Exhaust] = useState(spellSlots.slot1Exhaust);
    const [slot2Exhaust, setSlot2Exhaust] = useState(spellSlots.slot2Exhaust);
    const [slot3Exhaust, setSlot3Exhaust] = useState(spellSlots.slot3Exhaust);
    const [slot4Exhaust, setSlot4Exhaust] = useState(spellSlots.slot4Exhaust);
    const [slot5Exhaust, setSlot5Exhaust] = useState(spellSlots.slot5Exhaust);
    const [slot6Exhaust, setSlot6Exhaust] = useState(spellSlots.slot6Exhaust);
    const [slot7Exhaust, setSlot7Exhaust] = useState(spellSlots.slot7Exhaust);
    const [slot8Exhaust, setSlot8Exhaust] = useState(spellSlots.slot8Exhaust);
    const [slot9Exhaust, setSlot9Exhaust] = useState(spellSlots.slot9Exhaust);

    const [errors, setErrors] = useState({});

    const { closeModal } = useModal();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});

        let currSpellSlots = {
            slot1Exhaust,
            slot2Exhaust,
            slot3Exhaust,
            slot4Exhaust,
            slot5Exhaust,
            slot6Exhaust,
            slot7Exhaust,
            slot8Exhaust,
            slot9Exhaust
        }

        const newSpellSlots = await dispatch(exhaustSpellSlotsThunk(characterId, currSpellSlots));

        closeModal();
    }

    return (
        <>
        <h1>Exhaust Spell Slots:</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Slot 1:
                <input
                    type="number"
                    value={slot1Exhaust}
                    onChange={(e) => setSlot1Exhaust(e.target.value)}
                    required
                />
            </label>
            <label>
                Slot 2:
                <input
                    type="number"
                    value={slot2Exhaust}
                    onChange={(e) => setSlot2Exhaust(e.target.value)}
                    required
                />
            </label>
            <label>
                Slot 3:
                <input
                    type="number"
                    value={slot3Exhaust}
                    onChange={(e) => setSlot3Exhaust(e.target.value)}
                    required
                />
            </label>
            <label>
                Slot 4:
                <input
                    type="number"
                    value={slot4Exhaust}
                    onChange={(e) => setSlot4Exhaust(e.target.value)}
                    required
                />
            </label>
            <label>
                Slot 5:
                <input
                    type="number"
                    value={slot5Exhaust}
                    onChange={(e) => setSlot5Exhaust(e.target.value)}
                    required
                />
            </label>
            <label>
                Slot 6:
                <input
                    type="number"
                    value={slot6Exhaust}
                    onChange={(e) => setSlot6Exhaust(e.target.value)}
                    required
                />
            </label>
            <label>
                Slot 7:
                <input
                    type="number"
                    value={slot7Exhaust}
                    onChange={(e) => setSlot7Exhaust(e.target.value)}
                    required
                />
            </label>
            <label>
                Slot 8:
                <input
                    type="number"
                    value={slot8Exhaust}
                    onChange={(e) => setSlot8Exhaust(e.target.value)}
                    required
                />
            </label>
            <label>
                Slot 9:
                <input
                    type="number"
                    value={slot9Exhaust}
                    onChange={(e) => setSlot9Exhaust(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Exhaust Spell Slots</button>
        </form>
        </>
    )
}

export default ExhaustSpellSlotsModal;
