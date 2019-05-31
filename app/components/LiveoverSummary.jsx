import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classNames from 'classnames/bind';
import {Grid, Row, Col, Clearfix, Table, FormGroup, Tabs, Tab} from 'react-bootstrap';
import TopicItem from '../components/TopicItem';
import styles from '../css/components/main-section';
import * as ballByBall from '../actions/ballbyball';
import FA from 'react-fontawesome';
/* import * as newsActions from '../actions/news'; */
const cx = classNames.bind(styles);
let GlobalCard_live = null,
    IDMatch,
    innings_list_val,
    summary_a_1 = [],
    summary_b_1 = [],
    summary_a_2 = [],
    summary_b_2 = [],
    summaryTemp,
    summary_lats_over_cmt,
    summary_over_coment,
    summary_over_match_last;

class LiveOversummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            summary_a_1: [],
            summary_b_1: [],
            summary_a_2: [],
            summary_b_2: [],
            summaryMatchUpdate: [],
            tabKey: props.matchLive.now.batting_team + "_" + props.matchLive.now.innings
        }
        IDMatch = this.props.matchId.matchId;
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillMount() {
        this.props.Getover(IDMatch);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.matchLive !== this.props.matchLive) {
            this.props.Getover(IDMatch);
        }
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps && nextProps.matchLive) {
            if (nextProps.matchLive.key == nextProps.matchId.matchId) {
                this.setState({
                    summaryMatchUpdate: nextProps.matchLive,
                    tabKey: nextProps.matchLive.now.batting_team + "_" + nextProps.matchLive.now.innings
                })
            }
            if (this.state.summaryMatchUpdate && this.state.summaryMatchUpdate.innings && Object.keys(this.state.summaryMatchUpdate.innings).length > 0) {
                summaryTemp = [];
                summary_a_1 = [];
                summary_a_2 = [];
                summary_b_1 = [];
                summary_b_2 = [];

                if (nextProps && nextProps.ballbyball && nextProps.ballbyball.message) {
                    summaryTemp = [...summaryTemp, ...nextProps.ballbyball.message];
                    summaryTemp = summaryTemp.reverse();
                    summaryTemp.map((value, key) => {
                        if (value.over.team == 'a') {
                            if (value.over.innings == '1') {
                                summary_a_1 = [...summary_a_1, value];
                            } else {
                                summary_a_2 = [...summary_a_2, value];
                            }
                        } else {
                            if (value.over.innings == '1') {
                                summary_b_1 = [...summary_b_1, value];
                            } else {
                                summary_b_2 = [...summary_b_2, value];
                            }
                        }
                    })

                    if (summary_a_1.length > 0) {

                        this.setState({summary_a_1: mappingDumFunc(summary_a_1)});
                    } else {
                        this.setState({summary_a_1: 'Waiting for match to start'});
                    }
                    if (summary_a_2.length > 0) {

                        this.setState({summary_a_2: mappingDumFunc(summary_a_2)});
                    } else {
                        this.setState({summary_a_2: 'Waiting for match to start'});
                    }
                    if (summary_b_1.length > 0) {

                        this.setState({summary_b_1: mappingDumFunc(summary_b_1)});
                    } else {
                        this.setState({summary_b_1: 'Waiting for match to start'});
                    }
                    if (summary_b_2.length > 0) {

                        this.setState({summary_b_2: mappingDumFunc(summary_b_2)});
                    } else {
                        this.setState({summary_b_2: 'Waiting for match to start'});
                    }
                }
            }

        }

    }

    handleSelect(key) {
        this.setState({
            tabKey: key
        })
    }

    render() {
        return (
            <Col md={12} className={cx('resp-fluid')}>
                {this.state.summaryMatchUpdate != null && this.state.summaryMatchUpdate != undefined && this.state.summaryMatchUpdate && this.state.summaryMatchUpdate.innings ?
                    <Tabs activeKey={this.state.tabKey} onSelect={this.handleSelect} id="innings_tab">
                        {
                            Object.keys(this.state.summaryMatchUpdate.innings).length > 0 ?
                                (
                                    this.state.summaryMatchUpdate.batting_order ?
                                        this.state.summaryMatchUpdate.batting_order.map((values, key) => {
                                            const TEmpleTeam = values,
                                                teamList = this.state.summaryMatchUpdate.teams;
                                            const innings_values = values,
                                                innings_list = innings_values[1],
                                                joinVal = innings_values.join('_'),
                                                teamName_1 = TEmpleTeam[0],
                                                teamName = teamList[teamName_1].key.toUpperCase();
                                            if (innings_list == '1') {
                                                innings_list_val = "First"
                                            } else {
                                                innings_list_val = "Second"
                                            }
                                            const TabName = teamName + ' ' + innings_list_val + ' ' + 'Innings';

                                            return (

                                                (joinVal == 'a_1') ?
                                                    <Tab eventKey={joinVal} title={`${TabName}`} key={key}>
                                                        {this.state.summary_a_1 ? this.state.summary_a_1 : 'Updates'}
                                                    </Tab>
                                                    : (
                                                        (joinVal == 'a_2') ?
                                                            <Tab eventKey={joinVal} title={`${TabName}`} key={key}>
                                                                {/* this.state.summary_a_2 */}
                                                                {this.state.summary_a_2 ? this.state.summary_a_2 : 'Updates'}
                                                            </Tab>
                                                            : (
                                                                (joinVal == 'b_1') ?
                                                                    <Tab eventKey={joinVal} title={`${TabName}`} key={key}>
                                                                        {this.state.summary_b_1 ? this.state.summary_b_1 : 'Updates'}
                                                                    </Tab>
                                                                    : (
                                                                        (joinVal == 'b_2') ?
                                                                            <Tab eventKey={joinVal} title={`${TabName}`} key={key}>
                                                                                {this.state.summary_b_2 ? this.state.summary_b_2 : 'Updates'}
                                                                            </Tab>
                                                                            : "Waiting for match to start"
                                                                    )
                                                            )
                                                    )
                                            )
                                        })
                                        : 'Waiting for match to start'
                                )
                                : 'Match Details will be updated as soon as it starts'

                        }
                    </Tabs>
                    : 'In depth over details will be available as soon as the match starts'
                }
            </Col>
        )
    };
};

