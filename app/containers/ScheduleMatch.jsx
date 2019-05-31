import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Grid,
    Row,
    Col,
    Clearfix,
    FormGroup,
    Tab,
    TabContainer,
    Nav,
    NavItem,
    FormControl,
    ControlLabel,
    ButtonToolbar,
    Table
} from 'react-bootstrap';
/* import PropTypes from 'prop-types'; */
import classNames from 'classnames/bind';
import styles from '../css/components/schedule';
import FA from 'react-fontawesome';
import * as scheduleAction from '../actions/schedule';
import Asidebar from '../components/Asidebar';

const cx = classNames.bind(styles);

let scheduleMatch;
let scheduleMatchApi;
let scheduleMatchCompleted = [];
let scheduleMatchLive = [];
let scheduleMatchUpcoming = [];
let matchListingCompleted;
let matchListingToday;
let matchListingUpcoming;
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

class ScheduleMatch extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.Getschedule();
    }

    componentWillReceiveProps(nextProps) {
        scheduleMatch = nextProps.message;
        if (scheduleMatch && (scheduleMatch.length > 0)) {
            let matchkeyCompleted = 0;
            let matchkeyLive = 0;
            let matchkeyUpcoming = 0;
            let completedDate;
            let startDate;
            scheduleMatchApi = [];
            for (let value of (scheduleMatch)) {
                let tDate = new Date(),
                    day = tDate.getDate(),
                    month = monthNames[tDate.getMonth()],
                    monthKey = tDate.getMonth(),
                    year = tDate.getFullYear(),
                    todayDate = new Date(year, monthKey, day),
                    {__v, _id, approx_completed_ts, active, status, created_at, dateFilter, expires, msgs, season, teams, updated_at, title, start_date, innings, ...otherData} = value,
                    startDate = this.convertDate(start_date.iso),
                    currDate = new Date(startDate.year, startDate.monthKey, startDate.day);
                todayDate.setHours(0, 0, 0, 0);
                currDate.setHours(0, 0, 0, 0);
                if (todayDate > currDate) {
                    if (approx_completed_ts) {
                        completedDate = this.convertTimestamp(approx_completed_ts);
                        scheduleMatchCompleted[matchkeyCompleted] = {
                            ...season,
                            startDate,
                            completedDate,
                            otherData,
                            innings,
                            title
                        }
                    } else {
                        scheduleMatchCompleted[matchkeyCompleted] = {...season, startDate, otherData, innings, title}
                    }
                    matchkeyCompleted++
                } else if (todayDate < currDate) {
                    scheduleMatchUpcoming[matchkeyUpcoming] = {...season, startDate, otherData, title}
                    matchkeyUpcoming++
                } else if ((todayDate - currDate) === 0) {
                    scheduleMatchLive[matchkeyLive] = {...season, startDate, startDate, otherData, title}
                    matchkeyLive++
                }
            }
        }
    }

    mergeDeep(source) {
        if (isObject(source)) {
            for (const key in source) {
                if (isObject(source[key])) {
                    if (!target[key]) Object.assign(target, {[key]: {}});
                    mergeDeep(target[key], source[key]);
                } else {
                    Object.assign(target, {[key]: source[key]});
                }
            }
        }
        return target;
    }

    convertTimestamp(timestamp) {
        const CDate = new Date(timestamp * 1000);
        return {
            day: CDate.getDate(),
            month: monthNames[CDate.getMonth()],
            monthKey: CDate.getMonth(),
            year: CDate.getFullYear()
        }
    }

    convertDate(isoVal) {
        let CDate;
        CDate = new Date(isoVal);
        return {
            day: CDate.getDate(),
            month: monthNames[CDate.getMonth()],
            monthKey: CDate.getMonth(),
            year: CDate.getFullYear()
        }
    }

    render() {
        const {fetched} = this.props;
        matchListingCompleted = scheduleMatchCompleted.reverse().map((completedMatches, index) => (
                <tr key={index}>
                    <td>
                        <Col className={cx('h5')}>
                            <a href={`/match_details/${completedMatches.otherData.key}`}
                               className="text-black">{completedMatches.title}</a>
                        </Col>
                        <span className="h6">Series : <a
                            href={`/series_details/${completedMatches.key}`}>{completedMatches.name}</a></span> | <span><b>Date : </b>
                        <small
                            className="text-warning">{completedMatches.startDate.day} {completedMatches.startDate.month} {(completedMatches.completedDate) ? (' - ' + completedMatches.completedDate.day + " " + completedMatches.completedDate.month) : ""}</small>
                    </span>
                    </td>
                </tr>
            )
        );
        matchListingToday = scheduleMatchLive.map((liveMatches, index) => (
                <tr key={index}>
                    <td>
                        <Col className={cx('h5')}>
                            <a href={`/live_match_detail/${liveMatches.otherData.key}`}
                               className="text-black">{liveMatches.title}</a>
                        </Col>
                        <span className="h6">Series :  <a href={`/series_details/${liveMatches.key}`}>{liveMatches.name}</a></span> | <span><b>Date : </b>
                        <small
                            className="text-warning">{liveMatches.startDate.day} {liveMatches.startDate.month}</small>
                    </span>
                    </td>
                </tr>
            )
        );
        /* 
            First pass the Id from this link
            set the link in the reducer with :id
            Id will match key
        */
        matchListingUpcoming = scheduleMatchUpcoming.map((UpcomingMatches, index) => (
                <tr key={index}>
                    <td>
                        <Col className={cx('h5')}>
                            <a href={`/match_details/${UpcomingMatches.otherData.key}`}
                               className="text-black">{UpcomingMatches.title}</a>
                        </Col>
                        <span className="h6">Series : <a
                            href={`/series_details/${UpcomingMatches.key}`}>{UpcomingMatches.name}</a></span> | <span><b>Date : </b>
                        <small
                            className="text-warning">{UpcomingMatches.startDate.day} {UpcomingMatches.startDate.month}</small>
                    </span>
                    </td>
                </tr>
            )
        );
        return (
            <Grid>
                <FormGroup>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="01">
                        <Row className="clearfix">
                            <Row>
                                <Col md={8} sm={7} className={cx('resp-fluid')}>
                                    <Col className={cx('panel-cric')}>
                                        <Col className={cx('panel-heading')}>
                                            <span className={cx('h4')}>
                                                SCHEDULE MATCH
                                    </span>
                                            <Nav className={cx('tab-cric')}>
                                                <NavItem className="tab-items" eventKey="01">Schedule</NavItem>
                                            </Nav>
                                        </Col>
                                        {Object.keys(matchListingCompleted).length > 0 || Object.keys(matchListingToday).length > 0 || Object.keys(matchListingUpcoming).length > 0 ?

                                            <Col className={cx('panel-body')}>
                                                {/* mainTabContent */}
                                                <Tab.Content animation>
                                                    {/* main-tab */}
                                                    <Tab.Pane eventKey="01">
                                                        {/* subTabContent */}
                                                        <Tab.Container id="tabs-with-dropdown"
                                                                       defaultActiveKey="second">
                                                            <Row className="clearfix">
                                                                <Col sm={12}>
                                                                    <FormGroup>
                                                                        <Nav bsStyle="pills">
                                                                            <NavItem eventKey="second">Today's</NavItem>
                                                                            <NavItem eventKey="third">Upcoming</NavItem>
                                                                            <NavItem
                                                                                eventKey="first">Completed</NavItem>
                                                                        </Nav>
                                                                    </FormGroup>
                                                                </Col>
                                                                <Col sm={12}>
                                                                    {(fetched) ?
                                                                        <Tab.Content animation>
                                                                            {/* sub-tab */}
                                                                            <Tab.Pane eventKey="first">
                                                                                <Table responsive striped
                                                                                       className={cx('custome-table')}>
                                                                                    {/* <caption>
                                                                        April 2018
                                                                    </caption> */}
                                                                                    <tbody>
                                                                                    {(Object.keys(matchListingCompleted).length > 0) ? matchListingCompleted : "No list Available"}
                                                                                    </tbody>
                                                                                </Table>
                                                                            </Tab.Pane>
                                                                            {/* sub-tab End */}

                                                                            {/* sub-tab */}
                                                                            <Tab.Pane eventKey="second">
                                                                                <Table responsive striped
                                                                                       className={cx('custome-table')}>
                                                                                    {/* <caption>
                                                                        April 2018
                                                                    </caption> */}
                                                                                    <tbody>
                                                                                    {(Object.keys(matchListingToday).length > 0) ? matchListingToday : "No list Available"}
                                                                                    </tbody>
                                                                                </Table>
                                                                            </Tab.Pane>
                                                                            {/* sub-tab End */}

                                                                            {/* sub-tab */}
                                                                            <Tab.Pane eventKey="third">
                                                                                <Table responsive striped
                                                                                       className={cx('custome-table')}>
                                                                                    {/* <caption>
                                                                        April 2018
                                                                    </caption> */}
                                                                                    <tbody>
                                                                                    {(Object.keys(matchListingUpcoming).length > 0) ? matchListingUpcoming : "No list Available"}
                                                                                    </tbody>
                                                                                </Table>
                                                                            </Tab.Pane>
                                                                            {/* sub-tab End */}
                                                                        </Tab.Content> :
                                                                        <div className={cx('preLoaderInner')}></div>
                                                                    }
                                                                </Col>
                                                            </Row>
                                                        </Tab.Container>
                                                        {/* subTabContent End */}
                                                    </Tab.Pane>
                                                    {/* main-tab End */}
                                                </Tab.Content>
                                                {/* mainTabContent End */}
                                            </Col>
                                            :
                                            <Col className={cx('panel-body')}>
                                                <div className={cx('preLoaderInner', 'contentLoader')}></div>
                                                }
                                            </Col>
                                        }
                                    </Col>
                                </Col>

                                <Asidebar/>
                            </Row>
                        </Row>
                    </Tab.Container>
                </FormGroup>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {...state.schedule};
}

export default connect(mapStateToProps, scheduleAction)(ScheduleMatch); 