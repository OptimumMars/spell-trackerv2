import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters } from "../../store/character";
import "./CharacterDashboard.css"
import { NavLink } from "react-router-dom";

function CharacterDashboard() {
    const dispatch = useDispatch();
    let currentUser = useSelector((state) => state.session.user);
    let characters = useSelector((state) => state.character);
    let characterArr = Object.values(characters)
    // console.log(characters)
    // console.log(characterArr)

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
            {characterArr && characterArr.map(character => (
                <NavLink exact to={`/characters/${character.id}`} key={character.id} className="character_card">
                    <h3>{character.name}</h3>
                    <p>{character.class}</p>
                    <p>{character.race}</p>
                </NavLink>
            ))}
            </div>
        </>
    )
}

export default CharacterDashboard;
