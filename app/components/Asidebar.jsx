import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classNames from 'classnames/bind';
import {Grid, Row, Col, Clearfix, Table, FormGroup} from 'react-bootstrap';
import TopicItem from '../components/TopicItem';
import styles from '../css/components/main-section';
import FA from 'react-fontawesome';
/* import * as newsActions from '../actions/news'; */

const cx = classNames.bind(styles);

let newsListing,
    newsStater;

class Asidebar extends Component {
    constructor(props) {
        super(props);
    }

    /* componentWillMount() {
        this.props.Getnews();
    } */
    componentWillReceiveProps(nextProps) {
        /* NEWS */
        /*  if (nextProps.newsStateFetch && nextProps.newsStateFetch.message && nextProps.newsStateFetch.message.length != 0) {
             newsStater = nextProps.newsStateFetch.message.reverse();
             newsListing = newsStater.map((values, index) => {
                 return (
                     <Col className={cx('content-listing')} key={index}>
                         <Col className={cx('content-listing-head')}>
                             <h5><a href={`${values.link}`}>{values.title}</a></h5>
                         </Col>
                     </Col>
                 )
             })
         } */
    }

    render() {
        return (
            <Col md={4} sm={5} className={cx('resp-fluid', 'headnews-cric')}>

                {/* ads */}
                <Col className={cx('panel-cric', 'ads-side')}>

                    <Col className={cx('panel-body')}>
                        <a href="#"><img src={require('../images/ads_2.png')} className={cx('img-responsive')}/></a>
                    </Col>
                </Col>
                {/* ads END */}

                {/* Top HEadline */}
                {/*  {
                    newsStater && newsStater.length > 0 ?
                        <Col className={cx('panel-cric')}>
                            <Col className={cx('panel-heading')}>
                                <span className={cx('h4')}>
                                    Top Headlines <a href="/news" className={cx('btn-extra')}>[View all teams]</a>
                                </span>
                            </Col>

                            <Col className={cx('panel-body')}>
                                {newsListing ? newsListing : 'No news updated'}
                            </Col>
                        </Col>
                        : ''
                } */}

                {/* Top HEadline END */}


                {/* Team */}
                <Col className={cx('panel-cric', 'team_bx')}>
                    <Col className={cx('panel-heading')}>
                        <span className={cx('h4')}>
                            Teams <a href="/allteam" className={cx('btn-extra')}>[View all teams]</a>
                        </span>
                    </Col>

                    <Col className={cx('panel-body')}>

                        {/* repeating section */}
                        <Col className={cx('content-listing')}>
                            <Col className={cx('cric-pan', 'cric-pan-table')}>
                                <Col className={cx('cric-pan-tr')}>
                                    <a href="/team_detail/eng">
                                        <Col className={cx('team-flg', 'cric-pan-td')}>
                                            <img src={require('../images/teams_flag/eng_thumb.png')}
                                                 className={cx('img-flg')} alt="flag"/>
                                        </Col>
                                        <Col className={cx('cric-pan-td')}>
                                            <b>ENGLAND (ENG)</b>
                                        </Col>
                                    </a>
                                </Col>
                            </Col>
                        </Col>
                        {/* repeating section End */}

                        {/* repeating section */}
                        <Col className={cx('content-listing')}>
                            <Col className={cx('cric-pan', 'cric-pan-table')}>
                                <Col className={cx('cric-pan-tr')}>
                                    <a href="/team_detail/wi">
                                        <Col className={cx('team-flg', 'cric-pan-td')}>
                                            <img src={require('../images/teams_flag/wi_thumb.png')}
                                                 className={cx('img-flg')} alt="flag"/>
                                        </Col>
                                        <Col className={cx('cric-pan-td')}>
                                            <b>WEST INDIES (WI)</b>
                                        </Col>
                                    </a>
                                </Col>
                            </Col>
                        </Col>
                        {/* repeating section End */}

                        {/* repeating section */}
                        <Col className={cx('content-listing')}>
                            <Col className={cx('cric-pan', 'cric-pan-table')}>
                                <Col className={cx('cric-pan-tr')}>
                                    <a href="/team_detail/ind">
                                        <Col className={cx('team-flg', 'cric-pan-td')}>
                                            <img src={require('../images/teams_flag/ind_thumb.png')}
                                                 className={cx('img-flg')} alt="flag"/>
                                        </Col>
                                        <Col className={cx('cric-pan-td')}>
                                            <b>INDIA (IND)</b>
                                        </Col>
                                    </a>
                                </Col>
                            </Col>
                        </Col>
                        {/* repeating section End */}

                        {/* repeating section */}
                        <Col className={cx('content-listing')}>
                            <Col className={cx('cric-pan', 'cric-pan-table')}>
                                <Col className={cx('cric-pan-tr')}>
                                    <a href="/team_detail/sl">
                                        <Col className={cx('team-flg', 'cric-pan-td')}>
                                            <img src={require('../images/teams_flag/sl_thumb.png')}
                                                 className={cx('img-flg')} alt="flag"/>
                                        </Col>
                                        <Col className={cx('cric-pan-td')}>
                                            <b>SRILANKA (SRI)</b>
                                        </Col>
                                    </a>
                                </Col>
                            </Col>
                        </Col>
                        {/* repeating section End */}

                    </Col>
                </Col>
                {/* Top Teams END */}


                {/* Team */}
                <Col className={cx('panel-cric')}>
                    <Col className={cx('panel-heading')}>
                        <span className={cx('h4')}>
                            APP
                        </span>
                    </Col>

                    <Col className={cx('panel-body')}>

                        {/* repeating section */}
                        <Col className={cx('content-listing')}>
                            <a href="#"><FA
                                className={cx('social-icon-cric-fb', 'icons-social')}
                                name='apple'
                            /> <b>IOS App</b></a>
                        </Col>
                        {/* repeating section End */}
                        {/* repeating section */}
                        <Col className={cx('content-listing')}>
                            <a href="#"><FA
                                className={cx('social-icon-cric-fb', 'icons-social')}
                                name='android'
                            /> <b>Android App</b></a>
                        </Col>
                        {/* repeating section End */}

                    </Col>
                </Col>
                {/* Top Teams END */}

                {/* social */}
                <Col className={cx('panel-cric')}>
                    <Col className={cx('panel-heading')}>
                        <span className={cx('h4')}>
                            Follow us on
                        </span>
                    </Col>

                    <Col className={cx('panel-body')}>

                        {/* repeating section */}
                        <Col className={cx('content-listing')}>
                            <a href="#">
                                <FA
                                    className={cx('social-icon-cric-fb', 'icons-social')}
                                    name='facebook-square'
                                />

                                <label>
                                    Facebook
                                </label>
                            </a>
                        </Col>
                        {/* repeating section End */}


                        {/* repeating section */}
                        <Col className={cx('content-listing')}>
                            <a href="#">
                                <FA
                                    className={cx('social-icon-cric-tw', 'icons-social')}
                                    name='twitter-square'
                                />

                                <label>
                                    Twitter
                                </label>
                            </a>
                        </Col>
                        {/* repeating section End */}

                        {/* repeating section */}
                        <Col className={cx('content-listing')}>
                            <a href="#">
                                <FA
                                    className={cx('social-icon-cric-ins', 'icons-social')}
                                    name='instagram'
                                />

                                <label>
                                    Instagram
                                </label>
                            </a>
                        </Col>
                        {/* repeating section End */}

                    </Col>
                </Col>
                {/* Social END */}

            </Col>
        )
    };
};


/* function mapStatetoProps(state) {
    return {
        newsStateFetch: state.newsReducer
    }
} */

export default Asidebar;
/* export default connect(mapStatetoProps, newsActions)(Asidebar); */
