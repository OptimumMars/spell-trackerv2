import { csrfFetch } from './csrf';

const SET_CHARACTERS = "characters/setCharacters";

const setCharacters = (characters) => {
    return {
        type: SET_CHARACTERS,
        payload: characters
    };
};

export const getCharacters = (userId) => async (dispatch) => {
    const response = await csrfFetch('api/characters')

    if (response.ok) {
        const characters = await response.json();
        dispatch(setCharacters(characters))
    }
};

const initialState = { characters: null };

const characterReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_CHARACTERS:
            newState = Object.assign({}, state);
            newState.characters = action.payload;
            return newState;
        default:
            return state;
    }
}

export default characterReducer;
