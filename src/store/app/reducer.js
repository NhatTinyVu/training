import * as types from './types';

const initialState = {
  theme: 'light',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.SET_THEME:
      return {
        ...initialState,
        theme: action.payload,
      };
    default:
      return state;
  }
}