function createMarkup() {
    return {__html: summary_over_coment};
}

function mappingDumFunc(data) {
    var summaryData_temp = [],
        summaryData_temp = data;
    var over_ball,
        over_wk;
    return summaryData_temp.map((value, keys) => {
            const revers_over = value.over.balls,
                temp_over = value;
            var overBall = [],
                overBall = [...temp_over.over.balls];
            overBall = overBall;
            if (revers_over.length > 0) {
                var last_over_runs = 0,
                    last_over_wk = 0;
                revers_over.map((overs) => {
                    summary_lats_over_cmt = temp_over.balls[overs]
                    var over_ball = summary_lats_over_cmt.ball,
                        over_wk = summary_lats_over_cmt.bowler.wicket;
                    last_over_runs = last_over_runs + summary_lats_over_cmt.runs;
                    last_over_wk = last_over_wk + over_wk;
                })

                return (
                    <Col className={cx('cmnty-bx')} key={keys}>
                        <span style={{minWidth: '150px', display: 'inline-block'}}><span
                            className="h5">Over - {temp_over.over.over}</span>, <span
                            className="h5">R -{last_over_runs}</span></span>
                        {overBall.map((overs, keys) => {
                            summary_lats_over_cmt = temp_over.balls[overs]
                            summary_over_coment = summary_lats_over_cmt.comment;
                            if (summary_lats_over_cmt.runs == '6' && summary_lats_over_cmt.bowler.wicket == '0') {
                                return (
                                    <span key={keys} className={cx('over-ball', 'six')}>6</span>
                                )
                            } else if (summary_lats_over_cmt.runs == '5' && summary_lats_over_cmt.bowler.wicket == '0') {
                                return (
                                    <span key={keys} className={cx('over-ball', 'five')}>5</span>
                                )
                            } else if (summary_lats_over_cmt.runs == '4' && summary_lats_over_cmt.bowler.wicket == '0') {
                                return (
                                    <span key={keys} className={cx('over-ball', 'four')}>4</span>
                                )
                            } else if (summary_lats_over_cmt.runs == '3' && summary_lats_over_cmt.bowler.wicket == '0') {
                                return (
                                    <span key={keys} className={cx('over-ball', 'three')}>3</span>
                                )
                            } else if (summary_lats_over_cmt.runs == '2' && summary_lats_over_cmt.bowler.wicket == '0') {
                                return (
                                    <span key={keys} className={cx('over-ball', 'two')}>2</span>
                                )
                            } else if (summary_lats_over_cmt.runs == '1' && summary_lats_over_cmt.bowler.wicket == '0') {
                                return (
                                    <span key={keys} className={cx('over-ball', 'one')}>1</span>
                                )
                            } else if (summary_lats_over_cmt.runs == '0' && summary_lats_over_cmt.bowler.wicket == '0') {
                                return (
                                    <span key={keys} className={cx('over-ball', 'zero')}>0</span>
                                )
                            } else {
                                return (
                                    <span key={keys} className={cx('over-ball', 'wicket')}>W</span>
                                )
                            }
                        })
                        }
                    </Col>
                )
            }
        }
    )
}

function mapStatetoProps(state) {
    return {
        ballbyball: state.ballbyballReducer
    }
}

export default connect(mapStatetoProps, ballByBall)(LiveOversummary);
/* export default LiveOver; */
