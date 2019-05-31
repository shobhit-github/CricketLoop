import {push} from 'react-router-redux';
import {playersList} from '../services';

import * as types from '../types';


function playerByCountry() {
    return {
        type: types.GET_PLAYERS
    };
}

function playerByCountrySuccess(message) {
    return {
        type: types.GET_PLAYERS_SUCCESS,
        message
    };
}

function playerByCountryFail(message) {
    return {
        type: types.GET_PLAYERS_ERROR,
        message
    };
}

function playerById() {
    return {
        type: types.PLAYERINFO
    };
}

function playerByIdSuccess(message) {
    return {
        type: types.PLAYERINFO_SUCCESS,
        message
    };
}

function playerByIdFail(message) {
    return {
        type: types.PLAYERINFO_ERROR,
        message
    };
}


export function GetPlayerByCountry(data) {
    return (dispatch) => {
        dispatch(playerByCountry());
        return playersList().playerslist(data)
            .then((response) => dispatch(playerByCountrySuccess(response.data)))
            .catch((err) => dispatch(playerByCountryFail("Fail " + err)));
    };
}

export function GetPlayerById(data) {
    return (dispatch) => {
        dispatch(playerById());
        return playersList().playerdetails(data)
            .then((response) => dispatch(playerByIdSuccess(response.data)))
            .catch((err) => dispatch(playerByIdFail("Fail " + err)));
    };
}




