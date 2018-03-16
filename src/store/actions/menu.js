import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchDishRequest = () => {
    return {type: actionTypes.FETCH_DISH_REQUEST}
};

export const fetchDishSuccess = dishes => {
    return {type: actionTypes.FETCH_DISH_SUCCESS, dishes}
};

export const fetchDishFailure = error => {
    return {type: actionTypes.FETCH_DISH_FAILURE, error}
};

export const requestDishes = () => {
    return dispatch => {
        dispatch(fetchDishRequest());
        axios.get('/menu.json').then(response => {
            dispatch(fetchDishSuccess(response.data))
        }, error => dispatch(fetchDishFailure(error)))
    }
};