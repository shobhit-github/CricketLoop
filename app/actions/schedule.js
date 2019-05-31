import {push} from 'react-router-redux';
import {schedule} from '../services';

import * as types from '../types';


function scheduleFetch() {
    return {
        type: types.SCHEDULE
    };
}

function scheduleFetchSuccess(message) {
    return {
        type: types.SCHEDULE_SUCCESS,
        message
    };
}

function scheduleFetchFail(message) {
    return {
        type: types.SCHEDULE_ERROR,
        message
    };
}

export function Getschedule() {
    return (dispatch) => {
        dispatch(scheduleFetch());
        return schedule().schduleList({})
            .then((response) => dispatch(scheduleFetchSuccess(response.data)))
            .catch((err) => dispatch(scheduleFetchFail("Fail " + err)));
    };
}

