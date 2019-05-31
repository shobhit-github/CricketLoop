import React, {Component} from 'react';
import Page from '../pages/Page';
import PlayerInfoContainer from '../containers/Player_info';

class PlayerInfo extends Component {
    getMetaData() {
        return {
            title: this.pageTitle(),
            meta: this.pageMeta(),
            link: this.pageLink()
        };
    }

    pageTitle = () => {
        return 'PlayerInfo';
    };

    pageMeta = () => {
        return [
            {name: 'description', content: 'A page to show players information'}
        ];
    };

    pageLink = () => {
        return [];
    };

    render() {
        return (
            <Page {...this.getMetaData()}>
                <PlayerInfoContainer {...this.props} />
            </Page>
        );
    }
}

export default PlayerInfo;
