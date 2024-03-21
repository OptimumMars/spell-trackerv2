import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getSingleCharacter } from "../../store/character";

function CharacterDetails() {
    const dispatch = useDispatch();
    let characterId = useParams().characterId
    let character = useSelector((state) => state.character)
    // console.log(character)

    useEffect(() => {
        async function fetchCharacter(){
            await dispatch(getSingleCharacter(characterId))
        }

        fetchCharacter();
    }, [dispatch, characterId])

    console.log(character);

    return (
        <div>
            <h3>{character.name}</h3>
        </div>
    )
}

export default CharacterDetails
