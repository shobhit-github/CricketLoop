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
    highlights_a_1 = [],
    highlights_b_1 = [],
    highlights_a_2 = [],
    highlights_b_2 = [],
    highlightsTemp,
    lats_over_cmt,
    over_coment,
    over_match_last,
    bowl_match_last;

class LiveHighlights extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highlights_a_1: [],
            highlights_b_1: [],
            highlights_a_2: [],
            highlights_b_2: [],
            matchUpdate: [],
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
                    matchUpdate: nextProps.matchLive,
                    tabKey: nextProps.matchLive.now.batting_team + "_" + nextProps.matchLive.now.innings
                })
            }
            if (this.state.matchUpdate && this.state.matchUpdate.innings && Object.keys(this.state.matchUpdate.innings).length > 0) {
                highlightsTemp = [];
                highlights_a_1 = [];
                highlights_a_2 = [];
                highlights_b_1 = [];
                highlights_b_2 = [];
                if (nextProps && nextProps.ballbyball && nextProps.ballbyball.message) {
                    highlightsTemp = [...highlightsTemp, ...nextProps.ballbyball.message];
                    highlightsTemp = highlightsTemp.reverse();
                    highlightsTemp.map((value, key) => {
                        if (value.over.team == 'a') {
                            if (value.over.innings == '1') {
                                highlights_a_1 = [...highlights_a_1, value];
                            } else {
                                highlights_a_2 = [...highlights_a_2, value];
                            }
                        } else {
                            if (value.over.innings == '1') {
                                highlights_b_1 = [...highlights_b_1, value];
                            } else {
                                highlights_b_2 = [...highlights_b_2, value];
                            }
                        }
                    })

                    if (highlights_a_1.length > 0) {
                        this.setState({highlights_a_1: hilightsMap(highlights_a_1)});
                    } else {
                        this.setState({highlights_a_1: 'Waiting for match to start'});
                    }
                    if (highlights_a_2.length > 0) {
                        this.setState({highlights_a_2: hilightsMap(highlights_a_2)});
                    } else {
                        this.setState({highlights_a_2: 'Waiting for match to start'});
                    }
                    if (highlights_b_1.length > 0) {
                        this.setState({highlights_b_1: hilightsMap(highlights_b_1)});
                    } else {
                        this.setState({highlights_b_1: 'Waiting for match to start'});
                    }
                    if (highlights_b_2.length > 0) {
                        this.setState({highlights_b_2: hilightsMap(highlights_b_2)});
                    } else {
                        this.setState({highlights_b_2: 'Waiting for match to start'});
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
                    <Tabs activeKey={this.state.tabKey} onSelect={this.handleSelect} id="innings_tab_highlights">
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
                                                        {this.state.highlights_a_1 ? this.state.highlights_a_1 : 'Updates'}
                                                    </Tab>
                                                    : (
                                                        (joinVal == 'a_2') ?
                                                            <Tab eventKey={joinVal} title={`${TabName}`} key={key}>
                                                                {/* this.state.highlights_a_2 */}
                                                                {this.state.highlights_a_2 ? this.state.highlights_a_2 : 'Updates'}
                                                            </Tab>
                                                            : (
                                                                (joinVal == 'b_1') ?
                                                                    <Tab eventKey={joinVal} title={`${TabName}`} key={key}>
                                                                        {this.state.highlights_b_1 ? this.state.highlights_b_1 : 'Updates'}
                                                                    </Tab>
                                                                    : (
                                                                        (joinVal == 'b_2') ?
                                                                            <Tab eventKey={joinVal} title={`${TabName}`} key={key}>
                                                                                {this.state.highlights_b_2 ? this.state.highlights_b_2 : 'Updates'}
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

function hilightsMap(data) {
    const highlightsTemp_temp = data;
    var over_ball,
        over_wk;
    return highlightsTemp_temp.map((value, keys) => {
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
                })
                return (
                    <Col className={cx('cmnty-bx')} key={keys}>
                        {overBall.map((overs, keys) => {
                            lats_over_cmt = temp_over.balls[overs]
                            over_coment = lats_over_cmt.comment;
                            if (lats_over_cmt.runs == '6') {
                                return (
                                    < FormGroup key={keys}>
                                        <Col className={cx('com-ovr')}>
                                            <span style={{
                                                minWidth: '50px',
                                                display: 'inline-block'
                                            }}>{lats_over_cmt.over_str}</span> <span
                                            className={cx('over-ball', 'six')}>6</span>
                                        </Col>
                                        <Col className={cx('com-cmntry')}>
                                            <span>{over_coment.split(':')[0]}</span>
                                        </Col>
                                    </FormGroup>
                                )
                            } else if (lats_over_cmt.runs == '4') {
                                return (
                                    < FormGroup key={keys}>
                                        <Col className={cx('com-ovr')}>
                                            <span style={{
                                                minWidth: '50px',
                                                display: 'inline-block'
                                            }}>{lats_over_cmt.over_str}</span> <span
                                            className={cx('over-ball', 'four')}>4</span>
                                        </Col>
                                        <Col className={cx('com-cmntry')}>
                                            <span>{over_coment.split(':')[0]}</span>
                                        </Col>
                                    </FormGroup>
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

export default connect(mapStatetoProps, ballByBall)(LiveHighlights);
/* export default LiveOver; */
