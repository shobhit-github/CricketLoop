import React from 'react';
import {Grid, Row, Col, Clearfix, FormGroup, DropdownButton, ControlLabel, Table, MenuItem} from 'react-bootstrap';
/* import PropTypes from 'prop-types'; */
import classNames from 'classnames/bind';
import styles from '../css/components/schedule';
import FA from 'react-fontawesome';

const cx = classNames.bind(styles);

const ScheduleMatchList = (props) => {
    return (
        <Grid className={cx('content-sect')}>
            <Col className={cx('panel-cric')}>
                <Col className={cx('panel-heading')}>
                    <span className={cx('h4')}>
                        India tour of Sri Lanka, 2018
                    </span>
                </Col>
                <Col className={cx('panel-body')}>
                    <FormGroup>
                        <Col className={cx('inline-inputs')}>
                            <DropdownButton title={'Formats'} bsStyle="primary" id="id1" key="01">
                                <MenuItem eventKey="01" value="All">All</MenuItem>
                                <MenuItem eventKey="02" value="Test">Test</MenuItem>
                                <MenuItem eventKey="03" value="Oddi">Oddi</MenuItem>
                                <MenuItem eventKey="04" value="T20">T20</MenuItem>
                            </DropdownButton>
                        </Col>
                        <Col className={cx('inline-inputs')}>
                            <DropdownButton title={'Venue'} bsStyle="primary" id="id2" key="01">
                                <MenuItem eventKey="01" value="Greenfield">Greenfield</MenuItem>
                                <MenuItem eventKey="02" value="Kochi International">Kochi International</MenuItem>
                            </DropdownButton>
                        </Col>
                    </FormGroup>
                    <Table responsive striped className={cx('custome-table')}>
                        <tbody>
                        <tr>
                            <td>
                                <FormGroup className={cx('h5')}>
                                    <a href="/match_details">India tour of Sri Lanka, Test 1</a>
                                </FormGroup>
                                <FormGroup>
                                    <img src={require('../images/teams_flag/ind_thumb.png')} alt="India"/>
                                    <span className={cx('seprate-vs', 'small')}>
                                            VS
                                </span>
                                    <img src={require('../images/teams_flag/sl_thumb.png')} alt="India"/>
                                </FormGroup>
                            </td>
                            <td>
                                <Col>
                                    <b>
                                        Greenfield Stadium, Trivandrum
                                    </b>
                                </Col>
                                <Col className={cx('fade-text')}>
                                    <small> April 20, Friday</small>
                                </Col>
                                <Col className={cx('text-info')}>
                                    India Won the match by 64 runs
                                </Col>
                            </td>
                            <td>
                                <Col>
                                    2:00 PM
                                </Col>
                                <Col className={cx('fade-text')}>
                                    <small>08:30 AM GMT / 10:30 AM LOCAL</small>
                                </Col>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <FormGroup className={cx('h5')}>
                                    <a href="#">India tour of Sri Lanka, Test 2</a>
                                </FormGroup>
                                <FormGroup>
                                    <img src={require('../images/teams_flag/ind_thumb.png')} alt="India"/>
                                    <span className={cx('seprate-vs', 'small')}>
                                            VS
                                </span>
                                    <img src={require('../images/teams_flag/sl_thumb.png')} alt="India"/>
                                </FormGroup>
                            </td>
                            <td>
                                <Col>
                                    <b>
                                        Greenfield Stadium, Trivandrum
                                    </b>
                                </Col>
                                <Col className={cx('fade-text')}>
                                    <small> April 20, Friday</small>
                                </Col>
                                <Col className={cx('text-info')}>
                                    India Won the match by 64 runs
                                </Col>
                            </td>
                            <td>
                                <Col>
                                    2:00 PM
                                </Col>
                                <Col className={cx('fade-text')}>
                                    <small>08:30 AM GMT / 10:30 AM LOCAL</small>
                                </Col>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <FormGroup className={cx('h5')}>
                                    <a href="#">India tour of Sri Lanka, Test 3</a>
                                </FormGroup>
                                <FormGroup>
                                    <img src={require('../images/teams_flag/ind_thumb.png')} alt="India"/>
                                    <span className={cx('seprate-vs', 'small')}>
                                            VS
                                </span>
                                    <img src={require('../images/teams_flag/sl_thumb.png')} alt="India"/>
                                </FormGroup>
                            </td>
                            <td>
                                <Col>
                                    <b>
                                        Greenfield Stadium, Trivandrum
                                    </b>
                                </Col>
                                <Col className={cx('fade-text')}>
                                    <small> April 20, Friday</small>
                                </Col>
                                <Col className={cx('text-info')}>
                                    India Won the match by 64 runs
                                </Col>
                            </td>
                            <td>
                                <Col>
                                    2:00 PM
                                </Col>
                                <Col className={cx('fade-text')}>
                                    <small>08:30 AM GMT / 10:30 AM LOCAL</small>
                                </Col>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Col>
        </Grid>
    );
}


export default ScheduleMatchList;