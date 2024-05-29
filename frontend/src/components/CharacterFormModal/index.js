import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { createCharacter } from "../../store/character";

function CharacterFormModal() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [race, setRace] = useState("");
    const [classProp, setClassProp] = useState("");

    const [errors, setErrors] = useState({});

    const { closeModal } = useModal();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});

        let character = {
            name,
            race,
            class: classProp
        }

        const newCharacter = await dispatch(createCharacter(character));

        closeModal();
    }


    return(
        <>
        <h1>New Character</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <label>
                Race:
                <input
                    type="text"
                    value={race}
                    onChange={(e) => setRace(e.target.value)}
                    required
                />
            </label>
            <label>
                Class:
                <input
                    type="text"
                    value={classProp}
                    onChange={(e) => setClassProp(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Create New Character!</button>
        </form>
        </>
    )
}

export default CharacterFormModal
