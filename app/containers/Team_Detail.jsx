import React, {Component} from 'react';
import {
    Grid,
    Row,
    Col,
    Clearfix,
    FormGroup,
    Table,
    Image,
    Nav,
    NavItem,
    Tab,
    DropdownButton,
    Button,
    MenuItem
} from 'react-bootstrap';
import {connect} from 'react-redux';
/* import PropTypes from 'prop-types'; */
import classNames from 'classnames/bind';
import styles from '../css/components/news';
import FA from 'react-fontawesome';
import Asidebar from '../components/Asidebar';

import * as teaminfo from '../actions/contryinfo';
import * as playerinfo from '../actions/playerinfo';
import * as scheduleAction from '../actions/schedule';

const cx = classNames.bind(styles);

let playerDetailCurrent,
    currentPlayerList = [],
    currentPlayer = [],
    thisCountry,
    matchId = null,
    completedMatch,
    OnstartListing = [],
    todayLive = [],
    CompleteArray_2 = [];

class TeamDetails extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {params} = this.props;
        matchId = params.id
        this.props.GetPlayerByCountry({countrykey: params.id});
        this.props.Getschedule();
        this.props.Getcountry();
    }

    componentWillReceiveProps(nextProps) {
        const PlayerIndexInfo = nextProps.playerkey;
        let matchkeyCompleted = 0;

        /* Player info */
        if (PlayerIndexInfo && (PlayerIndexInfo.length > 0)) {
            for (let value of (PlayerIndexInfo)) {
                if ((value.stats.ipl && value.stats.ipl.last_match_date && value.stats.ipl.last_match_key) || (value.stats.one_day && value.stats.one_day.last_match_date && value.stats.one_day.last_match_key) || (value.stats.t20 && value.stats.t20.last_match_date && value.stats.t20.last_match_key) || (value.stats.test && value.stats.test.last_match_date && value.stats.test.last_match_key)) {
                    let {key, card_name, name, identified_roles} = value;
                    currentPlayerList[matchkeyCompleted] = {key, card_name, name, identified_roles}
                    matchkeyCompleted++
                }
            }
        }

        /* Country Info */
        if (nextProps && nextProps.countryList && nextProps.countryList.countrykey) {
            for (var i = 0; i < nextProps.countryList.countrykey.length; i++) {
                var thisCountryLoop = nextProps.countryList.countrykey[i];
                if (thisCountryLoop.key == matchId) {
                    thisCountry = nextProps.countryList.countrykey[i];
                }
            }
        }

        /* Match Info */
        if (nextProps && nextProps.sheduleState && nextProps.sheduleState.message) {
            var CompleteArray = [],
                CompleteArray_1 = [];
            /* Today date function */
            var todayDate = new Date,
                dateDay = todayDate.getDate(),
                dateMonth = todayDate.getMonth(),
                dateYear = todayDate.getFullYear(),
                todaydatepart = dateDay + ' ' + dateMonth + ' ' + dateYear;
            for (var i = 0; i < nextProps.sheduleState.message.length; i++) {
                if (nextProps.sheduleState.message[i].teams.a.key == matchId || nextProps.sheduleState.message[i].teams.b.key == matchId) {
                    if (nextProps.sheduleState.message[i] && nextProps.sheduleState.message[i].status == 'completed') {
                        const obj = nextProps.sheduleState.message[i];
                        if (CompleteArray.indexOf(obj) == -1) {
                            CompleteArray.push(obj);
                        }


                        completedMatch = Object.keys(CompleteArray).map((index) => {
                            return (
                                <tr key={index}>
                                    <td style={{width: '200px'}}>
                                        <FormGroup className={cx('h5')}>
                                            <a href={`/match_details/${CompleteArray[index].key}`}>{CompleteArray[index].related_name}</a>
                                        </FormGroup>
                                        <Col>
                                            {getImage(CompleteArray[index].teams.a.key, "flag", cx('img-flg-sm'))}
                                            <span className={cx('seprate-vs', 'small')}>
                                                VS
                                            </span>
                                            {getImage(CompleteArray[index].teams.b.key, "flag", cx('img-flg-sm'))}
                                        </Col>
                                    </td>
                                    <td>
                                        <Col className={cx('text-black')}>
                                            <a href={`/match_details/${CompleteArray[index].key}`}
                                               className="text-black"><b>{CompleteArray[index] && CompleteArray[index].title ? CompleteArray[index].title : ''}</b></a>
                                        </Col>
                                        <Col className='text-info'>
                                            {timeConvert(CompleteArray[index].start_date.iso)}
                                        </Col>
                                        <Col>
                                            {CompleteArray[index].venue}
                                        </Col>
                                    </td>
                                </tr>
                            )
                        })
                    } else if (this.checkMatchdate(nextProps.sheduleState.message[i].start_date.timestamp) == todaydatepart || (nextProps.sheduleState.message[i].status_overview == 'in_play' || nextProps.sheduleState.message[i].status_overview == 'stumps')) {

                        var obj = nextProps.sheduleState.message[i]
                        if (CompleteArray_1.indexOf(obj) == -1) {
                            CompleteArray_1.push(obj);
                        }

                        todayLive = Object.keys(CompleteArray_1).map((key) => (

                            <tr key={key}>
                                <td style={{width: '160px'}}>
                                    <FormGroup className={cx('h5')}>
                                        <a href={`/live_match_detail/${CompleteArray_1[key].key}`}>{CompleteArray_1[key].related_name}</a>
                                    </FormGroup>
                                    <Col>
                                        {getImage(CompleteArray_1[key].teams.a.key, "flag", cx('img-flg-sm'))}
                                        <span className={cx('seprate-vs', 'small')}>
                                            VS
                                    </span>
                                        {getImage(CompleteArray_1[key].teams.b.key, "flag", cx('img-flg-sm'))}
                                    </Col>
                                </td>
                                <td>
                                    <Col className={cx('text-black')}>
                                        <a href={`/live_match_detail/${CompleteArray_1[key].key}`}
                                           className="text-black"><b>{CompleteArray_1[key].title}</b></a>
                                    </Col>
                                    <Col className={cx('text-info')}>
                                        <small> {timeConvert(CompleteArray_2[key].start_date.iso)}</small>
                                    </Col>
                                    <Col>
                                        {CompleteArray_1[key].venue}
                                    </Col>
                                </td>
                            </tr>
                        ))
                    } else {
                        var obj = nextProps.sheduleState.message[i]
                        if (CompleteArray_2.indexOf(obj) == -1) {
                            CompleteArray_2.push(obj);
                        }
                        OnstartListing = Object.keys(CompleteArray_2).map((key) => (
                            <tr key={key}>
                                <td style={{width: '160px'}}>
                                    <FormGroup className={cx('h5')}>
                                        <a href={`/match_details/${CompleteArray_2[key].key}`}>{CompleteArray_2[key].related_name} </a>
                                    </FormGroup>
                                    <Col>
                                        {getImage(CompleteArray_2[key].teams.a.key, "flag", cx('img-flg-sm'))}
                                        <span className={cx('seprate-vs', 'small')}>
                                            VS
                                    </span>
                                        {getImage(CompleteArray_2[key].teams.b.key, "flag", cx('img-flg-sm'))}
                                    </Col>
                                </td>
                                <td>
                                    <Col className={cx('text-black')}>
                                        <a href={`/match_details/${CompleteArray_2[key].key}`}
                                           className="text-black"><b>{CompleteArray_2[key].title}</b></a>
                                    </Col>
                                    <Col className={cx('text-info')}>
                                        <small> {timeConvert(CompleteArray_2[key].start_date.iso)} {/* CompleteArray_2[key].monthFilter + '-' + CompleteArray_2[key].dateFilter */}</small>
                                    </Col>
                                    <Col>
                                        {CompleteArray_2[key].venue}
                                    </Col>
                                </td>
                            </tr>
                        ))
                    }
                }
            }
        }
    }

    checkMatchdate(timestamp) {
        var date = new Date(timestamp * 1000),
            dateDay = date.getDate(),
            dateMonth = date.getMonth(),
            dateYear = date.getFullYear(),
            new_date = dateDay + ' ' + dateMonth + ' ' + dateYear;
        return new_date;
    }

    render() {
        return (
            <Grid className={cx('content-sect')}>
                <Row>
                    <Col md={8} sm={7} className={cx('resp-fluid')}>
                        <FormGroup>
                            <Tab.Container id="Tabbx" defaultActiveKey="schedule">
                                <Col className={cx('panel-cric')}>
                                    <Col className={cx('panel-heading')}>
                                        <span className={cx('h4', 'text-capitalize')}>
                                            {thisCountry && thisCountry.name ? thisCountry.name.split('_').join(' ') : ' '} Cricket Team
                                        </span>
                                    </Col>
                                    {OnstartListing && OnstartListing.length > 0 || completedMatch && completedMatch.length > 0 || currentPlayerList.length > 0 && currentPlayerList != null ?
                                        <Col className={cx('panel-body')}>

                                            <FormGroup className={cx('marg0')}>
                                                <Nav className={cx('tab-cric', 'tab-left', 'border-btm')}>
                                                    <NavItem className="tab-items"
                                                             eventKey="schedule">Schedule</NavItem>
                                                    <NavItem className="tab-items" eventKey="squad">Squad</NavItem>
                                                    <NavItem className="tab-items" eventKey="result">Results</NavItem>
                                                </Nav>
                                            </FormGroup>

                                            <Col sm={12}>
                                                <Tab.Content animation>
                                                    <Tab.Pane eventKey="schedule">
                                                        {
                                                            todayLive || OnstartListing ?
                                                                <div>
                                                                    <Table responsive striped
                                                                           className={cx('custome-table')}>
                                                                        <tbody>
                                                                        {todayLive ? todayLive : ''}
                                                                        </tbody>
                                                                    </Table>
                                                                    <Table responsive striped
                                                                           className={cx('custome-table')}>
                                                                        <tbody>
                                                                        {OnstartListing ? OnstartListing : ''}
                                                                        </tbody>
                                                                    </Table>
                                                                </div>
                                                                : (<Table responsive striped
                                                                          className={cx('custome-table')}>
                                                                    <tbody>
                                                                    <tr>
                                                                        <td className="text-center">
                                                                                <span className="h5">
                                                                                    No Scheduled Matches
                                                                                </span>
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                </Table>)
                                                        }
                                                        {/* Schedule END */}
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="squad">
                                                        {/* Squad */}
                                                        <Table responsive striped className={cx('custome-table')}>
                                                            <thead>
                                                            <tr>
                                                                <th>
                                                                    Player Name
                                                                </th>
                                                                <th>
                                                                    Roles
                                                                </th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            {
                                                                currentPlayerList && currentPlayerList.length > 0 && currentPlayerList != null ?
                                                                    currentPlayerList.map((playerList, index) => (
                                                                            <tr key={index}>
                                                                                <td>
                                                                                    <a href={`/playerinfo/${playerList.key}`}>{playerList.name}</a>
                                                                                </td>
                                                                                <td>
                                                                                    {(playerList && playerList.identified_roles && playerList.identified_roles.keeper) ? ' Keeper ' : ''}
                                                                                    {(playerList && playerList.identified_roles && playerList.identified_roles.batsman) ? ' Batsman ' : ''}
                                                                                    {(playerList && playerList.identified_roles && playerList.identified_roles.bowler) ? ' Bowler ' : ''}
                                                                                </td>
                                                                            </tr>
                                                                        )
                                                                    )
                                                                    : (
                                                                        <tr>
                                                                            <td colSpan={2}>
                                                                                <h4 className="text-center">No Players found
                                                                                    !</h4>
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                            }
                                                            </tbody>
                                                        </Table>
                                                        {/* Squad END */}
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="result">
                                                        <Table responsive striped className={cx('custome-table')}>
                                                            <tbody>
                                                            {completedMatch ? completedMatch : (
                                                                <tr>
                                                                    <td>
                                                                        <h4 className="text-center">No Result Found</h4>
                                                                    </td>
                                                                </tr>
                                                            )}
                                                            </tbody>
                                                        </Table>
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Col>
                                        </Col>
                                        :
                                        <Col className={cx('panel-body')}>
                                            <div className={cx('preLoaderInner', 'contentLoader')}></div>
                                            }
                                        </Col>
                                    }
                                </Col>
                            </Tab.Container>
                        </FormGroup>
                    </Col>

                    {/* Side Bar */}
                    <Asidebar/>
                </Row>
            </Grid>
        );
    }
}

function getImage(image, altParam, classValue) {
    let r_image;
    try {
        r_image = require(`../images/teams_flag/${image.toLowerCase()}_thumb.png`);
    } catch (ex) {
        r_image = require('../images/teams_flag/dumm_thumb.png');
    }
    return (<img src={r_image} alt={altParam} className={classValue}/>)
}

function timeConvert(date) {
    var d = new Date(date),
        hours = d.getHours(),
        minutes = d.getMinutes();
    if (minutes == 0) {
        minutes = '00'
    }
    var h = hours % 12 || 12;
    var ampm = (hours < 12 || hours === 24) ? "AM" : "PM",
        StartTime = h + ':' + minutes + ' ' + ampm,
        date_stamp = d.toDateString(),
        new_date = date_stamp + ', ' + StartTime;
    return new_date;
}

function mapStateToProps(state) {
    return {
        ...state.playerinfoReducer,
        sheduleState: state.schedule,
        countryList: state.countryReducer
    };
}

export default connect(mapStateToProps, {...playerinfo, ...scheduleAction, ...teaminfo})(TeamDetails);