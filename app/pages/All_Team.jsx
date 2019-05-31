import React, {Component} from 'react';
import Page from '../pages/Page';
import AllTeamsContainer from '../containers/All_Team';

class AllTeams extends Component {
    getMetaData() {
        return {
            title: this.pageTitle(),
            meta: this.pageMeta(),
            link: this.pageLink()
        };
    }

    pageTitle = () => {
        return 'AllTeams';
    };

    pageMeta = () => {
        return [
            {name: 'description', content: 'All cricket teams listing page'}
        ];
    };

    pageLink = () => {
        return [];
    };

    render() {
        return (
            <Page {...this.getMetaData()}>
                <AllTeamsContainer {...this.props} />
            </Page>
        );
    }
}

export default AllTeams;
