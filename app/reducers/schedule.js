import * as types from '../types';

/*
 * Message store for global messages, i.e. Network messages / Redirect messages
 * that need to be communicated on the page itself. Ideally
 * messages/notifications should appear within the component to give the user
 * more context. - My 2 cents.
 */
/* export function message(state = {}, action) {
  switch (action.type) {
    
    default:
      return state;
  }
}
 */
export default function scheduleReducer(state = {}, action) {
    switch (action.type) {
        case types.SCHEDULE:
            return {...state, fetching: true, fetched: false};
        case types.SCHEDULE_SUCCESS:
            return {...state, message: action.message, fetching: false, fetched: true};
        case types.SCHEDULE_ERROR:
            return {...state, err: action.message, fetching: false, fetched: false};
        default:
            return state;
    }
}
