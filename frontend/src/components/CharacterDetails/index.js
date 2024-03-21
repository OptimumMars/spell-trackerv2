import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function CharacterDetails() {
    const dispatch = useDispatch();
    let characterId = useParams().characterId
    console.log(characterId)
    let character = useSelector((state) => state.character[characterId])

    console.log(character);

    return (
        <div>
            <h3>{character.name}</h3>
        </div>
    )
}

export default CharacterDetails
