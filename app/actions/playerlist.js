import {push} from 'react-router-redux';
import {playerinfo} from '../services';

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


export function GetPlayerByCountry(data) {
    return (dispatch) => {
        dispatch(playerByCountry());
        return playersList().playerslist(data)
            .then((response) => dispatch(playerByCountrySuccess(response.data)))
            .catch((err) => dispatch(playerByCountryFail("Fail " + err)));
    };
}



