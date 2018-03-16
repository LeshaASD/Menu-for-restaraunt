import * as actionTypes from './actionTypes';
import axios from "axios/index";

export const addDish = event => {
    event.preventDefault();
    return {type: actionTypes.ADD_DISH, dish: event.target.name, price: event.target.title}
};

export const deleteDish = dish => {
    return {type: actionTypes.DELETE_DISH, dish}
};

export const fetchDishRequest = () => {
    return {type: actionTypes.FETCH_DISH_REQUEST}
};

export const fetchDishSuccess = () => {
    return {type: actionTypes.FETCH_DISH_SUCCESS}
};

export const fetchDishFailure = error => {
    return {type: actionTypes.FETCH_DISH_FAILURE, error}
};

export const placeOrder = () => {
    return {type: actionTypes.PLACE_ORDER}
};

export const closeForm = () => {
    return {type: actionTypes.CLOSE_FORM}
};

export const requestCartOrder = (event, order, price, contacts) => {
    event.preventDefault(event);
        const newObj = {};
        newObj.contacts = contacts;
        newObj.order = order;
        newObj.price = price;
        console.log(newObj);
        return dispatch => {
            dispatch(fetchDishRequest());
            axios.post('/orders.json', newObj).then(response => {
                console.log(response.data);
                dispatch(fetchDishSuccess(response.data))
            }, error => dispatch(fetchDishFailure(error)))
        }
};