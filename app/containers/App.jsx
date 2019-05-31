import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Navigation from './Navigation';
import Footer from './Footer';

import * as recentMatchAction from '../actions/recentmatch';
import * as newsAction from '../actions/news';
import * as seasonAction from '../actions/seriesmatch';

import styles from '../css/main';
import PreLoader from '../images/preload.gif';

import ioOut_wagon_client from 'socket.io-client';

var wagonSocket = /* ioOut_wagon_client.connect('http://localhost:3003'); */   ioOut_wagon_client.connect('http://codex.cricloop.com:3003'); /* WAGON WHEEL */

const cx = classNames.bind(styles);

let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    RecentMatchesCompleted = [],
    initialComplete = [],
    RecentMatchesUpcoming = [],
    RecentMatchesLive = [],
    LiveListing,
    FilterMatchesLive,
    FilterMatchesLiveCompleted = [],
    matcStatus = null,
    Statoverview = null,
    liveInitial = [],
    mfetchdata = [],
    LiveCompleted = [],
    GlobalNews = [],
    AllMatchDetail = [],
    WagonWheel,
    getseasonstate_match;

var NewArry = [];
var MatchKey = [];
const update = []
import ioOut from 'socket.io-client';
/* var socketOut = */ /* ioOut.connect('http://localhost:3002'); */ /* ioOut.connect('http://localhost:3004'); */   /* <==== For local Live checking */
var socketOut = ioOut.connect('http://codex.cricloop.com:3002');
/* this socket connection is #welcome */
socketOut.on('welcome', function (data) {
    // Respond with a message including this clients' id sent from the server foms
});
socketOut.on('auth_match', function (data) {
    // Respond with a message including this clients' id sent from the server
});
socketOut.on('error', console.error.bind(console));
socketOut.on('message', console.log.bind(console));

function removeDuplicates(data) {

    try {
        var indexOfMatch = -1;
        data.forEach(function (item, val) {
            if (MatchKey.indexOf(item.match) === -1) {
                NewArry.push(item)
                MatchKey.push(item.match)
            } else {
                for (var i = 0; i < NewArry.length; i++) {
                    if (NewArry[i].match === item.match) {
                        NewArry[i] = item
                    }
                }
                /* NewArry[item] = item.match */
            }
        })
    } catch (error) {
        console.log('error: ', error);
    }
    return NewArry
}

/* Adding Loaded to check if the page is loaded setting such as false */
let loaded = false;

/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 *
 * Please refer to `routes.jsx` for the route config.
 *
 * A better explanation of react-router is available here:
 * https://github.com/rackt/react-router/blob/latest/docs/Introduction.md
 */
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recentLive: [],
            recentUpcoming: [],
            recentCompleted: [],
            LiveMachListed: [],
            LvMatches: [],
            recentLiveAll: null,
            wagonData: {},
            AllMatchDetail_all: [],
            getseasonstateMatch: null
        }
    }

    componentWillMount() {
        this.props.Getrecentmatch();
        this.props.Getnews();
        this.props.getAllseasonDetail();
        this.props.getrecentfull();
    }

    componentDidMount() {
        loaded = true;
        var temp = []
        this.setState({LiveMachListed: []})
        socketOut.on('thismattch', function (data) {
            temp.push(data.updates)
            this.handleUpdate(temp)
        }.bind(this));
        wagonSocket.on('wagon_updated', function (data) {
            this.updateWagon(data)
        }.bind(this)) /* WAGON WHEEL */
    }

    updateWagon(data) {
        if (data && data.match_id && data.det && Object.keys(data.det).length > 0) {
            this.setState({
                wagonData: data
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        const RecentMatch = nextProps.recentMatchFetch;
        if (RecentMatch && RecentMatch.detailscomp && RecentMatch.detailscomp && (RecentMatch.detailscomp.length > 0)) {
            let keyValue_live = 0;
            for (let value of (RecentMatch.detailscomp)) {
                /* matchSummury */
                liveInitial[keyValue_live] = value;
                keyValue_live++
            }

            let rcounter = 0;
            for (let value of (RecentMatch.recentfull)) {
                mfetchdata[rcounter] = value;
                rcounter++
            }

            GlobalNews = [];
            if (nextProps.newsState && nextProps.newsState.message && nextProps.newsState.message.length != 0) {
                GlobalNews = [...GlobalNews, ...nextProps.newsState.message];
                GlobalNews = GlobalNews.reverse();
            }
            this.setState({
                recentLiveAll: liveInitial,
                recentnews: GlobalNews,
                mfetch: mfetchdata
            })
        }
        if (nextProps && nextProps.getseasonstate && nextProps.getseasonstate.season_data) {
            if (nextProps.getseasonstate.season_data.ongoingSeasons && nextProps.getseasonstate.season_data != null) {
                getseasonstate_match = nextProps.getseasonstate.season_data;
            }
            this.setState({
                getseasonstateMatch: getseasonstate_match
            })
        }
    }

    handleUpdate(data) {
        let LiveMatches = [];
        this.setState({LiveMachListed: data});
        if (this.state.LiveMachListed) {
            let LiveMatches = removeDuplicates(this.state.LiveMachListed)
            this.setState({LvMatches: LiveMatches})
        }
    }

    render() {
        const {children, recentMatchFetch} = this.props;
        const childrenWithExtraProp = React.Children.map(children, child => {
            return React.cloneElement(child, {
                isPlaying: this.state.LvMatches,
                liveInit: this.state.recentLiveAll,
                livefull: this.state.mfetch,
                listingnews: this.state.recentnews,
                wagonDataProps: this.state.wagonData
            });
        });
        return (loaded) ? (
            <div className={cx('app')}>
                <Navigation LivePlayin={this.state.LvMatches} sesonsMatch={this.state.getseasonstateMatch}
                            liveInit={this.state.recentLiveAll} recentFetched={recentMatchFetch.fetched}/>
                {childrenWithExtraProp}
                <Footer/>
            </div>
        ) : (
            <div className={cx('preLoader')}>
            </div>
        );
    }
};

App.propTypes = {
    children: PropTypes.object
};

function mapStatetoProps(state) {
    return {
        recentMatchFetch: state.recentmatchReducer,
        newsState: state.newsReducer,
        getseasonstate: state.seasonReducer
    }
}

export default connect(mapStatetoProps, {...recentMatchAction, ...newsAction, ...seasonAction})(App);
