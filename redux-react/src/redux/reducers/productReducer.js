import { ADD_ARTICLE } from "../constants/actions-type";
export const productInitialState = {
  data: [
    {
      id: 1,
      title: "my first post",
      content: "my first content",
    },
  ],
};

const ProductReducer = (
  state = productInitialState,

  action
) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

export default ProductReducer;
