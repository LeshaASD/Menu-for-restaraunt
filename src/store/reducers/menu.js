import * as actionTypes from '../actions/actionTypes';

const initialState = {
    dishes: {},
    loading: false,
    error: null
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DISH_REQUEST:
            return {...state, loading: true};
        case actionTypes.FETCH_DISH_SUCCESS:
            if(action.dishes) {
                return {...state, loading: false, dishes: action.dishes};
            } else {
                return {...state, loading: false}
            }
        case actionTypes.FETCH_DISH_FAILURE:
            return {...state, loading: false, error: action.error};
        case actionTypes.ADD_DISH:
            return {
                ...state
            };
        default:
            return state;
    }
};

export default menuReducer;