import * as actionType from '../actions/actionTypes';


const DISHES_PRICES = {
    SHASHLYK: 100,
    LAGMAN: 60,
    SAMSA: 30,
    MANTI: 70,
    PLOV: 50,
    KUURDAK: 80
};

const initialState = {
    dishes: {
        SHASHLYK: 0,
        LAGMAN: 0,
        SAMSA: 0,
        MANTI: 0,
        PLOV: 0,
        KUURDAK: 0
    },
    totalPrice: 0,
    formShow: false
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_DISH:
            const dish = action.dish.toUpperCase();
            return {
                ...state,
                dishes: {
                    ...state.dishes,
                    [dish]: state.dishes[dish] + 1
                },
                totalPrice: state.totalPrice + DISHES_PRICES[dish]
            };
        case actionType.DELETE_DISH:
            return {
                ...state,
                totalPrice: state.totalPrice - DISHES_PRICES[action.dish] * state.dishes[action.dish],
                dishes: {
                    ...state.dishes,
                    [action.dish]: 0
                },
            };
        case actionType.CLOSE_FORM:
            return {
                ...state,
                formShow: false
            };
        case actionType.PLACE_ORDER:
            return {
                ...state,
                formShow: true
            };
        case actionType.FETCH_DISH_REQUEST:
            return {
                ...state,
                formShow: false
            };
        default:
            return state;
    }
};

export default cartReducer;