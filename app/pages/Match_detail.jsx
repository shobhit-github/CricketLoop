import React, {Component} from 'react';
import Page from '../pages/Page';
import MatchDetailsContainer from '../containers/Match_detail';

class MatchDetails extends Component {
    getMetaData() {
        return {
            title: this.pageTitle(),
            meta: this.pageMeta(),
            link: this.pageLink()
        };
    }

    pageTitle = () => {
        return 'MatchDetails';
    };

    pageMeta = () => {
        return [
            {name: 'description', content: 'Match details showing page with full scoreboard'}
        ];
    };

    pageLink = () => {
        return [];
    };

    render() {
        return (
            <Page {...this.getMetaData()}>
                <MatchDetailsContainer {...this.props} />
            </Page>
        );
    }
}

export default MatchDetails;
