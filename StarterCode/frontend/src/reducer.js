import { ACTIONS } from "./constants";

export const initialState = {
  products: [],
  isLoading: false,
  error: "",
};

export function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.FETCH_PRODUCTS:
        return {
            ...state,
            products: action.payload,
            isLoading: false,
            error: null,
        };

        case ACTIONS.START_LOADING:
        return {
            ...state,
            isLoading: true,
        };

        case ACTIONS.DELETE_PRODUCT:
        return {
            ...state,
            products: state.products.filter((product) => product.id !== action.payload),
        };

        case ACTIONS.SET_ERROR:
        return {
            ...state,
            isLoading: false,
            error: action.payload,
        };

        default:
        return state;
    }
}
