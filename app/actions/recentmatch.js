import {push} from 'react-router-redux';
import {recentmatch} from '../services';

import * as types from '../types';


function recentmatchFetch() {
    return {
        type: types.RECENTMATCH
    };
}

function recentmatchFetchSuccess(message) {
    return {
        type: types.RECENTMATCH_SUCCESS,
        message
    };
}

function recentmatchFetchFail(message) {
    return {
        type: types.RECENTMATCH_ERROR,
        message
    };
}

function recentmatchapiFetch() {
    return {
        type: types.RECENTMATCHAPI
    };
}

function recentmatchapiFetchSuccess(message) {
    return {
        type: types.RECENTMATCHAPI_SUCCESS,
        message
    };
}

function recentmatchapiFetchFail(message) {
    return {
        type: types.RECENTMATCHAPI_ERROR,
        message
    };
}

function matchFetch() {
    return {
        type: types.MATCHFECTCH
    };
}

function matchFetchSuccess(message) {
    return {
        type: types.MATCHFECTCH_SUCCESS,
        message
    };
}

function matchFetchFail(message) {
    return {
        type: types.MATCHFECTCH_ERROR,
        message
    };
}

function mFetch() {
    return {
        type: types.MFETCH
    };
}

function mFetchSuccess(message) {
    return {
        type: types.MFETCH_SUCCESS,
        message
    };
}

function mFetchFail(message) {
    return {
        type: types.MFETCH_ERROR,
        message
    };
}

export function Getrecentmatchapi() {
    return (dispatch) => {
        dispatch(recentmatchapiFetch());
        return recentmatch().recentapilist({})
            .then((response) => dispatch(recentmatchapiFetchSuccess(response.data)))
            .catch((err) => dispatch(recentmatchapiFetchFail("Fail " + err)));
    };
}

export function Getrecentmatch() {
    return (dispatch) => {
        dispatch(recentmatchFetch());
        return recentmatch().recentList({})
            .then((response) => dispatch(recentmatchFetchSuccess(response.data)))
            .catch((err) => dispatch(recentmatchFetchFail("Fail " + err)));
    };
}

export function getMatchDestails(data) {
    return (dispatch) => {
        dispatch(matchFetch());
        return recentmatch().login(data)
            .then((response) => dispatch(matchFetchSuccess(response.data)))
            .catch((err) => dispatch(matchFetchFail("Fail " + err)));
    };
}

export function getrecentfull() {
    return (dispatch) => {
        dispatch(mFetch());
        return recentmatch().getrecentfullcard({})
            .then((response) => dispatch(mFetchSuccess(response.data)))
            .catch((err) => dispatch(mFetchFail("Fail " + err)));
    };
}

