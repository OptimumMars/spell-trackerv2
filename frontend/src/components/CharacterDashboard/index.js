import React, { useEffect } from "react";
// import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters } from "../../store/character";
import "./CharacterDashboard.css"

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
    }, [dispatch, currentUser]);

    return (
        <>
            <h1>Character Dashboard</h1>
            <div className="card_container">
            {characters && characters.map(character => (
                <div key={character.id} className="character_card">
                    <h3>{character.name}</h3>
                    <p>{character.class}</p>
                    <p>{character.race}</p>
                </div>
            ))}
            </div>
        </>
    )
}

export default CharacterDashboard;
