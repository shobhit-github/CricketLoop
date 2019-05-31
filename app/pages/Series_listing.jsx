import React, {Component} from 'react';
import Page from '../pages/Page';
import SeriesListingContainer from '../containers/Series_listing';

class SeriesListing extends Component {
    getMetaData() {
        return {
            title: this.pageTitle(),
            meta: this.pageMeta(),
            link: this.pageLink()
        };
    }

    pageTitle = () => {
        return 'SeriesListing';
    };

    pageMeta = () => {
        return [
            {name: 'description', content: 'A page to show all series of matches'}
        ];
    };

    pageLink = () => {
        return [];
    };

    render() {
        return (
            <Page {...this.getMetaData()}>
                <SeriesListingContainer {...this.props} />
            </Page>
        );
    }
}

export default SeriesListing;
