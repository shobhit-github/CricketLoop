import React, {Component} from 'react';
import Page from '../pages/Page';
import TeamDetailContainer from '../containers/Team_Detail';

class TeamDetail extends Component {
    getMetaData() {
        return {
            title: this.pageTitle(),
            meta: this.pageMeta(),
            link: this.pageLink()
        };
    }

    pageTitle = () => {
        return 'TeamDetail';
    };

    pageMeta = () => {
        return [
            {name: 'description', content: 'A page to show a team details and their matches'}
        ];
    };

    pageLink = () => {
        return [];
    };

    render() {
        return (
            <Page {...this.getMetaData()}>
                <TeamDetailContainer {...this.props} />
            </Page>
        );
    }
}

export default TeamDetail;
