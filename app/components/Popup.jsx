import React, {Component} from 'react';
import classNames from 'classnames/bind';
import styles from '../css/components/main-section';
import {Modal, Button} from 'react-bootstrap';
import {Stage, Layer, Rect, Text, Line, Image} from 'react-konva';
import ContainerDimensions from 'react-container-dimensions';
import Konva from 'konva';
import FA from 'react-fontawesome';

const cx = classNames.bind(styles);
var groundImg = require('../images/groundImg/ground.png'),
    stageCanvas,
    canvasID = null,
    colImg = require('../images/groundImg/run_colors.png');
var canvasInstance = null;
var stageCreatedInstance = null;
var flag = 1;
var flag2 = 1;
var arrayWagonData = []
var mainWidth = 0
var loopProps,
    checkingIterate = 0,
    assignWidthInit = false,
    highlights = false,
    loadinitstage = false,
    matchId = null,
    loopProps1;
var wagonBalls,
    wagonBallsArray;
var wagonData;

class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.assignStage = this.assignStage.bind(this);
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevProps.stageGet !== this.props.stageGet) {
            if (this.props.stageGet !== null) {
                if (this.props.stageId !== null) {
                    canvasID = this.props.stageId
                    var stageIdArr = this.props.stageId.split("_"),
                        innings = stageIdArr[1],
                        overs = stageIdArr[2];
                    this.assignStage(400, this.props.stageGet, "assignStage", innings, overs);
                }
            }
        }
    }


    assignStage(width, jsonData, stageId, innings, img_id) {
        var clientWidth = width;


        var containerWidth = width;
        var width_1 = width,
            jsonData_1 = jsonData,
            stageId_1 = stageId

        if (document.getElementById(`${stageId}`)) {
            var stageCanvas = Konva.Node.create(jsonData, `${stageId}`);
            let imageCol_img = new window.Image(),
                imageGroundLoaded = new window.Image();
            imageCol_img.onload = () => {
                if (stageCanvas.getStage().get(`#imgCol_${innings}_${img_id}`) && stageCanvas.getStage().get(`#imgCol_${innings}_${img_id}`)[0] && stageCanvas.getStage().get(`#imgCol_${innings}_${img_id}`)[0].image && typeof stageCanvas.getStage().get(`#imgCol_${innings}_${img_id}`)[0].image !== "undefined") {
                    stageCanvas.getStage().get(`#imgCol_${innings}_${img_id}`)[0].image(imageCol_img);
                    stageCanvas.draw();
                }
            }
            imageCol_img.src = colImg;
            imageGroundLoaded.onload = () => {
                if (stageCanvas.getStage().get(`#groundImg_${innings}_${img_id}`) && stageCanvas.getStage().get(`#groundImg_${innings}_${img_id}`)[0] && stageCanvas.getStage().get(`#groundImg_${innings}_${img_id}`)[0].image && typeof stageCanvas.getStage().get(`#groundImg_${innings}_${img_id}`)[0].image !== "undefined") {
                    stageCanvas.getStage().get(`#groundImg_${innings}_${img_id}`)[0].image(imageGroundLoaded);
                    stageCanvas.draw();
                }
            }
            imageGroundLoaded.src = groundImg;
            canvasInstance = stageCanvas;

            if (width > 0) {
                responsiveStage(canvasInstance, width);
            }
        }/* else{
                    debugger
                    var newOver = +img_id + 1;
                    var anotherElement = <Col sm = {4}>
                            <ContainerDimensions>
                                {({width}) => 
                                    this.createStage(width, `loadedStage_${innings}_${newOver}`)
                                }
                            </ContainerDimensions> 
                        </Col>
                    this.setState({wagonMapped: [...this.state.wagonMapped, anotherElement]})

                    this.assignStage(width, jsonData, stageId, innings, newOver)
                    
                } */
    }


    render() {

        return (
            <Modal
                show={this.props.show}
                onHide={this.props.onHide}
                canvasNxt={this.props.canvasNxt}
                canvasPre={this.props.canvasPre}
                className={cx('modal-container')}
                aria-labelledby="contained-modal-title-lg"
            >
                <Modal.Body id="assignStageContainer">
                    <div id="assignStage">

                    </div>
                    <span className="pre-btn btn-cntl" onClick={this.props.canvasPre}> <FA
                        className={cx('icons-social')}
                        name='arrow-left'
                    /> </span>
                    <span className="nxt-btn btn-cntl" onClick={this.props.canvasNxt}> <FA
                        className={cx('icons-social')}
                        name='arrow-right'
                    /> </span>
                    <span className="closeButton" onClick={this.props.onHide}>x</span>
                </Modal.Body>
            </Modal>
        );
    }
};

function responsiveStage(stageInstance, width) {
    /* Responsive for Canvas done here for StageCanvas */ /* START */
    stageInstance.clearCache();
    const containerWidth = width,
        stageCanvasWidth = stageInstance.getStage().width(),
        stageCanvasHeight = stageInstance.getStage().height(),
        scale = containerWidth / stageCanvasWidth;
    stageInstance.width(stageCanvasWidth * scale);
    stageInstance.height(stageCanvasHeight * scale);
    stageInstance.scale({x: scale, y: scale});
    stageInstance.draw();

    return false;
    /* Responsive for Canvas done here for StageCanvas */ /* START */
}

function mapStatetoProps(state) {
    return {
        wagonWheelProps: state.wagonwheelReducer /* WAGON WHEEL #WagonCreateWeb */
    }
}

export default Popup;
