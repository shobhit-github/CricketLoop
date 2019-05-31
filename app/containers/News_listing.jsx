import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col, Clearfix, Table, Nav, NavItem, FormGroup, Tab, Tabs} from 'react-bootstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from '../css/components/news';
import FA from 'react-fontawesome';
import Asidebar from '../components/Asidebar';
import {FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon} from 'react-share';
import Helmet from 'react-helmet';

let GlobalCard,
    Matchescard,
    newsState,
    newsListing,
    newsDetails,
    switcher,
    newsDescribe;

const cx = classNames.bind(styles);

class News extends Component {

    constructor(props) {
        super(props);
    }

    newsImageGet(value) {
        var m,
            urls = ' ',
            str = value,
            rex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g;
        while (m = rex.exec(str)) {
            urls = m[1];
        }
        return urls
    }

    newsTimestamp(value) {
        let newsDate = '';
        newsDate = new Date(value).toUTCString();
        newsDate = newsDate.replace(" GMT", "");
        return newsDate;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.listingnews && nextProps.listingnews.length > 0) {
            newsState = nextProps.listingnews;

            if (this.props.params.id) {
                switcher = false;
                let newsIndex = newsState.findIndex(news => news._id === this.props.params.id);
                let newsdetail = newsState[newsIndex];

                newsDetails = (
                    <Col className={cx('listing')}>
                        <Helmet title="News Detail" meta={[{
                            property: 'og:image',
                            content: 'https://www.tolonews.com/sites/default/files/styles/principal_article_image/public/criket.jpg'
                        }]}/>
                        <Col className={cx('content-data')}>
                            <Col className={cx('content-listing-head')}>
                                <h3 className="text-primary">{newsdetail.title}</h3>
                                <div>
                                    <span
                                        style={{float: 'left'}}>By Cricloop Team - {this.newsTimestamp(newsdetail.updated_at)}</span>
                                    <span style={{float: 'right', marginTop: '-9px'}}>
                    <FacebookShareButton
                        url={window.location.href}
                        quote={newsdetail.title}
                        hashtag="#Cricloop"
                        style={{float: "left"}}
                    >
                      <FacebookIcon
                          size={32}
                          round={false}/>
                    </FacebookShareButton>
                    <TwitterShareButton
                        url={window.location.href}
                        title={newsdetail.title}
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
                            <Col>
                                <img src={newsdetail.image} alt="image" style={{width: '100%', margin: '10px 0'}}/>
                            </Col>
                            <Col className={cx('content-listing-content')}>
                                <p dangerouslySetInnerHTML={{__html: newsdetail.description.replace(/\n/g, '<br />')}}>
                                </p>
                            </Col>
                        </Col>
                    </Col>
                );
            } else {
                switcher = true;
                newsListing = newsState.map((values, index) => {
                    return (
                        <Col className={cx('listing')} key={index}>
                            <Helmet title="News Detail" meta={[{
                                property: 'og:image',
                                content: 'https://www.tolonews.com/sites/default/files/styles/principal_article_image/public/criket.jpg'
                            }]}/>
                            <Col className={cx('content-data')}>
                                <Col md={4}>
                                    <a href={`/news/${values._id}`}><img src={values.image} alt="image"
                                                                         style={{width: '100%', margin: '10px 0'}}/></a>
                                </Col>
                                <Col md={8}>
                                    <Col className={cx('content-listing-head')}>
                                        <a href={`/news/${values._id}`}><h4 className="text-primary">{values.title}</h4>
                                        </a>
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
                            quote={values.title}
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
                        </Col>
                    )
                })
            }
        }
    }

    render() {
        return (
            <Grid className={cx('content-sect')}>

                <Row>
                    <Col md={8} xs={7} className={cx('resp-fluid')}>
                        {
                            (switcher) ?
                                <Col className={cx('panel-cric')}>
                                    <Col className={cx('panel-heading')}>
                                        <span className={cx('h4')}> News </span>
                                    </Col>
                                    {newsListing && newsListing.length > 0 ?
                                        <Col className={cx('panel-body')}>
                                            {/* repeating section */}
                                            {newsListing ? newsListing : 'No News Update'}
                                            {/* repeating section */}
                                        </Col>
                                        :
                                        <Col className={cx('panel-body')}>
                                            <div className={cx('preLoaderInner', 'contentLoader')}></div>
                                            }
                                        </Col>
                                    }
                                </Col> :
                                <Col className={cx('panel-cric')}>
                                    <Col className={cx('panel-heading')}>
                                        <span className={cx('h4')}> News Detail</span>
                                    </Col>
                                    {newsDetails ?
                                        <Col className={cx('panel-body')}>
                                            {newsDetails}
                                        </Col>
                                        :
                                        <Col className={cx('panel-body')}>
                                            <div className={cx('preLoaderInner', 'contentLoader')}></div>
                                        </Col>
                                    }
                                </Col>
                        }
                    </Col>
                    <Asidebar/>
                </Row>
            </Grid>
        );
    }
}

function trim_words(theString, numWords) {
    var expString = theString.split(/\s+/, numWords);
    var theNewString = expString.join(" ");
    return theNewString;
}

export default News;

