import React, {Component} from 'react';
import Page from '../pages/Page';
import ScheduleMatchListContainer from '../containers/Schedule_detail_list';

class ScheduleMatchList extends Component {
    getMetaData() {
        return {
            title: this.pageTitle(),
            meta: this.pageMeta(),
            link: this.pageLink()
        };
    }

    pageTitle = () => {
        return 'ScheduleMatchList';
    };

    pageMeta = () => {
        return [
            {name: 'description', content: 'A page to show sheduled matches lists'}
        ];
    };

    pageLink = () => {
        return [];
    };

    render() {
        return (
            <Page {...this.getMetaData()}>
                <ScheduleMatchListContainer {...this.props} />
            </Page>
        );
    }
}

export default ScheduleMatchList;
