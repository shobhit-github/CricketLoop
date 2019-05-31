import * as types from '../types';

/*
 * Message store for global messages, i.e. Network messages / Redirect messages
 * that need to be communicated on the page itself. Ideally
 * messages/notifications should appear within the component to give the user
 * more context. - My 2 cents.
 */
export default function ballbyball(state = {}, action) {
    switch (action.type) {
        case types.BALLBYBALL_LIVE:
            return {...state, fetching: true, fetched: false};
        case types.BALLBYBALL_LIVE_SUCCESS:
            return {...state, live_ballbyball_message: action.message, fetching: false, fetched: true};
        case types.BALLBYBALL_LIVE_ERROR:
            return {...state, live_bb_err: action.message, fetching: false, fetched: false};
        case types.BALLBYBALL:
            return {...state, fetching: true, fetched: false};
        case types.BALLBYBALL_SUCCESS:
            return {...state, message: action.message, fetching: false, fetched: true};
        case types.BALLBYBALL_ERROR:
            return {...state, err: action.message, fetching: false, fetched: false};
        default:
            return state;
    }
}
