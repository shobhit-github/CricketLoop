import React, {Component} from 'react';
import Page from '../pages/Page';
import ArchivesContainer from '../containers/Archives';

class Archives extends Component {
    getMetaData() {
        return {
            title: this.pageTitle(),
            meta: this.pageMeta(),
            link: this.pageLink()
        };
    }

    pageTitle = () => {
        return 'Archives';
    };

    pageMeta = () => {
        return [
            {name: 'description', content: 'A page to show old matches listing'}
        ];
    };

    pageLink = () => {
        return [];
    };

    render() {
        return (
            <Page {...this.getMetaData()}>
                <ArchivesContainer {...this.props} />
            </Page>
        );
    }
}

export default Archives;
