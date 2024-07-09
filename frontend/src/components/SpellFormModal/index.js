import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { createSpell } from "../../store/character";

function SpellFormModal({characterId}) {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [level, setLevel] = useState(0);
    const [description, setDescription] = useState("");
    const [range, setRange] = useState("");
    const [attackType, setAttackType] = useState("");
    const [damage, setDamage] = useState("");
    const [duration, setDuration] = useState("");
    const [components, setComponents] = useState("");
    const [concentration, setConcentration] = useState(false);
    const [material, setMaterial] = useState("");
    const [castTime, setCastTime] = useState("");
    const [ritual, setRitual] = useState(false);

    const [errors, setErrors] = useState({});

    const { closeModal } = useModal();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});

        let spell = {
            name,
            level,
            description,
            range,
            attackType,
            damage,
            duration,
            components,
            concentration,
            material,
            castTime,
            ritual
        }
        
        const newSpell = await dispatch(createSpell(spell, characterId));

        closeModal();
    }

    return (
        <>
        <h1>Add your Spell!</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Spell Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <label>
                Spell Level:
                <input
                    type="number"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    required
                />
            </label>
            <label>
                Spell Description:
                <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                />
            </label>
            <label>
                Range:
                <input
                    type="text"
                    value={range}
                    onChange={(e) => setRange(e.target.value)}
                />
            </label>
            <label>
                Attack Type:
                <input
                    type="text"
                    value={attackType}
                    onChange={(e) => setAttackType(e.target.value)}
                />
            </label>
            <label>
                Damage:
                <input
                    type="text"
                    value={damage}
                    onChange={(e) => setDamage(e.target.value)}
                />
            </label>
            <label>
                Duration:
                <input
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />
            </label>
            <label>
                Components:
                <input
                    type="text"
                    value={components}
                    onChange={(e) => setComponents(e.target.value)}
                />
            </label>
            <label>
                Concentration:
                <input
                    type="checkbox"
                    value={concentration}
                    onChange={(e) => setConcentration(e.target.value)}
                />
            </label>
            <label>
                Material:
                <input
                    type="text"
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                />
            </label>
            <label>
                Cast Time:
                <input
                    type="text"
                    value={castTime}
                    onChange={(e) => setCastTime(e.target.value)}
                />
            </label>
            <label>
                Ritual:
                <input
                    type="checkbox"
                    value={ritual}
                    onChange={(e) => setRitual(e.target.value)}
                />
            </label>
            <button type="submit">Create Spell!</button>
        </form>
        </>
    );
}

export default SpellFormModal;
