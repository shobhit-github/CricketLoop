import * as types from '../types';

/*
 * Message store for global messages, i.e. Network messages / Redirect messages
 * that need to be communicated on the page itself. Ideally
 * messages/notifications should appear within the component to give the user
 * more context. - My 2 cents.
 */

export default function countryReducer(state = {}, action) {
    switch (action.type) {
        case types.COUNTRYINFO:
            return {...state, countrykey: action.countrykey};
        /* case types.COUNTRYINFO_SUCCESS:
          return {...state, message: action.message, fetching: false, fetched: true, countryApi: [] };
        case types.COUNTRYINFO_ERROR:
          return {...state, err: action.message, fetching: false, fetched: false }; */
        default:
            return state;
    }
}
