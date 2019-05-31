import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {fetchVoteData} from './fetch-data';
import {
    App,
    Vote,
    Dashboard,
    About,
    LoginOrRegister,
    Home,
    ScheduleMatch,
    ScheduleMatchList,
    MatchDetail,
    DetailsPage,
    LiveDetails,
    LiveMatchList,
    PlayerInfo,
    Archives,
    AllTeam,
    TeamDetail,
    SeriesListing,
    SeriesDetails,
    News,
    NewsDetail
} from './pages';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default (store) => {

    const requireAuth = (nextState, replace, callback) => {
        const {user: {authenticated}} = store.getState();
        if (!authenticated) {
            replace({
                pathname: '/login',
                state: {nextPathname: nextState.location.pathname}
            });
        }
        callback();
    };

    const redirectAuth = (nextState, replace, callback) => {
        const {user: {authenticated}} = store.getState();
        if (authenticated) {
            replace({ pathname: '/' });
        }
        callback();
    };

    return (
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="home" component={Home}/>
            <Route path="schedulematch" component={ScheduleMatch}/>
            <Route path="/schedule_detail_list" component={ScheduleMatchList}/>
            <Route path="/match_details/:id" component={MatchDetail}/>
            <Route path="/details/:id" component={DetailsPage}/>
            <Route path="/live_match_detail/:id" component={LiveDetails}/>
            <Route path="live_match_list" component={LiveMatchList}/>
            <Route path="/playerinfo/:id" component={PlayerInfo}/>
            <Route path="archives" component={Archives}/>
            <Route path="/allteam" component={AllTeam}/>
            <Route path="/team_detail/:id" component={TeamDetail}/>
            <Route path="/series_listing" component={SeriesListing}/>
            <Route path="/series_details/:matchId" component={SeriesDetails}/>
            <Route path="/news" component={News}/>
            <Route path="/news/:id" component={NewsDetail}/>
        </Route>
    );
};
