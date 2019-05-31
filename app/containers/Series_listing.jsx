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
import * as seriesAction from '../actions/seriesmatch';
import styles from '../css/components/liveListing.css';
import FA from 'react-fontawesome';
import Asidebar from '../components/Asidebar';

const cx = classNames.bind(styles);
let seasonListing = null;

class SeriesListing extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.Getseasons();
    }

    componentWillReceiveProps(nextProps) {
        const {seasonList: {season_lists}} = nextProps;
        if (season_lists) {
            seasonListing = season_lists.map((seasonList, index) => {
                    const {teams, start_date} = seasonList;
                    let getDate;
                    if (start_date && start_date.str) {
                        getDate = start_date.str.split(" ");
                    }
                    if (start_date) {
                        return (
                            <Col className={cx('listing-group')} key={index}>
                                <Col className="h4"><a href={`/series_details/${seasonList.season_key}`}
                                                       className={cx('text-black')}>{seasonList.name}</a></Col>
                                <Col>
                                    <small>
                                        <b>Date : </b> {(getDate) ? `${getDate[0]} ${getDate[1]} ${getDate[2]}` : "no date"}
                                    </small>
                                </Col>
                                <Col><label>Teams</label></Col>
                                <Col>{
                                    (teams && Object.keys(teams).length > 0) ?
                                        Object.keys(teams).map((key, index) => {
                                                if (index + 1 == Object.keys(teams).length) {
                                                    return (<span key={key}>
                                                {teams[key].name}
                                            </span>)
                                                }
                                                return (<span key={key}>
                                            {`${teams[key].name}, `}
                                        </span>)
                                            }
                                        ) :
                                        "No Teams"
                                }
                                </Col>
                            </Col>

                        )
                    }
                }
            )
        }
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

    render() {
        return (
            <Grid className={cx('content-sect')}>
                <Row>
                    <Col md={8} sm={7} className={cx('resp-fluid')}>
                        <Col className={cx('panel-cric')}>
                            <Col className={cx('panel-heading')}>
                                <span className={cx('h4')}>
                                    Series
                                </span>
                            </Col>
                            {seasonListing && seasonListing.length > 0 ?
                                <Col className={cx('panel-body')}>
                                    <Col className={cx('container-listing')}>
                                        <Col className={cx('listing-live')}>
                                            {(seasonListing) ? seasonListing : 'No Matches Listed'}
                                        </Col>

                                    </Col>

                                </Col>
                                :
                                <Col className={cx('panel-body')}>
                                    <div className={cx('preLoaderInner', 'contentLoader')}></div>
                                    }
                                </Col>
                            }
                        </Col>
                    </Col>

                    {/* Side Bar */}
                    <Asidebar/>
                </Row>
            </Grid>
        );
    }
}

function mapStatstoProps(state) {
    return {
        seasonList: state.seasonReducer
    }
}

export default connect(mapStatstoProps, seriesAction)(SeriesListing); 