import React, {Component} from 'react';
import Page from '../pages/Page';
import SeriesDetailsContainer from '../containers/Series_detail';

class SeriesDetails extends Component {
    getMetaData() {
        return {
            title: this.pageTitle(),
            meta: this.pageMeta(),
            link: this.pageLink()
        };
    }

    pageTitle = () => {
        return 'SeriesDetails';
    };

    pageMeta = () => {
        return [
            {name: 'description', content: 'A page show details of a series'}
        ];
    };

    pageLink = () => {
        return [];
    };

    render() {
        return (
            <Page {...this.getMetaData()}>
                <SeriesDetailsContainer {...this.props} />
            </Page>
        );
    }
}

export default SeriesDetails;
