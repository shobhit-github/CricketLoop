import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import user from '../reducers/user';
import topic from '../reducers/topic';
import message from '../reducers/message';
import schedule from '../reducers/schedule';
import matchReducer from '../reducers/match';
import recentmatchReducer from '../reducers/recentmatch';
import countryReducer from '../reducers/countryinfo';
import seasonReducer from '../reducers/seasons';
import playerinfoReducer from '../reducers/playerinfo';
import playerListReducer from '../reducers/playerlist';
import ballbyballReducer from '../reducers/ballbyball';
import newsReducer from '../reducers/news';
import wagonwheelReducer from '../reducers/wagonwheel';
import archivesReducer from '../reducers/archives';
import * as types from '../types';

const isFetching = (state = false, action) => {
    switch (action.type) {
        case types.CREATE_REQUEST:
            return true;
        case types.REQUEST_SUCCESS:
        case types.REQUEST_FAILURE:
            return false;
        default:
            return state;
    }
};

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
    isFetching,
    topic,
    schedule,
    user,
    message,
    routing,
    matchReducer,
    recentmatchReducer,
    countryReducer,
    playerinfoReducer,
    playerListReducer,
    ballbyballReducer,
    newsReducer,
    seasonReducer,
    wagonwheelReducer,
    archivesReducer
});

export default rootReducer;
