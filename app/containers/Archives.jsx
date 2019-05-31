import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col, Clearfix, FormGroup, Table, Tab, TabContainer, Nav, NavItem, Button} from 'react-bootstrap';
/* import PropTypes from 'prop-types'; */
import classNames from 'classnames/bind';
import styles from '../css/components/playerinfo';
import FA from 'react-fontawesome';
import * as archivesAction from '../actions/archives';
import Asidebar from '../components/Asidebar';

const cx = classNames.bind(styles);

let GlobalCard,
    Archives_listing;

class Archives extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.Getarchives()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.getArchives && nextProps.getArchives.message) {
            GlobalCard = nextProps.getArchives.message;
            Archives_listing = GlobalCard.map((values, key) => {
                let getDate,
                    getEndDate;
                if (values.start_date && values.start_date.str) {
                    getDate = values.start_date.str.split(" ");
                    getEndDate = values.last_date.str.split(" ");
                }
                if (values.start_date) {
                    return (
                        <Col className={cx('listing-group')} key={key}>
                            <Col className="h4"><a href={`/series_details/${values.season_key}`}
                                                   className={cx('text-black')}>{values.name}</a></Col>
                            <Col>
                                <small>
                                    {(getDate) ? `${getDate[0]} ${getDate[1]} ${getDate[2]}` : " "} to {(getEndDate) ? `${getEndDate[0]} ${getEndDate[1]} ${getEndDate[2]}` : ""} at {values.venue}
                                </small>
                            </Col>
                        </Col>
                    )
                }
            })
        }
    }

    render() {
        return (
            <Grid className={cx('content-sect')}>
                <Row>
                    <Col md={8} sm={7} className={cx('resp-fluid')}>
                        <Col>
                            <Col>
                                <FormGroup>
                                    <Row>
                                        <Col sm={12} className={cx('resp-fluid', 'form-group')}>
                                            <Col className={cx('panel-cric')}>
                                                <Col className={cx('panel-heading')}>
                                                    <span className={cx('h4')}>
                                                        Archives
                                                    </span>
                                                </Col>
                                                {GlobalCard && GlobalCard.length > 0 ?
                                                    <Col className={cx('panel-body')}>
                                                        <Table striped className={cx('custome-table')}>
                                                            <tbody>
                                                            <tr>
                                                                <td>
                                                                    {Archives_listing ? Archives_listing : 'No Matches'}
                                                                </td>
                                                            </tr>
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
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </Col>
                        </Col>
                    </Col>


                    {/* Side Bar */}
                    <Asidebar/>
                </Row>
            </Grid>
        );
    }
}

function mapStatetoProps(state) {
    return {
        getArchives: state.archivesReducer,
    }
}

export default connect(mapStatetoProps, archivesAction)(Archives);