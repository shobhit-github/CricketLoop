import {push} from 'react-router-redux';
import {allnews} from '../services';

import * as types from '../types';


function newsFetch() {
    return {
        type: types.NEWS
    };
}

function newsFetchSuccess(message) {
    return {
        type: types.NEWS_SUCCESS,
        message
    };
}

function newsFetchFail(message) {
    return {
        type: types.NEWS_ERROR,
        message
    };
}

export function Getnews(data) {
    return (dispatch) => {
        dispatch(newsFetch());
        return allnews().newslisting({data})
            .then((response) => dispatch(newsFetchSuccess(response.data)))
            .catch((err) => dispatch(newsFetchFail("Fail " + err)));
    };
}

