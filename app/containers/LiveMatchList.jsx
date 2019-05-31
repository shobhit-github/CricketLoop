import React, {Component} from 'react';
import {Grid, Row, Col, Clearfix, FormGroup, DropdownButton, ControlLabel, Table, MenuItem} from 'react-bootstrap';
import Countdown from 'react-countdown-now';
/* import PropTypes from 'prop-types'; */
import classNames from 'classnames/bind';
import styles from '../css/components/liveListing';
import FA from 'react-fontawesome';
import Asidebar from '../components/Asidebar';

const cx = classNames.bind(styles);


let LiveListing,
    FilterMatchesLive,
    FilterMatchesLiveCompleted = [],
    matcStatus = null,
    Statoverview = null,
    propsList,
    propsList_2,
    renderer,
    newLiveArray_2 = [],
    RecentMatchesUpcoming = [],
    RecentMatchesCompleted = [],
    RecentMatchesongoing = [],
    livePlayingId = [],
    LiveMatchID = [];

class LiveMatchList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LiveMachListed: [],
            LvMatches: [],
            nextMatch: [],
            Lvongoing: [],
            LvCompleted: []
        };
        /* this.handleUpdate = this.handleUpdate.bind(this) */
    }

    componentWillReceiveProps(nextProps) {

        /* Countdown timer */
        const Completionist = () => <span className="text-info">Match will start soon!!</span>;

        // Renderer callback with condition
        renderer = ({days, hours, minutes, seconds, completed}) => {
            if (completed) {
                // Render a completed state
                return <Completionist/>;
            } else {
                // Render a countdown
                return <span
                    className={cx('timmer-count')}>{days != '0' ? (days > '0' && hours == '00' ? days + ' day' : days + 'd : ' + hours + 'h') : (hours != '00' ? hours + "h : " + minutes + 'm' : (minutes != '00' ? minutes + 'm : ' + seconds + 's' : seconds + 's'))}</span>;
            }
        };
        /* Countdown timer END */

        /* Live */
        if (nextProps && nextProps.isPlaying && Object.keys(nextProps.isPlaying).length > 0) {
            for (var values of nextProps.isPlaying) {
                if ((values.details.status == 'started' && values.details.status_overview == 'pre_match') || (values.details.status == 'notstarted' && values.details.status_overview == 'pre_match') || (values.details.status == 'started' && values.details.status_overview != 'stumps')) {
                    var getKey = values.details.key;
                    if (livePlayingId.indexOf(getKey) == -1) {
                        livePlayingId = [...livePlayingId, getKey];
                    }
                    this.setState({LvMatches: nextProps.isPlaying});
                }
            }

        }
        /* Resent match api with live */
        if (nextProps && nextProps.liveInit && Object.keys(nextProps.liveInit).length > 0) {
            this.setState({LiveMachListed: nextProps.liveInit});
        }
        /* Completed Match */
        if (nextProps && nextProps.liveInit && Object.keys(nextProps.liveInit).length > 0) {
            var matchkeyCompleted = 0,
                matchkeygoing = 0,
                matchkeyUpcoming = 0;
            for (let value of (nextProps.liveInit)) {
                if (value.status == 'completed') {
                    RecentMatchesCompleted[matchkeyCompleted] = value
                    matchkeyCompleted++
                } else if (value.status == 'notstarted' && value.status_overview != "pre_match" && value.status_overview != "stumps") {
                    RecentMatchesUpcoming[matchkeyUpcoming] = value
                    matchkeyUpcoming++
                } else if ((value.status == 'notstarted' || value.status == 'started') && value.status_overview == "stumps") {
                    RecentMatchesongoing[matchkeygoing] = value
                    matchkeygoing++
                }
                this.setState({
                    nextMatch: RecentMatchesUpcoming,
                    Lvongoing: RecentMatchesongoing,
                    LvCompleted: RecentMatchesCompleted
                });
            }
        }
    }

    getImage(image, altParam, classValue) {
        let r_image;
        try {
            r_image = require(`../images/teams_flag/${image.toLowerCase()}_thumb.png`);
        } catch (ex) {
            r_image = require('../images/teams_flag/dumm_thumb.png');
        }
        return (<img src={r_image} alt={altParam} className={classValue}/>)
    }

    timeAndDate(timestamp) {
        var date = new Date(timestamp * 1000);
        var hours = date.getHours();
        var minutes = date.getMinutes();
        if (minutes == 0) {
            minutes = '00'
        }
        var h = hours % 12 || 12;
        var ampm = (hours < 12 || hours === 24) ? "AM" : "PM",
            StartTime = h + ':' + minutes + ' ' + ampm,
            date_stamp = date.toDateString(),
            new_date = date_stamp + ', ' + StartTime;
        return new_date;
    }


    LiveListing() {
        if (this.state.LvMatches && Object.keys(this.state.LvMatches).length > 0) {
            return this.state.LvMatches.map((LiveMatchListing, index) => (
                    (LiveMatchListing.details.status_overview == 'pre_match' && LiveMatchListing.details.status == 'notstarted') || (LiveMatchListing.details.status_overview == 'pre_match' && LiveMatchListing.details.status == 'started') || (LiveMatchListing.details.status == 'started' && LiveMatchListing.details.status_overview != "stumps") ?
                        <Col className={cx('container-listing')} key={index}>
                            <FormGroup className={cx('h5', 'sub-title')}>
                                <a href={`/series_details/${LiveMatchListing.details.season.key}`}
                                   className="text-black"><span>{LiveMatchListing.details.season.name}</span></a>
                            </FormGroup>
                            <Col className={cx('listing-live')}>
                                <Col className={cx('listing-group')}>
                                    <Col className="h5"><a href={`/series_details/${LiveMatchListing.details.season.key}`}
                                                           className="text-black">{LiveMatchListing.details.title} <span
                                        className={cx('live-icon')}></span></a></Col>
                                    <Col className="">
                                        <small>{this.timeAndDate(LiveMatchListing.details.start_date.timestamp)} at {LiveMatchListing.details.venue}</small>
                                    </Col>
                                    <a href={`/live_match_detail/${LiveMatchListing.details.key}`}
                                       className={cx('anger_listing')}>
                                        {/* repeter */}
                                        <Col className={cx('resp-fluid')}>
                                            {
                                                LiveMatchListing.details.innings && Object.keys(LiveMatchListing.details.innings).length > 2 ?
                                                    <Col className={cx('cric-pan', 'cric-pan-table', 'min-sized-table')}>
                                                        <Col className={cx('cric-pan-tr')}>
                                                            <Col className={cx('team-flg', 'cric-pan-td')}>
                                                                {this.getImage(LiveMatchListing.details.teams.a.key, "flag", cx('img-flg'))}
                                                            </Col>
                                                            <Col className={cx('cric-pan-td', 'text-black')}>
                                                                {
                                                                    <b className={cx('h4')}>{LiveMatchListing.details.teams.a.name}</b>}
                                                            </Col>
                                                            <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                            <span className={cx('h4')}>
                                                                {
                                                                    LiveMatchListing.details.innings ?
                                                                        ((LiveMatchListing.details.innings.a_1 && LiveMatchListing.details.innings.a_1.runs) ? LiveMatchListing.details.innings.a_1.runs + ',' : '') + LiveMatchListing.details.innings.a_2.runs + ' / ' + LiveMatchListing.details.innings.a_2.wickets + ' (' + LiveMatchListing.details.innings.a_2.overs + ' Ovr)' : '-'
                                                                }
                                                            </span>
                                                            </Col>
                                                        </Col>

                                                        <Col className={cx('cric-pan-tr')}>
                                                            <Col className={cx('team-flg', 'cric-pan-td')}>
                                                                {this.getImage(LiveMatchListing.details.teams.b.key, "flag", cx('img-flg'))}
                                                            </Col>
                                                            <Col className={cx('cric-pan-td', 'text-black')}>
                                                                {
                                                                    <b className={cx('h4')}>{LiveMatchListing.details.teams.b.name}</b>}
                                                            </Col>
                                                            <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                            <span className={cx('h4')}>
                                                                {
                                                                    LiveMatchListing.details.innings ?
                                                                        ((LiveMatchListing.details.innings.b_1 && LiveMatchListing.details.innings.b_1.runs) ? LiveMatchListing.details.innings.b_1.runs + ',' : '') + LiveMatchListing.details.innings.b_2.runs + ' / ' + LiveMatchListing.details.innings.b_2.wickets + ' (' + LiveMatchListing.details.innings.b_2.overs + ' Ovr)' : '-'
                                                                }
                                                            </span>
                                                            </Col>
                                                        </Col>
                                                    </Col>
                                                    : (
                                                        <Col className={cx('cric-pan', 'cric-pan-table', 'min-sized-table')}>
                                                            <Col className={cx('cric-pan-tr')}>
                                                                <Col className={cx('team-flg', 'cric-pan-td')}>
                                                                    {this.getImage(LiveMatchListing.details.teams.a.key, "flag", cx('img-flg'))}
                                                                </Col>
                                                                <Col className={cx('cric-pan-td', 'text-black')}>
                                                                    {
                                                                        <b className={cx('h4')}>{LiveMatchListing.details.teams.a.name}</b>}
                                                                </Col>
                                                                <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                                <span className={cx('h4')}>
                                                                    {
                                                                        LiveMatchListing.details.innings && LiveMatchListing.details.innings.a_1 ?
                                                                            LiveMatchListing.details.innings.a_1.runs + ' /' + LiveMatchListing.details.innings.a_1.wickets + '(' + LiveMatchListing.details.innings.a_1.overs + ' Ovr)'
                                                                            : '-'
                                                                    }

                                                                </span>
                                                                </Col>
                                                            </Col>

                                                            <Col className={cx('cric-pan-tr')}>
                                                                <Col className={cx('team-flg', 'cric-pan-td')}>
                                                                    {this.getImage(LiveMatchListing.details.teams.b.key, "flag", cx('img-flg'))}
                                                                </Col>
                                                                <Col className={cx('cric-pan-td', 'text-black')}>
                                                                    {
                                                                        <b className={cx('h4')}>{LiveMatchListing.details.teams.b.name}</b>}
                                                                </Col>
                                                                <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                                <span className={cx('h4')}>
                                                                    {
                                                                        LiveMatchListing.details.innings && LiveMatchListing.details.innings.b_1 ?
                                                                            LiveMatchListing.details.innings.b_1.runs + ' /' + LiveMatchListing.details.innings.b_1.wickets + '(' + LiveMatchListing.details.innings.b_1.overs + ' Ovr)'
                                                                            : '-'
                                                                    }
                                                                </span>
                                                                </Col>
                                                            </Col>
                                                        </Col>
                                                    )
                                            }
                                            <Col className={cx('cric-status-bx')}>
                                            <span className={cx('text-primary', 'text-capitalize')}>
                                                <b>
                                                    {
                                                        (LiveMatchListing && LiveMatchListing.details.status == 'started') ?
                                                            (LiveMatchListing && LiveMatchListing.details.status_overview) ?
                                                                (LiveMatchListing.details.status_overview == "in_play" ?
                                                                        returnMatchStatus(LiveMatchListing)
                                                                        : (
                                                                            LiveMatchListing.details.status_overview == "pre_match" ?
                                                                                returnMatchStatus(LiveMatchListing)
                                                                                : LiveMatchListing.details.status_overview.split('_').join(' '))
                                                                )
                                                                : (LiveMatchListing.details.status)
                                                            : (
                                                                LiveMatchListing && LiveMatchListing.details.status_overview == 'pre_match' ?
                                                                    LiveMatchListing && LiveMatchListing.details.toss && LiveMatchListing.details.toss.str ?
                                                                        LiveMatchListing.details.toss.str
                                                                        : LiveMatchListing.details.msgs.delay ?
                                                                        LiveMatchListing.details.msgs.info && LiveMatchListing.details.msgs.info != ' ' ?
                                                                            LiveMatchListing.details.msgs.info : (
                                                                                <span className="text-warning">Match delay due to {LiveMatchListing.details.msgs.delay}</span>)
                                                                        : (
                                                                            <span>
                                                                                    <b>Starts in - </b>
                                                                                    <Countdown
                                                                                        date={(LiveMatchListing.details.start_date.timestamp * 1000)}
                                                                                        renderer={renderer}/>
                                                                                </span>
                                                                        ) : (
                                                                        LiveMatchListing.details.status_overview == 'result' ? LiveMatchListing.details.msgs.info ? LiveMatchListing.details.msgs.info : LiveMatchListing.details.msgs.result : LiveMatchListing.details.status_overview.split('_').join(' ')
                                                                    )
                                                            )
                                                    }
                                                </b>
                                            </span>
                                            </Col>
                                        </Col>
                                        {/* repeter END */}
                                    </a>
                                </Col>


                            </Col>
                        </Col>
                        : ''
                )
            )
        }
    }

    LivedbList() {
        if (this.state.LiveMachListed && Object.keys(this.state.LiveMachListed).length > 0) {
            return this.state.LiveMachListed.map((LiveMatchListing, index) => {
                    if (livePlayingId && Object.keys(livePlayingId).length > 0) {
                        var keyFound = true;
                        if (livePlayingId.indexOf(LiveMatchListing.key) == -1) {
                            keyFound = false
                        }
                    }
                    return (
                        !keyFound && ((LiveMatchListing.status_overview == 'pre_match' && LiveMatchListing.status == 'notstarted') || (LiveMatchListing.status_overview == 'pre_match' && LiveMatchListing.status == 'started') || (LiveMatchListing.status == 'started' && LiveMatchListing.status_overview != "stumps")) ?
                            <Col className={cx('container-listing')} key={index}>
                                <FormGroup className={cx('h5', 'sub-title')}>
                                    <a href={`/series_details/${LiveMatchListing.season.key}`}
                                       className="text-black"><span>{LiveMatchListing.season.name}</span></a>
                                </FormGroup>
                                <Col className={cx('listing-live')}>
                                    <Col className={cx('listing-group')}>
                                        <Col className="h5"><a href={`/series_details/${LiveMatchListing.season.key}`}
                                                               className="text-black">{LiveMatchListing.title} <span
                                            className={cx('live-icon')}></span></a></Col>
                                        <Col className="">
                                            <small>{this.timeAndDate(LiveMatchListing.start_date.timestamp)} at {LiveMatchListing.venue}</small>
                                        </Col>
                                        <a href={`/live_match_detail/${LiveMatchListing.key}`}
                                           className={cx('anger_listing')}>
                                            {/* repeter */}
                                            <Col className={cx('resp-fluid')}>
                                                {
                                                    LiveMatchListing.innings && Object.keys(LiveMatchListing.innings).length > 2 ?
                                                        <Col
                                                            className={cx('cric-pan', 'cric-pan-table', 'min-sized-table')}>
                                                            <Col className={cx('cric-pan-tr')}>
                                                                <Col className={cx('team-flg', 'cric-pan-td')}>
                                                                    {this.getImage(LiveMatchListing.teams.a.key, "flag", cx('img-flg'))}
                                                                </Col>
                                                                <Col className={cx('cric-pan-td', 'text-black')}>
                                                                    {
                                                                        <b className={cx('h4')}>{LiveMatchListing.teams.a.name}</b>}
                                                                </Col>
                                                                <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                                <span className={cx('h4')}>
                                                                    {(LiveMatchListing.innings && LiveMatchListing.innings.a_1 && LiveMatchListing.innings.a_1.runs) ? LiveMatchListing.innings.a_1.runs : '0'} , {(LiveMatchListing.innings.a_2 && LiveMatchListing.innings.a_2.runs) ? LiveMatchListing.innings.a_2.runs : '0'} / {(LiveMatchListing.innings.a_2 && LiveMatchListing.innings.a_2.wickets) ? LiveMatchListing.innings.a_2.wickets : '0'} ({(LiveMatchListing.innings.a_2 && LiveMatchListing.innings.a_2.overs) ? LiveMatchListing.innings.a_2.overs : '0'} Ovr)
                                                     </span>
                                                                </Col>
                                                            </Col>

                                                            <Col className={cx('cric-pan-tr')}>
                                                                <Col className={cx('team-flg', 'cric-pan-td')}>
                                                                    {this.getImage(LiveMatchListing.teams.b.key, "flag", cx('img-flg'))}
                                                                </Col>
                                                                <Col className={cx('cric-pan-td', 'text-black')}>
                                                                    {
                                                                        <b className={cx('h4')}>{LiveMatchListing.teams.b.name}</b>}
                                                                </Col>
                                                                <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                                <span className={cx('h4')}>
                                                                    {(LiveMatchListing.innings.b_1 && LiveMatchListing.innings.b_1.runs) ? LiveMatchListing.innings.b_1.runs : '0'}, {(LiveMatchListing.innings.b_2 && LiveMatchListing.innings.b_2.runs) ? LiveMatchListing.innings.b_2.runs : '0'} / {(LiveMatchListing.innings.b_2 && LiveMatchListing.innings.b_2.wickets) ? LiveMatchListing.innings.b_2.wickets : '0'} ({(LiveMatchListing.innings.b_2 && LiveMatchListing.innings.b_2.overs) ? LiveMatchListing.innings.b_2.overs : '0'} Ovr)
                                                             </span>
                                                                </Col>
                                                            </Col>
                                                        </Col>
                                                        : (
                                                            <Col
                                                                className={cx('cric-pan', 'cric-pan-table', 'min-sized-table')}>
                                                                <Col className={cx('cric-pan-tr')}>
                                                                    <Col className={cx('team-flg', 'cric-pan-td')}>
                                                                        {this.getImage(LiveMatchListing.teams.a.key, "flag", cx('img-flg'))}
                                                                    </Col>
                                                                    <Col className={cx('cric-pan-td', 'text-black')}>
                                                                        {
                                                                            <b className={cx('h4')}>{LiveMatchListing.teams.a.name}</b>}
                                                                    </Col>
                                                                    <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                                    <span className={cx('h4')}>
                                                                        {(LiveMatchListing.innings && LiveMatchListing.innings.a_1 && LiveMatchListing.innings.a_1.runs) ? LiveMatchListing.innings.a_1.runs : '0'} / {(LiveMatchListing.innings && LiveMatchListing.innings.a_1 && LiveMatchListing.innings.a_1.wickets) ? LiveMatchListing.innings.a_1.wickets : '0'} ({(LiveMatchListing.innings && LiveMatchListing.innings.a_1 && LiveMatchListing.innings.a_1.overs) ? LiveMatchListing.innings.a_1.overs : '0'} Ovr)
                                                                 </span>
                                                                    </Col>
                                                                </Col>

                                                                <Col className={cx('cric-pan-tr')}>
                                                                    <Col className={cx('team-flg', 'cric-pan-td')}>
                                                                        {this.getImage(LiveMatchListing.teams.b.key, "flag", cx('img-flg'))}
                                                                    </Col>
                                                                    <Col className={cx('cric-pan-td', 'text-black')}>
                                                                        {
                                                                            <b className={cx('h4')}>{LiveMatchListing.teams.b.name}</b>}
                                                                    </Col>
                                                                    <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                                    <span className={cx('h4')}>
                                                                        {(LiveMatchListing.innings && LiveMatchListing.innings.b_1 && LiveMatchListing.innings.b_1.runs) ? LiveMatchListing.innings.b_1.runs : '0'} / {(LiveMatchListing.innings && LiveMatchListing.innings.b_1 && LiveMatchListing.innings.b_1.wickets) ? LiveMatchListing.innings.b_1.wickets : '0'} ({(LiveMatchListing && LiveMatchListing.innings && LiveMatchListing.innings.b_1 && LiveMatchListing.innings.b_1.overs) ? LiveMatchListing.innings.b_1.overs : '0'} Ovr)
                                                                 </span>
                                                                    </Col>
                                                                </Col>
                                                            </Col>
                                                        )
                                                }
                                                <Col className={cx('cric-status-bx')}>
                                                <span className={cx('text-primary', 'text-capitalize')}>
                                                    <b>
                                                        {
                                                            (LiveMatchListing && LiveMatchListing && LiveMatchListing.status == 'started') ?
                                                                (LiveMatchListing && LiveMatchListing.status_overview) ?
                                                                    (LiveMatchListing.status_overview == "in_play" ?
                                                                        returnMatchStatus(LiveMatchListing)
                                                                        : (LiveMatchListing.status_overview.split('_').join(' ')))
                                                                    : (LiveMatchListing.status)
                                                                : (
                                                                    LiveMatchListing && LiveMatchListing.status_overview == 'pre_match' ?
                                                                        LiveMatchListing && LiveMatchListing.toss && LiveMatchListing.toss.str ?
                                                                            LiveMatchListing.toss.str
                                                                            : LiveMatchListing.msgs.delay ?
                                                                            LiveMatchListing.msgs.info ?
                                                                                LiveMatchListing.msgs.info
                                                                                : (
                                                                                    <span className="text-warning">Match delay due to {LiveMatchListing.msgs.delay}</span>)
                                                                            : (
                                                                                <span>
                                                                                        <b className="text-black">Match starts in - </b>
                                                                                        <Countdown
                                                                                            date={(LiveMatchListing.start_date.timestamp * 1000)}
                                                                                            renderer={renderer}/>
                                                                                    </span>
                                                                            )
                                                                        : (
                                                                            LiveMatchListing && LiveMatchListing.status_overview && LiveMatchListing.status_overview == 'result' ?
                                                                                LiveMatchListing.msgs.info ?
                                                                                    LiveMatchListing.msgs.info
                                                                                    : LiveMatchListing.msgs.result
                                                                                : LiveMatchListing.status == "completed" && LiveMatchListing.status_overview == "in_play" && LiveMatchListing && LiveMatchListing.msgs && LiveMatchListing.msgs.result && LiveMatchListing.msgs.result != null && LiveMatchListing.msgs.result != ' ' ?
                                                                                LiveMatchListing.msgs.result : LiveMatchListing.status_overview.split('_').join(' ')
                                                                        )
                                                                )
                                                        }
                                                    </b>
                                                </span>
                                                </Col>
                                            </Col>
                                            {/* repeter END */}
                                        </a>
                                    </Col>


                                </Col>
                            </Col>
                            : ''

                    )
                }
            )
        }
    }

    upcommings() {
        if (this.state.nextMatch && Object.keys(this.state.nextMatch).length > 0) {
            return this.state.nextMatch.map((UpcommingListing, index) => {
                    if (livePlayingId && Object.keys(livePlayingId).length > 0) {
                        var keyFound = true;
                        if (livePlayingId.indexOf(UpcommingListing.key) == -1) {
                            keyFound = false
                        }
                    }

                    return (
                        UpcommingListing.status_overview != 'pre_match' && UpcommingListing.status_overview != 'stumps' && !keyFound ?
                            <Col className={cx('container-listing')} key={index}>
                                <FormGroup className={cx('h5', 'sub-title')}>
                                    <span><a href={`/series_details/${UpcommingListing.season.key}`}
                                             className="text-black">{UpcommingListing.season.name}</a></span>
                                </FormGroup>
                                <Col className={cx('listing-live')}>
                                    <Col className={cx('listing-group')}>
                                        <Col className="h5"><a href={`/series_details/${UpcommingListing.season.key}`}
                                                               className="text-black">{UpcommingListing.title}</a></Col>
                                        <Col className="">
                                            <small>{this.timeAndDate(UpcommingListing.start_date.timestamp)} at {UpcommingListing.venue}</small>
                                        </Col>
                                        <a href={`/live_match_detail/${UpcommingListing.key}`}
                                           className={cx('anger_listing')}>
                                            {/* repeter */}
                                            <Col className={cx('resp-fluid')}>
                                                <Col className={cx('cric-pan', 'cric-pan-table', 'min-sized-table')}>
                                                    <Col className={cx('cric-pan-tr')}>
                                                        <Col className={cx('cric-pan-td')}>
                                                            <Col className={cx('cric-pan-table')}>
                                                                <Col className={cx('cric-pan-tr')}>
                                                                    <Col className={cx('cric-pan-td')}>
                                                                        {this.getImage(UpcommingListing.teams.a.key, "flag", cx('img-flg-board'))} {
                                                                        <b className={cx('h4', 'text-black')}>{UpcommingListing.teams.a.name}</b>}
                                                                    </Col>
                                                                </Col>

                                                                <Col className={cx('cric-pan-tr')}>
                                                                    <Col className={cx('cric-pan-td')}>
                                                                        {this.getImage(UpcommingListing.teams.b.key, "flag", cx('img-flg-board'))} {
                                                                        <b className={cx('h4', 'text-black')}>{UpcommingListing.teams.b.name}</b>}
                                                                    </Col>
                                                                </Col>
                                                            </Col>
                                                        </Col>
                                                        <Col className={cx('cric-pan-td', 'text-right')}>
                                                            <Col className={cx('match-timer-text')}>Match Starts in :</Col>
                                                            <Countdown
                                                                date={UpcommingListing.start_date.timestamp * 1000}
                                                                renderer={renderer}
                                                            />
                                                        </Col>
                                                    </Col>
                                                </Col>
                                                <Col className={cx('cric-status-bx')}>
                                                <span className={cx('text-warning')}>
                                                    <b> Upcoming match </b>
                                                </span>
                                                </Col>
                                            </Col>
                                            {/* repeter END */}
                                        </a>
                                    </Col>


                                </Col>
                            </Col>
                            : ''
                    )
                }
            )
        }
    }

    ongoings() {
        if (this.state.Lvongoing && Object.keys(this.state.Lvongoing).length > 0) {
            return this.state.Lvongoing.map((ongoingList, index) => {
                    if (livePlayingId && Object.keys(livePlayingId).length > 0) {
                        var keyFound = true;
                        if (livePlayingId.indexOf(ongoingList.key) == -1) {
                            keyFound = false
                        }
                    }
                    return (

                        (ongoingList.status_overview == "stumps" && (ongoingList.status == "notstarted" || ongoingList.status == "started") && !keyFound) ?
                            <Col className={cx('container-listing')} key={index}>
                                <FormGroup className={cx('h5', 'sub-title')}>
                                    <span><a href={`/series_details/${ongoingList.season.key}`}
                                             className="text-black">{ongoingList.season.name}</a></span>
                                </FormGroup>
                                <Col className={cx('listing-live')}>
                                    <Col className={cx('listing-group')}>
                                        <Col className="h5"><a href={`/series_details/${ongoingList.season.key}`}
                                                               className="text-black">{ongoingList.title}</a></Col>
                                        <Col className="">
                                            <small>{this.timeAndDate(ongoingList.start_date.timestamp)} at {ongoingList.venue}</small>
                                        </Col>
                                        <a href={`/live_match_detail/${ongoingList.key}`} className={cx('anger_listing')}>
                                            {/* repeter */}
                                            <Col className={cx('resp-fluid')}>
                                                {
                                                    ongoingList && ongoingList.innings && Object.keys(ongoingList.innings).length > 2 ?
                                                        <Col
                                                            className={cx('cric-pan', 'cric-pan-table', 'min-sized-table')}>
                                                            <Col className={cx('cric-pan-tr')}>
                                                                <Col className={cx('cric-pan-td')}>
                                                                    {this.getImage(ongoingList.teams.a.key, "flag", cx('img-flg-board'))} {
                                                                    <b className={cx('h4', 'text-black')}>{ongoingList.teams.a.name}</b>}
                                                                </Col>
                                                                <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                                <span className={cx('h4')}>
                                                                    {(ongoingList.innings.a_1 && ongoingList.innings.a_1.runs) ? ongoingList.innings.a_1.runs : '0'} , {(ongoingList.innings.a_2 && ongoingList.innings.a_2.runs) ? ongoingList.innings.a_2.runs : '0'} / {(ongoingList.innings.a_2 && ongoingList.innings.a_2.wickets) ? ongoingList.innings.a_2.wickets : '0'} ({(ongoingList.innings && ongoingList.innings.a_2 && ongoingList.innings.a_2.overs) ? ongoingList.innings.a_2.overs : '0'} Ovr)
                                                            </span>
                                                                </Col>
                                                            </Col>

                                                            <Col className={cx('cric-pan-tr')}>
                                                                <Col className={cx('cric-pan-td')}>
                                                                    {this.getImage(ongoingList.teams.b.key, "flag", cx('img-flg-board'))} {
                                                                    <b className={cx('h4', 'text-black')}>{ongoingList.teams.b.name}</b>}
                                                                </Col>
                                                                <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                                <span className={cx('h4')}>
                                                                    {(ongoingList.innings.b_1 && ongoingList.innings.b_1.runs) ? ongoingList.innings.b_1.runs : '0'}, {(ongoingList.innings.b_2 && ongoingList.innings.b_2.runs) ? ongoingList.innings.b_2.runs : '0'} / {(ongoingList.innings.b_2 && ongoingList.innings.b_2.wickets) ? ongoingList.innings.b_2.wickets : '0'} ({(ongoingList.innings && ongoingList.innings.b_2 && ongoingList.innings.b_2.overs) ? ongoingList.innings.b_2.overs : '0'} Ovr)
                                                            </span>
                                                                </Col>
                                                            </Col>
                                                        </Col>
                                                        : (
                                                            <Col
                                                                className={cx('cric-pan', 'cric-pan-table', 'min-sized-table')}>
                                                                <Col className={cx('cric-pan-tr')}>
                                                                    <Col className={cx('cric-pan-td')}>
                                                                        {this.getImage(ongoingList.teams.a.key, "flag", cx('img-flg-board'))} {
                                                                        <b className={cx('h4', 'text-black')}>{ongoingList.teams.a.name}</b>}
                                                                    </Col>
                                                                    <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                                    <span className={cx('h4')}>
                                                                        {ongoingList && ongoingList.innings ? (<span>
                                                                            {(ongoingList.innings.a_1 && ongoingList.innings.a_1.runs) ? ongoingList.innings.a_1.runs : '0'} / {(ongoingList.innings.a_1 && ongoingList.innings.a_1.wickets) ? ongoingList.innings.a_1.wickets : '0'} ({(ongoingList.innings && ongoingList.innings.a_1 && ongoingList.innings.a_1.overs) ? ongoingList.innings.a_1.overs : '0'} Ovr)
                                                                    </span>)
                                                                            : "-"
                                                                        }
                                                                    </span>
                                                                    </Col>
                                                                </Col>

                                                                <Col className={cx('cric-pan-tr')}>
                                                                    <Col className={cx('cric-pan-td')}>
                                                                        {this.getImage(ongoingList.teams.b.key, "flag", cx('img-flg-board'))} {
                                                                        <b className={cx('h4', 'text-black')}>{ongoingList.teams.b.name}</b>}
                                                                    </Col>
                                                                    <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                                    <span className={cx('h4')}>
                                                                        {
                                                                            ongoingList && ongoingList.innings ? (<span>
                                                                                {(ongoingList.innings.b_1 && ongoingList.innings.b_1.runs) ? ongoingList.innings.b_1.runs : '0'} / {(ongoingList.innings.b_1 && ongoingList.innings.b_1.wickets) ? ongoingList.innings.b_1.wickets : '0'} ({(ongoingList.innings && ongoingList.innings.b_1 && ongoingList.innings.b_1.overs) ? ongoingList.innings.b_1.overs : '0'} Ovr)
                                                                    </span>)
                                                                                : "-"
                                                                        }
                                                                    </span>
                                                                    </Col>
                                                                </Col>
                                                            </Col>
                                                        )
                                                }
                                                <Col className={cx('cric-status-bx')}>
                                                <span className={cx('text-warning')}>
                                                    <b> {ongoingList ? (returnMatchStatus(ongoingList)) : ' '} </b>
                                                </span>
                                                </Col>
                                            </Col>
                                            {/* repeter END */}
                                        </a>
                                    </Col>


                                </Col>
                            </Col>
                            : ''
                    )
                }
            )
        }
    }

    completedListing() {
        if (this.state.LvCompleted && Object.keys(this.state.LvCompleted).length > 0) {
            return this.state.LvCompleted.map((LiveMatchListing, index) => {
                    if (livePlayingId && Object.keys(livePlayingId).length > 0) {
                        var keyFound = true;
                        if (livePlayingId.indexOf(LiveMatchListing.key) == -1) {
                            keyFound = false
                        }
                    }

                    if (LiveMatchListing.status == "completed" && LiveMatchListing.status_overview == "result") {
                        return (
                            <Col className={cx('container-listing')} key={index}>
                                <FormGroup className={cx('h5', 'sub-title')}>
                                    <a href={`/series_details/${LiveMatchListing.season.key}`}
                                       className="text-black"><span>{LiveMatchListing.season.name}</span></a>
                                </FormGroup>
                                <Col className={cx('listing-live')}>
                                    <Col className={cx('listing-group')}>
                                        <Col className="h5"><a href={`/series_details/${LiveMatchListing.season.key}`}
                                                               className="text-black">{LiveMatchListing.title}</a></Col>
                                        <Col className="">
                                            <small>{this.timeAndDate(LiveMatchListing.start_date.timestamp)} at {LiveMatchListing.venue}</small>
                                        </Col>
                                        <a href={`/match_details/${LiveMatchListing.key}`} className={cx('anger_listing')}>
                                            {/* repeter */}
                                            <Col className={cx('resp-fluid')}>
                                                {
                                                    (LiveMatchListing.innings && Object.keys(LiveMatchListing.innings).length > 2) ?
                                                        <Col
                                                            className={cx('cric-pan', 'cric-pan-table', 'min-sized-table')}>
                                                            <Col className={cx('cric-pan-tr')}>
                                                                <Col className={cx('cric-pan-td')}>
                                                                    {this.getImage(LiveMatchListing.teams.a.key, "flag", cx('img-flg-board'))} {
                                                                    <b className={cx('h4', 'text-black')}>{LiveMatchListing.teams.a.name}</b>}
                                                                </Col>
                                                                <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                                <span className={cx('h4')}>
                                                                    {(LiveMatchListing.innings.a_1 && LiveMatchListing.innings.a_1.runs) ? LiveMatchListing.innings.a_1.runs : '0'} , {(LiveMatchListing.innings.a_2 && LiveMatchListing.innings.a_2.runs) ? LiveMatchListing.innings.a_2.runs : '0'} / {(LiveMatchListing.innings.a_2 && LiveMatchListing.innings.a_2.wickets) ? LiveMatchListing.innings.a_2.wickets : '0'} ({(LiveMatchListing.innings && LiveMatchListing.innings.a_2 && LiveMatchListing.innings.a_2.overs) ? LiveMatchListing.innings.a_2.overs : '0'} Ovr)
                                                                </span>
                                                                </Col>
                                                            </Col>

                                                            <Col className={cx('cric-pan-tr')}>
                                                                <Col className={cx('cric-pan-td')}>
                                                                    {this.getImage(LiveMatchListing.teams.b.key, "flag", cx('img-flg-board'))} {
                                                                    <b className={cx('h4', 'text-black')}>{LiveMatchListing.teams.b.name}</b>}
                                                                </Col>
                                                                <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                                <span className={cx('h4')}>
                                                                    {(LiveMatchListing.innings.b_1 && LiveMatchListing.innings.b_1.runs) ? LiveMatchListing.innings.b_1.runs : '0'}, {(LiveMatchListing.innings.b_2 && LiveMatchListing.innings.b_2.runs) ? LiveMatchListing.innings.b_2.runs : '0'} / {(LiveMatchListing.innings.b_2 && LiveMatchListing.innings.b_2.wickets) ? LiveMatchListing.innings.b_2.wickets : '0'} ({(LiveMatchListing.innings && LiveMatchListing.innings.b_2 && LiveMatchListing.innings.b_2.overs) ? LiveMatchListing.innings.b_2.overs : '0'} Ovr)
                                                                </span>
                                                                </Col>
                                                            </Col>
                                                        </Col>
                                                        : (
                                                            <Col
                                                                className={cx('cric-pan', 'cric-pan-table', 'min-sized-table')}>
                                                                <Col className={cx('cric-pan-tr')}>
                                                                    <Col className={cx('cric-pan-td')}>
                                                                        {this.getImage(LiveMatchListing.teams.a.key, "flag", cx('img-flg-board'))} {
                                                                        <b className={cx('h4', 'text-black')}>{LiveMatchListing.teams.a.name}</b>}
                                                                    </Col>
                                                                    <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                                    <span className={cx('h4')}>
                                                                        {(LiveMatchListing.innings.a_1 && LiveMatchListing.innings.a_1.runs) ? LiveMatchListing.innings.a_1.runs : '0'} / {(LiveMatchListing.innings.a_1 && LiveMatchListing.innings.a_1.wickets) ? LiveMatchListing.innings.a_1.wickets : '0'} ({(LiveMatchListing.innings && LiveMatchListing.innings.a_1 && LiveMatchListing.innings.a_1.overs) ? LiveMatchListing.innings.a_1.overs : '0'} Ovr)
                                                                </span>
                                                                    </Col>
                                                                </Col>

                                                                <Col className={cx('cric-pan-tr')}>
                                                                    <Col className={cx('cric-pan-td')}>
                                                                        {this.getImage(LiveMatchListing.teams.b.key, "flag", cx('img-flg-board'))} {
                                                                        <b className={cx('h4', 'text-black')}>{LiveMatchListing.teams.b.name}</b>}
                                                                    </Col>
                                                                    <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                                    <span className={cx('h4')}>
                                                                        {(LiveMatchListing.innings.b_1 && LiveMatchListing.innings.b_1.runs) ? LiveMatchListing.innings.b_1.runs : '0'} / {(LiveMatchListing.innings.b_1 && LiveMatchListing.innings.b_1.wickets) ? LiveMatchListing.innings.b_1.wickets : '0'} ({(LiveMatchListing.innings && LiveMatchListing.innings.b_1 && LiveMatchListing.innings.b_1.overs) ? LiveMatchListing.innings.b_1.overs : '0'} Ovr)
                                                                </span>
                                                                    </Col>
                                                                </Col>
                                                            </Col>
                                                        )
                                                }
                                                <Col className={cx('cric-status-bx')}>
                                                <span className={cx('text-info')}>
                                                    <b> {(this.state.LvCompleted[index].day ? ('Day ' + this.state.LvCompleted[index].day + ' : ') : ' ') + ' ' + this.state.LvCompleted[index].msgs.info}</b>
                                                </span>
                                                </Col>
                                            </Col>
                                            {/* repeter END */}
                                        </a>
                                    </Col>


                                </Col>
                            </Col>
                        )
                    } else {
                        return '';
                    }
                }
            )
        }
    }

    render() {
        return (
            <Grid className={cx('content-sect')}>
                <Row>
                    <Col md={8} sm={7} className={cx('resp-fluid')}>
                        <Col className={cx('panel-cric')}>
                            <Col className={cx('panel-heading')}>
                                <span className={cx('h4')}>
                                    Live Matches
                                </span>
                            </Col>
                            {this.LiveListing() && Object.keys(this.LiveListing()).length > 0 || this.upcommings() && Object.keys(this.upcommings()).length > 0 || this.completedListing() && Object.keys(this.completedListing()).length > 0 || this.LivedbList() && Object.keys(this.LivedbList()).length > 0 ?
                                <Col className={cx('panel-body')}>

                                    {this.LiveListing() ? this.LiveListing() : ''}

                                    {this.LivedbList() ? this.LivedbList() : ''}

                                    {this.ongoings() ? this.ongoings() : ''}

                                    {this.upcommings() ? this.upcommings() : ''}

                                    {this.completedListing() ? this.completedListing() : ''}

                                </Col>
                                :
                                <Col className={cx('panel-body')}>
                                    <div className={cx('preLoaderInner', 'contentLoader')}></div>
                                    }
                                </Col>
                            }
                        </Col>
                    </Col>

                    {/* Sidebar */}
                    <Asidebar/>
                    {/* Sidebar End */}
                </Row>
            </Grid>
        );
    }
}


