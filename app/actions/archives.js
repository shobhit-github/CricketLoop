import {push} from 'react-router-redux';
import {archives} from '../services';

import * as types from '../types';


function archivesFetch() {
    return {
        type: types.ARCHIVES
    };
}

function archivesFetchSuccess(message) {
    return {
        type: types.ARCHIVES_SUCCESS,
        message
    };
}

function archivesFetchFail(message) {
    return {
        type: types.ARCHIVES_ERROR,
        message
    };
}

export function Getarchives(data) {
    return (dispatch) => {
        dispatch(archivesFetch());
        return archives().archiveslisting({data})
            .then((response) => dispatch(archivesFetchSuccess(response.data)))
            .catch((err) => dispatch(archivesFetchFail("Fail " + err)));
    };
}

