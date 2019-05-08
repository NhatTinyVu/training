import * as types from './types';

const initialState = {
  name: 'Quàng thượng',
  avatar:
    'https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.adapt.1190.1.jpg',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...initialState,
        ...action.payload,
      };
    default:
      return state;
  }
}
