import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames/bind';
import TopicItem from '../components/TopicItem';
import Popup from '../components/Popup'; /* #Popup include  */
import styles from '../css/components/main-section';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import {Stage, Layer, Rect, Text, Line, Image} from 'react-konva';
import ContainerDimensions from 'react-container-dimensions';
import * as wagonAction from '../actions/wagonwheel'; /* WAGON WHEEL #WagonCreateWeb */
import Konva from 'konva';

const cx = classNames.bind(styles);
var groundImg = require('../images/groundImg/ground.png'),
    stageCanvas,
    colImg = require('../images/groundImg/run_colors.png');
var canvasInstance = null;
var stageCreatedInstance = null;
var flag = 1;
var flag2 = 1;
var arrayWagonData = []
var mainWidth = 0
var loopProps,
    highlights = false,
    loadinitstage = false,
    matchId = null,
    checkingIterate = 0,
    assignWidthInit = false,
    loopProps1;
var wagonBalls,
    wagonBallsArray;
var wagonData,
    combainName;

class WagonWheelHighlight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wagondata: null,
            mainWidth: 0,
            wagonMapped: null,
            reloading: null,
            loopProps: null,
            /* #Popup include */
            popShow: false,
            popStage: null,
            stageId: null
            /* #Popup include */
        }
        this.assignStageHighlight = this.assignStageHighlight.bind(this);
        this.createStage = this.createStage.bind(this);
    }

    componentWillMount() {
        if (this.props.GetWagonWheel && this.props.matchId) {
            matchId = this.props.matchId;
            this.props.GetWagonWheel({matchId});
        }
        checkingIterate = 0;
        assignWidthInit = false;
        /* this.responsiveStage = this.responsiveStage.bind(this); */
    }

    componentDidMount() {
        /*  window.requestAnimationFrame( this.responsiveStage(stageCanvas)); */
        stageCreatedInstance = stageCanvas;

    }

    nextFun() {
        var stageIdArr = this.state.stageId.split("_"),
            splitName = stageIdArr[0],
            innings = stageIdArr[1],
            overs_temp = stageIdArr[2];
        overs_temp++
        var overs = overs_temp++;
        combainName = splitName + '_' + innings + '_' + overs;
        var stageCard = this.state.matchStage;
        var stageData_temp = stageCard[innings],
            stageData = stageData_temp[overs].stage;
        var stage_1;
        if (stageData) {
            stage_1 = JSON.parse(stageData);
            /* Change image Id for highlights */
            var foundIndex = stage_1.children.findIndex((element) => element.attrs.name == 'plotlines');
            var iterateIndex = stage_1.children[foundIndex].children;

            var filteredChild = iterateIndex.filter((value) => value.attrs.name == "highlight")

            stage_1.children[foundIndex].children = filteredChild
            /* Assigning Image to mainjson */


            stageData = JSON.stringify(stage_1);
        }
        this.handleWagonClick(combainName, stageData);
    }

    preFun() {
        var stageIdArr = this.state.stageId.split("_"),
            splitName = stageIdArr[0],
            innings = stageIdArr[1],
            overs_temp = stageIdArr[2];
        overs_temp--
        var overs = overs_temp++;
        combainName = splitName + '_' + innings + '_' + overs;
        var stageCard = this.state.matchStage;
        var stageData_temp = stageCard[innings],
            stageData = stageData_temp[overs].stage;
        var stage_1;
        if (stageData) {
            stage_1 = JSON.parse(stageData);
            /* Change image Id for highlights */
            var foundIndex = stage_1.children.findIndex((element) => element.attrs.name == 'plotlines');
            var iterateIndex = stage_1.children[foundIndex].children;

            var filteredChild = iterateIndex.filter((value) => value.attrs.name == "highlight")

            stage_1.children[foundIndex].children = filteredChild
            /* Assigning Image to mainjson */


            stageData = JSON.stringify(stage_1);
        }
        this.handleWagonClick(combainName, stageData);
    }

    handleWagonClick(id, stage, e) {  /*  #Popup include */
        this.setState({popShow: true});
        this.setState({popStage: stage});
        this.setState({stageId: id});
    }

    managePopHide() {  /*  #Popup include */
        this.setState({popShow: false});
        this.setState({popStage: null});
        this.setState({stageId: null});
    }


    createStage(width, stageId, stage) {  /*  #Popup include */

        var stage_1;
        if (stage) {
            stage_1 = JSON.parse(stage);
            /* Change image Id for highlights */
            var foundIndex = stage_1.children.findIndex((element) => element.attrs.name == 'plotlines');
            var iterateIndex = stage_1.children[foundIndex].children;

            var filteredChild = iterateIndex.filter((value) => value.attrs.name == "highlight")

            stage_1.children[foundIndex].children = filteredChild
            /* Assigning Image to mainjson */


            stage = JSON.stringify(stage_1);
        }

        if (width > 0) {
            mainWidth = width;
            if (!assignWidthInit) {
                this.setState({mainWidth: width})
                assignWidthInit = true;
            }
            /* This is where the error is comming for setting state */
        }
        return (
            <div id={`${stageId}`} onClick={this.handleWagonClick.bind(this, `${stageId}`, stage)}
                 ref={`${stageId}`}> {/* #Popup include */}

            </div>
        )
    }

    componentWillReceiveProps(nextProps) {


        const {wagonWheelProps} = nextProps;
        loopProps = null;
        if (wagonWheelProps && wagonWheelProps.data && wagonWheelProps.data[0] && wagonWheelProps.data[0].match_data && Object.keys(wagonWheelProps.data[0].match_data).length > 0 && !(nextProps.wagonData)) {
            const match_data = Object.assign({}, wagonWheelProps.data[0].match_data);

            if (match_data && Object.keys(match_data).length > 0) {
                this.setState({wagonMapped: null});
                this.setState({matchStage: match_data});

                wagonData = match_data;
                loopProps = Object.keys(wagonData).map((innings) => {
                    var highlights = <Col sm={12} className='highlights-head'><h4>Innings {innings}</h4></Col>;
                    if (Object.keys(wagonData[innings].length > 0)) {
                        wagonBalls = wagonData[innings];
                        return Object.keys(wagonBalls).map((overs) => {
                            const balls = wagonBalls[overs],
                                stage = balls.stage;
                            flag = 1;
                            flag2 = 1;
                            var addOver1 = +overs + 1,
                                addInnings1 = +innings + 1;
                            var checkingData = arrayWagonData = [
                                `innings-&&-overs loadedStage_${innings}_${overs}`
                                ,
                                (wagonData[innings]) ?
                                    (wagonBalls[addOver1]) ? "" : `innings-&&-addOver1 loadedStage_${innings}_${addOver1}`
                                    : "No innings"
                                ,
                                (wagonData[addInnings1]) ? "" :
                                    (wagonBalls[1]) ? "" : `addInnings1-&&-addOver1  loadedStage_${addInnings1}_${1}`


                            ];

                            arrayWagonData = [
                                <Col sm={4}>
                                    <ContainerDimensions>
                                        {({width}) =>
                                            this.createStage(width, `loadedStage_${innings}_${overs}`, stage) /*  #Popup include */
                                        }
                                    </ContainerDimensions>
                                </Col>,
                                (wagonData[innings]) ?
                                    (wagonBalls[addOver1]) ? "" :
                                        <Col sm={4}>
                                            <ContainerDimensions>
                                                {({width}) =>
                                                    this.createStage(width, `loadedStage_${innings}_${addOver1}`)
                                                }
                                            </ContainerDimensions>
                                        </Col> : ""
                                ,
                                (wagonData[addInnings1]) ? "" :
                                    (wagonBalls[1]) ? "" :
                                        <Col sm={4}>
                                            <ContainerDimensions>
                                                {({width}) =>
                                                    this.createStage(width, `loadedStage_${addInnings1}_${1}`)
                                                }
                                            </ContainerDimensions>
                                        </Col>
                            ]
                            if (highlights != 0) {
                                arrayWagonData = [highlights, ...arrayWagonData];
                            }
                            highlights = 0;
                            return arrayWagonData

                        });
                    }
                })
                this.setState({wagonMapped: loopProps})
                this.setState({wagondata: match_data})
                loadinitstage = true;
            }


        }
        if (nextProps.wagonData && Object.keys(nextProps.wagonData).length > 0 && loadinitstage) {
            const wagonData = nextProps.wagonData;
            this.setState({wagonMapped: null})
            /* this.setState({mainWidth: 0}) */
            checkingIterate = 0;
            this.setState({wagondata: null})
            this.setState({matchStage: nextProps.wagonData})
            loopProps = null;

            loopProps = Object.keys(wagonData).map((innings) => {
                var highlights = <Col sm={12} className='highlights-head'><h4>Innings {innings}</h4></Col>;
                if (Object.keys(wagonData[innings].length > 0)) {
                    wagonBalls = wagonData[innings];
                    return Object.keys(wagonBalls).map((overs) => {
                        const balls = wagonBalls[overs],
                            stage = balls.stage;
                        flag = 1;
                        flag2 = 1;
                        var addOver1 = +overs + 1,
                            addInnings1 = +innings + 1
                        var checkingData = arrayWagonData = [
                            `innings-&&-overs loadedStage_${innings}_${overs}`
                            ,
                            (wagonData[innings]) ?
                                (wagonBalls[addOver1]) ? "" : `innings-&&-addOver1 loadedStage_${innings}_${addOver1}`
                                : "No innings"
                            ,
                            (wagonData[addInnings1]) ? "" :
                                (wagonBalls[1]) ? "" : `addInnings1-&&-addOver1  loadedStage_${addInnings1}_${1}`


                        ];

                        arrayWagonData = [
                            <Col sm={4}>
                                <ContainerDimensions>
                                    {({width}) =>
                                        this.createStage(width, `loadedStage_${innings}_${overs}`, stage)  /*  #Popup include */
                                    }
                                </ContainerDimensions>
                            </Col>,
                            (wagonData[innings]) ?
                                (wagonBalls[addOver1]) ? "" :
                                    <Col sm={4}>
                                        <ContainerDimensions>
                                            {({width}) =>
                                                this.createStage(width, `loadedStage_${innings}_${addOver1}`)
                                            }
                                        </ContainerDimensions>
                                    </Col> : ""
                            ,
                            (wagonData[addInnings1]) ? "" :
                                (wagonBalls[1]) ? "" :
                                    <Col sm={4}>
                                        <ContainerDimensions>
                                            {({width}) =>
                                                this.createStage(width, `loadedStage_${addInnings1}_${1}`)
                                            }
                                        </ContainerDimensions>
                                    </Col>
                        ]
                        if (highlights != 0) {
                            arrayWagonData = [highlights, ...arrayWagonData];
                        }
                        highlights = 0;
                        return arrayWagonData

                    });
                }
            })
            this.setState({wagondata: wagonData})
            this.setState({wagonMapped: loopProps})
        }


    }


    assignStageHighlight(width, jsonData, stageId, innings, img_id) {
        var clientWidth = width;
        var containerWidth = width;
        var width_1 = width,
            jsonData_1 = jsonData,
            stageId_1 = stageId

        /* Filter JSON DATA */ /* START */

        /* First find the code */

        jsonData_1 = JSON.parse(jsonData);

        /* Change image Id for highlights */
        var imageGroundHighlight = `h_${jsonData_1.children[0].children[0].attrs.id}`,
            imageColorHighlight = `h_${jsonData_1.children[1].children[0].attrs.id}`;

        var foundIndex = jsonData_1.children.findIndex((element) => element.attrs.name == 'plotlines');
        var iterateIndex = jsonData_1.children[foundIndex].children;

        var filteredChild = iterateIndex.filter((value) => value.attrs.name == "highlight")

        jsonData_1.children[foundIndex].children = filteredChild
        /* Assigning Image to mainjson */
        jsonData_1.children[0].children[0].attrs.id = imageGroundHighlight;
        jsonData_1.children[1].children[0].attrs.id = imageColorHighlight;

        jsonData = JSON.stringify(jsonData_1);
        /* Filter JSON DATA */ /* END */
        if (document.getElementById(`${stageId}`)) {

            var stageCanvas = Konva.Node.create(jsonData, `${stageId}`);
            let imageCol_img = new window.Image(),
                imageGroundLoaded = new window.Image();
            imageCol_img.onload = () => {
                if (stageCanvas.getStage().get(`#h_imgCol_${innings}_${img_id}`) && stageCanvas.getStage().get(`#h_imgCol_${innings}_${img_id}`)[0] && stageCanvas.getStage().get(`#h_imgCol_${innings}_${img_id}`)[0].image && typeof stageCanvas.getStage().get(`#h_imgCol_${innings}_${img_id}`)[0].image !== "undefined") {
                    stageCanvas.getStage().get(`#h_imgCol_${innings}_${img_id}`)[0].image(imageCol_img);
                    stageCanvas.draw();
                }
            }
            imageCol_img.src = colImg;
            imageGroundLoaded.onload = () => {
                if (stageCanvas.getStage().get(`#h_groundImg_${innings}_${img_id}`) && stageCanvas.getStage().get(`#h_groundImg_${innings}_${img_id}`)[0] && stageCanvas.getStage().get(`#h_groundImg_${innings}_${img_id}`)[0].image && typeof stageCanvas.getStage().get(`#h_groundImg_${innings}_${img_id}`)[0].image !== "undefined") {
                    stageCanvas.getStage().get(`#h_groundImg_${innings}_${img_id}`)[0].image(imageGroundLoaded);
                    stageCanvas.draw();
                }
            }
            imageGroundLoaded.src = groundImg;
            canvasInstance = stageCanvas;

            if (width > 0) {
                responsiveStage(canvasInstance, width);
            }
        }
    }


    render() {

        if (this.state.mainWidth > 0 && this.state.wagondata !== null) {

            if (this.state.wagondata && Object.keys(this.state.wagondata).length > 0 && !(checkingIterate > 0)) {
                checkingIterate++

                Object.keys(this.state.wagondata).map((innings) => {
                    if (Object.keys(this.state.wagondata[innings].length > 0)) {
                        const wagonBalls1 = this.state.wagondata[innings];
                        var i = 0;
                        Object.keys(wagonBalls1).map((overs) => {
                            i++
                            const balls = wagonBalls1[overs],
                                stage = balls.stage;


                            if (Object.keys(wagonBalls1).length >= i) {
                                this.assignStageHighlight(mainWidth, `${stage}`, `loadedStage_${innings}_${overs}`, innings, overs);
                            }
                        })
                    }
                })
            }
        }
        return (
            <Grid fluid>
                <Row>
                    {(this.state.wagonMapped && this.state.wagonMapped !== null) ? this.state.wagonMapped : ""}
                </Row>
                <Popup show={this.state.popShow} onHide={this.managePopHide.bind(this)} stageGet={this.state.popStage}
                       stageId={this.state.stageId} canvasNxt={this.nextFun.bind(this)}
                       canvasPre={this.preFun.bind(this)}/> {/*  #Popup include */}
            </Grid>
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

export default connect(mapStatetoProps, {...wagonAction /* WAGON WHEEL #WagonCreateWeb */})(WagonWheelHighlight);
