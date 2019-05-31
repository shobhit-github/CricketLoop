import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import Countdown from 'react-countdown-now';
import {
    Nav,
    NavItem,
    Navbar,
    NavbarCollapse,
    NavDropdown,
    MenuItem,
    Col,
    FormGroup,
    ControlLabel,
    FormControl,
    Label,
    Button,
    Grid
} from 'react-bootstrap';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import styles from '../css/components/navigation';
import FA from 'react-fontawesome';
import NavBg from '../images/bgBanner.jpg';
import {FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon} from 'react-share';

const cx = classNames.bind(styles);
let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    CurrentLive_time_iso,
    LvMatches = [],
    inngs_score_1,
    inngs_score_2,
    LiveOngoing,
    renderer,
    navSeriesList,
    recentMatch_list,
    livePlayingId = [],
    livePlayingPreId = [],
    upcommingList,
    preMatch;
var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: true
        [{breakpoint: 768, settings: {slidesToShow: 3}}, {
        breakpoint: 1024,
        settings: {slidesToShow: 5}
    }, {breakpoint: 100000, settings: 'unslick'}]
};
var LiveMatchID = [];
var keyFound;
let liveMatchListing = null,
    liveMatchUpcomingList = null,
    liveMatchCompletedList = null,
    team_a_flag = null,
    team_b_flag = null,
    liveMatchListingdb = null;

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {recentFetched, LivePlayin} = this.props;
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
                return <span>{days != '0' ? days > '0' && hours == '00' ? days + ' day' : days + 'd : ' + hours + 'h' : (hours != '0' && hours != '00' ? hours + "h : " + minutes + 'm' : (minutes != '00' ? minutes + 'm : ' + seconds + 's' : seconds + 's'))}</span>;
            }
        };
        /* Countdown timer END */
        const {liveInit, recentFetched, LivePlayin} = nextProps;

        /* Menu series  */
        if (nextProps.sesonsMatch) {
            var GlobalMatcesList = nextProps.sesonsMatch;
            if (GlobalMatcesList && GlobalMatcesList.ongoingSeasons) {
                navSeriesList = GlobalMatcesList.ongoingSeasons.map((values, index) => {
                    return (
                        <MenuItem href={`/series_details/${values.season_key}`} eventKey={index}
                                  key={index}>{values.name}</MenuItem>
                    )
                })
            }
            if (GlobalMatcesList && GlobalMatcesList.recentMatches) {
                recentMatch_list = GlobalMatcesList.recentMatches.map((values, index) => {
                    return (
                        <MenuItem href={`/series_details/${values.season_key}`} eventKey={index}
                                  key={index}>{values.name}</MenuItem>
                    )
                })
            }
            if (GlobalMatcesList && GlobalMatcesList.upcomingMatches) {
                upcommingList = GlobalMatcesList.upcomingMatches.map((values, index) => {
                    return (
                        <MenuItem href={`/series_details/${values.season_key}`} eventKey={index}
                                  key={index}>{values.name}</MenuItem>
                    )
                })
            }
        }
        /* Menu series END  */


        if (LivePlayin && LivePlayin.length > 0) {
            if (LivePlayin) {
                liveMatchListing = LivePlayin.map((values, index) => {
                    if ((values.details.status == 'started' && values.details.status_overview == 'pre_match') || (values.details.status == 'notstarted' && values.details.status_overview == 'pre_match') || (values.details.status == 'started' && values.details.status_overview != 'stumps')) {
                        var getKey = values.details.key;
                        if (livePlayingId.indexOf(getKey) == -1) {
                            livePlayingId = [...livePlayingId, getKey];
                        }
                    }
                    return (
                        ((values.details.status == 'started' && values.details.status_overview == 'pre_match') || (values.details.status == 'notstarted' && values.details.status_overview == 'pre_match') || (values.details.status == 'started' && values.details.status_overview != 'stumps')) ?
                            values.details.innings && Object.keys(values.details.innings).length > 2 ?
                                <a href={`/live_match_detail/${values.details.key}`} className={cx('slider-anger')}
                                   key={index}>
                                    <Col className={cx('top-slider-bx')}>
                                        <Col className={cx('cric-pan', 'cric-pan-table')}>
                                            <Col className={cx('cric-pan-tr')}>
                                                <Col className={cx('top-slider-statusbx')}>
                          <span className="text-sucess">
                            Live
                            </span>
                                                </Col>
                                                <Col className={cx('cric-pan-td', 'icon-rel-right')}>
                                                    <span className={cx('live-icon')}></span>
                                                </Col>
                                            </Col>
                                            <Col className={cx('cric-pan-tr')}>
                                                <Col className={cx('team-flg', 'cric-pan-td')}>
                                                    {getImage(values.details.teams.a.key, "flag")}
                                                </Col>
                                                <Col className={cx('cric-pan-td', 'text-black')}>
                                                    <b>{values.details.teams.a.key.toUpperCase()}</b>
                                                </Col>
                                                <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                    {(values.details.innings && values.details.innings.a_1 && values.details.innings.a_1.runs) ? values.details.innings.a_1.runs : 0}, {(values.details.innings && values.details.innings.a_2 && values.details.innings.a_2.runs) ? values.details.innings.a_2.runs : 0} / {(values.details.innings && values.details.innings.a_2 && values.details.innings.a_2.wickets) ? values.details.innings.a_2.wickets : 0} ({(values.details.innings && values.details.innings.a_2 && values.details.innings.a_2.overs) ? values.details.innings.a_2.overs : 0} Ovr)
                                                </Col>
                                            </Col>

                                            <Col className={cx('cric-pan-tr')}>
                                                <Col className={cx('team-flg', 'cric-pan-td')}>
                                                    {getImage(values.details.teams.b.key, "flag")}
                                                </Col>
                                                <Col className={cx('cric-pan-td', 'text-black')}>
                                                    <b>{values.details.teams.b.key.toUpperCase()}</b>
                                                </Col>
                                                <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                    {(values.details.innings && values.details.innings.b_1 && values.details.innings.b_1.runs) ? values.details.innings.b_1.runs : 0}, {(values.details.innings && values.details.innings.b_2 && values.details.innings.b_2.runs) ? values.details.innings.b_2.runs : 0} / {(values.details.innings && values.details.innings.b_2 && values.details.innings.b_2.wickets) ? values.details.innings.b_2.wickets : 0} ({(values.details.innings && values.details.innings.b_2 && values.details.innings.b_2.overs) ? values.details.innings.b_2.overs : 0} Ovr)
                                                </Col>
                                            </Col>
                                            <Col className={cx('cric-status-bx')}>
                        <span className={cx('text-black', 'text-capitalize')}>
                          {
                              (values && values.details.status == 'started') ?
                                  (values && values.details.status_overview) ?
                                      (values.details.status_overview == "in_play" ?
                                          returnMatchStatus(values)
                                          : values.details.status_overview == "pre_match" ?
                                              returnMatchStatus(values.details)
                                              : (values.details.status_overview.split('_').join(' ').split('_').join(' ')))
                                      : (values.details.status)
                                  : (
                                      values && values.details.status_overview == 'pre_match' ?
                                          values && values.details.toss && values.details.toss.str ?
                                              values.details.toss.str
                                              : values.details.msgs.delay ?
                                              values.details.msgs.info && values.details.msgs.info != ' ' ?
                                                  values.details.msgs.info : (<span className="text-warning"
                                                                                    className="text-warning">Match delay due to {values.details.msgs.delay}</span>)
                                              : (
                                                  <span>
                                          <b>Starts in - </b>
                                          <Countdown date={(values.details.start_date.timestamp * 1000)}
                                                     renderer={renderer}/>
                                        </span>
                                              ) : (
                                              values.details.status_overview == 'result' ? values.details.msgs.info ? values.details.msgs.info : values.details.msgs.result : values.details.status_overview.split('_').join(' ')
                                          )
                                  )
                          }
                        </span>
                                            </Col>
                                        </Col>
                                    </Col>
                                </a>
                                : (
                                    <a href={`/live_match_detail/${values.details.key}`} className={cx('slider-anger')}
                                       key={index}>
                                        <Col className={cx('top-slider-bx')}>
                                            <Col className={cx('cric-pan', 'cric-pan-table')}>
                                                <Col className={cx('cric-pan-tr')}>
                                                    <Col className={cx('top-slider-statusbx')}>
                            <span className="text-sucess">
                              Live
                              </span>
                                                    </Col>
                                                    <Col className={cx('cric-pan-td', 'icon-rel-right')}>
                                                        <span className={cx('live-icon')}></span>
                                                    </Col>
                                                </Col>
                                                <Col className={cx('cric-pan-tr')}>
                                                    <Col className={cx('team-flg', 'cric-pan-td')}>
                                                        {getImage(values.details.teams.a.key, "flag")}
                                                    </Col>
                                                    <Col className={cx('cric-pan-td', 'text-black')}>
                                                        <b>{values.details.teams.a.key.toUpperCase()}</b>
                                                    </Col>
                                                    <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                        {(values.details.innings && values.details.innings.a_1 && values.details.innings.a_1.runs) ? values.details.innings.a_1.runs : 0} / {(values.details.innings && values.details.innings.a_1 && values.details.innings.a_1.wickets) ? values.details.innings.a_1.wickets : 0} ({(values.details.innings && values.details.innings.a_1 && values.details.innings.a_1.overs) ? values.details.innings.a_1.overs : 0} Ovr)
                                                    </Col>
                                                </Col>

                                                <Col className={cx('cric-pan-tr')}>
                                                    <Col className={cx('team-flg', 'cric-pan-td')}>
                                                        {getImage(values.details.teams.b.key, "flag")}
                                                    </Col>
                                                    <Col className={cx('cric-pan-td', 'text-black')}>
                                                        <b>{values.details.teams.b.key.toUpperCase()}</b>
                                                    </Col>
                                                    <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                        {(values.details.innings && values.details.innings.b_1 && values.details.innings.b_1.runs) ? values.details.innings.b_1.runs : 0} / {(values.details.innings && values.details.innings.b_1 && values.details.innings.b_1.wickets) ? values.details.innings.b_1.wickets : 0} ({(values.details.innings && values.details.innings.b_1 && values.details.innings.b_1.overs) ? values.details.innings.b_1.overs : 0} Ovr)
                                                    </Col>
                                                </Col>
                                                <Col className={cx('cric-status-bx')}>
                          <span className={cx('text-black', 'text-capitalize')}>
                            {
                                (values && values.details.status == 'started') ?
                                    (values && values.details.status_overview) ?
                                        (values.details.status_overview == "in_play" ?
                                            returnMatchStatus(values)
                                            : values.details.status_overview == "pre_match" ?
                                                returnMatchStatus(values.details)
                                                : (values.details.status_overview.split('_').join(' ').split('_').join(' ')))
                                        : (values.details.status)
                                    : (
                                        values && values.details.status_overview == 'pre_match' ?
                                            values && values.details.toss && values.details.toss.str ?
                                                values.details.toss.str
                                                : values.details.msgs.delay ?
                                                values.details.msgs.info && values.details.msgs.info != ' ' ?
                                                    values.details.msgs.info : (
                                                        <span className="text-warning" className="text-warning">Match delay due to {values.details.msgs.delay}</span>)
                                                : (
                                                    <span>
                                            <b>Starts in - </b>
                                            <Countdown date={(values.details.start_date.timestamp * 1000)}
                                                       renderer={renderer}/>
                                          </span>
                                                ) : (
                                                values.details.status_overview == 'result' ? values.details.msgs.info ? values.details.msgs.info : values.details.msgs.result : values.details.status_overview.split('_').join(' ')
                                            )
                                    )
                            }
                          </span>
                                                </Col>
                                            </Col>
                                        </Col>
                                    </a>
                                )

                            : (
                                values.details.status == 'completed' && values.details.status_overview == 'result' ?
                                    Object.keys(values.details.innings).length > 2 ?
                                        <a href={`/match_details/${values.details.key}`} className={cx('slider-anger')}
                                           key={index}>
                                            <Col className={cx('top-slider-bx')}>
                                                <Col className={cx('cric-pan', 'cric-pan-table')}>
                                                    <Col className={cx('cric-pan-tr')}>
                                                        <Col className={cx('top-slider-statusbx')}>
                              <span className="text-info">
                                Completed
                              </span>
                                                        </Col>
                                                        <Col className={cx('cric-pan-td', 'icon-rel-right')}>
                                                            {values.start_date && values.start_date.timestamp ? timeAndDate(values.start_date.timestamp) : ''}
                                                        </Col>
                                                    </Col>
                                                    <Col className={cx('cric-pan-tr')}>
                                                        <Col className={cx('team-flg', 'cric-pan-td')}>
                                                            {getImage(values.details.teams.a.key, "flag")}
                                                        </Col>
                                                        <Col className={cx('cric-pan-td', 'text-black')}>
                                                            <b>{values.details.teams.a.key.toUpperCase()}</b>
                                                        </Col>
                                                        <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                            {(values.details.innings && values.details.innings.a_1 && values.details.innings.a_1.runs) ? values.details.innings.a_1.runs : 0}, {(values.details.innings && values.details.innings.a_2 && values.details.innings.a_2.runs) ? values.details.innings.a_2.runs : 0} / {(values.details.innings && values.details.innings.a_2 && values.details.innings.a_2.wickets) ? values.details.innings.a_2.wickets : 0} ({(values.details.innings && values.details.innings.a_2 && values.details.innings.a_2.overs) ? values.details.innings.a_2.overs : 0} Ovr)
                                                        </Col>
                                                    </Col>

                                                    <Col className={cx('cric-pan-tr')}>
                                                        <Col className={cx('team-flg', 'cric-pan-td')}>
                                                            {getImage(values.details.teams.b.key, "flag")}
                                                        </Col>
                                                        <Col className={cx('cric-pan-td', 'text-black')}>
                                                            <b>{values.details.teams.b.key.toUpperCase()}</b>
                                                        </Col>
                                                        <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                            {(values.details.innings && values.details.innings.b_1 && values.details.innings.b_1.runs) ? values.details.innings.b_1.runs : 0}, {(values.details.innings && values.details.innings.b_2 && values.details.innings.b_2.runs) ? values.details.innings.b_2.runs : 0} / {(values.details.innings && values.details.innings.b_2 && values.details.innings.b_2.wickets) ? values.details.innings.b_2.wickets : 0} ({(values.details.innings && values.details.innings.b_2 && values.details.innings.b_2.overs) ? values.details.innings.b_2.overs : 0} Ovr)
                                                        </Col>
                                                    </Col>
                                                    <Col className={cx('cric-status-bx')}>
                            <span className={cx('text-black', 'text-capitalize')}>
                              {
                                  values && values.details.status == 'completed' ?
                                      values.details.status_overview ?
                                          values.details.status_overview == 'result' ?
                                              values.details.msgs.info || values.details.msgs.result ?
                                                  values.details.msgs.info
                                                  : values.details.msgs.result
                                              : values.details.status_overview.split('_').join(' ')
                                          : values.details.toss && values.details.toss.str ?
                                          values.details.toss.str
                                          : 'Match not updated'
                                      : values.details.status
                              }
                            </span>
                                                    </Col>
                                                </Col>
                                            </Col>
                                        </a>
                                        : (
                                            <a href={`/live_match_detail/${values.details.key}`} className={cx('slider-anger')}
                                               key={index}>
                                                <Col className={cx('top-slider-bx')}>
                                                    <Col className={cx('cric-pan', 'cric-pan-table')}>
                                                        <Col className={cx('cric-pan-tr')}>
                                                            <Col className={cx('top-slider-statusbx')}>
                                <span className="text-info">
                                  Completed
                                </span>
                                                            </Col>
                                                            <Col className={cx('cric-pan-td', 'icon-rel-right')}>
                                                                {values.start_date && values.start_date.timestamp ? timeAndDate(values.start_date.timestamp) : ''}
                                                            </Col>
                                                        </Col>
                                                        <Col className={cx('cric-pan-tr')}>
                                                            <Col className={cx('team-flg', 'cric-pan-td')}>
                                                                {getImage(values.details.teams.a.key, "flag")}
                                                            </Col>
                                                            <Col className={cx('cric-pan-td', 'text-black')}>
                                                                <b>{values.details.teams.a.key.toUpperCase()}</b>
                                                            </Col>
                                                            <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                                {(values.details.innings && values.details.innings.a_1 && values.details.innings.a_1.runs) ? values.details.innings.a_1.runs : 0} / {(values.details.innings && values.details.innings.a_1 && values.details.innings.a_1.wickets) ? values.details.innings.a_1.wickets : 0} ({(values.details.innings && values.details.innings.a_1 && values.details.innings.a_1.overs) ? values.details.innings.a_1.overs : 0} Ovr)
                                                            </Col>
                                                        </Col>

                                                        <Col className={cx('cric-pan-tr')}>
                                                            <Col className={cx('team-flg', 'cric-pan-td')}>
                                                                {getImage(values.details.teams.b.key, "flag")}
                                                            </Col>
                                                            <Col className={cx('cric-pan-td', 'text-black')}>
                                                                <b>{values.details.teams.b.key.toUpperCase()}</b>
                                                            </Col>
                                                            <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                                {(values.details.innings && values.details.innings.b_1 && values.details.innings.b_1.runs) ? values.details.innings.b_1.runs : 0} / {(values.details.innings && values.details.innings.b_1 && values.details.innings.b_1.wickets) ? values.details.innings.b_1.wickets : 0} ({(values.details.innings && values.details.innings.b_1 && values.details.innings.b_1.overs) ? values.details.innings.b_1.overs : 0} Ovr)
                                                            </Col>
                                                        </Col>
                                                        <Col className={cx('cric-status-bx')}>
                              <span className={cx('text-black', 'text-capitalize')}>
                                {
                                    values && values.details.status == 'completed' ?
                                        values.details.status_overview ?
                                            values.details.status_overview == 'result' ?
                                                values.details.msgs.info || values.details.msgs.result ?
                                                    values.details.msgs.info
                                                    : values.details.msgs.result
                                                : values.details.status_overview.split('_').join(' ')
                                            : values.details.toss && values.details.toss.str ?
                                            values.details.toss.str
                                            : 'Match not updated'
                                        : values.details.status
                                }
                              </span>
                                                        </Col>
                                                    </Col>
                                                </Col>
                                            </a>
                                        )
                                    : ''
                            )
                    )
                })
            }
        }

        /* if no socket datat comming live match ongoing */
        if (liveInit && liveInit.length > 0) {
            liveMatchListingdb = liveInit.map((values, index) => {
                if (livePlayingId && livePlayingId.length > 0) {
                    var matchFound = true;
                    if (livePlayingId.indexOf(values.key) == -1) {
                        matchFound = false
                    }
                }

                return (
                    !matchFound && ((values.status_overview == 'pre_match' && values.status == 'notstarted') || (values.status_overview == 'pre_match' && values.status == 'started') || (values.status == 'started' && values.status_overview != "stumps")) ?
                        values.innings && Object.keys(values.innings).length > 2 ?
                            <a href={`/live_match_detail/${values.key}`} className={cx('slider-anger')} key={index}>
                                <Col className={cx('top-slider-bx')}>
                                    <Col className={cx('cric-pan', 'cric-pan-table')}>
                                        <Col className={cx('cric-pan-tr')}>
                                            <Col className={cx('top-slider-statusbx')}>
                        <span className="text-sucess">
                          Live
                        </span>
                                            </Col>
                                            <Col className={cx('cric-pan-td', 'icon-rel-right')}>
                                                <span className={cx('live-icon')}></span>
                                            </Col>
                                        </Col>
                                        <Col className={cx('cric-pan-tr')}>
                                            <Col className={cx('team-flg', 'cric-pan-td')}>
                                                {getImage(values.teams.a.key, "flag")}
                                            </Col>
                                            <Col className={cx('cric-pan-td', 'text-black')}>
                                                <b>{values.teams.a.key.toUpperCase()}</b>
                                            </Col>
                                            <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                {(values.innings && values.innings.a_1 && values.innings.a_1.runs) ? values.innings.a_1.runs : 0}, {(values.innings && values.innings.a_2 && values.innings.a_2.runs) ? values.innings.a_2.runs : 0} / {(values.innings && values.innings.a_2 && values.innings.a_2.wickets) ? values.innings.a_2.wickets : 0} ({(values.innings && values.innings.a_2 && values.innings.a_2.overs) ? values.innings.a_2.overs : 0} Ovr)
                                            </Col>
                                        </Col>

                                        <Col className={cx('cric-pan-tr')}>
                                            <Col className={cx('team-flg', 'cric-pan-td')}>
                                                {getImage(values.teams.b.key, "flag")}
                                            </Col>
                                            <Col className={cx('cric-pan-td', 'text-black')}>
                                                <b>{values.teams.b.key.toUpperCase()}</b>
                                            </Col>
                                            <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                {(values.innings && values.innings.b_1 && values.innings.b_1.runs) ? values.innings.b_1.runs : 0}, {(values.innings && values.innings.b_2 && values.innings.b_2.runs) ? values.innings.b_2.runs : 0} / {(values.innings && values.innings.b_2 && values.innings.b_2.wickets) ? values.innings.b_2.wickets : 0} ({(values.innings && values.innings.b_2 && values.innings.b_2.overs) ? values.innings.b_2.overs : 0} Ovr)
                                            </Col>
                                        </Col>
                                        <Col className={cx('cric-status-bx')}>
                      <span className={cx('text-black', 'text-capitalize')}>
                        {
                            (values && values.status == 'started') ?
                                (values && values.status_overview) ?
                                    (values.status_overview == "in_play" ?
                                        returnMatchStatus(values)
                                        : (values.status_overview.split('_').join(' ')))
                                    : (values.status)
                                : (
                                    values && values.status_overview == 'pre_match' ?
                                        values && values.toss && values.toss.str ?
                                            values.toss.str
                                            : values.msgs.delay ?
                                            values.msgs.info && values.msgs.info != ' ' ?
                                                values.msgs.info : (<span
                                                    className="text-warning">Match delay due to {values.msgs.delay}</span>)
                                            : (
                                                <span>
                                        <b>Starts in - </b>
                                        <Countdown date={(values.start_date.timestamp * 1000)} renderer={renderer}/>
                                      </span>
                                            ) : (
                                            values.status_overview == 'result' ? values.msgs.info ? values.msgs.info : values.msgs.result : values.status_overview.split('_').join(' ')
                                        )
                                )
                        }
                      </span>
                                        </Col>
                                    </Col>
                                </Col>
                            </a>
                            : (
                                <a href={`/live_match_detail/${values.key}`} className={cx('slider-anger')} key={index}>
                                    <Col className={cx('top-slider-bx')}>
                                        <Col className={cx('cric-pan', 'cric-pan-table')}>
                                            <Col className={cx('cric-pan-tr')}>
                                                <Col className={cx('top-slider-statusbx')}>
                          <span className="text-sucess">
                            Live
                          </span>
                                                </Col>
                                                <Col className={cx('cric-pan-td', 'icon-rel-right')}>
                                                    <span className={cx('live-icon')}></span>
                                                </Col>
                                            </Col>
                                            <Col className={cx('cric-pan-tr')}>
                                                <Col className={cx('team-flg', 'cric-pan-td')}>
                                                    {getImage(values.teams.a.key, "flag")}
                                                </Col>
                                                <Col className={cx('cric-pan-td', 'text-black')}>
                                                    <b>{values.teams.a.key.toUpperCase()}</b>
                                                </Col>
                                                <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                    {(values.innings && values.innings.a_1 && values.innings.a_1.runs) ? values.innings.a_1.runs : 0} / {(values.innings && values.innings.a_1 && values.innings.a_1.wickets) ? values.innings.a_1.wickets : 0} ({(values.innings && values.innings.a_1 && values.innings.a_1.overs) ? values.innings.a_1.overs : 0} Ovr)
                                                </Col>
                                            </Col>

                                            <Col className={cx('cric-pan-tr')}>
                                                <Col className={cx('team-flg', 'cric-pan-td')}>
                                                    {getImage(values.teams.b.key, "flag")}
                                                </Col>
                                                <Col className={cx('cric-pan-td', 'text-black')}>
                                                    <b>{values.teams.b.key.toUpperCase()}</b>
                                                </Col>
                                                <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                    {(values.innings && values.innings.b_1 && values.innings.b_1.runs) ? values.innings.b_1.runs : 0} / {(values.innings && values.innings.b_1 && values.innings.b_1.wickets) ? values.innings.b_1.wickets : 0} ({(values.innings && values.innings.b_1 && values.innings.b_1.overs) ? values.innings.b_1.overs : 0} Ovr)
                                                </Col>
                                            </Col>
                                            <Col className={cx('cric-status-bx')}>
                        <span className={cx('text-black', 'text-capitalize')}>
                          {
                              (values && values.status == 'started') ?
                                  (values && values.status_overview) ?
                                      (values.status_overview == "in_play" ?
                                          returnMatchStatus(values)
                                          : (values.status_overview.split('_').join(' ')))
                                      : (values.status)
                                  : (
                                      values && values.status_overview == 'pre_match' ?
                                          values && values.toss && values.toss.str ?
                                              values.toss.str
                                              : values.msgs.delay ?
                                              values.msgs.info && values.msgs.info != ' ' ?
                                                  values.msgs.info : (<span
                                                      className="text-warning">Match delay due to {values.msgs.delay}</span>)
                                              : (
                                                  <span>
                                          <b>Starts in - </b>
                                          <Countdown date={(values.start_date.timestamp * 1000)} renderer={renderer}/>
                                        </span>
                                              ) : (
                                              values.status_overview == 'result' ? values.msgs.info ? values.msgs.info : values.msgs.result : values.status_overview.split('_').join(' ')
                                          )
                                  )
                          }
                        </span>
                                            </Col>
                                        </Col>
                                    </Col>
                                </a>
                            )

                        : ""
                )
            })
        }

        /* Upcoming Match */
        if (liveInit && liveInit.length > 0) {
            liveMatchUpcomingList = liveInit.map((values, index) => {
                    if (livePlayingId && livePlayingId.length > 0) {
                        var matchFound = true;
                        if (livePlayingId.indexOf(values.key) == -1) {
                            matchFound = false
                        }
                    }
                    return (
                        (values.status == 'notstarted' && values.status_overview == 'scheduled') && !matchFound ?
                            <a href={`/live_match_detail/${values.key}`} className={cx('slider-anger')} key={index}>
                                <Col className={cx('top-slider-bx')}>
                                    <Col className={cx('cric-pan', 'cric-pan-table')}>
                                        <Col className={cx('cric-pan-tr')}>
                                            <Col className={cx('top-slider-statusbx')}>
                      <span className="text-primary">
                        Upcoming
                      </span>
                                            </Col>
                                            <Col className={cx('cric-pan-td', 'icon-rel-right')}>
                                                {timeAndDate(values.start_date.timestamp)}
                                            </Col>
                                        </Col>
                                        <Col className={cx('cric-pan-tr')}>
                                            <Col className={cx('team-flg', 'cric-pan-td')}>
                                                {getImage(values.teams.a.key, "flag")}
                                            </Col>
                                            <Col className={cx('cric-pan-td', 'text-black')}>
                                                <b>{values.teams.a.key.toUpperCase()}</b>
                                            </Col>
                                            <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                -
                                            </Col>
                                        </Col>

                                        <Col className={cx('cric-pan-tr')}>
                                            <Col className={cx('team-flg', 'cric-pan-td')}>
                                                {getImage(values.teams.b.key, "flag")}
                                            </Col>
                                            <Col className={cx('cric-pan-td', 'text-black')}>
                                                <b>{values.teams.b.key.toUpperCase()}</b>
                                            </Col>
                                            <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                -
                                            </Col>
                                        </Col>
                                        <Col className={cx('cric-status-bx')}>
                    <span className={cx('text-black')}>
                      {values && values.status_overview == 'pre_match' ?
                          values && values.toss && values.toss.str ? values.toss.str :
                              (
                                  <span>
                              <b>Starts in - </b>
                              <Countdown date={(values.start_date.timestamp * 1000)} renderer={renderer}/>
                            </span>
                              )
                          :
                          (
                              <span>
                            <b>Starts in - </b>
                            <Countdown date={(values.start_date.timestamp * 1000)} renderer={renderer}/>
                          </span>
                          )
                      }
                    </span>
                                        </Col>
                                    </Col>
                                </Col>
                            </a>
                            : ''
                    )
                }
            );
        }
        /* Completed Match  */
        if (liveInit && liveInit.length > 0) {
            liveMatchCompletedList = liveInit.map((values, index) => {

                if (livePlayingId && livePlayingId.length > 0) {
                    var matchFound = true;
                    if (livePlayingId.indexOf(values.key) == -1) {
                        matchFound = false
                    }
                }

                if (values.status == 'completed' && values.status_overview == 'result') {
                    if (Object.keys(values.innings).length > 2) {
                        if (values.innings.a_2.balls != '0') {
                            inngs_score_1 = (values.innings.a_1.runs ? values.innings.a_1.runs : '') + ', ' + (values.innings.a_2.runs ? values.innings.a_2.runs : '') + ' / ' + (values.innings.a_2.wickets ? values.innings.a_2.wickets : '') + ' (' + (values.innings.a_2.overs ? values.innings.a_2.overs : '') + ' Ovr)';
                        } else {
                            inngs_score_1 = (values.innings.a_1.runs ? values.innings.a_1.runs : '') + '/' + (values.innings.a_1.wickets ? values.innings.a_1.wickets : '')
                        }
                        if (values.innings.b_2.balls != '0') {
                            inngs_score_2 = (values.innings.b_1.runs ? values.innings.b_1.runs : '') + ', ' + (values.innings.b_2.runs ? values.innings.b_2.runs : '') + ' / ' + (values.innings.b_2.wickets ? values.innings.b_2.wickets : '') + ' (' + (values.innings.b_2.overs ? values.innings.b_2.overs : '') + ' Ovr)';
                        } else {
                            inngs_score_2 = (values.innings.b_1.runs ? values.innings.b_1.runs : '') + '/' + (values.innings.b_1.wickets ? values.innings.b_1.wickets : '')
                        }
                    } else {
                        inngs_score_1 = 0;
                        inngs_score_2 = 0;
                    }
                }
                return (
                    values.status == "completed" && !matchFound && values.status_overview == 'result' ?
                        <a href={`/match_details/${values.key}`} className={cx('slider-anger')} key={index}>
                            <Col className={cx('top-slider-bx')}>
                                {Object.keys(values.innings).length > 2 ?
                                    <Col className={cx('cric-pan', 'cric-pan-table')}>
                                        <Col className={cx('cric-pan-tr')}>
                                            <Col className={cx('top-slider-statusbx')}>
                        <span className="text-primary">
                          Completed
                        </span>
                                            </Col>
                                            <Col className={cx('cric-pan-td', 'icon-rel-right')}>
                                                {timeAndDate(values.start_date.timestamp)}
                                            </Col>
                                        </Col>
                                        <Col className={cx('cric-pan-tr')}>
                                            <Col className={cx('team-flg', 'cric-pan-td')}>
                                                {getImage(values.teams.a.key, "flag")}
                                            </Col>
                                            <Col className={cx('cric-pan-td', 'text-black')}>
                                                <b>{values.teams.a.key.toUpperCase()}</b>
                                            </Col>
                                            <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                {inngs_score_1}
                                            </Col>
                                        </Col>

                                        <Col className={cx('cric-pan-tr')}>
                                            <Col className={cx('team-flg', 'cric-pan-td')}>
                                                {getImage(values.teams.b.key, "flag")}
                                            </Col>
                                            <Col className={cx('cric-pan-td', 'text-black')}>
                                                <b>{values.teams.b.key.toUpperCase()}</b>
                                            </Col>
                                            <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                {inngs_score_2}
                                            </Col>
                                        </Col>
                                        <Col className={cx('cric-status-bx')}>
                      <span className={cx('text-info')}>
                        {(values && values.msgs && values.msgs.info) ? values.msgs.info : 'Match Completed'}
                      </span>
                                        </Col>
                                    </Col>
                                    : (
                                        <Col className={cx('cric-pan', 'cric-pan-table')}>
                                            <Col className={cx('cric-pan-tr')}>
                                                <Col className={cx('top-slider-statusbx')}>
                          <span className="text-primary">
                            Completed
                          </span>
                                                </Col>
                                                <Col className={cx('cric-pan-td', 'icon-rel-right')}>
                                                    {timeAndDate(values.start_date.timestamp)}
                                                </Col>
                                            </Col>
                                            <Col className={cx('cric-pan-tr')}>
                                                <Col className={cx('team-flg', 'cric-pan-td')}>
                                                    {getImage(values.teams.a.key, "flag")}
                                                </Col>
                                                <Col className={cx('cric-pan-td', 'text-black')}>
                                                    <b>{values.teams.a.key.toUpperCase()}</b>
                                                </Col>
                                                <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                    {(values && values.innings && values.innings.a_1.runs) ? values.innings.a_1.runs : '0'}/{(values && values.innings && values.innings.a_1.wickets) ? values.innings.a_1.wickets : '0'} ({(values && values.innings && values.innings.a_1.overs) ? values.innings.a_1.overs : '0'} Ovr)
                                                </Col>
                                            </Col>

                                            <Col className={cx('cric-pan-tr')}>
                                                <Col className={cx('team-flg', 'cric-pan-td')}>
                                                    {getImage(values.teams.b.key, "flag")}
                                                </Col>
                                                <Col className={cx('cric-pan-td', 'text-black')}>
                                                    <b>{values.teams.b.key.toUpperCase()}</b>
                                                </Col>
                                                <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                    {(values && values.innings && values.innings.b_1.runs) ? values.innings.b_1.runs : '0'}/{(values && values.innings && values.innings.b_1.wickets) ? values.innings.b_1.wickets : '0'} ({(values && values.innings && values.innings.b_1.overs) ? values.innings.b_1.overs : '0'} Ovr)
                                                </Col>
                                            </Col>
                                            <Col className={cx('cric-status-bx')}>
                        <span className={cx('text-info')}>
                          {(values && values.msgs && values.msgs.info) ? values.msgs.info : 'Match Completed'}
                        </span>
                                            </Col>
                                        </Col>
                                    )}
                            </Col>
                        </a>
                        : ""
                )
            })
        }

        /* Ongoing */
        if (liveInit && liveInit.length > 0) {
            if (livePlayingId.length > 0 && livePlayingId != undefined) {
                for (var values of livePlayingId) {
                    LiveMatchID = [...LiveMatchID, values]
                }
            }
            LiveOngoing = liveInit.map((values, index) => {
                keyFound = true;
                if (LiveMatchID.indexOf(values.key) == -1) {
                    keyFound = false
                }
                return (
                    (values.status == "started" || values.status == "notstarted") && values.status_overview == "stumps" && !keyFound ?
                        <a href={`/live_match_detail/${values.key}`} className={cx('slider-anger')} key={index}>
                            <Col className={cx('top-slider-bx')}>
                                {values && values.innings && Object.keys(values.innings).length > 2 ?
                                    <Col className={cx('cric-pan', 'cric-pan-table')}>
                                        <Col className={cx('cric-pan-tr')}>
                                            <Col className={cx('top-slider-statusbx')}>
                        <span className="text-warning text-capitalize">
                          Ongoing
                      </span>
                                            </Col>
                                            <Col className={cx('cric-pan-td', 'icon-rel-right')}>
                                                Day {values.day}
                                            </Col>
                                        </Col>
                                        <Col className={cx('cric-pan-tr')}>
                                            <Col className={cx('team-flg', 'cric-pan-td')}>
                                                {getImage(values.teams.a.key, "flag")}
                                            </Col>
                                            <Col className={cx('cric-pan-td', 'text-black')}>
                                                <b>{values.teams.a.key.toUpperCase()}</b>
                                            </Col>
                                            <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                {(values && values.innings && values.innings.a_1.runs) ? values.innings.a_1.runs : '0'},{(values && values.innings && values.innings.a_2.runs) ? values.innings.a_2.runs : '0'}/{(values && values.innings && values.innings.a_2.wickets) ? values.innings.a_2.wickets : '0'} ({(values && values.innings && values.innings.a_2.overs) ? values.innings.a_2.overs : '0'} Ovr)
                                            </Col>
                                        </Col>

                                        <Col className={cx('cric-pan-tr')}>
                                            <Col className={cx('team-flg', 'cric-pan-td')}>
                                                {getImage(values.teams.b.key, "flag")}
                                            </Col>
                                            <Col className={cx('cric-pan-td', 'text-black')}>
                                                <b>{values.teams.b.key.toUpperCase()}</b>
                                            </Col>
                                            <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                {(values && values.innings && values.innings.b_1.runs) ? values.innings.b_1.runs : '0'},{(values && values.innings && values.innings.b_2.runs) ? values.innings.b_2.runs : '0'}/{(values && values.innings && values.innings.b_2.wickets) ? values.innings.b_2.wickets : '0'} ({(values && values.innings && values.innings.b_2.overs) ? values.innings.b_2.overs : '0'} Ovr)
                                            </Col>
                                        </Col>
                                        <Col className={cx('cric-status-bx')}>
                      <span className={cx('text-warning')}>
                        {values ? (returnMatchStatus(values)) : ''}
                      </span>
                                        </Col>
                                    </Col>
                                    : (
                                        <Col className={cx('cric-pan', 'cric-pan-table')}>
                                            <Col className={cx('cric-pan-tr')}>
                                                <Col className={cx('top-slider-statusbx')}>
                          <span className="text-warning text-capitalize">
                            Ongoing
                        </span>
                                                </Col>
                                                <Col className={cx('cric-pan-td', 'icon-rel-right')}>
                                                    Day {values.day}
                                                </Col>
                                            </Col>
                                            <Col className={cx('cric-pan-tr')}>
                                                <Col className={cx('team-flg', 'cric-pan-td')}>
                                                    {getImage(values.teams.a.key, "flag")}
                                                </Col>
                                                <Col className={cx('cric-pan-td', 'text-black')}>
                                                    <b>{values.teams.a.key.toUpperCase()}</b>
                                                </Col>
                                                <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                    {
                                                        values && values.innings ?
                                                            (<span>
                                {(values.innings.a_1.runs) ? values.innings.a_1.runs : '0'}/{(values && values.innings && values.innings.a_1.wickets) ? values.innings.a_1.wickets : '0'} ({(values && values.innings && values.innings.a_1.overs) ? values.innings.a_1.overs : '0'} Ovr)
                          </span>)
                                                            : "-"
                                                    }
                                                </Col>
                                            </Col>

                                            <Col className={cx('cric-pan-tr')}>
                                                <Col className={cx('team-flg', 'cric-pan-td')}>
                                                    {getImage(values.teams.b.key, "flag")}
                                                </Col>
                                                <Col className={cx('cric-pan-td', 'text-black')}>
                                                    <b>{values.teams.b.key.toUpperCase()}</b>
                                                </Col>
                                                <Col className={cx('cric-pan-td', 'cric-pan-score')}>
                                                    {
                                                        values && values.innings ?
                                                            (<span>
                                {(values && values.innings && values.innings.b_1.runs) ? values.innings.b_1.runs : '0'}/{(values && values.innings && values.innings.b_1.wickets) ? values.innings.b_1.wickets : '0'} ({(values && values.innings && values.innings.b_1.overs) ? values.innings.b_1.overs : '0'} Ovr)
                          </span>)
                                                            : "-"
                                                    }
                                                </Col>
                                            </Col>
                                            <Col className={cx('cric-status-bx')}>
                        <span className={cx('text-warning')}>
                          {values ? (returnMatchStatus(values)) : ''}
                        </span>
                                            </Col>
                                        </Col>
                                    )}
                            </Col>
                        </a>
                        : ""
                )
            })
        }

    }

    render() {
        const {liveInit, recentFetched, LivePlayin} = this.props;
        return (
            <Col className={cx('navbar-cric')}>
                <Col className={cx('cric-pan-table')}>
                    <Grid className={cx('padzero', 'topnav-sector')} style={{backgroundImage: `url(${NavBg})`}}>
                        <Navbar.Header className={cx('header-nv')}>
                            <Navbar.Brand>
                                <Link className={cx('brand-name')} href="home"><span className="logo-first">Cric</span>Loop</Link>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Col className={cx('slier-grid')}>
                            {
                                (recentFetched) ?
                                    <Slider {...settings}>

                                        {/* Live Match */}
                                        {liveMatchListing ? liveMatchListing : ""}
                                        {/* Live Match End */}

                                        {liveMatchListingdb ? liveMatchListingdb : ''}

                                        {preMatch ? preMatch : ""}

                                        {/* Ongoing Match */}
                                        {LiveOngoing ? LiveOngoing : ""}
                                        {/* Ongoing Match END */}

                                        {/* top-slider-bx */}
                                        {liveMatchUpcomingList ? liveMatchUpcomingList : ""}
                                        {/* top-slider-bx END */}

                                        {liveMatchCompletedList ? liveMatchCompletedList : ""}

                                    </Slider>
                                    :
                                    <div className={cx('blankLoader')}></div>
                            }
                        </Col>
                    </Grid>
                </Col>


                <Grid className={cx('nav-container')}>
                    <Navbar className={cx('navigation-bar')} collapseOnSelect>
                        <Col className={cx('nav-bx-search')}>
                            <FormControl type="text" placeholder="Enter your search here"
                                         className={cx('input-control')}/>
                            <span className={cx('search-btn')}>
                <Button bsStyle="link">
                  <FA
                      name="search"
                  />
                </Button>
              </span>
                        </Col>
                        <Navbar.Toggle className={cx('nav-btn')}/>
                        <Navbar.Collapse className={cx('navbar-collapse')}>
                            <Col className={cx('nav-grid')}>
                                <Nav className={cx('menubar')}>
                                    <NavItem eventKey={0} href="/">
                                        <FA
                                            name="home"
                                        /> Home
                                    </NavItem>
                                    <NavItem eventKey={1} href="/live_match_list">
                                        Live Score
                                    </NavItem>
                                    <NavItem eventKey={2} href="/schedulematch">
                                        Schedule
                                    </NavItem>
                                    <NavDropdown eventKey={5} title="Series" id="basic-nav-dropdown2"
                                                 className="submenu-nav">
                                        {navSeriesList ? navSeriesList : ''}
                                        {upcommingList ? upcommingList : ''}
                                        {recentMatch_list ? recentMatch_list : ''}
                                        <MenuItem href="/series_listing" eventKey={5.4}>All Series</MenuItem>
                                    </NavDropdown>
                                    <NavDropdown eventKey={6} title="Teams" id="basic-nav-dropdown3"
                                                 className="submenu-nav">
                                        <MenuItem eventKey={6.1} href="/team_detail/ind">India</MenuItem>
                                        <MenuItem eventKey={6.2} href="/team_detail/eng">England</MenuItem>
                                        <MenuItem eventKey={6.3} href="/team_detail/rsa">South Africa</MenuItem>
                                        <MenuItem eventKey={6.5} href="/team_detail/aus">Australia</MenuItem>
                                        <MenuItem eventKey={6.5} href="/team_detail/pak">Pakistan</MenuItem>
                                        <MenuItem eventKey={6.5} href="/team_detail/wi">West Indies</MenuItem>
                                        <MenuItem eventKey={6.5} href="/team_detail/ban">Bangladesh</MenuItem>
                                        <MenuItem eventKey={6.5} href="/team_detail/sl">Srilanka</MenuItem>
                                        <MenuItem eventKey={6.5} href="/team_detail/zim">Zimbabwe</MenuItem>
                                        <MenuItem eventKey={6.5} href="/allteam">All Teams</MenuItem>
                                    </NavDropdown>
                                    <NavItem eventKey={3} href="/archives">
                                        Archives
                                    </NavItem>
                                    <NavItem eventKey={4} href="/news">
                                        News
                                    </NavItem>
                                </Nav>
                            </Col>
                            <span style={{float: "right", marginRight: "-6px", marginTop: "9px"}}>
                <FacebookShareButton
                    url={window.location.origin}
                    quote="Cricloop: A portal for cricket enthusiasts"
                    hashtag="#Cricloop"
                    style={{float: "left"}}
                >
                  <FacebookIcon
                      size={32}
                      round={false}/>
                </FacebookShareButton>
                <TwitterShareButton
                    url={window.location.origin}
                    title="Cricloop: A portal for cricket enthusiasts"
                    via="Cricloop"
                    hashtags={["Cricloop", "CricketIndia", "CricketFans"]}
                    style={{float: "left"}}
                >
                  <TwitterIcon
                      size={32}
                      round={false}/>
                </TwitterShareButton>
              </span>
                        </Navbar.Collapse>
                    </Navbar>
                </Grid>
            </Col>

        )
    }
};


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
        } else if (detailsData && detailsData.now && detailsData.now.req && detailsData.now.req.runs && detailsData.now.req.runs && detailsData.now.req.runs !== null) {
            returnVal = `${detailsData.now.req.runs} runs in ${detailsData.now.req.balls} balls`
        } else if (detailsData && detailsData.now && detailsData.now.req && detailsData.now.req.runs && detailsData.now.req.target_runs && detailsData.now.req.runs === 0 && detailsData.now.req.target_runs > 10) {
            returnVal = `${detailsData.teams[detailsData.now.batting_team].name} Won`
        } else if (detailsData && detailsData.msgs && detailsData.msgs.info && detailsData.msgs.info !== "") {
            returnVal = detailsData.msgs.info
        } else if (detailsData && detailsData.teams && detailsData.toss && detailsData.toss.str && detailsData.toss.str !== null) {
            returnVal = `${detailsData.teams[detailsData.toss.won].key} won toss - chose to ${detailsData.toss.decision}`
        }
    } else {
        return false
    }
    return returnVal;
}

function getImage(image, altParam) {
    let r_image;
    try {
        r_image = require(`../images/teams_flag/${image.toLowerCase()}_thumb.png`);
    } catch (ex) {
        r_image = require('../images/teams_flag/dumm_thumb.png');
    }
    return (<img src={r_image} alt={altParam}/>)
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

export default Navigation;
