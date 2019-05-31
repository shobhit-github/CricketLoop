import * as types from '../types';

/*
 * Message store for global messages, i.e. Network messages / Redirect messages
 * that need to be communicated on the page itself. Ideally
 * messages/notifications should appear within the component to give the user
 * more context. - My 2 cents.
 */

export default function recentmatchReducer(state = {}, action) {
    switch (action.type) {
        case types.RECENTMATCH:
            return {...state, detailscomp: action.message, fetching: true, fetched: false};
        case types.RECENTMATCH_SUCCESS:
            return {...state, detailscomp: action.message, fetching: false, fetched: true};
        case types.RECENTMATCH_ERROR:
            return {...state, err: action.message, fetching: false, fetched: false};
        case types.RECENTMATCHAPI:
            return {...state, message: action.message, fetching: true, fetched: false};
        case types.RECENTMATCHAPI_SUCCESS:
            return {...state, message: action.message, fetching: false, fetched: true};
        case types.RECENTMATCHAPI_ERROR:
            return {...state, err: action.message, fetching: false, fetched: false};
        case types.MFETCH:
            return {...state, recentfull: action.message, fetching: true, fetched: false};
        case types.MFETCH_SUCCESS:
            return {...state, recentfull: action.message, fetching: false, fetched: true};
        case types.MFETCH_ERROR:
            return {...state, err: action.message, fetching: false, fetched: false};
        default:
            return state;
    }
}
