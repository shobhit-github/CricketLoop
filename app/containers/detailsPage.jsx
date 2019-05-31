import React, {Component} from 'react';
import {connect} from 'react-redux';
import Countdown from 'react-countdown-now';
import {
    Grid,
    Row,
    Col,
    Clearfix,
    FormGroup,
    Tab,
    Table,
    Nav,
    NavItem,
    Label,
    NavDropdown,
    MenuItem,
    Tabs
} from 'react-bootstrap';
/* import PropTypes from 'prop-types'; */
import classNames from 'classnames/bind';
import WagonWheel from '../components/WagonWheel'; /* WAGON WHEEL #WagonCreateWeb */
import WagonWheelHighlight from '../components/WagonWheelHighlight'; /* WAGON WHEEL #WagonCreateWeb */
import styles from '../css/components/match_inner';

import Asidebar from '../components/Asidebar';

import FA from 'react-fontawesome';
import Helmet from 'react-helmet';
import * as scheduleAction from '../actions/schedulebyteam';

const cx = classNames.bind(styles);


var commentryLsiting,
    matchId = null,
    scoreboardListing,
    GlobalCard = null,
    MatchIstDate = null,
    scoreboardfrst = [],
    Statoverview = null,
    matcStatus = null,
    playerListing,
    MatchRoles,
    splitPlayer_c,
    splitPlayer_wk,
    scoreCard,
    teamList,
    matchStart_innings,
    mom_player,
    GlobalCard_Players,
    valueOrder,
    GlobalCard_battingorder,
    valueOrder_innings,
    inngs_score_1,
    inngs_score_2,
    batOrder,
    teamVal,
    teamVal_2,
    Bowl_innings,
    overListing,
    Current_innings,
    initialLoaded = true,
    matchId,
    initialLoader = 1,
    renderer,
    teamsPlaying;

function getImage(image, altParam, className) {
    let r_image;
    try {
        r_image = require(`../images/teams_flag/${image.toLowerCase()}_thumb.png`);
    } catch (ex) {
        r_image = require('../images/teams_flag/dumm_thumb.png');
    }
    return (<img src={r_image} alt={altParam} className={className}/>)
}

class MatchDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        matchId = this.props.params.id;
        this.props.GetSchedulebyTeamid({matchKey: matchId});
    }

    componentWillReceiveProps(nextProps) {
        const {getScheduleState} = nextProps;

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
                    className='timmer-count'>{days != '0' ? days + 'd : ' + hours + 'h : ' + minutes + 'm : ' + seconds + 's' : (hours != '00' ? hours + 'h : ' + minutes + 'm : ' + seconds + 's' : (minutes != '00' ? minutes + 'm : ' + seconds + 's' : seconds + 's'))}</span>;
            }
        };
        /* Countdown timer END */

        if (getScheduleState && getScheduleState.season_allmatch && getScheduleState.season_allmatch.card) {
            const {season_allmatch: {card}} = getScheduleState;
            GlobalCard = card;
            MatchIstDate = this.timeAndDate(GlobalCard.start_date.timestamp);
        }
    }

    /* Time Correcting function */
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

    render() {

        return (
            <Col>
                <Helmet
                    title={(GlobalCard && GlobalCard.short_name && GlobalCard.related_name) ? (GlobalCard.short_name + ' | ' + GlobalCard.related_name) : 'Match Details'}/>
                <Grid className={cx('content-sect')}>
                    <Row>
                        <Col md={8} sm={7} className={cx('resp-fluid')}>
                            <FormGroup>
                                <Col className="clearfix clearfix-potition">
                                    {GlobalCard ?
                                        <Col className={cx('panel-cric')}>
                                            <Col className={cx('panel-heading')}>
                                                <span className={cx('h4')}>
                                                    {GlobalCard.title ? GlobalCard.title : ''}
                                                </span>
                                                <Col className={cx('weigh-text-sm')}>
                                                    <small>
                                                        <b>series</b> : <a
                                                        href={`/series_details/${GlobalCard.season.key}`}>{GlobalCard.season.name ? GlobalCard.season.name : ''}</a> | {MatchIstDate ? MatchIstDate : ''} at {GlobalCard.venue ? GlobalCard.venue : ''}
                                                    </small>
                                                </Col>
                                            </Col>
                                            {
                                                GlobalCard.status == 'notstarted' && GlobalCard.status_overview != 'pre_match' ?
                                                    <Col className={cx('panel-body')}>
                                                        <Col className='text-center'>
                                                            <Col className="h4">
                                                                Match Starts in
                                                            </Col>
                                                            <Countdown
                                                                date={GlobalCard.start_date.timestamp * 1000}
                                                                renderer={renderer}
                                                            />
                                                        </Col>
                                                    </Col>
                                                    : (
                                                        <h5 className="text-center">Match Not Scheduled</h5>
                                                    )
                                            }
                                        </Col>
                                        : (<div className={cx('preLoaderInner', 'contentLoader')}></div>)
                                    }

                                </Col>
                            </FormGroup>
                        </Col>


                        {/* Side Bar */}
                        <Asidebar/>
                    </Row>
                </Grid>
            </Col>
        );
    }
}

function getNotbat(listPlayer, teamPlay) {
    var batting_player = listPlayer,
        teamPlaying = teamPlay,
        teamplayer = GlobalCard.teams[teamPlay].match.playing_xi,
        AllPlayer = [];
    AllPlayer = teamplayer.filter(val => !batting_player.includes(val));
    return (<span className="seperateName">
        {AllPlayer && AllPlayer.length > 0 ? <b>Player's not bat : </b> : ''}
            {
                AllPlayer.map((value, keys) => (
                    <span className="text-capitalize" key={keys}><a
                        href={`/playerinfo/${value}`}>{value.split('_').join(' ')}</a></span>
                ))
            }
    </span>
    )
}

function mapStatetoProps(state) {
    return {
        getScheduleState: state.seasonReducer
    }
}

export default connect(mapStatetoProps, {...scheduleAction,})(MatchDetail);
