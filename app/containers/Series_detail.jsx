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
    NavDropdown,
    Button,
    MenuItem
} from 'react-bootstrap';
import {connect} from 'react-redux';
import classNames from 'classnames/bind';
import * as seriesAction from '../actions/seriesmatch';
import styles from '../css/components/news';
import FA from 'react-fontawesome';
import Asidebar from '../components/Asidebar';

const cx = classNames.bind(styles);
let matchId = null, matchInfo, sessionCurrentMatch, scheduleMatchesList_temp = [], ScheduleMatch, resultMatch,
    statsBatting, Stat_Bat_Best, Stat_most_boundries_Best, Stat_most_dots, Stat_most_fours, Stat_most_sixes,
    Stat_most_runs, Stat_bowl_Best, stat_fewest_dots, Stat_most_boundries_bowl, Stat_most_runs_bowl, Stat_most_wickets,
    playerIfoList, timeSerie, timeSerie_end, seriesName, PointListing;
let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

class SeriesDetailsMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabKey: 'schedule'
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillMount() {
        const {getSeasonsById, params: {matchId}} = this.props;
        this.props.getSeasonsById({seasonid: matchId})
    }

    componentWillReceiveProps(nextProps) {
        const sessionMatch = nextProps.season_id_lists;
        const scheduleMatchesList = [],
            ResultMatchesList = [];

        /* To open Point table (navigated from match_details page) */
        if (nextProps && nextProps.location && nextProps.location.hash && nextProps.location.hash == '#point_table') {
            this.setState({
                tabKey: 'table'
            })
        }

        if (sessionMatch && sessionMatch[0].matches) {
            const {matches} = sessionMatch[0];
            timeSerie = this.timeAndDate(sessionMatch[0].start_date.timestamp),
                timeSerie_end = this.timeAndDate(sessionMatch[0].last_date.timestamp);

            /* Today date function */
            var todayDate = new Date,
                dateDay = todayDate.getDate(),
                dateMonth = todayDate.getMonth(),
                dateYear = todayDate.getFullYear(),
                todaydatepart = dateDay + ' ' + dateMonth + ' ' + dateYear;
            seriesName = sessionMatch[0].name;
            for (var key in matches) {
                if (matches[key].status == 'completed') {
                    var obj = matches[key]
                    if (ResultMatchesList.indexOf(obj) == -1) {
                        ResultMatchesList.push(obj);
                    }
                    resultMatch = Object.keys(ResultMatchesList).map((key) => (
                            <tr key={key}>
                                <td style={{width: '160px'}}>
                                    <FormGroup className={cx('h5')}>
                                        <a href={`/match_details/${ResultMatchesList[key].key}`}>{ResultMatchesList[key].related_name}</a>
                                    </FormGroup>
                                    <Col>
                                        {this.getImage(ResultMatchesList[key].teams.a.key, "flag", cx('img-flg-sm'))}
                                        <span className={cx('seprate-vs', 'small')}>
                                        VS
                                        </span>
                                        {this.getImage(ResultMatchesList[key].teams.b.key, "flag", cx('img-flg-sm'))}
                                    </Col>
                                </td>
                                <td>
                                    <Col className={cx('text-black')}>
                                        <a href={`/match_details/${ResultMatchesList[key].key}`}
                                           className="text-black"><b>{ResultMatchesList[key].title}</b></a>
                                    </Col>
                                    <Col className={cx('text-info')}>
                                        <small> {this.timeAndDate(ResultMatchesList[key].start_date.timestamp)}</small>
                                    </Col>
                                    <Col>
                                        {ResultMatchesList[key].venue}
                                    </Col>
                                    <Col className="text-primary">
                                        {ResultMatchesList[key].msgs.info}
                                    </Col>
                                </td>
                            </tr>
                        )
                    )

                } else if (this.checkMatchdate(matches[key].start_date.timestamp) == todaydatepart || (matches[key].status_overview == 'in_play' || matches[key].status_overview == 'stumps')) {
                    var obj = matches[key]
                    if (scheduleMatchesList.indexOf(obj) == -1) {
                        scheduleMatchesList.push(obj);
                    }
                    sessionCurrentMatch = Object.keys(scheduleMatchesList).map((key) => (

                        <tr key={key}>
                            <td style={{width: '160px'}}>
                                <FormGroup className={cx('h5')}>
                                    <a href={`/live_match_detail/${scheduleMatchesList[key].key}`}>{scheduleMatchesList[key].related_name}</a>
                                </FormGroup>
                                <Col>
                                    {this.getImage(scheduleMatchesList[key].teams.a.key, "flag", cx('img-flg-sm'))}
                                    <span className={cx('seprate-vs', 'small')}>
                                        VS
                                    </span>
                                    {this.getImage(scheduleMatchesList[key].teams.b.key, "flag", cx('img-flg-sm'))}
                                </Col>
                            </td>
                            <td>
                                <Col className={cx('text-black')}>
                                    <a href={`/live_match_detail/${scheduleMatchesList[key].key}`}
                                       className="text-black"><b>{scheduleMatchesList[key].title}</b></a>
                                </Col>
                                <Col className={cx('text-info')}>
                                    <small> {this.timeAndDate(scheduleMatchesList[key].start_date.timestamp)}</small>
                                </Col>
                                <Col>
                                    {scheduleMatchesList[key].venue}
                                </Col>
                            </td>
                        </tr>
                    ))
                } else {
                    var obj = matches[key]
                    if (scheduleMatchesList_temp.indexOf(obj) == -1) {
                        scheduleMatchesList_temp.push(obj);
                    }
                    ScheduleMatch = Object.keys(scheduleMatchesList_temp).map((key) => (
                        <tr key={key}>
                            <td style={{width: '160px'}}>
                                <FormGroup className={cx('h5')}>
                                    <a href={`/match_details/${scheduleMatchesList_temp[key].key}`}>{scheduleMatchesList_temp[key].related_name} </a>
                                </FormGroup>
                                <Col>
                                    {this.getImage(scheduleMatchesList_temp[key].teams.a.key, "flag", cx('img-flg-sm'))}
                                    <span className={cx('seprate-vs', 'small')}>
                                        VS
                                    </span>
                                    {this.getImage(scheduleMatchesList_temp[key].teams.b.key, "flag", cx('img-flg-sm'))}
                                </Col>
                            </td>
                            <td>
                                <Col className={cx('text-black')}>
                                    <a href={`/match_details/${scheduleMatchesList_temp[key].key}`}
                                       className="text-black"><b>{scheduleMatchesList_temp[key].title}</b></a>
                                </Col>
                                <Col className={cx('text-info')}>
                                    <small> {this.timeAndDate(scheduleMatchesList_temp[key].start_date.timestamp)}</small>
                                </Col>
                                <Col>
                                    {scheduleMatchesList_temp[key].venue}
                                </Col>
                            </td>
                        </tr>
                    ))
                }
            }

            /* Points Table */
            const seriesMatch = sessionMatch[0].rounds;
            if (seriesMatch && Object.keys(seriesMatch).length > 0) {
                PointListing = Object.keys(seriesMatch).map(key => {
                    let MatchPoint_group = seriesMatch[key].groups[0].teams;
                    /* seriesMatchPoints = seriesMatch[key].groups[0].teams; */
                    return (
                        <Col key={key}>
                            <Col className={cx('sub-title')}><span className="h5">{seriesMatch[key].name}</span></Col>
                            <Table className="custom-table">
                                <thead>
                                <tr>
                                    <th>
                                        Teams
                                    </th>
                                    <th>
                                        Mat
                                    </th>
                                    <th>
                                        Won
                                    </th>
                                    <th>
                                        Lost
                                    </th>
                                    <th>
                                        Tied
                                    </th>
                                    <th>
                                        NR
                                    </th>
                                    <th>
                                        Pts
                                    </th>
                                    <th>
                                        NRR
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {Object.keys(MatchPoint_group).map(key => {
                                    return (<tr key={key}>
                                        <td>
                                            <span className={cx('h5')}>{MatchPoint_group[key].name}</span>
                                        </td>
                                        <td>
                                            {MatchPoint_group[key].played ? MatchPoint_group[key].played : '0'}
                                        </td>
                                        <td>
                                            {MatchPoint_group[key].won ? MatchPoint_group[key].won : '0'}
                                        </td>
                                        <td>
                                            {MatchPoint_group[key].lost ? MatchPoint_group[key].lost : '0'}
                                        </td>
                                        <td>
                                            {MatchPoint_group[key].tied ? MatchPoint_group[key].tied : '0'}
                                        </td>
                                        <td>
                                            {MatchPoint_group[key].no_result ? MatchPoint_group[key].no_result : '0'}
                                        </td>
                                        <td>
                                            {MatchPoint_group[key].points ? MatchPoint_group[key].points : '0'}
                                        </td>
                                        <td>
                                            {MatchPoint_group[key].net_run_rate ? MatchPoint_group[key].net_run_rate : '0'} *
                                        </td>
                                    </tr>)

                                })}

                                </tbody>
                            </Table>
                        </Col>
                    )
                })

            }

            const playerIfo = sessionMatch[0].teams,
                playerListing = playerIfo.players;
            if (playerIfo && Object.keys(playerIfo).length > 0) {


                playerIfoList = Object.keys(playerIfo).map(key => {
                    const playerslist = playerIfo[key].players;

                    return (

                        <tr key={key}>
                            <td>
                                <span
                                    className={cx('h5')}>{playerIfo[key].name ? playerIfo[key].name : "No Data"}</span>
                            </td>
                            <td>
                                {
                                    (playerslist && playerslist.length > 0) ?
                                        playerslist.map((value, index) => {
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

                })
            }

            /* Batting Stats */
            const batting_stats = sessionMatch[0].batting;
            if (batting_stats) {
                const bestStats = sessionMatch[0].batting.best,
                    most_boundries_Stats = sessionMatch[0].batting.most_boundries,
                    dots_Stats = sessionMatch[0].batting.most_dots,
                    fours_Stats = sessionMatch[0].batting.most_fours,
                    sixes_Stats = sessionMatch[0].batting.most_sixes,
                    runs_Stats = sessionMatch[0].batting.most_runs;

                /* stats Batting Best */
                if (bestStats.length > 0) {
                    Stat_Bat_Best = bestStats.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        {value.short_name}
                                    </td>
                                    <td>
                                        {value.team_name}
                                    </td>
                                    <td>
                                        {value.stats.batting.best.balls}
                                    </td>
                                    <td>
                                        {value.stats.batting.best.runs}
                                    </td>
                                    <td>
                                        {value.stats.batting.best.fours}
                                    </td>
                                    <td>
                                        {value.stats.batting.best.sixes}
                                    </td>
                                </tr>
                            )
                        }
                    )
                } else {
                    Stat_Bat_Best = (
                        <tr>
                            <td>
                                0
                            </td>
                            <td>
                                0
                            </td>
                            <td>
                                0
                            </td>
                            <td>
                                0
                            </td>
                            <td>
                                0
                            </td>
                            <td>
                                0
                            </td>
                        </tr>)
                }

                /* stats Batting most_boundries */
                if (most_boundries_Stats.length > 0) {
                    Stat_most_boundries_Best = most_boundries_Stats.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        {value.short_name}
                                    </td>
                                    <td>
                                        {value.team_name}
                                    </td>
                                    <td>
                                        {value.stats.batting.boundries}
                                    </td>
                                </tr>
                            )
                        }
                    )
                } else {
                    Stat_most_boundries_Best = (<tr>
                        <td>
                            0
                        </td>
                        <td>
                            0
                        </td>
                        <td>
                            0
                        </td>
                    </tr>)
                }

                /* stats Batting most_dots */
                if (dots_Stats.length > 0) {
                    Stat_most_dots = dots_Stats.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        {value.short_name}
                                    </td>
                                    <td>
                                        {value.team_name}
                                    </td>
                                    <td>
                                        {value.stats.batting.dots}
                                    </td>
                                </tr>
                            )
                        }
                    )
                } else {
                    Stat_most_dots = (<tr>
                        <td>
                            0
                        </td>
                        <td>
                            0
                        </td>
                        <td>
                            0
                        </td>
                    </tr>)
                }
                /* stats Batting fours_Stats */
                if (fours_Stats.length > 0) {
                    Stat_most_fours = fours_Stats.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        {value.short_name}
                                    </td>
                                    <td>
                                        {value.team_name}
                                    </td>
                                    <td>
                                        {value.stats.batting.fours}
                                    </td>
                                </tr>
                            )
                        }
                    )
                } else {
                    Stat_most_fours = (<tr>
                        <td>
                            0
                        </td>
                        <td>
                            0
                        </td>
                        <td>
                            0
                        </td>
                    </tr>)
                }

                /* Most Runs */
                if (runs_Stats.length > 0) {

                    Stat_most_runs = runs_Stats.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        {value.short_name}
                                    </td>
                                    <td>
                                        {value.team_name}
                                    </td>
                                    <td>
                                        {value.stats.batting.runs}
                                    </td>
                                </tr>
                            )
                        }
                    )
                } else {
                    Stat_most_runs = (<tr>
                        <td>
                            0
                        </td>
                        <td>
                            0
                        </td>
                        <td>
                            0
                        </td>
                    </tr>)
                }

                /* Most Sixes */
                if (sixes_Stats.length > 0) {

                    Stat_most_sixes = sixes_Stats.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        {value.short_name}
                                    </td>
                                    <td>
                                        {value.team_name}
                                    </td>
                                    <td>
                                        {value.stats.batting.sixes}
                                    </td>
                                </tr>
                            )
                        }
                    )
                } else {
                    Stat_most_sixes = (<tr>
                        <td>
                            0
                        </td>
                        <td>
                            0
                        </td>
                        <td>
                            0
                        </td>
                    </tr>)
                }

            }

            /* Bowling Stats */
            const bowling_stats = sessionMatch[0].bowling;
            if (bowling_stats) {
                const bestStats = sessionMatch[0].bowling.best,
                    most_boundries_Stats = sessionMatch[0].bowling.most_boundries,
                    dots_Stats = sessionMatch[0].bowling.fewest_dots,
                    fours_Stats = sessionMatch[0].bowling.most_fours,
                    most_wickets = sessionMatch[0].bowling.most_wickets,
                    runs_Stats = sessionMatch[0].bowling.most_runs;

                /* stats Batting Best */
                if (bestStats.length > 0) {
                    Stat_bowl_Best = bestStats.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        {value.short_name}
                                    </td>
                                    <td>
                                        {value.team_name}
                                    </td>
                                    <td>
                                        {value.stats.bowling.best.runs}
                                    </td>
                                    <td>
                                        {value.stats.bowling.best.balls}
                                    </td>
                                    <td>
                                        {value.stats.bowling.best.wickets}
                                    </td>
                                </tr>
                            )
                        }
                    )
                } else {
                    Stat_bowl_Best = (<tr>
                        <td>
                            0
                        </td>
                        <td>
                            0
                        </td>
                        <td>
                            0
                        </td>
                        <td>
                            0
                        </td>
                        <td>
                            0
                        </td>
                    </tr>)
                }

                /* stats Bowling most_boundries */
                if (most_boundries_Stats.length > 0) {

                    Stat_most_boundries_bowl = most_boundries_Stats.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        {value.short_name}
                                    </td>
                                    <td>
                                        {value.team_name}
                                    </td>
                                    <td>
                                        {value.stats.bowling.boundries}
                                    </td>
                                </tr>
                            )
                        }
                    )
                } else {
                    Stat_most_boundries_bowl = (<tr>
                        <td>
                            0
                        </td>
                        <td>
                            0
                        </td>
                        <td>
                            0
                        </td>
                    </tr>)
                }


                /* stats Bowling most_dots */
                if (dots_Stats.length > 0) {

                    stat_fewest_dots = dots_Stats.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        {value.short_name}
                                    </td>
                                    <td>
                                        {value.team_name}
                                    </td>
                                    <td>
                                        {value.stats.bowling.dots}
                                    </td>
                                </tr>
                            )
                        }
                    )
                } else {
                    stat_fewest_dots = (<tr>
                        <td>
                            0
                        </td>
                        <td>
                            0
                        </td>
                        <td>
                            0
                        </td>
                    </tr>)
                }

                /* Most Run */
                if (runs_Stats.length > 0) {

                    Stat_most_runs_bowl = runs_Stats.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        {value.short_name}
                                    </td>
                                    <td>
                                        {value.team_name}
                                    </td>
                                    <td>
                                        {value.stats.bowling.runs}
                                    </td>
                                </tr>
                            )
                        }
                    )
                } else {
                    Stat_most_runs_bowl = (<tr>
                        <td>
                            0
                        </td>
                        <td>
                            0
                        </td>
                        <td>
                            0
                        </td>
                    </tr>)
                }

                /* Wicket */
                if (most_wickets.length > 0) {

                    Stat_most_wickets = most_wickets.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        {value.short_name}
                                    </td>
                                    <td>
                                        {value.team_name}
                                    </td>
                                    <td>
                                        {value.stats.bowling.wickets}
                                    </td>
                                </tr>
                            )
                        }
                    )
                } else {
                    Stat_most_wickets = (<tr>
                        <td>
                            0
                        </td>
                        <td>
                            0
                        </td>
                        <td>
                            0
                        </td>
                    </tr>)
                }
            }
        }
    }

    handleSelect(key) {
        this.setState({
            tabKey: key
        })
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
                            <Tab.Container id="Tabbx" activeKey={this.state.tabKey}
                                           onSelect={this.handleSelect}>
                                <Col className={cx('panel-cric')}>
                                    <Col className={cx('panel-heading')}>
                                        <Col className={cx('h4')}>
                                            {seriesName ? seriesName : 'Series Detail'}
                                        </Col>
                                        <Col>
                                            <small>{timeSerie ? 'Date :' + timeSerie + '-' + timeSerie_end : ''}</small>
                                        </Col>
                                    </Col>
                                    {
                                        (resultMatch && resultMatch.length > 0 || ScheduleMatch && ScheduleMatch.length > 0 || sessionCurrentMatch && sessionCurrentMatch.length > 0) ?
                                            <Col className={cx('panel-body')}>
                                                <FormGroup className={cx('marg0')}>
                                                    <Nav className={cx('tab-cric', 'tab-left', 'border-btm')}>
                                                        <NavItem className="tab-items"
                                                                 eventKey="schedule">Matches</NavItem>
                                                        <NavItem className="tab-items" eventKey="squad">Squad</NavItem>
                                                        <NavItem className="tab-items" eventKey="stat">Stats</NavItem>
                                                        <NavItem className="tab-items" eventKey="table">Points
                                                            Table</NavItem>
                                                    </Nav>
                                                </FormGroup>

                                                <Tab.Content animation>
                                                    <Tab.Pane eventKey="schedule">
                                                        {/* Schedule */}
                                                        <Col className={cx('sub-title')}>
                                                            <span className="h5">Scheduled</span>
                                                        </Col>
                                                        {
                                                            sessionCurrentMatch || ScheduleMatch ?
                                                                <div>
                                                                    <Table responsive striped
                                                                           className={cx('custome-table')}>
                                                                        <tbody>
                                                                        {sessionCurrentMatch ? sessionCurrentMatch : ''}
                                                                        </tbody>
                                                                    </Table>
                                                                    <Table responsive striped
                                                                           className={cx('custome-table')}>
                                                                        <tbody>
                                                                        {ScheduleMatch ? ScheduleMatch : ''}
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
                                                        {/* Result */}
                                                        <Col className={cx('sub-title')}>
                                                            <span className="h5">Results</span>
                                                        </Col>
                                                        <Table responsive striped className={cx('custome-table')}>
                                                            <tbody>
                                                            {resultMatch ? resultMatch : (
                                                                <tr>
                                                                    <td className="text-center">
                                                                            <span className="h5">
                                                                                No Results
                                                                    </span>
                                                                    </td>
                                                                </tr>
                                                            )}
                                                            </tbody>
                                                        </Table>
                                                        {/* Schedule END */}
                                                    </Tab.Pane>

                                                    <Tab.Pane eventKey="squad">
                                                        {/* Squad */}
                                                        <Table responsive striped className={cx('custome-table')}>
                                                            <thead>
                                                            <tr>
                                                                <th>
                                                                    Team
                                                                </th>
                                                                <th>
                                                                    Players
                                                                </th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            {playerIfoList ? playerIfoList : (
                                                                <tr>
                                                                    <td className="text-center" colSpan="2">
                                                                            <span className="h5">
                                                                                No Players
                                                                            </span>
                                                                    </td>
                                                                </tr>
                                                            )}
                                                            </tbody>
                                                        </Table>
                                                        {/* Squad END */}
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="stat">
                                                        {/* Stats */}

                                                        <Tab.Container id="statsTab" defaultActiveKey="battingStat">
                                                            <Row className="clearfix">
                                                                <Col sm={4}>
                                                                    <Nav bsStyle="pills" stacked>
                                                                        <NavItem className="tab-item"
                                                                                 eventKey="battingStat">Batting</NavItem>
                                                                        <NavItem className="tab-item"
                                                                                 eventKey="bowlingStat">Bowling</NavItem>
                                                                    </Nav>
                                                                </Col>
                                                                <Col sm={8}>
                                                                    <Tab.Content animation>
                                                                        <Tab.Pane eventKey="battingStat">

                                                                            <Col className={cx('sub-title')}>
                                                                                <span className="h5">Best</span>
                                                                            </Col>
                                                                            <Table responsive striped
                                                                                   className={cx('custome-table')}>
                                                                                <thead>
                                                                                <tr>
                                                                                    <th>
                                                                                        Player
                                                                                    </th>
                                                                                    <th>
                                                                                        Team
                                                                                    </th>
                                                                                    <th>
                                                                                        Balls
                                                                                    </th>
                                                                                    <th>
                                                                                        Runs
                                                                                    </th>
                                                                                    <th>
                                                                                        Fours
                                                                                    </th>
                                                                                    <th>
                                                                                        Sixes
                                                                                    </th>
                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                {Stat_Bat_Best ? Stat_Bat_Best : (
                                                                                    <tr>
                                                                                        <td className="text-center"
                                                                                            colSpan="6">
                                                                                                <span className="h5">
                                                                                                    No data found
                                                                                        </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                )}
                                                                                </tbody>
                                                                            </Table>


                                                                            <Col className={cx('sub-title')}>
                                                                                <span
                                                                                    className="h5">Most Boundries</span>
                                                                            </Col>
                                                                            <Table responsive striped
                                                                                   className={cx('custome-table')}>
                                                                                <thead>
                                                                                <tr>
                                                                                    <th>
                                                                                        Player
                                                                                    </th>
                                                                                    <th>
                                                                                        Team
                                                                                    </th>
                                                                                    <th>
                                                                                        Boundries
                                                                                    </th>
                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                {Stat_most_boundries_Best ? Stat_most_boundries_Best : (
                                                                                    <tr>
                                                                                        <td className="text-center"
                                                                                            colSpan="3">
                                                                                                <span className="h5">
                                                                                                    No data found
                                                                                        </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                )}
                                                                                </tbody>
                                                                            </Table>

                                                                            <Col className={cx('sub-title')}>
                                                                                <span className="h5">Dots</span>
                                                                            </Col>
                                                                            <Table responsive striped
                                                                                   className={cx('custome-table')}>
                                                                                <thead>
                                                                                <tr>
                                                                                    <th>
                                                                                        Player
                                                                                    </th>
                                                                                    <th>
                                                                                        Team
                                                                                    </th>
                                                                                    <th>
                                                                                        Dots
                                                                                    </th>
                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                {Stat_most_dots ? Stat_most_dots : (
                                                                                    <tr>
                                                                                        <td className="text-center"
                                                                                            colSpan="3">
                                                                                                <span className="h5">
                                                                                                    No data found
                                                                                        </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                )}
                                                                                </tbody>
                                                                            </Table>

                                                                            <Col className={cx('sub-title')}>
                                                                                <span className="h5">Fours</span>
                                                                            </Col>
                                                                            <Table responsive striped
                                                                                   className={cx('custome-table')}>
                                                                                <thead>
                                                                                <tr>
                                                                                    <th>
                                                                                        Player
                                                                                    </th>
                                                                                    <th>
                                                                                        Team
                                                                                    </th>
                                                                                    <th>
                                                                                        Fours
                                                                                    </th>
                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                {Stat_most_fours ? Stat_most_fours : (
                                                                                    <tr>
                                                                                        <td className="text-center"
                                                                                            colSpan="3">
                                                                                                <span className="h5">
                                                                                                    No data found
                                                                                        </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                )}
                                                                                </tbody>
                                                                            </Table>


                                                                            <Col className={cx('sub-title')}>
                                                                                <span className="h5">Runs</span>
                                                                            </Col>
                                                                            <Table responsive striped
                                                                                   className={cx('custome-table')}>
                                                                                <thead>
                                                                                <tr>
                                                                                    <th>
                                                                                        Player
                                                                                    </th>
                                                                                    <th>
                                                                                        Team
                                                                                    </th>
                                                                                    <th>
                                                                                        Runs
                                                                                    </th>
                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                {Stat_most_runs ? Stat_most_runs : (
                                                                                    <tr>
                                                                                        <td className="text-center"
                                                                                            colSpan="3">
                                                                                                <span className="h5">
                                                                                                    No data found
                                                                                        </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                )}
                                                                                </tbody>
                                                                            </Table>

                                                                            <Col className={cx('sub-title')}>
                                                                                <span className="h5">Sixes</span>
                                                                            </Col>
                                                                            <Table responsive striped
                                                                                   className={cx('custome-table')}>
                                                                                <thead>
                                                                                <tr>
                                                                                    <th>
                                                                                        Player
                                                                                    </th>
                                                                                    <th>
                                                                                        Team
                                                                                    </th>
                                                                                    <th>
                                                                                        Sixes
                                                                                    </th>
                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                {Stat_most_sixes ? Stat_most_sixes : (
                                                                                    <tr>
                                                                                        <td className="text-center"
                                                                                            colSpan="3">
                                                                                                <span className="h5">
                                                                                                    No data found
                                                                                        </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                )}
                                                                                </tbody>
                                                                            </Table>
                                                                        </Tab.Pane>
                                                                        <Tab.Pane eventKey="bowlingStat">

                                                                            <Col className={cx('sub-title')}>
                                                                                <span className="h5">Best</span>
                                                                            </Col>
                                                                            <Table responsive striped
                                                                                   className={cx('custome-table')}>
                                                                                <thead>
                                                                                <tr>
                                                                                    <th>
                                                                                        Player
                                                                                    </th>
                                                                                    <th>
                                                                                        Team
                                                                                    </th>
                                                                                    <th>
                                                                                        Balls
                                                                                    </th>
                                                                                    <th>
                                                                                        Runs
                                                                                    </th>
                                                                                    <th>
                                                                                        Wicket
                                                                                    </th>
                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                {Stat_bowl_Best ? Stat_bowl_Best : (
                                                                                    <tr>
                                                                                        <td className="text-center"
                                                                                            colSpan="5">
                                                                                                <span className="h5">
                                                                                                    No data found
                                                                                        </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                )}
                                                                                </tbody>
                                                                            </Table>


                                                                            <Col className={cx('sub-title')}>
                                                                                <span
                                                                                    className="h5">Most Boundries</span>
                                                                            </Col>
                                                                            <Table responsive striped
                                                                                   className={cx('custome-table')}>
                                                                                <thead>
                                                                                <tr>
                                                                                    <th>
                                                                                        Player
                                                                                    </th>
                                                                                    <th>
                                                                                        Team
                                                                                    </th>
                                                                                    <th>
                                                                                        Boundries
                                                                                    </th>
                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                {Stat_most_boundries_bowl ? Stat_most_boundries_bowl : (
                                                                                    <tr>
                                                                                        <td className="text-center"
                                                                                            colSpan="3">
                                                                                                <span className="h5">
                                                                                                    No data found
                                                                                        </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                )}
                                                                                </tbody>
                                                                            </Table>

                                                                            <Col className={cx('sub-title')}>
                                                                                <span className="h5">Dots</span>
                                                                            </Col>
                                                                            <Table responsive striped
                                                                                   className={cx('custome-table')}>
                                                                                <thead>
                                                                                <tr>
                                                                                    <th>
                                                                                        Player
                                                                                    </th>
                                                                                    <th>
                                                                                        Team
                                                                                    </th>
                                                                                    <th>
                                                                                        Dots
                                                                                    </th>
                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                {stat_fewest_dots ? stat_fewest_dots : (
                                                                                    <tr>
                                                                                        <td className="text-center"
                                                                                            colSpan="3">
                                                                                                <span className="h5">
                                                                                                    No data found
                                                                                        </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                )}
                                                                                </tbody>
                                                                            </Table>

                                                                            <Col className={cx('sub-title')}>
                                                                                <span className="h5">Runs</span>
                                                                            </Col>
                                                                            <Table responsive striped
                                                                                   className={cx('custome-table')}>
                                                                                <thead>
                                                                                <tr>
                                                                                    <th>
                                                                                        Player
                                                                                    </th>
                                                                                    <th>
                                                                                        Team
                                                                                    </th>
                                                                                    <th>
                                                                                        Runs
                                                                                    </th>
                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                {Stat_most_runs_bowl ? Stat_most_runs_bowl : (
                                                                                    <tr>
                                                                                        <td className="text-center"
                                                                                            colSpan="3">
                                                                                                <span className="h5">
                                                                                                    No data found
                                                                                        </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                )}
                                                                                </tbody>
                                                                            </Table>

                                                                            <Col className={cx('sub-title')}>
                                                                                <span className="h5">Wickets</span>
                                                                            </Col>
                                                                            <Table responsive striped
                                                                                   className={cx('custome-table')}>
                                                                                <thead>
                                                                                <tr>
                                                                                    <th>
                                                                                        Player
                                                                                    </th>
                                                                                    <th>
                                                                                        Team
                                                                                    </th>
                                                                                    <th>
                                                                                        Wickets
                                                                                    </th>
                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                {Stat_most_wickets ? Stat_most_wickets : (
                                                                                    <tr>
                                                                                        <td className="text-center"
                                                                                            colSpan="3">
                                                                                                <span className="h5">
                                                                                                    No data found
                                                                                        </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                )}
                                                                                </tbody>
                                                                            </Table>
                                                                        </Tab.Pane>
                                                                    </Tab.Content>
                                                                </Col>
                                                            </Row>
                                                        </Tab.Container>
                                                        {/* Stats END */}
                                                    </Tab.Pane>

                                                    <Tab.Pane eventKey="table">

                                                        <Col className={cx('panel-cric')}>

                                                            <Col className={cx('panel-body', 'padzero')}>
                                                                {PointListing ? PointListing : (
                                                                    <span className="h5">No Points Avilable</span>
                                                                )}
                                                            </Col>
                                                        </Col>
                                                    </Tab.Pane>

                                                    {/* Point Table END */}
                                                </Tab.Content>
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

function mapStateToProps(state) {
    return {...state.seasonReducer};
    /* return { ...state.seasonReducer, ...state.playerinfoReducer }; */
}


/* export default connect(mapStateToProps, {...seriesAction, ...playerinfo})(SeriesDetailsMatch);  */
export default connect(mapStateToProps, seriesAction)(SeriesDetailsMatch); 
