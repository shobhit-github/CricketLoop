import React, {Component} from 'react';
import Page from '../pages/Page';
import NewsContainer from '../containers/News_listing';

class News extends Component {
    getMetaData() {
        return {
            title: this.pageTitle(),
            meta: this.pageMeta(),
            link: this.pageLink()
        };
    }

    pageTitle = () => {
        return 'News';
    };

    pageMeta = () => {
        return [
            {name: 'description', content: 'Cricloop News page'}
        ];
    };

    pageLink = () => {
        return [];
    };

    render() {
        return (
            <Page {...this.getMetaData()}>
                <NewsContainer {...this.props} />
            </Page>
        );
    }
}

export default News;

