import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col, Clearfix, FormGroup, Table, Image} from 'react-bootstrap';
/* import PropTypes from 'prop-types'; */
import classNames from 'classnames/bind';
import styles from '../css/components/news';
import FA from 'react-fontawesome';
import * as teaminfo from '../actions/contryinfo';
import Asidebar from '../components/Asidebar';

const cx = classNames.bind(styles);

let internTeams = [],
    CountryLists = [],
    mappedCountryList;

class TeamListing extends Component {
    constructor(props) {
        super(props);
    }


    componentWillMount() {
        this.props.Getcountry();
    }

    componentWillReceiveProps(nextProps) {
        const CountryIndexInfo = nextProps.countrykey;
        let AllTeamList = 0;
        if (CountryIndexInfo && (CountryIndexInfo.length > 0)) {
            for (let value of (CountryIndexInfo)) {
                let {key, name} = value;
                CountryLists[AllTeamList] = {key, name}
                AllTeamList++
            }
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
        /* const {fetched} = this.props; */
        return (
            <Grid className={cx('content-sect')}>
                <Row>
                    <Col md={8} sm={7} className={cx('resp-fluid')}>
                        <FormGroup>
                            <Col className={cx('panel-cric')}>
                                <Col className={cx('panel-heading')}>
                                    <span className={cx('h4')}>
                                        Teams
                                    </span>
                                </Col>
                                {CountryLists && CountryLists.length > 0 ?
                                    <Col className={cx('panel-body')}>
                                        <Table striped className={cx('custome-table', 'valign-table')}>
                                            <tbody>
                                            {
                                                CountryLists && CountryLists != null && CountryLists.length > 0 ?
                                                    CountryLists.map((mappedCountry, index) => (
                                                            <tr key={index}>
                                                                <td className={cx('team-flg')}>
                                                                    {this.getImage(mappedCountry.key, "flag", cx('img-flg'))}
                                                                </td>
                                                                <td>
                                                                    <span className={cx('h5')}>
                                                                        <b>
                                                                            <a href={`/team_detail/${mappedCountry.key}`}
                                                                               className={cx('text-black')}> {(mappedCountry.name).split('_').join(' ')}</a>
                                                                        </b>
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        )
                                                    )
                                                    :
                                                    (
                                                        <tr>
                                                            <td className={cx('team-flg')}>
                                                                <h4 className="text-center">Teams not listed.</h4>
                                                            </td>
                                                        </tr>
                                                    )
                                            }
                                            </tbody>
                                        </Table>
                                    </Col>
                                    :
                                    <Col className={cx('panel-body')}>
                                        <div className={cx('preLoaderInner', 'contentLoader')}></div>
                                        }
                                    </Col>
                                }
                            </Col>
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
    return {...state.countryReducer};
}

export default connect(mapStateToProps, teaminfo)(TeamListing); 