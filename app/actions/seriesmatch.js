import {push} from 'react-router-redux';
import {seasons} from '../services';

import * as types from '../types';


function seasonsFetch() {
    return {
        type: types.SEASONS
    };
}

function seasonsFetchSuccess(message) {
    return {
        type: types.SEASONS_SUCCESS,
        message
    };
}

function seasonsFetchFail(message) {
    return {
        type: types.SEASONS_ERROR,
        message
    };
}

function seasonsbyIdFetch() {
    return {
        type: types.SEASONS_ID
    };
}

function seasonsbyIdFetchSuccess(message) {
    return {
        type: types.SEASONS_ID_SUCCESS,
        message
    };
}

function seasonsbyIdFetchFail(message) {
    return {
        type: types.SEASONS_ID_ERROR,
        message
    };
}

function AllMatchFetch() {
    return {
        type: types.ALLMATCH
    };
}

function AllMatchFetchSuccess(message) {
    return {
        type: types.ALLMATCH_SUCCESS,
        message
    };
}

function AllMatchFetchFail(message) {
    return {
        type: types.ALLMATCH_ERROR,
        message
    };
}

function AllSeasonFetch() {
    return {
        type: types.ALLSEASON
    };
}

function AllSeasonFetchSuccess(message) {
    return {
        type: types.ALLSEASON_SUCCESS,
        message
    };
}

function AllSeasonFetchFail(message) {
    return {
        type: types.ALLSEASON_ERROR,
        message
    };
}

export function Getseasons() {
    return (dispatch) => {
        dispatch(seasonsFetch());
        return seasons().seasonsService({})
            .then((response) => dispatch(seasonsFetchSuccess(response.data)))
            .catch((err) => dispatch(seasonsFetchFail("Fail " + err)));
    };
}

export function getSeasonsById(data) {
    return (dispatch) => {
        dispatch(seasonsbyIdFetch());
        return seasons().seasonsbyid(data)
            .then((response) => dispatch(seasonsbyIdFetchSuccess(response.data)))
            .catch((err) => dispatch(seasonsbyIdFetchFail("Fail " + err)));
    };
}

export function getAllmatchDetail(data) {
    return (dispatch) => {
        dispatch(AllMatchFetch());
        return seasons().allmatchdetail(data)
            .then((response) => dispatch(AllMatchFetchSuccess(response.data)))
            .catch((err) => dispatch(AllMatchFetchFail("Fail " + err)));
    };
}

export function getAllseasonDetail() {
    return (dispatch) => {
        dispatch(AllSeasonFetch());
        return seasons().getallseasonmatch({})
            .then((response) => dispatch(AllSeasonFetchSuccess(response.data)))
            .catch((err) => dispatch(AllSeasonFetchFail("Fail " + err)));
    };
}

