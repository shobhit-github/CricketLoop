import React, {Component} from 'react';
import Page from '../pages/Page';
import LiveDetailsContainer from '../containers/LiveDetail';

let matchId;

class LiveDetails extends Component {
    constructor(props) {
        super(props);
    }

    getMetaData() {
        return {
            title: this.pageTitle(),
            meta: this.pageMeta(),
            link: this.pageLink()
        };
    }

    pageTitle = () => {
        return 'LiveDetails';
    };

    pageMeta = () => {
        return [
            {name: 'description', content: 'Live match details with scorecard and scoreboards'}
        ];
    };

    pageLink = () => {
        return [];
    };

    render() {
        return (
            <Page {...this.getMetaData()}>
                <LiveDetailsContainer {...this.props} />
            </Page>
        );
    }
}

export default LiveDetails;
