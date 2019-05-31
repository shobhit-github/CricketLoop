import React, {Component} from 'react';
import Page from '../pages/Page';
import LiveDetailsContainer from '../containers/LiveMatchList';

class LiveDetails extends Component {
    getMetaData() {
        return {
            title: this.pageTitle(),
            meta: this.pageMeta(),
            link: this.pageLink()
        };
    }

    pageTitle = () => {
        return 'Live Listing';
    };

    pageMeta = () => {
        return [
            {name: 'description', content: 'Live match detail page'}
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
