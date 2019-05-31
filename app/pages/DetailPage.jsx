import React, {Component} from 'react';
import Page from '../pages/Page';
import DetailsPageContainer from '../containers/detailsPage';

class DetailsPage extends Component {
    getMetaData() {
        return {
            title: this.pageTitle(),
            meta: this.pageMeta(),
            link: this.pageLink()
        };
    }

    pageTitle = () => {
        return 'Details Page';
    };

    pageMeta = () => {
        return [
            {name: 'description', content: 'A reactGo example of a login or register page'}
        ];
    };

    pageLink = () => {
        return [];
    };

    render() {
        return (
            <Page {...this.getMetaData()}>
                <DetailsPageContainer {...this.props} />
            </Page>
        );
    }
}

export default DetailsPage;
