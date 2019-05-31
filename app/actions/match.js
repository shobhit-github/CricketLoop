import {push} from 'react-router-redux';
import {matches} from '../services';

import * as types from '../types';


function matchFetch() {
    return {
        type: types.MATCH
    };
}

function matchFetchSuccess(message) {
    return {
        type: types.MATCH_SUCCESS,
        message
    };
}

function matchFetchFail(message) {
    return {
        type: types.MATCH_ERROR,
        message
    };
}

export function GetMatches(id) {
    return (dispatch) => {
        dispatch(matchFetch());
        return matches().recentapilist({})
            .then((response) => dispatch(matchFetchSuccess(response.data)))
            .catch((err) => dispatch(matchFetchFail("Fail " + err)));
    };
}

