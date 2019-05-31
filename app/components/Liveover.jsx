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
var GlobalCard_live = null,
    IDMatch,
    innings_list_val,
    over_a_1 = [],
    over_b_1 = [],
    over_a_2 = [],
    over_b_2 = [],
    borderTemp = [],
    lats_over_cmt,
    over_coment,
    over_match_last,
    bowl_match_last;

class LiveOver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            over_a_1: [],
            over_b_1: [],
            over_a_2: [],
            over_b_2: [],
            matchUpdate: [],
            tabKey: props.matchLive.now.batting_team + "_" + props.matchLive.now.innings
        }
        IDMatch = this.props.matchId.matchId;
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillMount() {
        this.props.Getover(IDMatch);
        borderTemp = [];
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
                    matchUpdate: nextProps.matchLive,
                    tabKey: nextProps.matchLive.now.batting_team + "_" + nextProps.matchLive.now.innings
                })
            }
            if (this.state.matchUpdate && this.state.matchUpdate.innings && Object.keys(this.state.matchUpdate.innings).length > 0) {
                borderTemp = [];
                over_a_1 = [];
                over_a_2 = [];
                over_b_1 = [];
                over_b_2 = [];
                if (nextProps && nextProps.ballbyball && nextProps.ballbyball.message) {
                    borderTemp = [...borderTemp, ...nextProps.ballbyball.message];
                    borderTemp = borderTemp.reverse();
                    borderTemp.map((value, key) => {
                        if (value.over.team == 'a') {
                            if (value.over.innings == '1') {
                                over_a_1 = [...over_a_1, value];
                            } else {
                                over_a_2 = [...over_a_2, value];
                            }
                        } else {
                            if (value.over.innings == '1') {
                                over_b_1 = [...over_b_1, value];
                            } else {
                                over_b_2 = [...over_b_2, value];
                            }
                        }
                    })

                    if (over_a_1.length > 0) {

                        this.setState({over_a_1: mappingDumFunc(over_a_1)});
                    } else {
                        this.setState({over_a_1: 'Waiting for match to start'});
                    }
                    if (over_a_2.length > 0) {

                        this.setState({over_a_2: mappingDumFunc(over_a_2)});
                    } else {
                        this.setState({over_a_2: 'Waiting for match to start'});
                    }
                    if (over_b_1.length > 0) {

                        this.setState({over_b_1: mappingDumFunc(over_b_1)});
                    } else {
                        this.setState({over_b_1: 'Waiting for match to start'});
                    }
                    if (over_b_2.length > 0) {

                        this.setState({over_b_2: mappingDumFunc(over_b_2)});
                    } else {
                        this.setState({over_b_2: 'Waiting for match to start'});
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
                {this.state.matchUpdate != null && this.state.matchUpdate != undefined && this.state.matchUpdate && this.state.matchUpdate.innings ?
                    <Tabs activeKey={this.state.tabKey} onSelect={this.handleSelect} id="innings_tab">
                        {
                            Object.keys(this.state.matchUpdate.innings).length > 0 ?
                                (
                                    this.state.matchUpdate.batting_order ?
                                        this.state.matchUpdate.batting_order.map((values, key) => {
                                            const TEmpleTeam = values,
                                                teamList = this.state.matchUpdate.teams;
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
                                                        {this.state.over_a_1 ? this.state.over_a_1 : 'Updates'}
                                                    </Tab>
                                                    : (
                                                        (joinVal == 'a_2') ?
                                                            <Tab eventKey={joinVal} title={`${TabName}`} key={key}>
                                                                {/* this.state.over_a_2 */}
                                                                {this.state.over_a_2 ? this.state.over_a_2 : 'Updates'}
                                                            </Tab>
                                                            : (
                                                                (joinVal == 'b_1') ?
                                                                    <Tab eventKey={joinVal} title={`${TabName}`} key={key}>
                                                                        {this.state.over_b_1 ? this.state.over_b_1 : 'Updates'}
                                                                    </Tab>
                                                                    : (
                                                                        (joinVal == 'b_2') ?
                                                                            <Tab eventKey={joinVal} title={`${TabName}`} key={key}>
                                                                                {this.state.over_b_2 ? this.state.over_b_2 : 'Updates'}
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
    return {__html: over_coment};
}

function mappingDumFunc(data) {
    var borderTemp_temp = [],
        borderTemp_temp = data;
    var over_ball,
        over_wk;
    return borderTemp_temp.map((value, keys) => {
            const revers_over = value.over.balls,
                temp_over = value;
            var overBall = [],
                overBall = [...temp_over.over.balls];
            overBall = overBall.reverse();

            if (revers_over.length > 0) {
                var last_over_runs = 0,
                    last_over_wk = 0;
                revers_over.map((overs) => {
                    lats_over_cmt = temp_over.balls[overs]
                    var over_ball = lats_over_cmt.ball,
                        over_wk = lats_over_cmt.bowler.wicket;
                    last_over_runs = last_over_runs + lats_over_cmt.runs;
                    last_over_wk = last_over_wk + over_wk;
                    if (over_ball == "1") {
                        over_match_last = lats_over_cmt.over;
                        bowl_match_last = lats_over_cmt.bowler.key.split('_').join(' ');
                    }
                })

                return (
                    <Col className={cx('cmnty-bx')} key={keys}>
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
                                        <b>{(over_match_last && over_match_last !== null) ? over_match_last : ""}</b>
                                    </td>
                                    <td>
                                        <b>{last_over_runs}</b>
                                    </td>
                                    <td>
                                        <b>{last_over_wk}</b>
                                    </td>
                                    <td>
                                        <b><span
                                            className="text-capitalize">{(bowl_match_last && over_match_last !== null) ? bowl_match_last : ""}</span></b>
                                    </td>
                                </tr>
                                </tbody>
                            </Table>
                        </FormGroup>
                        {overBall.map((overs, keys) => {
                            lats_over_cmt = temp_over.balls[overs]
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

export default connect(mapStatetoProps, ballByBall)(LiveOver);
/* export default LiveOver; */
