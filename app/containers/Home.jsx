import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col, Clearfix, Table, Nav, NavItem, FormGroup, Tab, Tabs} from 'react-bootstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from '../css/components/home';
import Asidebar from '../components/Asidebar';
import FA from 'react-fontawesome';
import Countdown from 'react-countdown-now';
import {FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon} from 'react-share';

let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    GlobalCard,
    Matchescard,
    newsState = [],
    newsListing,
    newsDescribe,
    MatchListing,
    renderer,
    currentDate,
    livePlayingId = [];

const cx = classNames.bind(styles);

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            LvMatches: []
        }

    }

    newsTimestamp(value) {
        let newsDate = '';
        newsDate = new Date(value).toUTCString();
        newsDate = newsDate.replace(" GMT", "");
        return newsDate;
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
        var dateFunction = new Date(),
            year = dateFunction.getFullYear(),
            monthNew = monthNames[dateFunction.getMonth()],
            dateNew = dateFunction.getDate();
        currentDate = monthNew + ' ' + dateNew + ' ' + year;
        if (nextProps && Object.keys(nextProps.isPlaying).length > 0) {

            for (var i = 0; i < nextProps.isPlaying.length; i++) {
                if (nextProps.isPlaying[i].details.season.key == 'iplt20_' + year) {
                    if (nextProps.isPlaying[i].details.status_overview == 'pre_match' || nextProps.isPlaying[i].details.status == 'started') {
                        var getKey = nextProps.isPlaying[i].details.key;
                        if (livePlayingId.indexOf(getKey) == -1) {
                            livePlayingId = [...livePlayingId, getKey];
                        }
                        this.setState({LvMatches: nextProps.isPlaying[i].details});
                    }
                }

            }
        } else if (nextProps && nextProps.liveInit && Object.keys(nextProps.liveInit).length > 0) {
            for (var i = 0; i < nextProps.liveInit.length; i++) {
                if (nextProps.liveInit[i].status_overview == 'pre_match' || nextProps.liveInit[i].status == 'started') {
                    this.setState({LvMatches: nextProps.liveInit[i]});
                }
            }
        }

        if (nextProps.liveInit && nextProps.liveInit.length > 0) {
            Matchescard = nextProps.liveInit;
            var iplListed = [];
            Matchescard.map((value, keys) => {
                iplListed = [...iplListed, value]
            })
            /* IPL Match */
            if (iplListed && iplListed.length > 0) {
                MatchListing = <Col className={cx('panel-cric')}>
                    <Col className={cx('panel-heading')}>
            <span className={cx('h4')}>
              Upcoming Matches
          </span>
                    </Col>
                    <Col className={cx('panel-body')}>
                        <Table className={cx('custome-table', 'v-align')} striped style={{marginBottom: '0px'}}>
                            <tbody>
                            {
                                Matchescard.map((value, keys) => {
                                    if (livePlayingId.length > 0) {
                                        var keyFound = true;
                                        if (livePlayingId.indexOf(value.key) == -1) {
                                            keyFound = false
                                        }
                                    }
                                    if (value.status == 'notstarted' && value.status_overview != 'pre_match' && !keyFound) {
                                        return (
                                            <tr key={keys}>
                                                <td>
                                                    <span
                                                        style={{marginRight: 16}}>{getImage(value.teams.a.key, "flag", "img-flg-board")}</span>
                                                    <b className={cx('h4')}>{value.teams.a.key.toUpperCase()}</b>
                                                </td>
                                                <td className={cx('text-warning')}>
                                                    <b>
                                                        {
                                                            IplFun(value.start_date.timestamp) == currentDate ?
                                                                <Countdown date={(value.start_date.timestamp * 1000)}
                                                                           renderer={renderer}/>
                                                                : timeAndDate(value.start_date.timestamp)
                                                        }
                                                    </b>
                                                </td>
                                                <td>
                            <span style={{marginRight: 16}}>
                              {getImage(value.teams.b.key, "flag", "img-flg-board")}
                            </span>
                                                    <b className={cx('h4')}>{value.teams.b.key.toUpperCase()}</b>
                                                </td>
                                                <td>
                                                    <a href={`/live_match_detail/${value.key}`}
                                                       className={cx('navigate-arrow')}>
                                                        <FA
                                                            name="angle-right"
                                                        />
                                                    </a>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                            </tbody>
                        </Table>
                    </Col>
                </Col>
            }
            /* IPL Match End */
        }

        /* NEWS */
        newsState = [];
        if (nextProps && nextProps.listingnews && nextProps.listingnews.length > 0) {
            newsState = nextProps.listingnews;
            newsListing = newsState.map((values, index) => {
                return (
                    <Col className={cx('content-listing')} key={index}>
                        <Col md={4}>
                            <a href={`/news/${values._id}`}><img src={values.image} alt="image"
                                                                 style={{width: '100%', margin: '10px 0'}}/></a>
                        </Col>
                        <Col md={8}>
                            <Col className={cx('content-listing-head')}>
                                <a href={`/news/${values._id}`}><h4 className="text-primary">{values.title}</h4></a>
                                <div style={{display: 'inline-block', width: '100%'}}>
                                    <span
                                        style={{float: 'left'}}>By Cricloop Team - {this.newsTimestamp(values.updated_at)}</span>
                                    <span style={{float: 'right', marginTop: '-8px', marginRight: '-20px'}}>
                    <FacebookShareButton
                        url={window.location.href}
                        quote={values.title}
                        hashtag="#Cricloop"
                        style={{float: "left"}}
                    >
                      <FacebookIcon
                          size={32}
                          round={false}/>
                    </FacebookShareButton>
                    <TwitterShareButton
                        url={window.location.href}
                        title={values.title}
                        via="Cricloop"
                        hashtags={["Cricloop", "CricketIndia", "CricketFans"]}
                        style={{float: "left"}}
                    >
                      <TwitterIcon
                          size={32}
                          round={false}/>
                    </TwitterShareButton>
                  </span>
                                </div>
                            </Col>
                            <Col className={cx('content-listing-content')}>
                                <p>
                                    {trim_words(values.description, 30)}...
                                </p>
                            </Col>
                        </Col>
                    </Col>
                )
            })
        }
    }

    render() {
        return (
            <Grid className={cx('content-sect')}>
                <Row>
                    <Col md={8} sm={7} className={cx('resp-fluid')}>
                        {
                            this.state.LvMatches && this.state.LvMatches != undefined && this.state.LvMatches != null && Object.keys(this.state.LvMatches).length > 0 ?
                                <a href={`live_match_detail/${this.state.LvMatches.key}`} className={cx('btn-extra')}
                                   style={{textDecoration: "none", color: "inherit"}}>
                                    <Col className={cx('panel-cric')}>
                                        <Col className={cx('panel-heading', 'livematch-head')}>
                      <span className={cx('h4')}>
                        {this.state.LvMatches.title}
                      </span>
                                            <Col className={cx('weigh-text-sm')}>
                                                <small>
                                                    <b>Series</b> : {this.state.LvMatches.season.name} | {timeAndDate(this.state.LvMatches.start_date.timestamp)} at {this.state.LvMatches.venue}.
                                                </small>
                                            </Col>
                                        </Col>
                                        <Col className={cx('panel-body')}>
                                            <Row>
                                                <Col sm={9} className={cx('resp-fluid')}>
                                                    <Row>
                                                        <Col sm={10}>
                                                            <h5><b className="text-sucess">Live Updates</b> <a
                                                                href={`live_match_detail/${this.state.LvMatches.key}`}
                                                                className={cx('btn-extra')}>[View Details]</a></h5>
                                                            <Col className={cx('cric-pan', 'cric-pan-table')}>
                                                                <Col className={cx('cric-pan-tr')}>
                                                                    <Col className={cx('team-flg', 'cric-pan-td')}>
                                                                        {getImage(this.state.LvMatches.teams.a.short_name ? this.state.LvMatches.teams.a.short_name : this.state.LvMatches.teams.a.key.toUpperCase(), "flag", "img-flg-board")}
                                                                    </Col>
                                                                    <Col className={cx('cric-pan-td', 'text-black')}>
                                                                        <b className={cx('h3')}>{this.state.LvMatches.teams.a.short_name ? this.state.LvMatches.teams.a.short_name : this.state.LvMatches.teams.a.key.toUpperCase()}</b>
                                                                    </Col>
                                                                    <Col
                                                                        className={cx('cric-pan-td', 'cric-pan-score')}>
                                    <span className={cx('h3')}>
                                      {this.state.LvMatches.innings && Object.keys(this.state.LvMatches.innings).length > 0 ? this.state.LvMatches.innings.a_1.runs + '/' + this.state.LvMatches.innings.a_1.wickets + ' (' + this.state.LvMatches.innings.a_1.overs + ' Ovr)' : '-'}
                                    </span>
                                                                    </Col>
                                                                </Col>

                                                                <Col className={cx('cric-pan-tr')}>
                                                                    <Col className={cx('team-flg', 'cric-pan-td')}>
                                                                        {getImage(this.state.LvMatches.teams.b.short_name ? this.state.LvMatches.teams.b.short_name : this.state.LvMatches.teams.b.key.toUpperCase(), "flag", "img-flg-board")}
                                                                    </Col>
                                                                    <Col className={cx('cric-pan-td', 'text-black')}>
                                                                        <b className={cx('h3')}>{this.state.LvMatches.teams.b.short_name ? this.state.LvMatches.teams.b.short_name : this.state.LvMatches.teams.b.key.toUpperCase()}</b>
                                                                    </Col>
                                                                    <Col
                                                                        className={cx('cric-pan-td', 'cric-pan-score')}>
                                    <span className={cx('h3')}>
                                      {this.state.LvMatches.innings && Object.keys(this.state.LvMatches.innings).length > 0 ? this.state.LvMatches.innings.b_1.runs + '/' + this.state.LvMatches.innings.b_1.wickets + ' (' + this.state.LvMatches.innings.b_1.overs + ' Ovr)' : '-'}
                                    </span>
                                                                    </Col>
                                                                </Col>
                                                            </Col>
                                                            <Col className={cx('cric-status-bx')}>
                                <span className={cx('text-warning')}>
                                  <b className="text-capitalize">
                                    {
                                        (this.state.LvMatches && this.state.LvMatches.status == 'started') ?
                                            (this.state.LvMatches && this.state.LvMatches.status_overview) ?
                                                (this.state.LvMatches.status_overview == "in_play" ?
                                                    returnMatchStatus(this.state.LvMatches)
                                                    : (this.state.LvMatches.status_overview.split('_').join(' ')))
                                                : (this.state.LvMatches.status)
                                            : (
                                                this.state.LvMatches && this.state.LvMatches.status_overview == 'pre_match' ? this.state.LvMatches && this.state.LvMatches.toss && this.state.LvMatches.toss.str ? this.state.LvMatches.toss.str :
                                                    (
                                                        <span>
                                                <b className="text-black">Match starts in - </b>
                                                <Countdown date={(this.state.LvMatches.start_date.timestamp * 1000)}
                                                           renderer={renderer}/>
                                              </span>
                                                    ) : (
                                                    this.state.LvMatches.status_overview == 'result' ? this.state.LvMatches.msgs.info ? this.state.LvMatches.msgs.info : this.state.LvMatches.msgs.result : this.state.LvMatches.status_overview.split('_').join(' ')
                                                )
                                            )
                                    }
                                  </b>
                                </span>
                                                            </Col>
                                                        </Col>
                                                        <Col sm={2} className={cx('text-center', 'v-line', 'runrate')}>
                                                            <Table className="custom-table v-aling marg0">
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
                                                                            className={cx('h3')}>{this.state.LvMatches && this.state.LvMatches.now && this.state.LvMatches.now.run_rate ? this.state.LvMatches.now.run_rate : '0'}</span>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </Table>
                                                            {(this.state.LvMatches && this.state.LvMatches.now && this.state.LvMatches.now && this.state.LvMatches.now.req && Object.keys(this.state.LvMatches.now.req).length != '0') ?
                                                                this.state.LvMatches.now.req.runs_rate ?
                                                                    <Table className="custom-table v-aling marg0">
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
                                                                                    className={cx('h3')}>{this.state.LvMatches.now.req.runs_rate}</span>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </Table>
                                                                    : (
                                                                        <Table className="custom-table v-aling marg0">
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
                                                                    <Table className="custom-table v-aling marg0">
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
                                                                                    className={cx('h3')}>{this.state.LvMatches && this.state.LvMatches.now && this.state.LvMatches.now.balls ? this.state.LvMatches.now.balls : '0'}</span>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </Table>
                                                                )
                                                            }
                                                        </Col>
                                                    </Row>
                                                </Col>

                                                <Col sm={3} className={cx('resp-fluid', 'v-line')}>
                                                    <Col className={cx('cric-pan', 'cric-pan-table')}>
                                                        <Table className="custom-table v-aling marg0">
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
                                                            <tbody>
                                                            <tr>
                                                                <td className={cx('text-center')}>
                                                                    {getImage(this.state.LvMatches.teams.a.key, "img-flg", "img-flg-sm")}
                                                                    <br/><b>{this.state.LvMatches.teams.a.key.toUpperCase()}</b>
                                                                </td>
                                                                <td className={cx('text-center')}>
                                                                    <span className={cx('h3')}><a
                                                                        href="#">{this.state.LvMatches.innings && Object.keys(this.state.LvMatches.innings).length > 0 ? this.state.LvMatches.innings.a_1.fours : '0'}</a> & <a
                                                                        href="#">{this.state.LvMatches.innings && Object.keys(this.state.LvMatches.innings).length > 0 ? this.state.LvMatches.innings.a_1.sixes : '0'}</a></span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className={cx('text-center')}>
                                                                    {getImage(this.state.LvMatches.teams.b.key, "img-flg", "img-flg-sm")}
                                                                    <br/><b>{this.state.LvMatches.teams.b.key.toUpperCase()}</b>
                                                                </td>
                                                                <td className={cx('text-center')}>
                                                                    <span className={cx('h3')}><a
                                                                        href="#">{this.state.LvMatches.innings && Object.keys(this.state.LvMatches.innings).length > 0 ? this.state.LvMatches.innings.b_1.fours : '0'}</a> & <a
                                                                        href="#">{this.state.LvMatches.innings && Object.keys(this.state.LvMatches.innings).length > 0 ? this.state.LvMatches.innings.b_1.sixes : '0'}</a></span>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </Table>
                                                    </Col>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Col>
                                </a>
                                : ''
                        }

                        {MatchListing ? MatchListing : ''}

                        <Col className={cx('panel-cric')}>
                            <Col className={cx('panel-heading')}>
                <span className={cx('h4')}>
                  News
                </span>
                            </Col>
                            {
                                newsListing && newsListing.length > 0 ?
                                    <Col className={cx('panel-body')}>
                                        {/* repeating section */}
                                        {newsListing ? newsListing : 'No News Update'}
                                        {/* repeating section */}
                                    </Col>
                                    :
                                    <Col className={cx('panel-body')}>
                                        <div className={cx('preLoaderInner', 'contentLoader')}></div>
                                    </Col>
                            }

                        </Col>
                    </Col>

                    {/* Side bar */}
                    <Asidebar/>
                    {/* Side bar END */}

                </Row>
            </Grid>

        );
    }
};

function IplFun(TimeStamps) {
    var yearFun = new Date(TimeStamps * 1000).getFullYear(),
        monthFun = monthNames[new Date(TimeStamps * 1000).getMonth()],
        dateFun = new Date(TimeStamps * 1000).getDate(),
        IplFun = monthFun + ' ' + dateFun + ' ' + yearFun;
    return IplFun
}

function timeAndDate(timestamp) {
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
function getImage(image, altParam, classValue) {
    let r_image;
    try {
        r_image = require(`../images/teams_flag/${image.toLowerCase()}_thumb.png`);
    } catch (ex) {
        r_image = require('../images/teams_flag/dumm_thumb.png');
    }
    return (<img src={r_image} alt={altParam} className={classValue}/>)
}

function returnMatchStatus(values) {
    var returnVal;
    var {otherData} = values;
    if (values && values.now && values.now.req && values.now.req.runs_str && values.now.req.runs_str != ' ' && values.now.req.runs_str != null) {
        returnVal = values.now.req.runs_str
    } else if (values && values.now && values.now.req && values.now.req.runs && values.now.req.runs && values.now.req.runs !== null) {
        returnVal = `${values.now.req.runs} runs in ${values.now.req.balls} balls`
    } else if (values && values.now && values.now.req && values.now.req.runs && values.now.req.target_runs && values.now.req.runs === 0 && values.now.req.target_runs > 10) {
        returnVal = `${values.teams[values.now.batting_team].name} Won`
    } else if (values && values.msgs && values.msgs.info && values.msgs.info !== "") {
        returnVal = values.msgs.info
    } else if (values && values.teams && values.toss && values.toss.str && values.toss.str !== null) {
        returnVal = `${values.teams[values.toss.won].key} won toss - chose to ${values.toss.decision}`
    } else if (values && values.details) {
        var detailsData = values.details;
        if (detailsData && detailsData.now && detailsData.now.req && detailsData.now.req.runs && detailsData.now.req.runs && detailsData.now.req.runs !== null) {
            returnVal = `${detailsData.now.req.runs} runs in ${detailsData.now.req.balls} balls`
        } else if (detailsData && detailsData.teams && detailsData.toss && detailsData.toss.str && detailsData.toss.str !== null) {
            returnVal = `${detailsData.teams[detailsData.toss.won].key} won toss - chose to ${detailsData.toss.decision}`
        }
    } else {
        return false
    }
    return returnVal;
}

function newsImageGet(value) {
    var m,
        urls = ' ',
        str = value,
        rex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g;
    while (m = rex.exec(str)) {
        urls = m[1];
    }
    return urls
}

function trim_words(theString, numWords) {
    var expString = theString.split(/\s+/, numWords);
    var theNewString = expString.join(" ");
    return theNewString;
}

export default Home;