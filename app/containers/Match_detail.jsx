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
import LiveOver from '../components/Liveover';
import LiveOversummary from '../components/LiveoverSummary';
import LiveHighlights from '../components/LiveHighlights';

import FA from 'react-fontawesome';
import Helmet from 'react-helmet';
import * as scheduleAction from '../actions/seriesmatch';
import * as wagonAction from '../actions/wagonwheel'; /* WAGON WHEEL #WagonCreateWeb */
const cx = classNames.bind(styles);

import {FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon} from 'react-share';

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
        this.state = {
            wagonData: [],
            tabKey: '01' /* #WagonCreateWeb */,
            wagonOnState: null,
            wagonOnStateHighlight: null
        }
        this.handleSelect = this.handleSelect.bind(this);
        this.returnWagonElement = this.returnWagonElement.bind(this); /* #WagonCreateWeb */
    }

    componentWillMount() {
        matchId = this.props.params.id;
        this.props.getAllmatchDetail({matchkey: matchId});
        this.props.GetWagonWheel({matchId}); /* WAGON WHEEL #WagonCreateWeb */
    }

    componentWillReceiveProps(nextProps) {
        const {getScheduleState, wagonWheel/* #WagonCreateWeb */, wagonDataProps} = nextProps;

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

        if (wagonDataProps && Object.keys(wagonDataProps).length > 0) {
            if (matchId && (wagonDataProps.match_id == matchId)) {
                /* this.setState({
                    wagonData: wagonDataProps.det
                }) */
                this.setState({wagonOnState: ""})
                this.setState({wagonOnStateHighlight: ""})
                this.setState({wagonData: wagonDataProps.det})
                if (this.state.tabKey == '03.2') {
                    this.returnWagonElement(wagonDataProps.det, null, 1)
                } else if (this.state.tabKey == '04.2') {
                    this.returnWagonElementHighlight(wagonDataProps.det, null, 2)
                }
            }
        }/* #WagonCreateWeb */

        if (wagonWheel && wagonWheel.data && wagonWheel.data.length > 0 && initialLoader) {
            var {data: [{match_data}]} = wagonWheel;
            if (match_data && Object.keys(match_data).length > 0 && initialLoaded) {
                initialLoader = false;
                this.setState({wagonData: match_data});
                initialLoaded = false;
            }
        } /* WAGON WHEEL #WagonCreateWeb  */
        if (getScheduleState && getScheduleState.season_allmatch && getScheduleState.season_allmatch.card) {
            const {season_allmatch: {card}} = getScheduleState;
            GlobalCard = card;
            MatchIstDate = this.timeAndDate(GlobalCard.start_date.timestamp);

            /* Scoreboard */
            teamList = GlobalCard.teams;
            matchStart_innings = GlobalCard.innings;
            GlobalCard_battingorder = GlobalCard.batting_order;
            GlobalCard_Players = GlobalCard.players;
            if (GlobalCard.innings && Object.keys(GlobalCard.innings).length > 0) {
                scoreCard = Object.keys(GlobalCard_battingorder).map((key) => {
                    const orderVal = GlobalCard_battingorder[key],
                        innings_val = orderVal.join('_'),
                        borderTemp = matchStart_innings[innings_val].batting_order;
                    Current_innings = orderVal[1];

                    if (orderVal[0] == 'a') {
                        const tempTEam = 'b_' + orderVal[1];
                        Bowl_innings = matchStart_innings[tempTEam].bowling_order;
                    } else {
                        const tempTEam = 'a_' + orderVal[1];
                        Bowl_innings = matchStart_innings[tempTEam].bowling_order;
                    }

                    return (
                        orderVal[0] == 'a' ?

                            <Col key={key}>
                                <FormGroup>
                                    <h4 className="sub-title"> {teamList.a.name} {orderVal[1] == '1' ?
                                        <span> First </span> : (<span> Second </span>)} innings
                                        <span
                                            className="pull-right"><b>Score : </b>{matchStart_innings[innings_val].runs} / {matchStart_innings[innings_val].wickets}</span>
                                    </h4>
                                    <Table className="custom-table">
                                        <thead>
                                        <tr>
                                            <th>
                                                BATSMEN
                                            </th>
                                            <th>

                                            </th>
                                            <th>
                                                R
                                            </th>
                                            <th>
                                                B
                                            </th>
                                            <th>
                                                D
                                            </th>
                                            <th>
                                                4's
                                            </th>
                                            <th>
                                                6's
                                            </th>
                                            <th>
                                                SR
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            borderTemp.map((values, index) => {
                                                teamsPlaying = 'a';
                                                return (
                                                    <tr key={index}>
                                                        <td>
                                                            <a href={`/playerinfo/${values}`}><b>{GlobalCard_Players[values].name}</b></a>
                                                        </td>
                                                        <td>
                                                            <small
                                                                className="text-capitalize"> {GlobalCard_Players[values].match.innings[Current_innings].batting.out_str ? GlobalCard_Players[values].match.innings[Current_innings].batting.out_str : 'Not Out'}</small>
                                                        </td>
                                                        <td>
                                                            <b>{GlobalCard_Players[values].match.innings[Current_innings].batting.runs}</b>
                                                        </td>
                                                        <td>
                                                            {GlobalCard_Players[values].match.innings[Current_innings].batting.balls}
                                                        </td>
                                                        <td>
                                                            {GlobalCard_Players[values].match.innings[Current_innings].batting.dots}
                                                        </td>
                                                        <td>
                                                            {GlobalCard_Players[values].match.innings[Current_innings].batting.fours}
                                                        </td>
                                                        <td>
                                                            {GlobalCard_Players[values].match.innings[Current_innings].batting.sixes}
                                                        </td>
                                                        <td>
                                                            {GlobalCard_Players[values].match.innings[Current_innings].batting.strike_rate}
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        </tbody>
                                        <tfoot>
                                        <tr>
                                            <td colSpan='8'>
                                                <span><b>Fours : </b> {matchStart_innings[innings_val].fours}</span>, <span><b>Sixes : </b> {matchStart_innings[innings_val].sixes}</span>, <span><b>Extra : </b> {matchStart_innings[innings_val].extras}</span>
                                                <span
                                                    className="pull-right"><b>Total Runs : </b> {matchStart_innings[innings_val].runs}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan='8'>
                                                {getNotbat(borderTemp, teamsPlaying)}
                                            </td>
                                        </tr>
                                        </tfoot>
                                    </Table>

                                </FormGroup>

                                <FormGroup>
                                    <Table className="custom-table">
                                        <thead>
                                        <tr>
                                            <th>
                                                Fall of wickets
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                {Object.keys(GlobalCard.innings[innings_val].fall_of_wickets).map((key) => {
                                                    return (
                                                        <Col key={key}>
                                                            {GlobalCard.innings[innings_val].fall_of_wickets[key]}
                                                        </Col>
                                                    )
                                                })}
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </FormGroup>

                                <FormGroup>
                                    <Table responsive className="custom-table">
                                        <thead>
                                        <tr>
                                            <th>
                                                BOWLER
                                            </th>
                                            <th>
                                                O
                                            </th>
                                            <th>
                                                M
                                            </th>
                                            <th>
                                                D
                                            </th>
                                            <th>
                                                B
                                            </th>
                                            <th>
                                                R
                                            </th>
                                            <th>
                                                W
                                            </th>
                                            <th>
                                                ECON
                                            </th>
                                            <th>
                                                Extra
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            Bowl_innings.map((values, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>
                                                            <a href={`/playerinfo/${values}`}><b>{GlobalCard_Players[values].name}</b></a>
                                                        </td>
                                                        <td>
                                                            <b>{GlobalCard_Players[values].match.innings[Current_innings].bowling.overs}</b>
                                                        </td>
                                                        <td>
                                                            {GlobalCard_Players[values].match.innings[Current_innings].bowling.maiden_overs}
                                                        </td>
                                                        <td>
                                                            {GlobalCard_Players[values].match.innings[Current_innings].bowling.dots}
                                                        </td>
                                                        <td>
                                                            {GlobalCard_Players[values].match.innings[Current_innings].bowling.balls}
                                                        </td>
                                                        <td>
                                                            {GlobalCard_Players[values].match.innings[Current_innings].bowling.runs}
                                                        </td>
                                                        <td>
                                                            <b>{GlobalCard_Players[values].match.innings[Current_innings].bowling.wickets}</b>
                                                        </td>
                                                        <td>
                                                            {GlobalCard_Players[values].match.innings[Current_innings].bowling.economy}
                                                        </td>
                                                        <td>
                                                            {GlobalCard_Players[values].match.innings[Current_innings].bowling.extras}
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        </tbody>
                                    </Table>
                                </FormGroup>
                            </Col>
                            : (
                                <Col key={key}>
                                    <FormGroup>
                                        <h4 className="sub-title"> {teamList.b.name} {orderVal[1] == '1' ?
                                            <span> First </span> : (<span> Second </span>)} innings
                                            <span
                                                className="pull-right"><b>Score : </b>{matchStart_innings[innings_val].runs} / {matchStart_innings[innings_val].wickets}</span>
                                        </h4>
                                        <Table className="custom-table">
                                            <thead>
                                            <tr>
                                                <th>
                                                    BATSMEN
                                                </th>
                                                <th>

                                                </th>
                                                <th>
                                                    R
                                                </th>
                                                <th>
                                                    B
                                                </th>
                                                <th>
                                                    D
                                                </th>
                                                <th>
                                                    4's
                                                </th>
                                                <th>
                                                    6's
                                                </th>
                                                <th>
                                                    SR
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                borderTemp.map((values, index) => {
                                                    teamsPlaying = 'b';
                                                    return (
                                                        <tr key={index}>
                                                            <td>
                                                                <a href={`/playerinfo/${values}`}><b>{GlobalCard_Players[values].name}</b></a>
                                                            </td>
                                                            <td>
                                                                <small
                                                                    className="text-capitalize"> {GlobalCard_Players[values].match.innings[Current_innings].batting.out_str ? GlobalCard_Players[values].match.innings[Current_innings].batting.out_str : 'Not Out'}</small>
                                                            </td>
                                                            <td>
                                                                <b>{GlobalCard_Players[values].match.innings[Current_innings].batting.runs}</b>
                                                            </td>
                                                            <td>
                                                                {GlobalCard_Players[values].match.innings[Current_innings].batting.balls}
                                                            </td>
                                                            <td>
                                                                {GlobalCard_Players[values].match.innings[Current_innings].batting.dots}
                                                            </td>
                                                            <td>
                                                                {GlobalCard_Players[values].match.innings[Current_innings].batting.fours}
                                                            </td>
                                                            <td>
                                                                {GlobalCard_Players[values].match.innings[Current_innings].batting.sixes}
                                                            </td>
                                                            <td>
                                                                {GlobalCard_Players[values].match.innings[Current_innings].batting.strike_rate}
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                            </tbody>
                                            <tfoot>
                                            <tr>
                                                <td colSpan='8'>
                                                    <span><b>Fours : </b> {matchStart_innings[innings_val].fours}</span>, <span><b>Sixes : </b> {matchStart_innings[innings_val].sixes}</span>, <span><b>Extra : </b> {matchStart_innings[innings_val].extras}</span>
                                                    <span
                                                        className="pull-right"><b>Total Runs : </b> {matchStart_innings[innings_val].runs}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan='8'>
                                                    {getNotbat(borderTemp, teamsPlaying)}
                                                </td>
                                            </tr>
                                            </tfoot>
                                        </Table>
                                    </FormGroup>

                                    <FormGroup>
                                        <Table className="custom-table">
                                            <thead>
                                            <tr>
                                                <th>
                                                    Fall of wickets
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    {Object.keys(GlobalCard.innings[innings_val].fall_of_wickets).map((key) => {
                                                        return (
                                                            <Col key={key}>
                                                                {GlobalCard.innings[innings_val].fall_of_wickets[key]}
                                                            </Col>
                                                        )
                                                    })}
                                                </td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </FormGroup>

                                    <FormGroup>
                                        <Table responsive className="custom-table">
                                            <thead>
                                            <tr>
                                                <th>
                                                    BOWLER
                                                </th>
                                                <th>
                                                    O
                                                </th>
                                                <th>
                                                    M
                                                </th>
                                                <th>
                                                    D
                                                </th>
                                                <th>
                                                    B
                                                </th>
                                                <th>
                                                    R
                                                </th>
                                                <th>
                                                    W
                                                </th>
                                                <th>
                                                    ECON
                                                </th>
                                                <th>
                                                    Extra
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                Bowl_innings.map((values, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>
                                                                <a href={`/playerinfo/${values}`}><b>{GlobalCard_Players[values].name}</b></a>
                                                            </td>
                                                            <td>
                                                                <b>{GlobalCard_Players[values].match.innings[Current_innings].bowling.overs}</b>
                                                            </td>
                                                            <td>
                                                                {GlobalCard_Players[values].match.innings[Current_innings].bowling.maiden_overs}
                                                            </td>
                                                            <td>
                                                                {GlobalCard_Players[values].match.innings[Current_innings].bowling.dots}
                                                            </td>
                                                            <td>
                                                                {GlobalCard_Players[values].match.innings[Current_innings].bowling.balls}
                                                            </td>
                                                            <td>
                                                                {GlobalCard_Players[values].match.innings[Current_innings].bowling.runs}
                                                            </td>
                                                            <td>
                                                                <b>{GlobalCard_Players[values].match.innings[Current_innings].bowling.wickets}</b>
                                                            </td>
                                                            <td>
                                                                {GlobalCard_Players[values].match.innings[Current_innings].bowling.economy}
                                                            </td>
                                                            <td>
                                                                {GlobalCard_Players[values].match.innings[Current_innings].bowling.extras}
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            </tbody>
                                        </Table>
                                    </FormGroup>
                                </Col>
                            )
                    )
                })
            } else {
                scoreCard = (<h5 className="text-center">No match Updates</h5>);
            }

            /* man of the match */
            if (GlobalCard.man_of_match != null && GlobalCard.man_of_match != '' && Object.keys(GlobalCard.players).length > 0) {
                let playerData = GlobalCard.players[GlobalCard.man_of_match];
                let playerRoles = playerData.identified_roles;
                let mom_innings = playerData.match.innings[1];

                // Only Batmans
                if (playerRoles.batsman === true && playerRoles.bowler === false && mom_innings.batting.runs) {
                    mom_player = (
                        <span>{playerData.fullname} (<b>Runs: </b>{mom_innings.batting.runs}, <b>Fours: </b>{mom_innings.batting.fours}, <b>Sixes: </b>{mom_innings.batting.sixes})</span>)
                }

                // Only Bowler
                else if ((playerRoles.bowler === true && playerRoles.batsman === false) || (playerRoles.batsman === true && playerRoles.bowler === true && !mom_innings.batting.runs)) {
                    mom_player = (
                        <span>{playerData.fullname} (<b>Wickets: </b>{mom_innings.bowling.runs}/{mom_innings.bowling.wickets})</span>)
                }

                // Both Batsman and Bowler but he didn't bowl in the match
                else if (playerRoles.batsman === true && playerRoles.bowler === true && mom_innings.batting.runs && !mom_innings.bowler) {
                    mom_player = (
                        <span>{playerData.fullname} (<b>Runs: </b>{mom_innings.batting.runs}, <b>Fours: </b>{mom_innings.batting.fours}, <b>Sixes: </b>{mom_innings.batting.sixes})</span>)
                }

                // Both Batsman and Bowler but he didn't bat in the match
                else if (playerRoles.batsman === true && playerRoles.bowler === true && !mom_innings.batting.runs && mom_innings.bowler) {
                    mom_player = (
                        <span>{playerData.fullname} (<b>Wickets: </b>{mom_innings.bowling.runs}/{mom_innings.bowling.wickets})</span>)
                }

                // Both Batsman and Bowler
                else if (playerRoles.batsman === true && playerRoles.bowler === true && mom_innings.batting.runs) {
                    mom_player = (
                        <span>{playerData.fullname}, <b>Batting:</b> (<b>Runs: </b>{mom_innings.batting.runs}, <b>Fours: </b>{mom_innings.batting.fours}, <b>Sixes: </b>{mom_innings.batting.sixes}), <b>Bowling:</b> (<b>Wickets: </b>{mom_innings.bowling.runs}/{mom_innings.bowling.wickets})</span>)
                }
            } else {
                const mom_player = ""
            }

            /* match role */

            MatchRoles = Object.keys(teamList).map((key) => {
                    const teamPlayer_role_cap = teamList[key].match.captain,
                        teamPlayer_role_wk = teamList[key].match.keeper;
                    if (teamPlayer_role_cap) {
                        splitPlayer_c = teamPlayer_role_cap.split('_').join(' ');
                        splitPlayer_wk = teamPlayer_role_wk.split('_').join(' ');
                    } else {
                        splitPlayer_wk = '',
                            splitPlayer_c = '';
                    }

                    return (
                        <tr key={key}>
                            <td>
                                <span className={cx('h5')}>{teamList[key].name ? teamList[key].name : 'No Updates'}</span>
                            </td>
                            <td>
                                <span
                                    className={cx('text-capitalize')}>{splitPlayer_c ? splitPlayer_c : 'No Updates'}</span>
                            </td>
                            <td>
                                <span
                                    className={cx('text-capitalize')}>{splitPlayer_wk ? splitPlayer_wk : 'No Updates'}</span>
                            </td>
                        </tr>
                    )
                }
            )
            /* match role */

            /* Player Listing */
            playerListing = Object.keys(teamList).map((key) => {
                    const teamPlayer_list = teamList[key].match;
                    let playerMatch_list = teamPlayer_list.playing_xi;
                    return (
                        <tr key={key}>
                            <td>
                                <span className={cx('h5')}>{teamList[key].name ? teamList[key].name : 'No Updates'}</span>
                            </td>
                            <td>
                                {
                                    (playerMatch_list && playerMatch_list.length > 0) ?
                                        playerMatch_list.map((value, index) => {
                                            let splitPlayer = value.split('_').join(' ');
                                            return (
                                                <span className={cx('text-capitalize')} key={index}>
                                                {`${splitPlayer}, `}
                                            </span>
                                            )
                                        })
                                        : <span className={cx('text-capitalize')}> No Players </span>
                                }
                            </td>
                        </tr>
                    )
                }
            )/* Player Listing END */

            /* Score Card Section */
            let inningsMatch = card.innings;
            let inngFirst = []
            let inngsecond = []

            if (inningsMatch && Object.keys(inningsMatch).length > 0) {
                if (inningsMatch && Object.keys(inningsMatch).length > 2) {
                    const batting_order_list = GlobalCard.batting_order;
                    Object.keys(batting_order_list).map((key) => {
                        const temp_val = batting_order_list[key];
                        valueOrder = temp_val[0];
                        batOrder = batting_order_list[key].join('_');
                    })
                    if (GlobalCard.first_batting == 'a') {
                        teamVal = 'a';
                        teamVal_2 = 'b';
                        if (GlobalCard.innings.a_2.balls != '0') {
                            inngs_score_1 = (GlobalCard.innings.a_1.runs ? GlobalCard.innings.a_1.runs : '') + ', ' + (GlobalCard.innings.a_2.runs ? GlobalCard.innings.a_2.runs : '') + ' / ' + (GlobalCard.innings.a_2.wickets ? GlobalCard.innings.a_2.wickets : '0') + ' (' + (GlobalCard.innings.a_2.overs ? GlobalCard.innings.a_2.overs : '') + ' Ovr)';
                        } else {
                            inngs_score_1 = (GlobalCard.innings.a_1.runs ? GlobalCard.innings.a_1.runs : '') + '/' + (GlobalCard.innings.a_1.wickets ? GlobalCard.innings.a_1.wickets : '')
                        }
                        if (GlobalCard.innings.b_2.balls != '0') {
                            inngs_score_2 = (GlobalCard.innings.b_1.runs ? GlobalCard.innings.b_1.runs : '') + ', ' + (GlobalCard.innings.b_2.runs ? GlobalCard.innings.b_2.runs : '') + ' / ' + (GlobalCard.innings.b_2.wickets ? GlobalCard.innings.b_2.wickets : '0') + ' (' + (GlobalCard.innings.b_2.overs ? GlobalCard.innings.b_2.overs : '') + ' Ovr)';
                        } else {
                            inngs_score_2 = (GlobalCard.innings.b_1.runs ? GlobalCard.innings.b_1.runs : '') + '/' + (GlobalCard.innings.b_1.wickets ? GlobalCard.innings.b_1.wickets : '')
                        }
                    } else {
                        teamVal = 'b';
                        teamVal_2 = 'a';
                        if (GlobalCard.innings.a_2.balls != '0') {
                            inngs_score_2 = (GlobalCard.innings.a_1.runs ? GlobalCard.innings.a_1.runs : '') + ', ' + (GlobalCard.innings.a_2.runs ? GlobalCard.innings.a_2.runs : '') + ' / ' + (GlobalCard.innings.a_2.wickets ? GlobalCard.innings.a_2.wickets : '0') + ' (' + (GlobalCard.innings.a_2.overs ? GlobalCard.innings.a_2.overs : '') + ' Ovr)';
                        } else {
                            inngs_score_2 = (GlobalCard.innings.a_1.runs ? GlobalCard.innings.a_1.runs : '') + '/' + (GlobalCard.innings.a_1.wickets ? GlobalCard.innings.a_1.wickets : '')
                        }
                        if (GlobalCard.innings.b_2.balls != '0') {
                            inngs_score_1 = (GlobalCard.innings.b_1.runs ? GlobalCard.innings.b_1.runs : '') + ', ' + (GlobalCard.innings.b_2.runs ? GlobalCard.innings.b_2.runs : '') + ' / ' + (GlobalCard.innings.b_2.wickets ? GlobalCard.innings.b_2.wickets : '0') + ' (' + (GlobalCard.innings.b_2.overs ? GlobalCard.innings.b_2.overs : '') + ' Ovr)';
                        } else {
                            inngs_score_1 = (GlobalCard.innings.b_1.runs ? GlobalCard.innings.b_1.runs : '') + '/' + (GlobalCard.innings.b_1.wickets ? GlobalCard.innings.b_1.wickets : '')
                        }
                    }

                    scoreboardfrst = (
                        <div className={cx('cric-pan', 'cric-pan-table')}>
                            <div className={cx('cric-pan-tr')}>
                                <Col className={cx('team-flg', 'cric-pan-td')}>
                                    {getImage(GlobalCard.teams[teamVal].key, "img-flg", "img-flg-board")}
                                </Col>
                                <Col className={cx('cric-pan-td', 'text-black')}>
                                    <b className={cx('h4')}> {card.teams[teamVal].short_name}</b>
                                </Col>

                                <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                    {inngs_score_1}
                                </Col>
                            </div>

                            <div className={cx('cric-pan-tr')}>
                                <Col className={cx('team-flg', 'cric-pan-td')}>
                                    {getImage(GlobalCard.teams[teamVal_2].key, "img-flg", "img-flg-board")}
                                </Col>
                                <Col className={cx('cric-pan-td', 'text-black')}>
                                    <b className={cx('h4')}> {card.teams[teamVal_2].short_name}</b>
                                </Col>

                                <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                    {inngs_score_2}
                                </Col>
                            </div>
                        </div>
                    )
                } else {
                    const batting_order_list = GlobalCard.batting_order;
                    scoreboardfrst = (
                        <div>
                            {
                                Object.keys(batting_order_list).map((value) => {
                                        Object.keys(batting_order_list[value]).map((index) => {
                                            const temp_val = batting_order_list[value];
                                            valueOrder = temp_val[0];
                                            valueOrder_innings = batting_order_list[value].join('_');
                                        })
                                        return (
                                            <div className={cx('cric-pan', 'cric-pan-table')} key={value}>
                                                <div className={cx('cric-pan-tr')}>
                                                    <Col className={cx('team-flg', 'cric-pan-td')}>
                                                        {getImage(GlobalCard.teams[valueOrder].key, "img-flg", "img-flg-board")}
                                                    </Col>
                                                    <Col className={cx('cric-pan-td', 'text-black')}>
                                                        <b className={cx('h4')}> {GlobalCard.teams[valueOrder].short_name}</b>
                                                    </Col>

                                                    <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                        {GlobalCard.innings[valueOrder_innings].runs}/{GlobalCard.innings[valueOrder_innings].wickets} ({GlobalCard.innings[valueOrder_innings].overs} Ovr)
                                                    </Col>
                                                </div>
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
                    )
                }

            } else {
                scoreboardfrst = (
                    <h4 className="text-center">No Match Updates</h4>
                )
            }
            /* Score Card Section END */
        }
    }

    handleSelect(key) {
        this.setState({
            tabKey: key
        })

        /* ------------------------ */  /* #WagonCreateWeb */
        this.setState({wagonOnState: ""})
        this.setState({wagonOnStateHighlight: ""})
        if (key == '03.2') {
            this.returnWagonElement(null, matchId, 1)
        } else if (key == '04.2') {
            this.returnWagonElementHighlight(null, matchId, 2)
        }

        /* ----------------------- */ /* #WagonCreateWeb */
    }

    returnWagonElementHighlight(wagonDataProps, matchId, key) {
        var wagonWheel = <WagonWheelHighlight
            matchId={matchId}
            wagonData={(wagonDataProps) ? wagonDataProps : null}
        />
        this.setState({wagonOnState: ""})
        this.setState({wagonOnStateHighlight: wagonWheel})
    } /* #WagonCreateWeb */
    returnWagonElement(wagonDataProps, matchId, key) {
        var wagonWheel = <WagonWheel
            matchId={matchId}
            wagonData={(wagonDataProps) ? wagonDataProps : null}
        />
        this.setState({wagonOnStateHighlight: ""})
        this.setState({wagonOnState: wagonWheel})
    } /* #WagonCreateWeb */

    updateWagon(data) {
        if (data && data.match_id && data.det && Object.keys(data.det).length > 0 && matchId && (data.match_id == matchId)) {
            this.setState({
                wagonData: data.det
            })
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
        if (GlobalCard != null) {
            if (GlobalCard.status == "started") {
                Statoverview = GlobalCard.status_overview;
                if (Statoverview == "in_play") {
                    matcStatus = (GlobalCard.day ? ('Day ' + GlobalCard.day + ' : ') : ' ') + "Match in progress";
                } else {
                    matcStatus = (GlobalCard.day ? ('Day ' + GlobalCard.day + ' : ') : ' ') + ' ' + (GlobalCard.status_overview.split('_').join(' '));
                }
            } else if (GlobalCard.status == "completed") {
                matcStatus = (GlobalCard.day ? ('Day ' + GlobalCard.day + ' : ') : ' ') + ' ' + GlobalCard.msgs.info;
            } else if (GlobalCard.status == "notstarted") {
                matcStatus = (GlobalCard.day ? ('Day ' + GlobalCard.day + ' : ') : ' ') + 'Upcoming';
            }

        }

        return (
            <Col>
                <Helmet
                    title={(GlobalCard && GlobalCard.short_name && GlobalCard.related_name) ? (GlobalCard.short_name + ' | ' + GlobalCard.related_name) : 'Match Details'}/>
                <Grid className={cx('content-sect')}>
                    <Row>
                        <Col md={8} sm={7} className={cx('resp-fluid')}>
                            <FormGroup>
                                <Tab.Container id="tab-01" activeKey={this.state.tabKey}
                                               onSelect={this.handleSelect}>
                                    <Col className="clearfix clearfix-potition">
                                        {GlobalCard ?
                                            <Col className={cx('panel-cric')}>
                                                <Col className={cx('panel-heading')}>
                                                    <span className={cx('h4')}>
                                                        {GlobalCard.title ? GlobalCard.title : ''}
                                                    </span>
                                                    <Col className={cx('weigh-text-sm')}>
                                                        <small style={{display: "inline-block", width: ""}}>
                                                            <b>Series</b> : <a
                                                            href={`/series_details/${GlobalCard.season.key}`}>{GlobalCard.season.name ? GlobalCard.season.name : ''}</a> | {MatchIstDate ? MatchIstDate : ''} at {GlobalCard.venue ? GlobalCard.venue : ''}
                                                        </small>
                                                        <span style={{float: "right"}}>
                                                            <FacebookShareButton
                                                                url={window.location.origin}
                                                                quote={GlobalCard.title}
                                                                hashtag="#Cricloop"
                                                                style={{float: "left"}}
                                                            >
                                                                <FacebookIcon
                                                                    size={32}
                                                                    round={false}/>
                                                            </FacebookShareButton>
                                                            <TwitterShareButton
                                                                url={window.location.origin}
                                                                title={GlobalCard.title}
                                                                via="Cricloop"
                                                                hashtags={["Cricloop", "CricketIndia", "CricketFans"]}
                                                                style={{float: "left"}}
                                                            >
                                                                <TwitterIcon
                                                                    size={32}
                                                                    round={false}/>
                                                            </TwitterShareButton>
                                                        </span>
                                                    </Col>
                                                </Col>
                                                {(GlobalCard.innings && Object.keys(GlobalCard.innings).length > 0) ?
                                                    <Col className={cx('panel-body')}>
                                                        <FormGroup className={cx('marg0')}>
                                                            <Nav className={cx('tab-cric', 'tab-left', 'border-btm')}>
                                                                <NavItem className="tab-items"
                                                                         eventKey="01">Commentary</NavItem>
                                                                <NavItem className="tab-items"
                                                                         eventKey="02">Scoreboard</NavItem>
                                                                <NavItem className="tab-items"
                                                                         eventKey="03.1">Overs</NavItem>
                                                                <NavItem className="tab-items" eventKey="03.2">Overs
                                                                    Chart</NavItem>
                                                                <NavItem className="tab-items" eventKey="04.1">4's &
                                                                    6's</NavItem>
                                                                <NavItem className="tab-items" eventKey="04.2">4's & 6's
                                                                    Chart</NavItem>
                                                                <NavItem className="tab-items"
                                                                         eventKey="05">Squad</NavItem>
                                                                <NavItem className="tab-items" eventKey="06"
                                                                         href={`../series_details/${GlobalCard.season.key}#point_table`}>Points
                                                                    Table</NavItem>
                                                            </Nav>
                                                        </FormGroup>
                                                        <Tab.Content animation>
                                                            <Tab.Pane eventKey="01">
                                                                <Col className={cx('panel-cric')}>
                                                                    <Row>
                                                                        {/* repeter */}
                                                                        <Col sm={9} className={cx('resp-fluid')}>
                                                                            <Row>
                                                                                <Col sm={12}>
                                                                                    <Col className={cx('text-primary')}>
                                                                                        <small>{(GlobalCard && GlobalCard.toss && GlobalCard.toss.str) ? GlobalCard.toss.str : ''}</small>
                                                                                    </Col>
                                                                                    {scoreboardfrst}
                                                                                    {/* {scoreboardListing} */}
                                                                                    <Col
                                                                                        className={cx('cric-status-bx')}>
                                                                                        <span
                                                                                            className={cx('text-warning')}>
                                                                                            <b>{matcStatus ? matcStatus : ''}</b>
                                                                                        </span>
                                                                                    </Col>
                                                                                </Col>
                                                                            </Row>
                                                                        </Col>
                                                                        {/* repeter END */}

                                                                        {/* repeter */}
                                                                        <Col sm={3}
                                                                             className={cx('resp-fluid', 'v-line')}>

                                                                            <Col
                                                                                className={cx('cric-pan', 'cric-pan-table')}>
                                                                                <Table
                                                                                    className="custom-table v-aling marg0">
                                                                                    <thead>
                                                                                    <tr>
                                                                                        <th className={cx('text-center')}>
                                                                                            Team
                                                                                        </th>
                                                                                        <th className={cx('text-center')}>
                                                                                            4's & 6's
                                                                                        </th>
                                                                                    </tr>
                                                                                    </thead>
                                                                                    {
                                                                                        Object.keys(GlobalCard.innings).length > 2 ?
                                                                                            <tbody>
                                                                                            <tr>
                                                                                                <td className={cx('text-center')}>
                                                                                                    {getImage(GlobalCard.teams.a.key, "flag", cx('img-flg-sm'))}
                                                                                                    <br/><b>{GlobalCard.teams.a.short_name}</b>
                                                                                                </td>
                                                                                                <td className={cx('text-center')}>
                                                                                                    <span
                                                                                                        className={cx('h3')}>{GlobalCard.innings.a_1.fours + GlobalCard.innings.a_2.fours} & {GlobalCard.innings.a_1.sixes + GlobalCard.innings.a_2.sixes}</span>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td className={cx('text-center')}>
                                                                                                    {getImage(GlobalCard.teams.b.key, "flag", cx('img-flg-sm'))}
                                                                                                    <br/><b>{GlobalCard.teams.b.short_name}</b>
                                                                                                </td>
                                                                                                <td className={cx('text-center')}>
                                                                                                    <span
                                                                                                        className={cx('h3')}>{GlobalCard.innings.b_1.fours + GlobalCard.innings.b_2.fours} & {GlobalCard.innings.b_1.sixes + GlobalCard.innings.b_2.sixes}</span>
                                                                                                </td>
                                                                                            </tr>
                                                                                            </tbody>
                                                                                            : (
                                                                                                <tbody>
                                                                                                <tr>
                                                                                                    <td className={cx('text-center')}>
                                                                                                        {getImage(GlobalCard.teams.a.key, "flag", cx('img-flg-sm'))}
                                                                                                        <br/><b>{GlobalCard.teams.a.short_name}</b>
                                                                                                    </td>
                                                                                                    <td className={cx('text-center')}>
                                                                                                        <span
                                                                                                            className={cx('h3')}>{GlobalCard.innings.a_1.fours} & {GlobalCard.innings.a_1.sixes}</span>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td className={cx('text-center')}>
                                                                                                        {getImage(GlobalCard.teams.b.key, "flag", cx('img-flg-sm'))}
                                                                                                        <br/><b>{GlobalCard.teams.b.short_name}</b>
                                                                                                    </td>
                                                                                                    <td className={cx('text-center')}>
                                                                                                        <span
                                                                                                            className={cx('h3')}>{GlobalCard.innings.b_1.fours} & {GlobalCard.innings.b_1.sixes}</span>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                </tbody>
                                                                                            )
                                                                                    }
                                                                                </Table>
                                                                            </Col>
                                                                        </Col>
                                                                        {/* repeter END */}

                                                                    </Row>
                                                                </Col>

                                                                <Col className={cx('panel-cric')}>

                                                                    <Col className={cx('panel-body', 'padzero')}>
                                                                        <b>Man of Match</b> : {mom_player}
                                                                        <Col className={cx('h4')}>
                                                                            Overs Commentary
                                                                        </Col>
                                                                        {GlobalCard ?
                                                                            <LiveOver matchId={{matchId}}
                                                                                      matchLive={GlobalCard}/>
                                                                            : ''
                                                                        }
                                                                        {/* commentryLsiting ? commentryLsiting : 'No Updated' */}
                                                                    </Col>
                                                                </Col>

                                                            </Tab.Pane>


                                                            {/* Score card */}
                                                            <Tab.Pane eventKey="02">
                                                                {scoreCard ? scoreCard : "No Match Updates"}
                                                            </Tab.Pane>
                                                            {/* Score card End */}

                                                            {/* Over */}
                                                            <Tab.Pane eventKey="03.1">
                                                                {GlobalCard ?
                                                                    <LiveOversummary matchId={{matchId}}
                                                                                     matchLive={GlobalCard}/>
                                                                    : ''
                                                                }
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="03.2">
                                                                {this.state.wagonOnState}
                                                                {/* WAGON WHEEL #WagonCreateWeb */}
                                                            </Tab.Pane>
                                                            {/* Over END */}

                                                            {/* Highlights */}
                                                            <Tab.Pane eventKey="04.1">
                                                                {GlobalCard ?
                                                                    <LiveHighlights matchId={{matchId}}
                                                                                    matchLive={GlobalCard}/>
                                                                    : ''
                                                                }
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="04.2">
                                                                {this.state.wagonOnStateHighlight /* #WagonCreateWeb */}
                                                                {/* <WagonWheel
                                                                    wagonData={this.state.wagonData}
                                                                    highlights = {true}
                                                                /> */}
                                                            </Tab.Pane>
                                                            {/* Highlights END */}

                                                            {/* Squad */}

                                                            <Tab.Pane eventKey="05">

                                                                <Col className={cx('panel-cric')}>

                                                                    <Col className={cx('panel-body', 'padzero')}>
                                                                        <Col className="sub-title">Roles</Col>
                                                                        <Table striped className={cx('custom-table')}>
                                                                            <thead>
                                                                            <tr>
                                                                                <th>
                                                                                    Teams
                                                                                </th>
                                                                                <th>
                                                                                    Captian
                                                                                </th>
                                                                                <th>
                                                                                    Keeper
                                                                                </th>
                                                                            </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                            {MatchRoles ? MatchRoles : (
                                                                                <tr>
                                                                                    <td className="text-center">
                                                                                        <span
                                                                                            className="h5">No Players </span>
                                                                                    </td>
                                                                                </tr>
                                                                            )}
                                                                            </tbody>
                                                                        </Table>
                                                                        <Col className="sub-title">Squad</Col>
                                                                        <Table striped className={cx('custom-table')}>
                                                                            <thead>
                                                                            <tr>
                                                                                <th style={{width: '30%'}}>
                                                                                    Teams
                                                                                </th>
                                                                                <th>
                                                                                    Players XI
                                                                                </th>
                                                                            </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                            {playerListing ? playerListing : (
                                                                                <tr>
                                                                                    <td className="text-center">
                                                                                        <span
                                                                                            className="h5">No Players </span>
                                                                                    </td>
                                                                                </tr>
                                                                            )}
                                                                            </tbody>
                                                                        </Table>
                                                                    </Col>
                                                                </Col>
                                                            </Tab.Pane>
                                                            {/* Squad END */}

                                                        </Tab.Content>
                                                    </Col>
                                                    : (
                                                        <Col className={cx('panel-body')}>
                                                            {
                                                                GlobalCard.status == 'notstarted' ?
                                                                    <Col className='text-center'>
                                                                        <Col className="h4">
                                                                            Match Starts in
                                                                        </Col>
                                                                        <Countdown
                                                                            date={GlobalCard.start_date.timestamp * 1000}
                                                                            renderer={renderer}
                                                                        />
                                                                    </Col>
                                                                    : (

                                                                        <h5 className="text-center">Match Not Scheduled</h5>
                                                                    )
                                                            }
                                                        </Col>
                                                    )}
                                            </Col>
                                            : <div className={cx('preLoaderInner', 'contentLoader')}></div>}
                                    </Col>
                                </Tab.Container>
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
        getScheduleState: state.seasonReducer,
        wagonWheel: state.wagonwheelReducer, /* WAGON WHEEL #WagonCreateWeb */
    }
}

export default connect(mapStatetoProps, {...scheduleAction, ...wagonAction /* WAGON WHEEL #WagonCreateWeb */})(MatchDetail);
