import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
/* import PropTypes from 'prop-types'; */
import classNames from 'classnames/bind';
import WagonWheel from '../components/WagonWheel'; /* WAGON WHEEL #WagonCreateWeb */
import WagonWheelHighlight from '../components/WagonWheelHighlight'; /* WAGON WHEEL #WagonCreateWeb */
import styles from '../css/components/match_inner';
import * as wagonAction from '../actions/wagonwheel'; /* WAGON WHEEL #WagonCreateWeb */
const cx = classNames.bind(styles);


var matchId,
    initialLoader = 1,
    initialLoaded = true,
    initialCheckWagonLoad = false;


class WagonWheelLive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wagonData: [],
            wagonOnState: "",
            wagonOnStateHighlight: "",
            checkHighlights: null
        }
        this.returnWagonElement = this.returnWagonElement.bind(this);
    }

    componentWillMount() {
        if (this.props.matchId) {
            matchId = this.props.matchId;
            const {highlightsProps} = this.props;
            this.setState({wagonData: ""})
            this.setState({wagonOnState: ""})
            this.setState({wagonOnStateHighlight: ""})
            if (highlightsProps == true) {
                this.setState({checkHighlights: highlightsProps});
                this.returnWagonElementHighlight(null, true, 2, matchId);
            } else if (highlightsProps == false) {
                this.setState({checkHighlights: false});
                this.returnWagonElement(null, false, 1, matchId);
            }
            this.props.GetWagonWheel({matchId}); /* WAGON WHEEL #WagonCreateWeb */
        }

    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.matchId !== this.props.matchId) {

            this.props.GetWagonWheel({matchId});
        }
    }

    componentWillReceiveProps(nextProps) {
        const {wagonWheel/* #WagonCreateWeb */, wagonDataProps, highlightsProps} = nextProps;

        if (wagonDataProps && Object.keys(wagonDataProps).length > 0) {

            this.setState({wagonData: ""})
            this.setState({wagonOnState: ""})
            this.setState({wagonOnStateHighlight: ""})
            this.setState({wagonData: wagonDataProps})
            if (highlightsProps == false) {
                this.setState({checkHighlights: highlightsProps});
                this.returnWagonElement(wagonDataProps, false, 1)
            } else if (highlightsProps == true) {
                this.setState({checkHighlights: highlightsProps});
                this.returnWagonElementHighlight(wagonDataProps, true, 2)
            }
        }/* #WagonCreateWeb */

        /* if (wagonWheel && wagonWheel.data && wagonWheel.data.length > 0) {
            var { data: [{ match_data }] } = wagonWheel;
            if (match_data && Object.keys(match_data).length > 0) {
                
                this.setState({wagonData: ""})
                this.setState({wagonOnState: ""})
                this.setState({wagonOnStateHighlight: ""})
                this.setState({wagonData: match_data})
                if(highlightsProps == false){
                    this.setState({checkHighlights: highlightsProps});
                    this.returnWagonElement(match_data, false, 1)
                }else if(highlightsProps == true){
                    this.setState({checkHighlights: highlightsProps});
                    this.returnWagonElementHighlight(match_data, true, 2)
                }
                initialLoaded = false;
            }
            initialCheckWagonLoad = true;
        } */ /* WAGON WHEEL #WagonCreateWeb  */

    }


    returnWagonElementHighlight(wagonData, highlights, key, matchId) {
        var wagonWheel = <WagonWheelHighlight
            wagonData={wagonData}
            highlights={highlights}
            matchId={(matchId) ? matchId : null}
            key={key}
            index={key}
        />
        this.setState({wagonOnState: ""})
        this.setState({wagonOnStateHighlight: wagonWheel})
    } /* #WagonCreateWeb */
    returnWagonElement(wagonData, highlights, key, matchId) {
        var wagonWheel = <WagonWheel
            wagonData={wagonData}
            highlights={highlights}
            matchId={(matchId) ? matchId : null}
            key={key}
            index={key}
        />
        this.setState({wagonOnStateHighlight: ""})
        this.setState({wagonOnState: wagonWheel})
    } /* #WagonCreateWeb */


    render() {


        return (
            <div>
                {(this.state.wagonOnStateHighlight != "") ? this.state.wagonOnStateHighlight : (this.state.wagonOnState != "") ? this.state.wagonOnState : "No Data Available"}
            </div>
        );
    }
}


function mapStatetoProps(state) {
    return {
        wagonWheel: state.wagonwheelReducer, /* WAGON WHEEL #WagonCreateWeb */
    }
}

export default connect(mapStatetoProps, {...wagonAction /* WAGON WHEEL #WagonCreateWeb */})(WagonWheelLive);
