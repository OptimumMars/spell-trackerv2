import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./CharacterDetails.css"

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

    console.log(character)

    return (
        <div className="details_page">
            {character && (
            <>
            <h1>{character.name}</h1>
            <h2>{character.race}</h2>
            <h2>{character.class}</h2>
            <div className="spells_container">
                <h3>{character.name}'s Spells:</h3>
                <button>Add a Spell!</button>
                {character.Spells && character.Spells.map(spell => (
                    <div key={spell.id} className="spell_card">
                        {/* {console.log(spell)} */}
                        <h3>{spell.name}</h3>
                        <h3>Level {spell.level} spell</h3>
                        <h3>Description:</h3>
                        <p>{spell.description}</p>
                        <p>Cast Time: {spell.castTime}</p>
                        <p>Components: {spell.components}</p>
                        <p>Material: {spell.material ? spell.material : "None"}</p>
                        <p>Duration: {spell.duration}</p>
                        <p>Range: {spell.range}</p>
                        <p>Concentration: {spell.concentration ? spell.concentration : "No"}</p>
                        <p>Ritual: {spell.ritual ? spell.ritual : "No"}</p>
                        <p>Attack Type: {spell.attackType ? spell.attackType : "N/A"}</p>
                        <p>Damage: {spell.damage ? spell.damage : "N/A"}</p>
                    </div>
                ))}
            </div>
            <div className="spells_container">
                <h3>{character.name}'s Spell Slots:</h3>
                <button>Update Amount of Spell Slots!</button>
                <button>Exhaust Spell Slots!</button>
                {character.SpellSlot && (
                    <div className="spellslot_grid">
                    {/* {console.log(character.SpellSlot)} */}
                        <div className="spellslot_card">
                            <h4>{character.SpellSlot.slot1 ? (<>Lvl 1 Total: {character.SpellSlot.slot1}</>) : null}</h4>
                            <h4>{character.SpellSlot.slot1 ? `Current Exhausted: ${character.SpellSlot.slot1Exhaust}` : null}</h4>
                        </div>
                        <div className="spellslot_card">
                            <h4>{character.SpellSlot.slot2 ? (<>Lvl 2 Total: {character.SpellSlot.slot2}</>) : null}</h4>
                            <h4>{character.SpellSlot.slot2 ? `Current Exhausted: ${character.SpellSlot.slot2Exhaust}` : null}</h4>
                        </div>
                        <div className="spellslot_card">
                            <h4>{character.SpellSlot.slot3 ? (<>Lvl 3 Total: {character.SpellSlot.slot3}</>) : null}</h4>
                            <h4>{character.SpellSlot.slot3 ? `Current Exhausted: ${character.SpellSlot.slot3Exhaust}` : null}</h4>
                        </div>
                        <div className="spellslot_card">
                            <h4>{character.SpellSlot.slot4 ? (<>Lvl 4 Total: {character.SpellSlot.slot4}</>) : null}</h4>
                            <h4>{character.SpellSlot.slot4 ? `Current Exhausted: ${character.SpellSlot.slot4Exhaust}` : null}</h4>
                        </div>
                        <div className="spellslot_card">
                            <h4>{character.SpellSlot.slot5 ? (<>Lvl 5 Total: {character.SpellSlot.slot5}</>) : null}</h4>
                            <h4>{character.SpellSlot.slot5 ? `Current Exhausted: ${character.SpellSlot.slot5Exhaust}` : null}</h4>
                        </div>
                        <div className="spellslot_card">
                            <h4>{character.SpellSlot.slot6 ? (<>Lvl 6 Total: {character.SpellSlot.slot6}</>) : null}</h4>
                            <h4>{character.SpellSlot.slot6 ? `Current Exhausted: ${character.SpellSlot.slot6Exhaust}` : null}</h4>
                        </div>
                        <div className="spellslot_card">
                            <h4>{character.SpellSlot.slot7 ? (<>Lvl 7 Total: {character.SpellSlot.slot7}</>) : null}</h4>
                            <h4>{character.SpellSlot.slot7 ? `Current Exhausted: ${character.SpellSlot.slot7Exhaust}` : null}</h4>
                        </div>
                        <div className="spellslot_card">
                            <h4>{character.SpellSlot.slot8 ? (<>Lvl 8 Total: {character.SpellSlot.slot8}</>) : null}</h4>
                            <h4>{character.SpellSlot.slot8 ? `Current Exhausted: ${character.SpellSlot.slot8Exhaust}` : null}</h4>
                        </div>
                        <div className="spellslot_card">
                            <h4>{character.SpellSlot.slot9 ? (<>Lvl 9 Total: {character.SpellSlot.slot9}</>) : null}</h4>
                            <h4>{character.SpellSlot.slot9 ? `Current Exhausted: ${character.SpellSlot.slot9Exhaust}` : null}</h4>
                        </div>
                    </div>
                )}
            </div>
            </>
            )}
        </div>
    )
}

export default CharacterDetails
