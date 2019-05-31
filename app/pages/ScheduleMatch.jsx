import React, {Component} from 'react';
import Page from '../pages/Page';
import ScheduleMatchContainer from '../containers/ScheduleMatch';

class ScheduleMatch extends Component {
    getMetaData() {
        return {
            title: this.pageTitle(),
            meta: this.pageMeta(),
            link: this.pageLink()
        };
    }

    pageTitle = () => {
        return 'ScheduleMatch';
    };

    pageMeta = () => {
        return [
            {name: 'description', content: 'A page to show sheduled matches'}
        ];
    };

    pageLink = () => {
        return [];
    };

    render() {
        return (
            <Page {...this.getMetaData()}>
                <ScheduleMatchContainer {...this.props} />
            </Page>
        );
    }
}

export default ScheduleMatch;
