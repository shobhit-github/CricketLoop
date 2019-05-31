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
import Asidebar from '../components/Asidebar';
import LiveOver from '../components/Liveover';
import LiveOversummary from '../components/LiveoverSummary';
import LiveHighlights from '../components/LiveHighlights';
import classNames from 'classnames/bind';
import styles from '../css/components/match_inner';
import FA from 'react-fontawesome';
import WagonWheel from '../components/WagonWheel';   /* WAGON WHEEL */
import WagonWheelHighlight from '../components/WagonWheelHighlight';   /* WAGON WHEEL */
import WagonWheelLive from '../components/WagonWheelLive';   /* WAGON WHEEL */ /* #WagonCreateWeb */
import Helmet from 'react-helmet';
import {FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon} from 'react-share';
/* import ioOut_wagon_client from 'socket.io-client'; */ /* WAGON WHEEL */
const cx = classNames.bind(styles);
var matchIdProps;
/* var wagonSocket =  ioOut_wagon_client.connect('http://localhost:3003'); */   /* ioOut_wagon_client.connect('http://codex.cricloop.com:3003'); */ /* WAGON WHEEL */
let matchId,
    striker_curr,
    nonstriker_curr,
    innings_match,
    lats_over_cmt,
    last_over_wk,
    last_over_runs,
    over_wk,
    over_match_last,
    bowl_match_last,
    over_coment,
    commentryLsiting,
    scoreCard,
    GlobalCard,
    matchStart_innings,
    GlobalCard_Players,
    dismis_bowler,
    dismis_fielder,
    scoreboardfrst,
    bowler_curr,
    batOrder,
    valueOrder,
    LvMatches,
    LiveMachListed,
    teamVal,
    teamVal_2,
    inngs_score_2,
    inngs_score_1,
    teamList,
    GlobalCard_battingorder,
    Current_innings,
    Bowl_innings = [],
    orderVal,
    dismis_type,
    MatchRoles,
    splitPlayer_wk,
    splitPlayer_c,
    commentryLsiting_2,
    initialLoaded = true,
    initialLoader = 1,
    innings_list_val,
    renderer,
    CompletedProps,
    UpcomingProps,
    teamsPlaying = null;

class LiveDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            LiveMachListed: [],
            LvMatches: [],
            LvMatcheshash: [],
            tabKey: '01' /* #WagonCreateWeb */,
            Livestate: null,
            wagonStateLive: "",
            wagonStateLiveHighlight: "",
            wagonDataProps: "",
            wagonData: null
        };
        this.handleSelect = this.handleSelect.bind(this);
        this.returnWagonElement = this.returnWagonElement.bind(this); /* #WagonCreateWeb */
        this.returnWagonElementHighlight = this.returnWagonElementHighlight.bind(this); /* #WagonCreateWeb */
    }

    componentWillMount() {
        matchId = this.props.params.id
        this.setState({Livestate: {matchId}})
        /* this.props.GetWagonWheel({ matchId }); */ /* WAGON WHEEL */
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
                    className='timmer-count'>{days != '0' ? days + 'd : ' + hours + 'h : ' + minutes + 'm : ' + seconds + 's' : (hours != '00' ? hours + 'h : ' + minutes + 'm : ' + seconds + 's' : (minutes != '00' ? minutes + 'm : ' + seconds + 's' : seconds + 's'))}</span>;
            }
        };
        /* Countdown timer END */

        const {wagonWheel, wagonDataProps} = nextProps;

        if (wagonDataProps && Object.keys(wagonDataProps).length > 0) {
            if (matchId && (wagonDataProps.match_id == matchId)) {
                this.setState({
                    wagonData: wagonDataProps.det,
                    wagonStateLive: ""
                })
                if (this.state.tabKey == '03.2') {
                    this.returnWagonElement(false, null, wagonDataProps.det)
                } else if (this.state.tabKey == '04.2') {
                    this.returnWagonElementHighlight(true, null, wagonDataProps.det)
                }
            }
        }

        function findLiveMatch(data, value) {
            let response;
            for (let dataMatch of data) {
                if (dataMatch.details.key == value) {
                    response = dataMatch;
                }
            }
            return response;
        }

        function findDatabaseMatch(data, value) {
            let response;
            for (let dataMatch of data) {
                if (dataMatch.card.key == value) {
                    response = dataMatch;
                }
            }
            return response;
        }

        if (nextProps && nextProps.isPlaying && nextProps.isPlaying.length > 0) {
            let response = findLiveMatch(nextProps.isPlaying, matchId);
            if (response) {
                console.log("Sockets Data Updated");
                this.setState({LvMatches: response.details, Livestate: {matchId}});
            } else {
                console.log("Waiting for Socket for current match");
                let response = findDatabaseMatch(nextProps.livefull, matchId);
                this.setState({LvMatches: response.card});
            }
        } else if (nextProps && nextProps.livefull && nextProps.livefull.length > 0) {
            console.log("Socket not available for this match - pulling from database");
            let response = findDatabaseMatch(nextProps.livefull, matchId);
            if (response) {
                this.setState({LvMatches: response.card});
            } else {
                var currentUrl = window.location.href;
                var redirectUrl = currentUrl.replace("live_match_detail", "match_details");
                window.location.href = redirectUrl;
            }
        }
    }

    handleSelect(key) {
        this.setState({
            tabKey: key
        })

        /* ------------------------ */  /* #WagonCreateWeb */
        this.setState({wagonStateLive: ""})
        this.setState({wagonStateLiveHighlight: ""})
        if (key == '03.2') {
            this.returnWagonElement(false, matchId)
        } else if (key == '04.2') {
            this.returnWagonElementHighlight(true, matchId)
        }

        /* ----------------------- */ /* #WagonCreateWeb */
    }

    returnWagonElement(highlights, matchId, wagonDataProps) {
        var wagonWheel = <WagonWheel
            highlightsProps={highlights}
            matchId={matchId}
            wagonData={(wagonDataProps) ? wagonDataProps : null}
        />
        this.setState({wagonStateLiveHighlight: ""})
        this.setState({wagonStateLive: wagonWheel})
    }

    returnWagonElementHighlight(highlights, matchId, wagonDataProps) {
        var wagonWheel = <WagonWheelHighlight
            highlightsProps={highlights}
            matchId={matchId}
            wagonData={(wagonDataProps) ? wagonDataProps : null}
        />
        this.setState({wagonStateLive: ""})
        this.setState({wagonStateLiveHighlight: wagonWheel})
    }

    /* Time converting function */
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

    /* Image replacing function */
    getImage(image, altParam, classValue) {
        let r_image;
        try {
            r_image = require(`../images/teams_flag/${image.toLowerCase()}_thumb.png`);
        } catch (ex) {
            r_image = require('../images/teams_flag/dumm_thumb.png');
        }
        return (<img src={r_image} alt={altParam} className={classValue}/>)
    }

    render() {
        GlobalCard = this.state.LvMatches;
        console.log("Page State", this.state.LvMatches);

        /* Striker function */
        function strikePlayer() {
            var striker_curr_ret;
            if (GlobalCard.now && GlobalCard.now.striker && GlobalCard.now.striker != null) {
                const striker_curr_temp = Object.keys(GlobalCard.players)
                    .filter(key => (GlobalCard.now.striker).includes(key))
                    .reduce((obj, key) => {
                        obj[key] = GlobalCard.players[key];
                        return obj;
                    }, {});
                innings_match = GlobalCard.now.innings;

                Object.keys(striker_curr_temp).forEach(function (key) {
                    striker_curr_ret = (
                        <tr key={key}>
                            <td>
                                <a href={`/playerinfo/${key}`}><b
                                    className="text-capitalize">{striker_curr_temp[key].name} *</b></a>
                            </td>
                            <td>
                                <b>{striker_curr_temp[key].match.innings[innings_match].batting.runs ? striker_curr_temp[key].match.innings[innings_match].batting.runs : '0'}</b>
                            </td>
                            <td>
                                {striker_curr_temp[key].match.innings[innings_match].batting.balls ? striker_curr_temp[key].match.innings[innings_match].batting.balls : '0'}
                            </td>
                            <td>
                                {striker_curr_temp[key].match.innings[innings_match].batting.fours ? striker_curr_temp[key].match.innings[innings_match].batting.fours : '0'}
                            </td>
                            <td>
                                {striker_curr_temp[key].match.innings[innings_match].batting.sixes ? striker_curr_temp[key].match.innings[innings_match].batting.sixes : '0'}
                            </td>
                            <td>
                                {striker_curr_temp[key].match.innings[innings_match].batting.strike_rate ? striker_curr_temp[key].match.innings[innings_match].batting.strike_rate : '0'}
                            </td>
                        </tr>
                    )
                });
            } else {
                striker_curr_ret = <tr>
                    <td>
                        {
                            (GlobalCard.status_overview == 'in_play') ? 'No batsman on the crease' : '-'
                        }
                    </td>
                    <td>
                        -
                    </td>
                    <td>
                        -
                    </td>
                    <td>
                        -
                    </td>
                    <td>
                        -
                    </td>
                    <td>
                        -
                    </td>
                </tr>
            }
            return striker_curr_ret;
        }

        /* nonstriker function */
        function nonStriker() {
            var nonstriker_curr_ret;
            if (GlobalCard.now && GlobalCard.now.nonstriker && GlobalCard.now.nonstriker != null) {
                const nonstriker_curr_temp = Object.keys(GlobalCard.players)
                    .filter(key => (GlobalCard.now.nonstriker).includes(key))
                    .reduce((obj, key) => {
                        obj[key] = GlobalCard.players[key];
                        return obj;
                    }, {});
                innings_match = GlobalCard.now.innings;

                Object.keys(nonstriker_curr_temp).forEach(function (key) {
                    nonstriker_curr_ret = (
                        <tr key={key}>
                            <td>
                                <a href={`/playerinfo/${key}`}><b
                                    className="text-capitalize">{nonstriker_curr_temp[key].name}</b></a>
                            </td>
                            <td>
                                <b>{nonstriker_curr_temp[key].match.innings[innings_match].batting.runs ? nonstriker_curr_temp[key].match.innings[innings_match].batting.runs : '0'}</b>
                            </td>
                            <td>
                                {nonstriker_curr_temp[key].match.innings[innings_match].batting.balls ? nonstriker_curr_temp[key].match.innings[innings_match].batting.balls : '0'}
                            </td>
                            <td>
                                {nonstriker_curr_temp[key].match.innings[innings_match].batting.fours ? nonstriker_curr_temp[key].match.innings[innings_match].batting.fours : '0'}
                            </td>
                            <td>
                                {nonstriker_curr_temp[key].match.innings[innings_match].batting.sixes ? nonstriker_curr_temp[key].match.innings[innings_match].batting.sixes : '0'}
                            </td>
                            <td>
                                {nonstriker_curr_temp[key].match.innings[innings_match].batting.strike_rate ? nonstriker_curr_temp[key].match.innings[innings_match].batting.strike_rate : '0'}
                            </td>
                        </tr>
                    )
                });
            } else {
                nonstriker_curr_ret = <tr>
                    <td>
                        {
                            (GlobalCard.status_overview == 'in_play') ? 'No batsman on the crease' : '-'
                        }
                    </td>
                    <td>
                        -
                    </td>
                    <td>
                        -
                    </td>
                    <td>
                        -
                    </td>
                    <td>
                        -
                    </td>
                    <td>
                        -
                    </td>
                </tr>
            }
            return nonstriker_curr_ret;
        }

        /* bowler function */
        function bowler_currnt() {
            var bowler_curr_ret;
            if (GlobalCard.now && GlobalCard.now.bowler && GlobalCard.now.bowler != null) {
                const bowler_curr_temp = Object.keys(GlobalCard.players)
                    .filter(key => GlobalCard.now.bowler.includes(key))
                    .reduce((obj, key) => {
                        obj[key] = GlobalCard.players[key];
                        return obj;
                    }, {});
                innings_match = GlobalCard.now.innings;

                Object.keys(bowler_curr_temp).forEach(function (key) {
                    bowler_curr_ret = (
                        <tr key={key}>
                            <td>
                                <a href={`/playerinfo/${key}`}><b
                                    className="text-capitalize">{bowler_curr_temp[key].name}</b></a>
                            </td>
                            <td>
                                <b>{bowler_curr_temp[key].match.innings[innings_match].bowling.overs}</b>
                            </td>
                            <td>
                                {bowler_curr_temp[key].match.innings[innings_match].bowling.maiden_overs}
                            </td>
                            <td>
                                {bowler_curr_temp[key].match.innings[innings_match].bowling.runs}
                            </td>
                            <td>
                                {bowler_curr_temp[key].match.innings[innings_match].bowling.wickets}
                            </td>
                            <td>
                                {bowler_curr_temp[key].match.innings[innings_match].bowling.economy}
                            </td>
                            <td>
                                {bowler_curr_temp[key].match.innings[innings_match].bowling.dots}
                            </td>
                            <td>
                                {bowler_curr_temp[key].match.innings[innings_match].bowling.extras}
                            </td>
                        </tr>
                    )
                });
            } else {
                bowler_curr_ret = (
                    <tr>
                        <td>
                            {
                                (GlobalCard.status_overview == 'in_play') ? 'Waiting for bowler to bowl' : '-'
                            }
                        </td>
                        <td>
                            -
                        </td>
                        <td>
                            -
                        </td>
                        <td>
                            -
                        </td>
                        <td>
                            -
                        </td>
                        <td>
                            -
                        </td>
                        <td>
                            -
                        </td>
                        <td>
                            -
                        </td>
                    </tr>
                )
            }
            return bowler_curr_ret;
        }

        if (Object.keys(this.state.LvMatches).length > 0) {
            /* Global Vaiables */
            teamList = this.state.LvMatches.teams ? this.state.LvMatches.teams : '';
            matchStart_innings = this.state.LvMatches.innings ? this.state.LvMatches.innings : '';
            GlobalCard_battingorder = this.state.LvMatches.batting_order ? this.state.LvMatches.batting_order : '';
            GlobalCard_Players = this.state.LvMatches.players ? this.state.LvMatches.players : '';
            /* Global Vaiables END */

            /* string to html conversion */
            function createMarkup() {
                return {__html: over_coment};
            }

            /* lst 3 over commentry */
            if (this.state.LvMatches.now.recent_overs && Object.keys(this.state.LvMatches.now.recent_overs).length > 0 && this.state.LvMatches.now) {
                commentryLsiting = this.state.LvMatches.now.recent_overs.map((value, index) => {
                        const revers_over = value[1].reverse();
                        if (revers_over.length > 0) {
                            var last_over_runs = 0,
                                last_over_wk = 0;
                            revers_over.map((overs) => {
                                lats_over_cmt = this.state.LvMatches.balls[overs]
                                const over_ball = lats_over_cmt.ball,
                                    over_wk = lats_over_cmt.bowler.wicket;
                                last_over_runs = last_over_runs + lats_over_cmt.runs;
                                last_over_wk = last_over_wk + over_wk;
                            })
                        }
                        return (
                            <Col className={cx('cmnty-bx')} key={index}>
                                <FormGroup>
                                    <Table className={cx('score-table')}>
                                        <thead>
                                        <tr>
                                            <th>
                                                Overs
                                            </th>
                                            <th>
                                                Runs (this over)
                                            </th>
                                            <th>
                                                Wickets (this over)
                                            </th>
                                            <th>
                                                Bowler
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <b>{lats_over_cmt ? lats_over_cmt.over : ''}</b>
                                            </td>
                                            <td>
                                                <b>{last_over_runs}</b>
                                            </td>
                                            <td>
                                                <b>{last_over_wk}</b>
                                            </td>
                                            <td>
                                                <b><span
                                                    className="text-capitalize">{lats_over_cmt ? (lats_over_cmt.bowler.key).split('_').join(' ') : ''}</span></b>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </FormGroup>
                                {value[1].length > 0 ?
                                    value[1].map((overs, keys) => {
                                        lats_over_cmt = this.state.LvMatches.balls[overs]
                                        over_coment = lats_over_cmt.comment;
                                        return (
                                            < FormGroup key={keys}>
                                                <Col className={cx('com-ovr')}>
                                                    {lats_over_cmt.over_str}
                                                </Col>
                                                <Col className={cx('com-cmntry')}>
                                                    <span dangerouslySetInnerHTML={createMarkup()}></span>
                                                </Col>
                                            </FormGroup>
                                        )
                                    })
                                    : ''
                                }
                            </Col>
                        )

                    }
                )
                commentryLsiting_2 = this.state.LvMatches.now.recent_overs.map((value, index) => {
                        const revers_over = value[1].reverse();
                        if (revers_over.length > 0) {
                            var last_over_runs = 0,
                                last_over_wk = 0;
                            revers_over.map((overs, keys) => {

                                lats_over_cmt = this.state.LvMatches.balls[overs]
                                const over_ball = lats_over_cmt.ball,
                                    over_wk = lats_over_cmt.bowler.wicket;
                                last_over_runs = last_over_runs + lats_over_cmt.runs;
                                last_over_wk = last_over_wk + over_wk;
                            })
                        }
                        return (
                            <Col className={cx('cmnty-bx')} key={index}>
                                {value[1].length > 0 ?
                                    value[1].map((overs, keys) => {
                                        lats_over_cmt = this.state.LvMatches.balls[overs]
                                        over_coment = lats_over_cmt.comment;
                                        return (
                                            lats_over_cmt.runs == '4' ?
                                                < FormGroup key={keys}>
                                                    <Col className={cx('com-ovr')}>
                                                        {lats_over_cmt.over_str} <span
                                                        className={cx('over-ball', 'four')}>4</span>
                                                    </Col>
                                                    <Col className={cx('com-cmntry')}>
                                                        <span>{over_coment.split(':')[0]}</span>
                                                    </Col>
                                                </FormGroup>
                                                : (
                                                    lats_over_cmt.runs == '6' ?
                                                        < FormGroup key={keys}>
                                                            <Col className={cx('com-ovr')}>
                                                                {lats_over_cmt.over_str} <span
                                                                className={cx('over-ball', 'six')}>6</span>
                                                            </Col>
                                                            <Col className={cx('com-cmntry')}>
                                                                <span>{over_coment.split(':')[0]}</span>
                                                            </Col>
                                                        </FormGroup> : ''
                                                )
                                        )
                                    })
                                    : ''
                                }
                            </Col>
                        )

                    }
                )
            }

            /* scoreCard */
            if (this.state.LvMatches.batting_order && this.state.LvMatches.status_overview != 'scheduled' && this.state.LvMatches.status != "notstarted") {
                scoreCard = this.state.LvMatches.batting_order.map((values, key) => {
                    const orderVal = values;
                    const innings_val = orderVal.join('_');

                    var borderTemp = [];
                    Current_innings = orderVal[1];
                    if (matchStart_innings && matchStart_innings[innings_val] && matchStart_innings[innings_val].batting_order) {
                        borderTemp = matchStart_innings[innings_val].batting_order;
                    }

                    if (orderVal[0] == 'a') {
                        const tempTEam = 'b_' + orderVal[1]
                        if (matchStart_innings[tempTEam].bowling_order && matchStart_innings[tempTEam].bowling_order != null && matchStart_innings[tempTEam].bowling_order != undefined) {
                            Bowl_innings = matchStart_innings[tempTEam].bowling_order
                        }
                    } else {
                        const tempTEam = 'a_' + orderVal[1]
                        if (matchStart_innings[tempTEam].bowling_order && matchStart_innings[tempTEam].bowling_order != null && matchStart_innings[tempTEam].bowling_order != undefined) {
                            Bowl_innings = matchStart_innings[tempTEam].bowling_order
                        }
                    }

                    return (
                        orderVal[0] == 'a' ?
                            /* function for dismiss player = createDismiss(GlobalCard_Players[values]) */
                            <Col key={key}>
                                <FormGroup>
                                    <h4 className="sub-title"> {teamList.a.name} {orderVal[1] == '1' ?
                                        <span> First </span> : (<span> Second </span>)} innings
                                        <span
                                            className="pull-right"><b>Score : </b>{matchStart_innings[innings_val].runs ? matchStart_innings[innings_val].runs : '0'} / {matchStart_innings[innings_val].wickets ? matchStart_innings[innings_val].wickets : '0'}</span>
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
                                                                className="text-capitalize">{GlobalCard_Players[values].match.innings[Current_innings].batting.out_str ? GlobalCard_Players[values].match.innings[Current_innings].batting.out_str : 'Not Out'}</small>
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
                                                <span><b>Fours : </b> {matchStart_innings[innings_val].fours ? matchStart_innings[innings_val].fours : '0'}</span>, <span><b>Sixes : </b> {matchStart_innings[innings_val].sixes ? matchStart_innings[innings_val].sixes : '0'}</span>, <span><b>Extra : </b> {matchStart_innings[innings_val].extras ? matchStart_innings[innings_val].extras : '0'}</span>, <span
                                                className="pull-right"><b> Total Runs : </b> {matchStart_innings[innings_val].runs ? matchStart_innings[innings_val].runs : '0'} </span>
                                            </td>
                                        </tr>
                                        </tfoot>
                                    </Table>
                                    {getNotbat(borderTemp, teamsPlaying)}
                                </FormGroup>
                                {
                                    GlobalCard.innings[innings_val].fall_of_wickets && Object.keys(GlobalCard.innings[innings_val].fall_of_wickets).length > 0 ?

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
                                                        {
                                                            Object.keys(GlobalCard.innings[innings_val].fall_of_wickets).map((key) => {
                                                                return (
                                                                    <Col key={key}>
                                                                        {GlobalCard.innings[innings_val].fall_of_wickets[key]}
                                                                    </Col>
                                                                )
                                                            })
                                                        }
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                        </FormGroup>
                                        : ''
                                }

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

                                                    GlobalCard_Players && GlobalCard_Players[values] != undefined ?
                                                        <tr key={index}>
                                                            <td>
                                                                <a href={`/playerinfo/${values}`}><b>{GlobalCard_Players[values].name}</b></a>
                                                            </td>
                                                            <td>
                                                                <b>{GlobalCard_Players[values].match.innings[Current_innings].bowling.overs ? GlobalCard_Players[values].match.innings[Current_innings].bowling.overs : '0'}</b>
                                                            </td>
                                                            <td>
                                                                {GlobalCard_Players[values].match.innings[Current_innings].bowling.maiden_overs ? GlobalCard_Players[values].match.innings[Current_innings].bowling.maiden_overs : '0'}
                                                            </td>
                                                            <td>
                                                                {GlobalCard_Players[values].match.innings[Current_innings].bowling.dots ? GlobalCard_Players[values].match.innings[Current_innings].bowling.dots : '0'}
                                                            </td>
                                                            <td>
                                                                {GlobalCard_Players[values].match.innings[Current_innings].bowling.balls ? GlobalCard_Players[values].match.innings[Current_innings].bowling.balls : '0'}
                                                            </td>
                                                            <td>
                                                                {GlobalCard_Players[values].match.innings[Current_innings].bowling.runs ? GlobalCard_Players[values].match.innings[Current_innings].bowling.runs : '0'}
                                                            </td>
                                                            <td>
                                                                {GlobalCard_Players[values].match.innings[Current_innings].bowling.wickets ? GlobalCard_Players[values].match.innings[Current_innings].bowling.wickets : '0'}
                                                            </td>
                                                            <td>
                                                                {GlobalCard_Players[values].match.innings[Current_innings].bowling.economy ? GlobalCard_Players[values].match.innings[Current_innings].bowling.economy : '0'}
                                                            </td>
                                                            <td>
                                                                {GlobalCard_Players[values].match.innings[Current_innings].bowling.extras ? GlobalCard_Players[values].match.innings[Current_innings].bowling.extras : '0'}
                                                            </td>
                                                        </tr>
                                                        : ''
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
                                                className="pull-right"><b>Score : </b>{matchStart_innings[innings_val].runs ? matchStart_innings[innings_val].runs : '0'} / {matchStart_innings[innings_val].wickets ? matchStart_innings[innings_val].wickets : '0'}</span>
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
                                                                    className="text-capitalize">{GlobalCard_Players[values].match.innings[Current_innings].batting.out_str ? GlobalCard_Players[values].match.innings[Current_innings].batting.out_str : 'Not Out'}</small>
                                                            </td>
                                                            <td>
                                                                <b>{GlobalCard_Players[values].match.innings[Current_innings].batting.runs ? GlobalCard_Players[values].match.innings[Current_innings].batting.runs : '0'}</b>
                                                            </td>
                                                            <td>
                                                                {GlobalCard_Players[values].match.innings[Current_innings].batting.balls ? GlobalCard_Players[values].match.innings[Current_innings].batting.balls : '0'}
                                                            </td>
                                                            <td>
                                                                {GlobalCard_Players[values].match.innings[Current_innings].batting.dots ? GlobalCard_Players[values].match.innings[Current_innings].batting.dots : '0'}
                                                            </td>
                                                            <td>
                                                                {GlobalCard_Players[values].match.innings[Current_innings].batting.fours ? GlobalCard_Players[values].match.innings[Current_innings].batting.fours : '0'}
                                                            </td>
                                                            <td>
                                                                {GlobalCard_Players[values].match.innings[Current_innings].batting.sixes ? GlobalCard_Players[values].match.innings[Current_innings].batting.sixes : '0'}
                                                            </td>
                                                            <td>
                                                                {GlobalCard_Players[values].match.innings[Current_innings].batting.strike_rate ? GlobalCard_Players[values].match.innings[Current_innings].batting.strike_rate : '0'}
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                            </tbody>
                                            <tfoot>
                                            <tr>
                                                <td colSpan='8'>
                                                    <span><b>Fours : </b> {matchStart_innings[innings_val].fours ? matchStart_innings[innings_val].fours : '0'}</span>, <span><b>Sixes : </b> {matchStart_innings[innings_val].sixes ? matchStart_innings[innings_val].sixes : '0'}</span>, <span><b>Extra : </b> {matchStart_innings[innings_val].extras ? matchStart_innings[innings_val].extras : '0'}</span>, <span
                                                    className="pull-right"><b> Total Runs : </b> {matchStart_innings[innings_val].runs ? matchStart_innings[innings_val].runs : '0'} </span>
                                                </td>
                                            </tr>
                                            </tfoot>
                                        </Table>
                                        {getNotbat(borderTemp, teamsPlaying)}
                                    </FormGroup>
                                    {
                                        GlobalCard.innings[innings_val].fall_of_wickets && Object.keys(GlobalCard.innings[innings_val].fall_of_wickets).length > 0 ?

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

                                            : ''
                                    }

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
                                                        GlobalCard_Players && GlobalCard_Players[values] != undefined ?
                                                            <tr key={index}>
                                                                <td>
                                                                    <a href={`/playerinfo/${values}`}><b>{GlobalCard_Players[values].name}</b></a>
                                                                </td>
                                                                <td>
                                                                    <b>{GlobalCard_Players[values].match.innings[Current_innings].bowling.overs ? GlobalCard_Players[values].match.innings[Current_innings].bowling.overs : '0'} </b>
                                                                </td>
                                                                <td>
                                                                    {GlobalCard_Players[values].match.innings[Current_innings].bowling.maiden_overs ? GlobalCard_Players[values].match.innings[Current_innings].bowling.maiden_overs : '0'}
                                                                </td>
                                                                <td>
                                                                    {GlobalCard_Players[values].match.innings[Current_innings].bowling.dots ? GlobalCard_Players[values].match.innings[Current_innings].bowling.dots : '0'}
                                                                </td>
                                                                <td>
                                                                    {GlobalCard_Players[values].match.innings[Current_innings].bowling.balls ? GlobalCard_Players[values].match.innings[Current_innings].bowling.balls : '0'}
                                                                </td>
                                                                <td>
                                                                    {GlobalCard_Players[values].match.innings[Current_innings].bowling.runs ? GlobalCard_Players[values].match.innings[Current_innings].bowling.runs : '0'}
                                                                </td>
                                                                <td>
                                                                    {GlobalCard_Players[values].match.innings[Current_innings].bowling.wickets ? GlobalCard_Players[values].match.innings[Current_innings].bowling.wickets : '0'}
                                                                </td>
                                                                <td>
                                                                    {GlobalCard_Players[values].match.innings[Current_innings].bowling.economy ? GlobalCard_Players[values].match.innings[Current_innings].bowling.economy : '0'}
                                                                </td>
                                                                <td>
                                                                    {GlobalCard_Players[values].match.innings[Current_innings].bowling.extras ? GlobalCard_Players[values].match.innings[Current_innings].bowling.extras : '0'}
                                                                </td>
                                                            </tr>
                                                            : ''
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
                scoreCard = (
                    <h5 className="text-center">Match details will be updated as soon as the match starts </h5>);
            }


            /* Scoreboard Section */
            let inningsMatch = this.state.LvMatches.innings ? this.state.LvMatches.innings : '';
            let inngFirst = []
            let inngsecond = []

            if (inningsMatch && Object.keys(inningsMatch).length > 0) {
                if (this.state.LvMatches.batting_order) {
                    this.state.LvMatches.batting_order.map((values, key) => {
                        const temp_val = values;
                        valueOrder = temp_val[0];
                        batOrder = values.join('_');
                    })
                }
                if (inningsMatch && Object.keys(inningsMatch).length > 2) {
                    if (this.state.LvMatches.first_batting == 'a') {
                        teamVal = 'a';
                        teamVal_2 = 'b';
                        if (this.state.LvMatches.innings.a_2.balls != '0') {
                            inngs_score_1 = (this.state.LvMatches.innings.a_1.runs ? this.state.LvMatches.innings.a_1.runs : '') + ', ' + (this.state.LvMatches.innings.a_2.runs && this.state.LvMatches.innings.a_2.runs != null ? this.state.LvMatches.innings.a_2.runs : '0') + ' / ' + (this.state.LvMatches.innings.a_2.wickets ? this.state.LvMatches.innings.a_2.wickets : '0') + ' (' + (this.state.LvMatches.innings.a_2.overs ? this.state.LvMatches.innings.a_2.overs : '0') + ' Ovr)';
                        } else {
                            inngs_score_1 = (this.state.LvMatches.innings.a_1.runs && this.state.LvMatches.innings.a_1.runs != null ? this.state.LvMatches.innings.a_1.runs : '0') + '/' + (this.state.LvMatches.innings.a_1.wickets ? this.state.LvMatches.innings.a_1.wickets : '0')
                        }
                        if (this.state.LvMatches.innings.b_2.balls != '0') {
                            inngs_score_2 = (this.state.LvMatches.innings.b_1.runs ? this.state.LvMatches.innings.b_1.runs : '') + ', ' + (this.state.LvMatches.innings.b_2.runs && this.state.LvMatches.innings.b_2.runs != null ? this.state.LvMatches.innings.b_2.runs : '0') + ' / ' + (this.state.LvMatches.innings.b_2.wickets ? this.state.LvMatches.innings.b_2.wickets : '0') + ' (' + (this.state.LvMatches.innings.b_2.overs ? this.state.LvMatches.innings.b_2.overs : '0') + ' Ovr)';
                        } else {
                            inngs_score_2 = (this.state.LvMatches.innings.b_1.runs && this.state.LvMatches.innings.b_1.runs != null ? this.state.LvMatches.innings.b_1.runs : '0') + '/' + (this.state.LvMatches.innings.b_1.wickets ? this.state.LvMatches.innings.b_1.wickets : '0')
                        }
                    } else if (this.state.LvMatches.first_batting == 'b') {
                        teamVal = 'b';
                        teamVal_2 = 'a';
                        if (this.state.LvMatches.innings.a_2.balls != '0') {
                            inngs_score_2 = (this.state.LvMatches.innings.a_1.runs ? this.state.LvMatches.innings.a_1.runs : '') + ', ' + (this.state.LvMatches.innings.a_2.runs && this.state.LvMatches.innings.a_2.runs ? this.state.LvMatches.innings.a_2.runs : '0') + ' / ' + (this.state.LvMatches.innings.a_2.wickets ? this.state.LvMatches.innings.a_2.wickets : '0') + ' (' + (this.state.LvMatches.innings.a_2.overs ? this.state.LvMatches.innings.a_2.overs : '') + ' Ovr)';
                        } else {
                            inngs_score_2 = (this.state.LvMatches.innings.a_1.runs && this.state.LvMatches.innings.a_1.runs != null ? this.state.LvMatches.innings.a_1.runs : '0') + '/' + (this.state.LvMatches.innings.a_1.wickets ? this.state.LvMatches.innings.a_1.wickets : '0')
                        }
                        if (this.state.LvMatches.innings.b_2.balls != '0') {
                            inngs_score_1 = (this.state.LvMatches.innings.b_1.runs ? this.state.LvMatches.innings.b_1.runs : '') + ', ' + (this.state.LvMatches.innings.b_2.runs && this.state.LvMatches.innings.b_2.runs ? this.state.LvMatches.innings.b_2.runs : '0') + ' / ' + (this.state.LvMatches.innings.b_2.wickets ? this.state.LvMatches.innings.b_2.wickets : '0') + ' (' + (this.state.LvMatches.innings.b_2.overs ? this.state.LvMatches.innings.b_2.overs : '0') + ' Ovr)';
                        } else {
                            inngs_score_1 = (this.state.LvMatches.innings.b_1.runs && this.state.LvMatches.innings.b_1.runs != null ? this.state.LvMatches.innings.b_1.runs : '0') + '/' + (this.state.LvMatches.innings.b_1.wickets ? this.state.LvMatches.innings.b_1.wickets : '0')
                        }
                    } else {
                        teamVal = 'a';
                        teamVal_2 = 'b';
                        inngs_score_1 = '-';
                        inngs_score_2 = '-';
                    }

                    scoreboardfrst = (
                        <div className={cx('cric-pan', 'cric-pan-table')}>
                            <div className={cx('cric-pan-tr')}>
                                <Col className={cx('team-flg', 'cric-pan-td')}>
                                    {this.getImage(this.state.LvMatches.teams[teamVal].key, "img-flg", "img-flg-board")}
                                </Col>
                                <Col className={cx('cric-pan-td', 'text-black')}>
                                    <b className={cx('h4')}> {this.state.LvMatches.teams[teamVal].key.toUpperCase()}</b>
                                </Col>

                                <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                    {inngs_score_1}
                                </Col>
                            </div>

                            <div className={cx('cric-pan-tr')}>
                                <Col className={cx('team-flg', 'cric-pan-td')}>
                                    {this.getImage(this.state.LvMatches.teams[teamVal_2].key, "img-flg", "img-flg-board")}
                                </Col>
                                <Col className={cx('cric-pan-td', 'text-black')}>
                                    <b className={cx('h4')}> {this.state.LvMatches.teams[teamVal_2].key.toUpperCase()}</b>
                                </Col>

                                <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                    {inngs_score_2}
                                </Col>
                            </div>
                        </div>
                    )
                } else {

                    if (this.state.LvMatches.first_batting == 'a') {
                        teamVal = 'a';
                        teamVal_2 = 'b';
                        if (this.state.LvMatches.innings.a_1.balls != '0') {
                            inngs_score_1 = (this.state.LvMatches.innings.a_1.runs ? this.state.LvMatches.innings.a_1.runs : '0') + ' / ' + (this.state.LvMatches.innings.a_1.wickets ? this.state.LvMatches.innings.a_1.wickets : '0') + ' (' + (this.state.LvMatches.innings.a_1.overs ? this.state.LvMatches.innings.a_1.overs : '') + ' Ovr)';
                        } else {
                            inngs_score_1 = '-'
                        }
                        if (this.state.LvMatches.innings.b_1.balls != '0') {
                            inngs_score_2 = (this.state.LvMatches.innings.b_1.runs ? this.state.LvMatches.innings.b_1.runs : '0') + ' / ' + (this.state.LvMatches.innings.b_1.wickets ? this.state.LvMatches.innings.b_1.wickets : '0') + ' (' + (this.state.LvMatches.innings.b_1.overs ? this.state.LvMatches.innings.b_1.overs : '') + ' Ovr)';
                        } else {
                            inngs_score_2 = "-"
                        }
                    } else if (this.state.LvMatches.first_batting == 'b') {
                        teamVal = 'b';
                        teamVal_2 = 'a';
                        if (this.state.LvMatches.innings.a_1.balls != '0') {
                            inngs_score_2 = (this.state.LvMatches.innings.a_1.runs ? this.state.LvMatches.innings.a_1.runs : '') + ' / ' + (this.state.LvMatches.innings.a_1.wickets ? this.state.LvMatches.innings.a_1.wickets : '0') + ' (' + (this.state.LvMatches.innings.a_1.overs ? this.state.LvMatches.innings.a_1.overs : '') + ' Ovr)';
                        } else {
                            inngs_score_2 = '-'
                        }
                        if (this.state.LvMatches.innings.b_1.balls != '0') {
                            inngs_score_1 = (this.state.LvMatches.innings.b_1.runs ? this.state.LvMatches.innings.b_1.runs : '') + ' / ' + (this.state.LvMatches.innings.b_1.wickets ? this.state.LvMatches.innings.b_1.wickets : '0') + ' (' + (this.state.LvMatches.innings.b_1.overs ? this.state.LvMatches.innings.b_1.overs : '') + ' Ovr)';
                        } else {
                            inngs_score_1 = "-"
                        }
                    } else {
                        teamVal = 'a';
                        teamVal_2 = 'b';
                        inngs_score_1 = "-"
                        inngs_score_2 = "-"
                    }


                    scoreboardfrst = (
                        <div className={cx('cric-pan', 'cric-pan-table')}>
                            <div className={cx('cric-pan-tr')}>
                                <Col className={cx('team-flg', 'cric-pan-td')}>
                                    {this.getImage(this.state.LvMatches.teams[teamVal].key, "img-flg", "img-flg-board")}
                                </Col>
                                <Col className={cx('cric-pan-td', 'text-black')}>
                                    <b className={cx('h4')}> {this.state.LvMatches.teams[teamVal].key.toUpperCase()}</b>
                                </Col>

                                <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                    {inngs_score_1}
                                </Col>
                            </div>

                            <div className={cx('cric-pan-tr')}>
                                <Col className={cx('team-flg', 'cric-pan-td')}>
                                    {this.getImage(this.state.LvMatches.teams[teamVal_2].key, "img-flg", "img-flg-board")}
                                </Col>
                                <Col className={cx('cric-pan-td', 'text-black')}>
                                    <b className={cx('h4')}> {this.state.LvMatches.teams[teamVal_2].key.toUpperCase()}</b>
                                </Col>

                                <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                    {inngs_score_2}
                                </Col>
                            </div>
                        </div>
                    )
                }
            } else {
                scoreboardfrst = (
                    <div className={cx('cric-pan', 'cric-pan-table')}>
                        <div className={cx('cric-pan-tr')}>
                            <Col className={cx('team-flg', 'cric-pan-td')}>
                                {this.getImage(this.state.LvMatches.teams['a'].key, "img-flg", "img-flg-board")}
                            </Col>
                            <Col className={cx('cric-pan-td', 'text-black')}>
                                <b className={cx('h4')}> {this.state.LvMatches.teams['a'].key.toUpperCase()}</b>
                            </Col>

                            <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                -
                            </Col>
                        </div>

                        <div className={cx('cric-pan-tr')}>
                            <Col className={cx('team-flg', 'cric-pan-td')}>
                                {this.getImage(this.state.LvMatches.teams['b'].key, "img-flg", "img-flg-board")}
                            </Col>
                            <Col className={cx('cric-pan-td', 'text-black')}>
                                <b className={cx('h4')}> {this.state.LvMatches.teams['b'].key.toUpperCase()}</b>
                            </Col>

                            <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                -
                            </Col>
                        </div>
                    </div>
                )
            }
            /* Score Card Section END */


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
                                <span
                                    className={cx('h5')}>{teamList[key].name ? teamList[key].name : 'Waiting for match to start'}</span>
                            </td>
                            <td>
                                <span
                                    className={cx('text-capitalize')}>{splitPlayer_c ? splitPlayer_c : 'Waiting for match to start'}</span>
                            </td>
                            <td>
                                <span
                                    className={cx('text-capitalize')}>{splitPlayer_wk ? splitPlayer_wk : 'Waiting for match to start'}</span>
                            </td>
                        </tr>
                    )
                }
            )
        }

        return (
            <div>
                <Helmet defer={false} title={this.state.LvMatches ?
                    this.state.LvMatches.now && this.state.LvMatches.now.runs_str && this.state.LvMatches.now.batting_team ?
                        this.state.LvMatches.teams[this.state.LvMatches.now.batting_team].key.toUpperCase() + ' - ' + this.state.LvMatches.now.runs_str + " | " + this.state.LvMatches.short_name
                        : (this.state.LvMatches.short_name && this.state.LvMatches.related_name) ?
                        (this.state.LvMatches.short_name + ' | ' + this.state.LvMatches.related_name)
                        : 'Live Match Details'
                    : 'Live Match Details'}/>
                <Grid className={cx('content-sect')}>
                    <Row>
                        <Col md={8} sm={7} className={cx('resp-fluid')}>
                            <FormGroup>
                                <Tab.Container id="left-tabs-example" activeKey={this.state.tabKey}
                                               onSelect={this.handleSelect}>
                                    <Col className="clearfix">
                                        <Col className={cx('panel-cric')}>
                                            {
                                                Object.keys(this.state.LvMatches).length > 0 ?
                                                    <Col>
                                                        <Col className={cx('panel-heading', 'livematch-head')}>
                                                            <span className={cx('h4')}>
                                                                Live Match - {this.state.LvMatches.title}
                                                            </span>
                                                            <Col className={cx('weigh-text-sm')}>
                                                                <small style={{display: "inline-block", width: "90%"}}>
                                                                    <b>Series</b> : <a
                                                                    href={`/series_details/${this.state.LvMatches.season.key}`}>{this.state.LvMatches.season.name}</a> | {this.timeAndDate(this.state.LvMatches.start_date.timestamp)} at {this.state.LvMatches.venue}.
                                                                </small>
                                                                <span style={{float: "right"}}>
                                                                    <FacebookShareButton
                                                                        url={window.location.origin}
                                                                        quote={`Live Match: ${this.state.LvMatches.title}`}
                                                                        hashtag="#Cricloop"
                                                                        style={{float: "left"}}
                                                                    >
                                                                        <FacebookIcon
                                                                            size={32}
                                                                            round={false}/>
                                                                    </FacebookShareButton>
                                                                    <TwitterShareButton
                                                                        url={window.location.origin}
                                                                        title={`Live Match: ${this.state.LvMatches.title}`}
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
                                                    </Col>
                                                    : ''
                                            }

                                            {
                                                Object.keys(this.state.LvMatches).length > 0 ?
                                                    <Col className={cx('panel-body')}>
                                                        <FormGroup className={cx('marg0')}>
                                                            <Nav className={cx('tab-cric', 'tab-left', 'border-btm')}>
                                                                <NavItem className="tab-items"
                                                                         eventKey="01">Live</NavItem>
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
                                                                         href={`../series_details/${this.state.LvMatches.season.key}#point_table`}>Points
                                                                    Table</NavItem>
                                                            </Nav>
                                                        </FormGroup>
                                                        <Tab.Content animation>
                                                            <Tab.Pane eventKey="01">
                                                                <Col className={cx('panel-cric')}>
                                                                    <Row>
                                                                        {/* repeter */}
                                                                        {
                                                                            this.state.LvMatches.start_date && this.state.LvMatches.start_date.timestamp && this.state.LvMatches.status == 'notstarted' ?
                                                                                <div>
                                                                                    <Col className='text-center'>
                                                                                        <Col className="h4">
                                                                                            Match Starts in
                                                                                        </Col>
                                                                                        <Countdown
                                                                                            date={this.state.LvMatches.start_date.timestamp * 1000}
                                                                                            renderer={renderer}
                                                                                        />
                                                                                    </Col>
                                                                                    <hr/>
                                                                                </div>
                                                                                : ''
                                                                        }
                                                                        <Col md={9} className={cx('resp-fluid')}>
                                                                            <Row>
                                                                                <Col md={10}>
                                                                                    {
                                                                                        this.state.LvMatches.toss
                                                                                            ?
                                                                                            <h6 className="text-primary">{this.state.LvMatches.toss ? this.state.LvMatches.toss.str : ''}</h6>
                                                                                            : ''
                                                                                    }

                                                                                    {
                                                                                        scoreboardfrst ? scoreboardfrst :
                                                                                            (
                                                                                                <Col
                                                                                                    className={cx('cric-pan', 'cric-pan-table')}>
                                                                                                    <Col
                                                                                                        className={cx('cric-pan-tr')}>
                                                                                                        <Col
                                                                                                            className={cx('team-flg', 'cric-pan-td')}>
                                                                                                            {this.getImage(this.state.LvMatches.teams.a.short_name, "img-flg", "img-flg-board")}
                                                                                                        </Col>
                                                                                                        <Col
                                                                                                            className={cx('cric-pan-td', 'text-black')}>
                                                                                                            <b className={cx('h4')}>{this.state.LvMatches.teams.a.short_name}</b>
                                                                                                        </Col>
                                                                                                        <Col
                                                                                                            className={cx('cric-pan-td', 'cric-pan-score')}>
                                                                                                            <span
                                                                                                                className={cx('h3')}>
                                                                                                                -
                                                                                                    </span>
                                                                                                        </Col>
                                                                                                    </Col>

                                                                                                    <Col
                                                                                                        className={cx('cric-pan-tr')}>
                                                                                                        <Col
                                                                                                            className={cx('team-flg', 'cric-pan-td')}>
                                                                                                            {this.getImage(this.state.LvMatches.teams.b.short_name, "img-flg", "img-flg-board")}
                                                                                                        </Col>
                                                                                                        <Col
                                                                                                            className={cx('cric-pan-td', 'text-black')}>
                                                                                                            <b className={cx('h4')}>{this.state.LvMatches.teams.b.short_name}</b>
                                                                                                        </Col>
                                                                                                        <Col
                                                                                                            className={cx('cric-pan-td', 'cric-pan-score')}>
                                                                                                            <span
                                                                                                                className={cx('h3')}>
                                                                                                                -
                                                                                                </span>
                                                                                                        </Col>
                                                                                                    </Col>
                                                                                                </Col>
                                                                                            )
                                                                                    }
                                                                                    {/* scoreboard END */}

                                                                                    <Col
                                                                                        className={cx('cric-status-bx')}>
                                                                                        <span
                                                                                            className={cx('text-warning')}>
                                                                                            <b className="text-capitalize">
                                                                                                {
                                                                                                    this.state.LvMatches.status == "started" ?
                                                                                                        this.state.LvMatches.status_overview == 'in_play' ?
                                                                                                            returnMatchStatus(this.state.LvMatches)
                                                                                                            : this.state.LvMatches.status_overview == 'stumps' ?
                                                                                                            returnMatchStatus(this.state.LvMatches)
                                                                                                            : this.state.LvMatches.status_overview == "pre_match" ?
                                                                                                                returnMatchStatus(this.state.LvMatches)
                                                                                                                : (this.state.LvMatches.status_overview.split('_').join(' ').split('_').join(' '))
                                                                                                        : (this.state.LvMatches.status == "completed" ? this.state.LvMatches.msgs.info ? this.state.LvMatches.msgs.info : this.state.LvMatches.msgs.result : '')
                                                                                                }
                                                                                            </b>
                                                                                        </span>
                                                                                    </Col>
                                                                                </Col>
                                                                                <Col md={2}
                                                                                     className={cx('text-center', 'v-line', 'runrate')}>
                                                                                    <Table
                                                                                        className="custom-table v-aling marg0">
                                                                                        <thead>
                                                                                        <tr>
                                                                                            <th className={cx('text-center')}>
                                                                                                CU.R.R
                                                                                            </th>
                                                                                        </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                        <tr>
                                                                                            <td className={cx('text-center')}>
                                                                                                <span
                                                                                                    className={cx('h3')}>{this.state.LvMatches.now.run_rate != null ? this.state.LvMatches.now.run_rate : '-'}</span>
                                                                                            </td>
                                                                                        </tr>
                                                                                        </tbody>
                                                                                    </Table>
                                                                                    {(this.state.LvMatches.now.req && Object.keys(this.state.LvMatches.now.req).length != '0') ?
                                                                                        this.state.LvMatches.now.req.runs_rate ?
                                                                                            <Table
                                                                                                className="custom-table v-aling marg0">
                                                                                                <thead>
                                                                                                <tr>
                                                                                                    <th className={cx('text-center')}>
                                                                                                        RQ.R.R
                                                                                                    </th>
                                                                                                </tr>
                                                                                                </thead>
                                                                                                <tbody>
                                                                                                <tr>
                                                                                                    <td className={cx('text-center')}>
                                                                                                        <span
                                                                                                            className={cx('h3')}>{this.state.LvMatches.now.req.runs_rate != null ? this.state.LvMatches.now.req.runs_rate : '-'}</span>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                </tbody>
                                                                                            </Table>
                                                                                            : (
                                                                                                <Table
                                                                                                    className="custom-table v-aling marg0">
                                                                                                    <tbody>
                                                                                                    <tr>
                                                                                                        <td className={cx('text-center')}>
                                                                                                            <span
                                                                                                                className={cx('text-info')}><b>{this.state.LvMatches.now.req.runs_str}</b></span>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    </tbody>
                                                                                                </Table>
                                                                                            )
                                                                                        : (
                                                                                            <Table
                                                                                                className="custom-table v-aling marg0">
                                                                                                <thead>
                                                                                                <tr>
                                                                                                    <th className={cx('text-center')}>
                                                                                                        Balls
                                                                                                    </th>
                                                                                                </tr>
                                                                                                </thead>
                                                                                                <tbody>
                                                                                                <tr>
                                                                                                    <td className={cx('text-center')}>
                                                                                                        <span
                                                                                                            className={cx('h3')}>{this.state.LvMatches.now.balls != null ? this.state.LvMatches.now.balls : '-'}</span>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                </tbody>
                                                                                            </Table>
                                                                                        )
                                                                                    }
                                                                                </Col>
                                                                            </Row>
                                                                        </Col>
                                                                        {/* repeter END */}

                                                                        {/* repeter */}
                                                                        <Col md={3}
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
                                                                                        this.state.LvMatches.innings && Object.keys(this.state.LvMatches.innings).length > 0 ?
                                                                                            Object.keys(this.state.LvMatches.innings).length > 2 ?
                                                                                                <tbody>
                                                                                                <tr>
                                                                                                    <td className={cx('text-center')}>
                                                                                                        {this.getImage(this.state.LvMatches.teams.a.key, "flag", cx('img-flg-sm'))}
                                                                                                        <br/><b>{this.state.LvMatches.teams.a.key.toUpperCase()}</b>
                                                                                                    </td>
                                                                                                    <td className={cx('text-center')}>
                                                                                                            <span
                                                                                                                className={cx('h3')}>
                                                                                                                {(this.state.LvMatches.innings.a_1 ? this.state.LvMatches.innings.a_1.fours : '0') + (this.state.LvMatches.innings.a_2 ? this.state.LvMatches.innings.a_2.fours : '0')} & {(this.state.LvMatches.innings.a_1 ? this.state.LvMatches.innings.a_1.sixes : '0') + (this.state.LvMatches.innings.a_2 ? this.state.LvMatches.innings.a_2.sixes : '0')}
                                                                                                            </span>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td className={cx('text-center')}>
                                                                                                        {this.getImage(this.state.LvMatches.teams.b.key, "flag", cx('img-flg-sm'))}
                                                                                                        <br/><b>{this.state.LvMatches.teams.b.key.toUpperCase()}</b>
                                                                                                    </td>
                                                                                                    <td className={cx('text-center')}>
                                                                                                            <span
                                                                                                                className={cx('h3')}>
                                                                                                                {(this.state.LvMatches.innings.b_1 ? this.state.LvMatches.innings.b_1.fours : '0') + (this.state.LvMatches.innings.b_2 ? this.state.LvMatches.innings.b_2.fours : '0')} & {(this.state.LvMatches.innings.b_1 ? this.state.LvMatches.innings.b_1.sixes : '0') + (this.state.LvMatches.innings.b_2 ? this.state.LvMatches.innings.b_2.sixes : '0')}
                                                                                                            </span>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                </tbody>
                                                                                                : (
                                                                                                    <tbody>
                                                                                                    <tr>
                                                                                                        <td className={cx('text-center')}>
                                                                                                            {this.getImage(this.state.LvMatches.teams.a.key, "flag", cx('img-flg-sm'))}
                                                                                                            <br/><b>{this.state.LvMatches.teams.a.key.toUpperCase()}</b>
                                                                                                        </td>
                                                                                                        <td className={cx('text-center')}>
                                                                                                            <span
                                                                                                                className={cx('h3')}>{this.state.LvMatches.innings.a_1 ? this.state.LvMatches.innings.a_1.fours : '0'} & {this.state.LvMatches.innings.a_1 ? this.state.LvMatches.innings.a_1.sixes : '0'}</span>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td className={cx('text-center')}>
                                                                                                            {this.getImage(this.state.LvMatches.teams.b.key, "flag", cx('img-flg-sm'))}
                                                                                                            <br/><b>{this.state.LvMatches.teams.b.key.toUpperCase()}</b>
                                                                                                        </td>
                                                                                                        <td className={cx('text-center')}>
                                                                                                            <span
                                                                                                                className={cx('h3')}>{this.state.LvMatches.innings.b_1 ? this.state.LvMatches.innings.b_1.fours : '0'} & {this.state.LvMatches.innings.b_1 ? this.state.LvMatches.innings.b_1.sixes : '0'}</span>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    </tbody>
                                                                                                )
                                                                                            : (<tbody>
                                                                                            <tr>
                                                                                                <td className={cx('text-center')}>
                                                                                                    {this.getImage(this.state.LvMatches.teams.a.key, "flag", cx('img-flg-sm'))}
                                                                                                    <br/><b>{this.state.LvMatches.teams.a.key.toUpperCase()}</b>
                                                                                                </td>
                                                                                                <td className={cx('text-center')}>
                                                                                                    <span
                                                                                                        className={cx('h3')}>0 & 0</span>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td className={cx('text-center')}>
                                                                                                    {this.getImage(this.state.LvMatches.teams.b.key, "flag", cx('img-flg-sm'))}
                                                                                                    <br/><b>{this.state.LvMatches.teams.b.key.toUpperCase()}</b>
                                                                                                </td>
                                                                                                <td className={cx('text-center')}>
                                                                                                    <span
                                                                                                        className={cx('h3')}>0 & 0</span>
                                                                                                </td>
                                                                                            </tr>
                                                                                            </tbody>)
                                                                                    }
                                                                                </Table>
                                                                            </Col>
                                                                        </Col>
                                                                        {/* repeter END */}

                                                                    </Row>
                                                                </Col>

                                                                <Col className={cx('panel-cric')}>
                                                                    <Col className={cx('panel-body')}>
                                                                        {showPartnership(this.state.LvMatches)}
                                                                    </Col>

                                                                    <Col className={cx('panel-body', 'padzero')}>

                                                                        <Table responsive className="custom-table">
                                                                            <thead>
                                                                            <tr>
                                                                                <th>
                                                                                    BATSMEN
                                                                                </th>
                                                                                <th>
                                                                                    R
                                                                                </th>
                                                                                <th>
                                                                                    B
                                                                                </th>
                                                                                <th>
                                                                                    4S
                                                                                </th>
                                                                                <th>
                                                                                    6S
                                                                                </th>
                                                                                <th>
                                                                                    SR
                                                                                </th>
                                                                            </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                            {strikePlayer()}
                                                                            {nonStriker()}
                                                                            </tbody>
                                                                        </Table>
                                                                        <Table className="custom-table">
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
                                                                                    R
                                                                                </th>
                                                                                <th>
                                                                                    W
                                                                                </th>
                                                                                <th>
                                                                                    ECON
                                                                                </th>
                                                                                <th>
                                                                                    OS
                                                                                </th>
                                                                                <th>
                                                                                    E
                                                                                </th>
                                                                            </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                            {bowler_currnt()}
                                                                            </tbody>
                                                                        </Table>
                                                                    </Col>
                                                                </Col>
                                                                <Col className={cx('panel-cric')}>

                                                                    <Col className={cx('panel-body', 'padzero')}>
                                                                        <h4>Over Commentary</h4>
                                                                        {this.state.LvMatches ?
                                                                            <LiveOver matchId={this.state.Livestate}
                                                                                      matchLive={this.state.LvMatches}/>
                                                                            : ''
                                                                        }
                                                                    </Col>
                                                                </Col>
                                                            </Tab.Pane>

                                                            {/* Score card */}
                                                            <Tab.Pane eventKey="02">
                                                                {scoreCard ? scoreCard : "Scoreboard will be updated with the details soon"}
                                                            </Tab.Pane>
                                                            {/* Score caed End */}

                                                            {/* Over */}
                                                            <Tab.Pane eventKey="03.1">
                                                                {this.state.LvMatches ?
                                                                    <LiveOversummary matchId={this.state.Livestate}
                                                                                     matchLive={this.state.LvMatches}/>
                                                                    : ''
                                                                }
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="03.2">
                                                                {(this.state.wagonStateLive !== "") ? this.state.wagonStateLive : "No Wagon Data for Overs Chart"} {/* WAGON WHEEL */ /* #WagonCreateWeb */}
                                                            </Tab.Pane>
                                                            {/* Over END */}

                                                            <Tab.Pane eventKey="04.1">
                                                                {this.state.LvMatches ?
                                                                    <LiveHighlights matchId={this.state.Livestate}
                                                                                    matchLive={this.state.LvMatches}/>
                                                                    : ''
                                                                }
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="04.2">
                                                                {(this.state.wagonStateLiveHighlight !== "") ? this.state.wagonStateLiveHighlight : "No Wagon Data for Overs Chart"} {/* WAGON WHEEL */ /* #WagonCreateWeb */}
                                                            </Tab.Pane>

                                                            {/* Point Table */}

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
                                                                        <Table className="custom-table">
                                                                            <thead>
                                                                            <tr>
                                                                                <th style={{width: '20%'}}>
                                                                                    Teams
                                                                                </th>
                                                                                <th>
                                                                                    Players XI
                                                                                </th>
                                                                            </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                            {
                                                                                this.state.LvMatches.status_overview != "scheduled" && this.state.LvMatches.status != "notstarted" ?
                                                                                    Object.keys(this.state.LvMatches.teams).map((key) => (
                                                                                        <tr key={key}>
                                                                                            <td>
                                                                                                <b>{this.state.LvMatches.teams[key].name}</b>
                                                                                            </td>
                                                                                            <td>
                                                                                                {
                                                                                                    this.state.LvMatches.teams[key].match.playing_xi ?
                                                                                                        Object.keys(this.state.LvMatches.teams[key].match.playing_xi).map((index) => (
                                                                                                            <span
                                                                                                                key={index}
                                                                                                                className="text-capitalize">{`${(this.state.LvMatches.teams[key].match.playing_xi[index]).split('_').join(' ')}, `}</span>
                                                                                                        )) : ""
                                                                                                }
                                                                                            </td>
                                                                                        </tr>
                                                                                    )) :
                                                                                    (
                                                                                        <tr>
                                                                                            <td colSpan='2'>
                                                                                                Match Details will
                                                                                                updated as soon as it
                                                                                                starts
                                                                                            </td>
                                                                                        </tr>
                                                                                    )
                                                                            }

                                                                            </tbody>
                                                                        </Table>
                                                                    </Col>
                                                                </Col>
                                                            </Tab.Pane>

                                                            {/* Point Table END */}
                                                        </Tab.Content>
                                                    </Col>
                                                    : ""
                                            }
                                        </Col>
                                    </Col>
                                </Tab.Container>
                            </FormGroup>
                        </Col>


                        {/* Side Bar */}
                        <Asidebar/>
                        {/* Side Bar END */}
                    </Row>
                </Grid>
            </div>
        );
    }
}

