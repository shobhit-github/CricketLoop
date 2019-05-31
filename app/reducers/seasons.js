import * as types from '../types';

/*
 * Message store for global messages, i.e. Network messages / Redirect messages
 * that need to be communicated on the page itself. Ideally
 * messages/notifications should appear within the component to give the user
 * more context. - My 2 cents.
 */

export default function getSeasonsApi(state = {}, action) {
    switch (action.type) {
        case types.SEASONS:
            return {...state, fetching: true, fetched: false};
        case types.SEASONS_SUCCESS:
            return {...state, season_lists: action.message, fetching: false, fetched: true};
        case types.SEASONS_ERROR:
            return {...state, err: action.message, fetching: false, fetched: false};

        case types.SEASONS_ID:
            return {...state, fetching: true, fetched: false};
        case types.SEASONS_ID_SUCCESS:
            return {...state, season_id_lists: action.message, fetching: false, fetched: true};
        case types.SEASONS_ID_ERROR:
            return {...state, err_id: action.message, fetching: false, fetched: false};

        case types.ALLMATCH:
            return {...state, fetching: true, fetched: false};
        case types.ALLMATCH_SUCCESS:
            return {...state, season_allmatch: action.message, fetching: false, fetched: true};
        case types.ALLMATCH_ERROR:
            return {...state, err_id: action.message, fetching: false, fetched: false};

        case types.ALLSEASON:
            return {...state, fetching: true, fetched: false};
        case types.ALLSEASON_SUCCESS:
            return {...state, season_data: action.message, fetching: false, fetched: true};
        case types.ALLSEASON_ERROR:
            return {...state, err_id: action.message, fetching: false, fetched: false};

        default:
            return state;
    }
}
  
