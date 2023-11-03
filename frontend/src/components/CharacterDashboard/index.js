import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters } from "../../store/character";

function CharacterDashboard() {
    const dispatch = useDispatch();
    let currentUser = useSelector((state) => state.session.user);
    let characters = useSelector((state) => state.character.characters);

    useEffect(() => {
        async function fetchCharacters() {
            if (currentUser === null) {
                return null;
            }
            await dispatch(getCharacters())
        };
        fetchCharacters();
    }, [currentUser]);

    return (
        <>
            <h1>Character Dashboard</h1>
            {characters && characters.map(character => (
                <div key={character.id}>
                    <h3>{character.name}</h3>
                </div>
            ))}
        </>
    )
}

export default CharacterDashboard;