function showPartnership(liveMatch) {
    if (liveMatch.now.batting_team && liveMatch.innings && liveMatch.status_overview == 'in_play') {
        var currentGame = liveMatch.now.batting_team + '_' + liveMatch.now.innings;
        if (liveMatch.innings[currentGame].partnerships && Object.keys(liveMatch.innings[currentGame].partnerships).length > 0) {
            var partnershipLength = liveMatch.innings[currentGame].partnerships.length;
            if (partnershipLength > 0) {
                partnershipLength = partnershipLength - 1;
            }
            var partnershipData = liveMatch.innings[currentGame].partnerships[partnershipLength];
            return (<div>
                <b>Partnership</b> : {partnershipData.runs} Runs. <b>{liveMatch.players[partnershipData.player_a].fullname}</b> - {partnershipData.player_a_runs} Runs, <b>{liveMatch.players[partnershipData.player_b].fullname}</b> - {partnershipData.player_b_runs} Runs
            </div>);
        } else {
            return (<div></div>);
        }
    }
}

function getNotbat(listPlayer, teamPlay) {
    if (GlobalCard && Object.keys(GlobalCard).length > 0) {
        var batting_player = listPlayer,
            teamPlaying = teamPlay,
            AllPlayer = [];
        var teamplayer = [];
        if (GlobalCard && GlobalCard.teams && GlobalCard.teams[teamPlay] && GlobalCard.teams[teamPlay].match && GlobalCard.teams[teamPlay].match.playing_xi) {
            teamplayer = GlobalCard.teams[teamPlay].match.playing_xi;
        }
        AllPlayer = teamplayer.filter(val => !batting_player.includes(val));
        return (<span className="seperateName">
            {AllPlayer && AllPlayer.length > 0 ? <b>About to bat : </b> : ''}
                {
                    AllPlayer.map((value, keys) => (
                        <span className="text-capitalize" key={keys}><a
                            href={`/playerinfo/${value}`}>{value.split('_').join(' ')}</a></span>
                    ))
                }
        </span>
        )
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
    } else if (values && values.now && values.now.req && values.now.req.runs && values.now.req.runs && values.now.req.runs != null) {
        returnVal = `${values.now.req.runs} runs in ${values.now.req.balls} balls`
    } else if (values && values.now && values.now.req && values.now.req.runs && values.now.req.target_runs && values.now.req.runs === 0 && values.now.req.target_runs > 10) {
        returnVal = `${values.teams[values.now.batting_team].name} Won`
    } else if (values && values.msgs && values.msgs.info && values.msgs.info !== "") {
        returnVal = values.msgs.info
    } else if (values && values.teams && values.toss && values.toss.str && values.toss.str != null) {
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
        } else if (detailsData && detailsData.now && detailsData.now.req && detailsData.now.req.runs && detailsData.now.req.runs && detailsData.now.req.runs != null) {
            returnVal = `${detailsData.now.req.runs} runs in ${detailsData.now.req.balls} balls`
        } else if (detailsData && detailsData.now && detailsData.now.req && detailsData.now.req.runs && detailsData.now.req.target_runs && detailsData.now.req.runs === 0 && detailsData.now.req.target_runs > 10) {
            returnVal = `${detailsData.teams[detailsData.now.batting_team].name} Won`
        } else if (detailsData && detailsData.msgs && detailsData.msgs.info && detailsData.msgs.info !== "") {
            returnVal = detailsData.msgs.info
        } else if (detailsData && detailsData.teams && detailsData.toss && detailsData.toss.str && detailsData.toss.str != null) {
            returnVal = `${detailsData.teams[detailsData.toss.won].key} won toss - chose to ${detailsData.toss.decision}`
        }
    } else {
        return false
    }
    return returnVal;
}

export default LiveDetails;