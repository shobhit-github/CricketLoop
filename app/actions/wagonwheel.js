import {push} from 'react-router-redux';
import {wagonwheel} from '../services';

import * as types from '../types';

function wagonWheel() {
    return {
        type: types.WAGON_WHEEL
    };
}

function wagonWheelSuccess(message) {
    return {
        type: types.WAGON_WHEEL_SUCCESS,
        message
    };
}

function wagonWheelFail(message) {
    return {
        type: types.WAGON_WHEEL_ERROR,
        message
    };
}


export function GetWagonWheel(data) {
    return (dispatch) => {
        dispatch(wagonWheel());
        return wagonwheel().wagonbyid(data)
            .then((response) => dispatch(wagonWheelSuccess(response.data)))
            .catch((err) => dispatch(wagonWheelFail("Fail " + err)));
    };
}




