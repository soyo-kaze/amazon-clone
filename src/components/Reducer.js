export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  //   console.log({ action });
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      // state.basket.splice(action.key, 1);
      return {
        ...state,
        basket: state.basket.filter((item, i) => i !== action.key),
      };
    default:
      return state;
  }
};

export default reducer;
