import * as types from '../types';

/*
 * Message store for global messages, i.e. Network messages / Redirect messages
 * that need to be communicated on the page itself. Ideally
 * messages/notifications should appear within the component to give the user
 * more context. - My 2 cents.
 */

export default function getWagonWheel(state = {}, action) {
    switch (action.type) {
        case types.WAGON_WHEEL:
            return {...state, data: action.message, fetching: true, fetched: false};
        case types.WAGON_WHEEL_SUCCESS:
            return {...state, data: action.message, fetching: false, fetched: true};
        case types.WAGON_WHEEL_ERROR:
            return {...state, err: action.message, fetching: false, fetched: false};
        default:
            return state;
    }
}
  
