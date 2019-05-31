import {push} from 'react-router-redux';
import {allovers} from '../services';

import * as types from '../types';


function ballbyballFetch() {
    return {
        type: types.BALLBYBALL
    };
}

function ballbyballFetchSuccess(message) {
    return {
        type: types.BALLBYBALL_SUCCESS,
        message
    };
}

function ballbyballFetchFail(message) {
    return {
        type: types.BALLBYBALL_ERROR,
        message
    };
}

function ballbyballLiveFetch() {
    return {
        type: types.BALLBYBALL_LIVE
    };
}

function ballbyballLiveFetchSuccess(message) {
    return {
        type: types.BALLBYBALL_LIVE_SUCCESS,
        message
    };
}

function ballbyballLiveFetchFail(message) {
    return {
        type: types.BALLBYBALL_LIVE_ERROR,
        message
    };
}

export function Getoverlive(data) {

    return (dispatch) => {
        dispatch(ballbyballLiveFetch());
        return allovers().ballbyballliveover(data)
            .then((response) => dispatch(ballbyballLiveFetchSuccess(response.data)))
            .catch((err) => dispatch(ballbyballLiveFetchFail("Fail " + err)));
    };
}

export function Getover(data) {

    return (dispatch) => {
        dispatch(ballbyballFetch());
        return allovers().ballbyballover(data)
            .then((response) => dispatch(ballbyballFetchSuccess(response.data)))
            .catch((err) => dispatch(ballbyballFetchFail("Fail " + err)));
    };
}