function returnMatchStatus(values) {
    var returnVal;
    var {otherData} = values,
        stumpMatch = ' ';
    if (values && values.now && values.now && values.now.trail_by_str && values.now.trail_by_str != ' ' && values.now.trail_by_str != null) {
        var matchFormat = ' ';
        if (values.format && values.day && values.format == "test") {
            if (values && values.status_overview == "stumps") {
                stumpMatch = values.status_overview + ', ';
            }
            matchFormat = "Day " + values.day + " : "
        }
        returnVal = matchFormat + stumpMatch + values.now.trail_by_str
    } else if (values && values.now && values.now.req && values.now.req.runs_str && values.now.req.runs_str != ' ' && values.now.req.runs_str != null) {
        var matchFormat = ' ';
        if (values.format && values.day && values.format == "test") {
            if (values && values.status_overview == "stumps") {
                stumpMatch = values.status_overview + ', ';
            }
            matchFormat = "Day " + values.day + " : "
        }
        returnVal = matchFormat + stumpMatch + values.now.req.runs_str
    } else if (values && values.now && values.now.req && values.now.req.runs && values.now.req.runs && values.now.req.runs !== null) {
        returnVal = `${values.now.req.runs} runs in ${values.now.req.balls} balls`
    } else if (values && values.now && values.now.req && values.now.req.runs && values.now.req.target_runs && values.now.req.runs === 0 && values.now.req.target_runs > 10) {
        returnVal = `${values.teams[values.now.batting_team].name} Won`
    } else if (values && values.msgs && values.msgs.info && values.msgs.info !== "") {
        returnVal = values.msgs.info
    } else if (values && values.teams && values.toss && values.toss.str && values.toss.str !== null) {
        returnVal = `${values.teams[values.toss.won].key} won toss - chose to ${values.toss.decision}`
    } else if (values && values.details) {
        var detailsData = values.details;
        if (detailsData.now && detailsData.now.trail_by_str && detailsData.now.trail_by_str != ' ' && detailsData.now.trail_by_str != null) {
            var matchFormat = " ";
            if (detailsData.format && detailsData.day && detailsData.format == "test") {
                if (detailsData && detailsData.status_overview == "stumps") {
                    stumpMatch = detailsData.status_overview + ', ';
                }
                matchFormat = "Day " + detailsData.day + " : "
            }
            returnVal = matchFormat + stumpMatch + detailsData.now.trail_by_str
        } else if (detailsData && detailsData.now && detailsData.now.req && detailsData.now.req.runs_str && detailsData.now.req.runs_str != ' ' && detailsData.now.req.runs_str != null) {
            var matchFormat = " ";
            if (detailsData.format && detailsData.day && detailsData.format == "test") {
                if (detailsData && detailsData.status_overview == "stumps") {
                    stumpMatch = detailsData.status_overview + ', ';
                }
                matchFormat = "Day " + detailsData.day + " : "
            }
            returnVal = matchFormat + stumpMatch + detailsData.now.req.runs_str
        } else if (detailsData && detailsData.now && detailsData.now.req && detailsData.now.req.runs && detailsData.now.req.runs && detailsData.now.req.runs !== null) {
            returnVal = `${detailsData.now.req.runs} runs in ${detailsData.now.req.balls} balls`
        } else if (detailsData && detailsData.now && detailsData.now.req && detailsData.now.req.runs && detailsData.now.req.target_runs && detailsData.now.req.runs === 0 && detailsData.now.req.target_runs > 10) {
            returnVal = `${detailsData.teams[detailsData.now.batting_team].name} Won`
        } else if (detailsData && detailsData.msgs && detailsData.msgs.info && detailsData.msgs.info !== "") {
            returnVal = detailsData.msgs.info
        } else if (detailsData && detailsData.teams && detailsData.toss && detailsData.toss.str && detailsData.toss.str !== null) {
            returnVal = `${detailsData.teams[detailsData.toss.won].key} won toss - chose to ${detailsData.toss.decision}`
        }
    } else {
        return false
    }
    return returnVal;
}

export default LiveMatchList;