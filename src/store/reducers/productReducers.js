let initialState = {
  products: [],
};

const productsReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: payload,
      };

    default:
      return state;
  }
};

export default productsReducers;
