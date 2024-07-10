import { csrfFetch } from "./csrf";

const SET_CHARACTERS = "characters/setCharacters";
const SET_CHARACTER = "characters/setCharacter";

const setCharacters = (characters) => {
  return {
    type: SET_CHARACTERS,
    payload: characters,
  };
};

const setCharacter = (character) => {
  return {
    type: SET_CHARACTER,
    payload: character,
  };
};

export const getCharacters = (userId) => async (dispatch) => {
  const response = await csrfFetch("api/characters");

  if (response.ok) {
    const characters = await response.json();

    dispatch(setCharacters(characters));
  }
};

export const getSingleCharacter = (characterId) => async (dispatch) => {
  const response = await csrfFetch(`/api/characters/${characterId}`);

  if (response.ok) {
    const character = await response.json();

    dispatch(setCharacter(character));
  }
};

export const createCharacter = (character) => async (dispatch) => {
  const response = await csrfFetch("/api/characters/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(character),
  });

  if (response.ok) {
    const newCharacter = await response.json();
    dispatch(getCharacters());
    return newCharacter;
  } else {
    const errors = await response.json();
    return errors;
  }
};

export const createSpell = (spell, characterId) => async (dispatch) =>{
  // console.log("hit the create spell thunk")
  // console.log(spell, characterId)
  const response = await csrfFetch(`/api/characters/${characterId}/spells/`,{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(spell),
  });
  console.log(spell, characterId)
  if (response.ok) {
    const newSpell = await response.json();
    dispatch(getSingleCharacter(characterId));
    return newSpell;
  } else {
    const errors = await response.json();
    return errors;
  }
}

export const updateSpell = (spell, characterId, spellId) => async (dispatch) =>{
  // console.log("hit the create spell thunk")
  // console.log(spell, characterId)
  const response = await csrfFetch(`/api/characters/${characterId}/spells/${spellId}`,{
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(spell),
  });

  if (response.ok) {
    const updatedSpell = await response.json();
    dispatch(getSingleCharacter(characterId));
    return updatedSpell;
  } else {
    const errors = await response.json();
    return errors;
  }
}

export const updateSpellSlotsThunk = (characterId, spellSlots) => async (dispatch) => {
  const response = await csrfFetch(`/api/characters/${characterId}/spell-slots`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(spellSlots),
  });

  if (response.ok){
    const updatedSpellSlots = await response.json();
    dispatch(getSingleCharacter(characterId));
    return updatedSpellSlots;
  } else {
    const errors = await response.json();
    return errors;
  }
}

const initialState = {};

const characterReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_CHARACTERS:
      newState = Object.assign({}, state);
      action.payload.forEach((character) => {
        newState[character.id] = character;
      });
      //   newState.characters = action.payload;
      return newState;

    case SET_CHARACTER:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
};

export default characterReducer;
