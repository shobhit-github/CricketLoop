import * as types from '../types';

/*
 * Message store for global messages, i.e. Network messages / Redirect messages
 * that need to be communicated on the page itself. Ideally
 * messages/notifications should appear within the component to give the user
 * more context. - My 2 cents.
 */

export default function getPlayerLists(state = {}, action) {
    switch (action.type) {
        case types.GET_PLAYERS:
            return {...state, playerkey: action.message, fetching: true, fetched: false};
        case types.GET_PLAYERS_SUCCESS:
            return {...state, playerkey: action.message, fetching: false, fetched: true};
        case types.GET_PLAYERS_ERROR:
            return {...state, err: action.message, fetching: false, fetched: false};

        case types.PLAYERINFO:
            return {...state, playerinfo: action.message, fetching: true, fetched: false};
        case types.PLAYERINFO_SUCCESS:
            return {...state, playerinfo: action.message, fetching: false, fetched: true};
        case types.PLAYERINFO_ERROR:
            return {...state, err: action.message, fetching: false, fetched: false};

        default:
            return state;
    }
}
  
