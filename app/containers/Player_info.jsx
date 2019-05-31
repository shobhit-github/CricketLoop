import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col, Clearfix, FormGroup, Table, Image} from 'react-bootstrap';
/* import PropTypes from 'prop-types'; */
import classNames from 'classnames/bind';
import styles from '../css/components/playerinfo';
import FA from 'react-fontawesome';
import * as playerinfo from '../actions/playerinfo';
import Asidebar from '../components/Asidebar';

const cx = classNames.bind(styles);
let playid = null,
    TeamPlayed,
    currentPlayer = [];

class PlayerInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerinf: '',
        };
    }

    componentWillMount() {
        const playid = this.props.params.id;
        this.props.GetPlayerById({playerid: playid});
    }

    componentWillReceiveProps(nextProps) {
        const playerDetails = nextProps.playerinfo;
        let matchkeyCompleted = 0;
        if (playerDetails && (playerDetails.length > 0)) {
            this.setState({playerinf: playerDetails[0]})
        }
    }

    getImage(image, altParam, classValue) {
        let r_image;
        try {
            r_image = require(`../images/teams_flag/players/${image.toLowerCase()}.jpg`);
        } catch (ex) {
            r_image = require('../images/teams_flag/players/playerDummy.jpg');
        }
        return (<img src={r_image} alt={altParam} className={classValue}/>)
    }

    render() {
        const {identified_roles, key, full_name, bowling_styles, batting_styles, stats, recent_teams} = this.state.playerinf;
        let teamList = null;
        if (recent_teams) {
            teamList = recent_teams.map((value, index) => {
                if ((index + 1) == recent_teams.length) {
                    return (
                        <span key={index}>
                            {value.name}
                        </span>
                    )
                } else {
                    return (
                        <span key={index}>
                            {value.name + ", "}
                        </span>
                    )
                }
            })
        }
        return (
            <Grid className={cx('content-sect')}>
                <Row>
                    <Col md={8} sm={7} className={cx('resp-fluid')}>

                        <FormGroup>
                            <Col className={cx('panel-cric')}>
                                <Col className={cx('panel-heading')}>
                                    <span className={cx('h4')}>
                                        {name}
                                    </span>
                                </Col>
                                {
                                    this.state.playerinf && Object.keys(this.state.playerinf).length > 0 ?
                                        <Col className={cx('panel-body')}>

                                            <Row>
                                                {/* repeter */}
                                                <Col sm={4} className={cx('resp-fluid', 'form-group')}>
                                                    {this.getImage(key, "flag", cx('img-flg'))}
                                                </Col>
                                                {/* repeter END */}

                                                {/* repeter */}
                                                <Col sm={8} className={cx('resp-fluid', 'form-group')}>
                                                    <Col className={cx('cric-pan', 'cric-pan-table')}>
                                                        <h4 className={cx('text-black')}>Player Info</h4>
                                                        <Table className="custom-table v-aling marg0">
                                                            <tbody>
                                                            <tr>
                                                                <td>
                                                                    <b>Full Name</b>
                                                                </td>
                                                                <td>
                                                                    {full_name}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <b>Bowling Styles</b>
                                                                </td>
                                                                <td>
                                                                    {bowling_styles}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <b>Batting Styles</b>
                                                                </td>
                                                                <td>
                                                                    {batting_styles}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <b>Roles</b>
                                                                </td>
                                                                <td>
                                                                    {(identified_roles && identified_roles.keeper) ? ' Keeper ' : ''}
                                                                    {(identified_roles && identified_roles.batsman) ? ' Batsman ' : ''}
                                                                    {(identified_roles && identified_roles.bowler) ? ' Bowler ' : ''}
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </Table>
                                                    </Col>
                                                </Col>
                                                {/* repeter END */}

                                            </Row>

                                            <Col className={cx('panel-cric')}>

                                                <Col className={cx('panel-body', 'padzero')}>
                                                    <h4 className={cx('text-black')}>Recent Teams</h4>
                                                    <Table responsive className="custom-table">
                                                        <thead>
                                                        <tr>
                                                            <th>
                                                                Teams
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>
                                                                {(teamList) ? teamList : "No Teams Assisgned"}
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </Table>

                                                    <Row>
                                                        <Col sm={12}>
                                                            <h4 className={cx('text-black')}>Batting Summary</h4>
                                                        </Col>
                                                        <Col sm={4}>
                                                            <Table responsive className="custom-table vertical-table"
                                                                   bordered>
                                                                {(stats && stats.test && stats.test.batting) ?
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            Match Type
                                                                        </td>
                                                                        <td>
                                                                            Test
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Innings
                                                                        </td>
                                                                        <td>
                                                                            {(stats.test.batting.innings) ? stats.test.batting.innings : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            M
                                                                        </td>
                                                                        <td>
                                                                            {(stats.test.batting.matches) ? stats.test.batting.matches : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            4's
                                                                        </td>
                                                                        <td>
                                                                            {(stats.test.batting.fours) ? stats.test.batting.fours : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            6's
                                                                        </td>
                                                                        <td>
                                                                            {(stats.test.batting.sixes) ? stats.test.batting.sixes : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            100's
                                                                        </td>
                                                                        <td>
                                                                            {(stats.test.batting.hundreds) ? stats.test.batting.hundreds : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            50's
                                                                        </td>
                                                                        <td>
                                                                            {(stats.test.batting.fifties) ? stats.test.batting.fifties : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Balls
                                                                        </td>
                                                                        <td>
                                                                            {(stats.test.batting.balls) ? stats.test.batting.balls : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Avg
                                                                        </td>
                                                                        <td>
                                                                            {(stats.test.batting.average) ? stats.test.batting.average : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            SR
                                                                        </td>
                                                                        <td>
                                                                            {(stats.test.batting.strike_rate) ? stats.test.batting.strike_rate : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            HS
                                                                        </td>
                                                                        <td>
                                                                            {(stats.test.batting.high_score) ? stats.test.batting.high_score : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Not Out
                                                                        </td>
                                                                        <td>
                                                                            {(stats.test.batting.not_outs) ? stats.test.batting.not_outs : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Runs
                                                                        </td>
                                                                        <td>
                                                                            {(stats.test.batting.runs) ? stats.test.batting.runs : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    </tbody> :
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            Match Type
                                                                        </td>
                                                                        <td>
                                                                            Test
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan="2">
                                                                            No Test Batting
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                }
                                                            </Table>
                                                        </Col>

                                                        <Col sm={4}>
                                                            <Table responsive className="custom-table vertical-table"
                                                                   bordered>
                                                                {(stats && stats.t20 && stats.t20 && stats.t20.batting) ?
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            Match Type
                                                                        </td>
                                                                        <td>
                                                                            T-20
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Innings
                                                                        </td>
                                                                        <td>
                                                                            {(stats.t20.batting.innings) ? stats.t20.batting.innings : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            M
                                                                        </td>
                                                                        <td>
                                                                            {(stats.t20.batting.matches) ? stats.t20.batting.matches : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            4's
                                                                        </td>
                                                                        <td>
                                                                            {(stats.t20.batting.fours) ? stats.t20.batting.fours : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            6's
                                                                        </td>
                                                                        <td>
                                                                            {(stats.t20.batting.sixes) ? stats.t20.batting.sixes : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            100's
                                                                        </td>
                                                                        <td>
                                                                            {(stats.t20.batting.hundreds) ? stats.t20.batting.hundreds : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            50's
                                                                        </td>
                                                                        <td>
                                                                            {(stats.t20.batting.fifties) ? stats.t20.batting.fifties : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Balls
                                                                        </td>
                                                                        <td>
                                                                            {(stats.t20.batting.balls) ? stats.t20.batting.balls : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Avg
                                                                        </td>
                                                                        <td>
                                                                            {(stats.t20.batting.average) ? stats.t20.batting.average : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            SR
                                                                        </td>
                                                                        <td>
                                                                            {(stats.t20.batting.strike_rate) ? stats.t20.batting.strike_rate : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            HS
                                                                        </td>
                                                                        <td>
                                                                            {(stats.t20.batting.high_score) ? stats.t20.batting.high_score : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Not Out
                                                                        </td>
                                                                        <td>
                                                                            {(stats.t20.batting.not_outs) ? stats.t20.batting.not_outs : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Runs
                                                                        </td>
                                                                        <td>
                                                                            {(stats.t20.batting.runs) ? stats.t20.batting.runs : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                    :
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            Match Type
                                                                        </td>
                                                                        <td>
                                                                            T-20
                                                                        </td>
                                                                        <td colSpan="2">
                                                                            T-20 not available
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                }
                                                            </Table>
                                                        </Col>

                                                        <Col sm={4}>
                                                            <Table responsive className="custom-table vertical-table"
                                                                   bordered>
                                                                {(stats && stats['one-day'] && stats['one-day'] && stats['one-day'].batting) ?
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            Match Type
                                                                        </td>
                                                                        <td>
                                                                            One Day
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Innings
                                                                        </td>
                                                                        <td>
                                                                            {(stats['one-day'].batting.innings) ? stats['one-day'].batting.innings : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            M
                                                                        </td>
                                                                        <td>
                                                                            {(stats['one-day'].batting.matches) ? stats['one-day'].batting.matches : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            4's
                                                                        </td>
                                                                        <td>
                                                                            {(stats['one-day'].batting.fours) ? stats['one-day'].batting.fours : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            6's
                                                                        </td>
                                                                        <td>
                                                                            {(stats['one-day'].batting.sixes) ? stats['one-day'].batting.sixes : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            100's
                                                                        </td>
                                                                        <td>
                                                                            {(stats['one-day'].batting.hundreds) ? stats['one-day'].batting.hundreds : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            50's
                                                                        </td>
                                                                        <td>
                                                                            {(stats['one-day'].batting.fifties) ? stats['one-day'].batting.fifties : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Balls
                                                                        </td>
                                                                        <td>
                                                                            {(stats['one-day'].batting.balls) ? stats['one-day'].batting.balls : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Avg
                                                                        </td>
                                                                        <td>
                                                                            {(stats['one-day'].batting.average) ? stats['one-day'].batting.average : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            SR
                                                                        </td>
                                                                        <td>
                                                                            {(stats['one-day'].batting.strike_rate) ? stats['one-day'].batting.strike_rate : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            HS
                                                                        </td>
                                                                        <td>
                                                                            {(stats['one-day'].batting.high_score) ? stats['one-day'].batting.high_score : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Not Out
                                                                        </td>
                                                                        <td>
                                                                            {(stats['one-day'].batting.not_outs) ? stats['one-day'].batting.not_outs : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Runs
                                                                        </td>
                                                                        <td>
                                                                            {(stats['one-day'].batting.runs) ? stats['one-day'].batting.runs : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                    :
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            Match Type
                                                                        </td>
                                                                        <td>
                                                                            One Day
                                                                        </td>
                                                                        <td colSpan="2">
                                                                            One Day not available
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                }
                                                            </Table>
                                                        </Col>
                                                    </Row>

                                                    <Row>
                                                        <Col sm={12}>
                                                            <h4 className={cx('text-black')}>Bowling Summary</h4>
                                                        </Col>
                                                        <Col sm={4}>
                                                            <Table responsive className="custom-table vertical-table"
                                                                   bordered>
                                                                {(stats && stats.test && stats.test.bowling) ?
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            Match Type
                                                                        </td>
                                                                        <td>
                                                                            Test
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Best Innings
                                                                        </td>
                                                                        <td>
                                                                            {(stats.test.bowling.best_innings_bowling) ? stats.test.bowling.best_innings_bowling : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Matches
                                                                        </td>
                                                                        <td>
                                                                            {(stats.test.bowling.matches) ? stats.test.bowling.matches : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Wickets
                                                                        </td>
                                                                        <td>
                                                                            {(stats.test.bowling.wickets) ? stats.test.bowling.wickets : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Ten Wickets
                                                                        </td>
                                                                        <td>
                                                                            {(stats.test.bowling.ten_wickets) ? stats.test.bowling.ten_wickets : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Five Wickets
                                                                        </td>
                                                                        <td>
                                                                            {(stats.test.bowling.five_wickets) ? stats.test.bowling.five_wickets : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Innings
                                                                        </td>
                                                                        <td>
                                                                            {(stats.test.bowling.innings) ? stats.test.bowling.innings : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Runs
                                                                        </td>
                                                                        <td>
                                                                            {(stats.test.bowling.runs) ? stats.test.bowling.runs : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Balls
                                                                        </td>
                                                                        <td>
                                                                            {(stats.test.bowling.balls) ? stats.test.bowling.balls : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Best Match
                                                                        </td>
                                                                        <td>
                                                                            {(stats.test.bowling.best_match_bowling) ? stats.test.bowling.best_match_bowling : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Average
                                                                        </td>
                                                                        <td>
                                                                            {(stats.test.bowling.average) ? stats.test.bowling.average : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Strike Rate
                                                                        </td>
                                                                        <td>
                                                                            {(stats.test.bowling.strike_rate) ? stats.test.bowling.strike_rate : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Economy
                                                                        </td>
                                                                        <td>
                                                                            {(stats.test.bowling.economy) ? stats.test.bowling.economy : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    </tbody> :
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            Match Type
                                                                        </td>
                                                                        <td>
                                                                            Test
                                                                        </td>
                                                                        <td colSpan="2">
                                                                            Test not available
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                }
                                                            </Table>
                                                        </Col>

                                                        <Col sm={4}>
                                                            <Table responsive className="custom-table vertical-table"
                                                                   bordered>
                                                                {(stats && stats.t20 && stats.t20.bowling) ?

                                                                    <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            Match Type
                                                                        </td>
                                                                        <td>
                                                                            T-20
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Best Innings
                                                                        </td>
                                                                        <td>
                                                                            {(stats.t20.bowling.best_innings_bowling) ? stats.t20.bowling.best_innings_bowling : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Matches
                                                                        </td>
                                                                        <td>
                                                                            {(stats.t20.bowling.matches) ? stats.t20.bowling.matches : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Wickets
                                                                        </td>
                                                                        <td>
                                                                            {(stats.t20.bowling.wickets) ? stats.t20.bowling.wickets : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Ten Wickets
                                                                        </td>
                                                                        <td>
                                                                            {(stats.t20.bowling.ten_wickets) ? stats.t20.bowling.ten_wickets : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Five Wickets
                                                                        </td>
                                                                        <td>
                                                                            {(stats.t20.bowling.five_wickets) ? stats.t20.bowling.five_wickets : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Innings
                                                                        </td>
                                                                        <td>
                                                                            {(stats.t20.bowling.innings) ? stats.t20.bowling.innings : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Runs
                                                                        </td>
                                                                        <td>
                                                                            {(stats.t20.bowling.runs) ? stats.t20.bowling.runs : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Balls
                                                                        </td>
                                                                        <td>
                                                                            {(stats.t20.bowling.balls) ? stats.t20.bowling.balls : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Best Match
                                                                        </td>
                                                                        <td>
                                                                            {(stats.t20.bowling.best_match_bowling) ? stats.t20.bowling.best_match_bowling : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Average
                                                                        </td>
                                                                        <td>
                                                                            {(stats.t20.bowling.average) ? stats.t20.bowling.average : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Strike Rate
                                                                        </td>
                                                                        <td>
                                                                            {(stats.t20.bowling.strike_rate) ? stats.t20.bowling.strike_rate : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Economy
                                                                        </td>
                                                                        <td>
                                                                            {(stats.t20.bowling.economy) ? stats.t20.bowling.economy : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                    :
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            Match Type
                                                                        </td>
                                                                        <td>
                                                                            T-20
                                                                        </td>
                                                                        <td colSpan="2">
                                                                            T-20 not available
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                }
                                                            </Table>
                                                        </Col>

                                                        <Col sm={4}>
                                                            <Table responsive className="custom-table vertical-table"
                                                                   bordered>
                                                                {(stats && stats["one-day"].bowling) ?
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            Match Type
                                                                        </td>
                                                                        <td>
                                                                            One Day
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Best Innings
                                                                        </td>
                                                                        <td>
                                                                            {(stats["one-day"].bowling.best_innings_bowling) ? stats["one-day"].bowling.best_innings_bowling : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Matches
                                                                        </td>
                                                                        <td>
                                                                            {(stats["one-day"].bowling.matches) ? stats["one-day"].bowling.matches : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Wickets
                                                                        </td>
                                                                        <td>
                                                                            {(stats["one-day"].bowling.wickets) ? stats["one-day"].bowling.wickets : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Ten Wickets
                                                                        </td>
                                                                        <td>
                                                                            {(stats["one-day"].bowling.ten_wickets) ? stats["one-day"].bowling.ten_wickets : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Five Wickets
                                                                        </td>
                                                                        <td>
                                                                            {(stats["one-day"].bowling.five_wickets) ? stats["one-day"].bowling.five_wickets : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Innings
                                                                        </td>
                                                                        <td>
                                                                            {(stats["one-day"].bowling.innings) ? stats["one-day"].bowling.innings : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Runs
                                                                        </td>
                                                                        <td>
                                                                            {(stats["one-day"].bowling.runs) ? stats["one-day"].bowling.runs : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Balls
                                                                        </td>
                                                                        <td>
                                                                            {(stats["one-day"].bowling.balls) ? stats["one-day"].bowling.balls : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Best Match
                                                                        </td>
                                                                        <td>
                                                                            {(stats["one-day"].bowling.best_match_bowling) ? stats["one-day"].bowling.best_match_bowling : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Average
                                                                        </td>
                                                                        <td>
                                                                            {(stats["one-day"].bowling.average) ? stats["one-day"].bowling.average : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Strike Rate
                                                                        </td>
                                                                        <td>
                                                                            {(stats["one-day"].bowling.strike_rate) ? stats["one-day"].bowling.strike_rate : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Economy
                                                                        </td>
                                                                        <td>
                                                                            {(stats["one-day"].bowling.economy) ? stats["one-day"].bowling.economy : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                    :
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            Match Type
                                                                        </td>
                                                                        <td>
                                                                            One Day
                                                                        </td>
                                                                        <td colSpan="2">
                                                                            One Day not available
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                }
                                                            </Table>
                                                        </Col>
                                                    </Row>

                                                    <Row>
                                                        <Col sm={12}>
                                                            <h4 className={cx('text-black')}>Feilding Summary</h4>
                                                        </Col>
                                                        <Col sm={4}>
                                                            <Table responsive className="custom-table vertical-table"
                                                                   bordered>
                                                                {(stats && stats.test.fielding) ?
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            Match Type
                                                                        </td>
                                                                        <td>
                                                                            Test
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Catches
                                                                        </td>
                                                                        <td>
                                                                            {(stats.test.fielding.catches) ? stats.test.fielding.catches : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Stumpings
                                                                        </td>
                                                                        <td>
                                                                            {(stats.test.fielding.stumpings) ? stats.test.fielding.stumpings : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                    :
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            Match Type
                                                                        </td>
                                                                        <td>
                                                                            Test
                                                                        </td>
                                                                        <td colSpan="2">
                                                                            Test not available
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                }
                                                            </Table>
                                                        </Col>

                                                        <Col sm={4}>
                                                            <Table responsive className="custom-table vertical-table"
                                                                   bordered>
                                                                {(stats && stats.t20.fielding) ?
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            Match Type
                                                                        </td>
                                                                        <td>
                                                                            T-20
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Catches
                                                                        </td>
                                                                        <td>
                                                                            {(stats.t20.fielding.catches) ? stats.t20.fielding.catches : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Stumpings
                                                                        </td>
                                                                        <td>
                                                                            {(stats.t20.fielding.stumpings) ? stats.t20.fielding.stumpings : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                    :
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            Match Type
                                                                        </td>
                                                                        <td>
                                                                            T-20
                                                                        </td>
                                                                        <td colSpan="2">
                                                                            T-20 not available
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                }
                                                            </Table>
                                                        </Col>

                                                        <Col sm={4}>
                                                            <Table responsive className="custom-table vertical-table"
                                                                   bordered>
                                                                {(stats && stats["one-day"].fielding) ?
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            Match Type
                                                                        </td>
                                                                        <td>
                                                                            One Day
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Catches
                                                                        </td>
                                                                        <td>
                                                                            {(stats["one-day"].fielding.catches) ? stats["one-day"].fielding.catches : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Stumpings
                                                                        </td>
                                                                        <td>
                                                                            {(stats["one-day"].fielding.stumpings) ? stats["one-day"].fielding.stumpings : '-'}
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                    :
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            Match Type
                                                                        </td>
                                                                        <td>
                                                                            One Day
                                                                        </td>
                                                                        <td colSpan="2">
                                                                            One Day not available
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                }
                                                            </Table>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Col>
                                        </Col>
                                        :
                                        <Col className={cx('panel-body')}>
                                            <div className={cx('preLoaderInner', 'contentLoader')}></div>
                                            }
                                        </Col>
                                }
                            </Col>
                        </FormGroup>
                    </Col>


                    {/* Side Bar */}
                    <Asidebar/>
                </Row>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {...state.playerinfoReducer};
}

export default connect(mapStateToProps, playerinfo)(PlayerInfo); 