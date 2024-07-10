import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { updateSpellSlotsThunk } from "../../store/character";

function UpdateSpellSlotsModal ({ characterId, spellSlots }) {
    const dispatch = useDispatch();

    const [slot1, setSlot1] = useState(spellSlots.slot1);
    const [slot2, setSlot2] = useState(spellSlots.slot2);
    const [slot3, setSlot3] = useState(spellSlots.slot3);
    const [slot4, setSlot4] = useState(spellSlots.slot4);
    const [slot5, setSlot5] = useState(spellSlots.slot5);
    const [slot6, setSlot6] = useState(spellSlots.slot6);
    const [slot7, setSlot7] = useState(spellSlots.slot7);
    const [slot8, setSlot8] = useState(spellSlots.slot8);
    const [slot9, setSlot9] = useState(spellSlots.slot9);

    const [errors, setErrors] = useState({});

    const { closeModal } = useModal();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});

        let currSpellSlots = {
            slot1,
            slot2,
            slot3,
            slot4,
            slot5,
            slot6,
            slot7,
            slot8,
            slot9
        }

        const newSpellSlots = await dispatch(updateSpellSlotsThunk(characterId, currSpellSlots));

        closeModal();
    }

    return (
        <>
        <h1>Update Amount of Spell Slots:</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Slot 1:
                <input
                    type="number"
                    value={slot1}
                    onChange={(e) => setSlot1(e.target.value)}
                    required
                />
            </label>
            <label>
                Slot 2:
                <input
                    type="number"
                    value={slot2}
                    onChange={(e) => setSlot2(e.target.value)}
                    required
                />
            </label>
            <label>
                Slot 3:
                <input
                    type="number"
                    value={slot3}
                    onChange={(e) => setSlot3(e.target.value)}
                    required
                />
            </label>
            <label>
                Slot 4:
                <input
                    type="number"
                    value={slot4}
                    onChange={(e) => setSlot4(e.target.value)}
                    required
                />
            </label>
            <label>
                Slot 5:
                <input
                    type="number"
                    value={slot5}
                    onChange={(e) => setSlot5(e.target.value)}
                    required
                />
            </label>
            <label>
                Slot 6:
                <input
                    type="number"
                    value={slot6}
                    onChange={(e) => setSlot6(e.target.value)}
                    required
                />
            </label>
            <label>
                Slot 7:
                <input
                    type="number"
                    value={slot7}
                    onChange={(e) => setSlot7(e.target.value)}
                    required
                />
            </label>
            <label>
                Slot 8:
                <input
                    type="number"
                    value={slot8}
                    onChange={(e) => setSlot8(e.target.value)}
                    required
                />
            </label>
            <label>
                Slot 9:
                <input
                    type="number"
                    value={slot9}
                    onChange={(e) => setSlot9(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Update Spell Slots</button>
        </form>
        </>
    )
}

export default UpdateSpellSlotsModal;
