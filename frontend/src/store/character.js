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

    console.log(character);

    dispatch(setCharacter(character));
  }
};

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
