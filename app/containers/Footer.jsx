import React from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from '../css/main.css';

const cx = classNames.bind(styles);

const Footers = () => {
    return (
        <Grid>
            <Row>
                <div className={cx('footer-cric')}>
                    <Col xs={12}>
                        Copyright &copy; 2018.All rights reserved.
                    </Col>
                </div>
            </Row>
        </Grid>
    )
};


export default Footers;
