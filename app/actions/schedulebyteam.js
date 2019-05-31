import {push} from 'react-router-redux';
import {teamschedule} from '../services';

import * as types from '../types';


function FetchTeamSchedule() {
    return {
        type: types.TEAMSCHEDULE
    };
}

function FetchTeamScheduleSuccess(message) {
    return {
        type: types.TEAMSCHEDULE_SUCCESS,
        message
    };
}

function FetchTeamScheduleFail(message) {
    return {
        type: types.TEAMSCHEDULE_ERROR,
        message
    };
}

export function GetSchedulebyTeamid() {
    return (dispatch) => {
        dispatch(FetchTeamSchedule());
        return teamschedule().teamidmatch({})
            .then((response) => dispatch(FetchTeamScheduleSuccess(response.data)))
            .catch((err) => dispatch(FetchTeamScheduleFail("Fail " + err)));
    };
}

