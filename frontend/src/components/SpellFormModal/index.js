import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { createSpell, updateSpell } from "../../store/character";

function SpellFormModal({characterId, isCreate, spell}) {
    const dispatch = useDispatch();



    const [name, setName] = useState(isCreate ? "" : spell.name);
    const [level, setLevel] = useState(isCreate ? 0 : spell.level);
    const [description, setDescription] = useState(isCreate ? "" : spell.description);
    const [range, setRange] = useState(isCreate ? "" : spell.range);
    const [attackType, setAttackType] = useState(isCreate ? "" : spell.attackType);
    const [damage, setDamage] = useState(isCreate ? "" : spell.damage);
    const [duration, setDuration] = useState(isCreate ? "" : spell.duration);
    const [components, setComponents] = useState(isCreate ? "" : spell.components);
    const [concentration, setConcentration] = useState(isCreate ? false : spell.concentration);
    const [material, setMaterial] = useState(isCreate ? "" : spell.material);
    const [castTime, setCastTime] = useState(isCreate ? "" : spell.castTime);
    const [ritual, setRitual] = useState(isCreate ? false : spell.ritual);

    const [errors, setErrors] = useState({});

    const { closeModal } = useModal();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});

        let currSpell = {
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

        if (isCreate){
            const newSpell = await dispatch(createSpell(currSpell, characterId));
        }else{
            const updatedSpell = await dispatch(updateSpell(currSpell, characterId, spell.id));
        }
        closeModal();
    }

    return (
        <>
        <h1>{isCreate ?
        "Add your Spell!" : "Update Spell!"}</h1>
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
            <button type="submit">{ isCreate ? "Create Spell!" : "Update Spell!"}</button>
        </form>
        </>
    );
}

export default SpellFormModal;
