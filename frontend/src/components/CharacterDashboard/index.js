import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters } from "../../store/character";

function CharacterDashboard() {
    const dispatch = useDispatch();
    let currentUser = useSelector((state) => state.session.user);
    let characters = useSelector((state) => state.character.characters);

    useEffect(() => {
        dispatch(getCharacters())
    }, [dispatch]);

    return (
        <>
            <div>
                character page i guess
            </div>
        </>
    )
}

export default CharacterDashboard;
