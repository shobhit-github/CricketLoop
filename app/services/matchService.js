import {apiEndpoint} from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
    const client = createRestApiClient().withConfig({baseURL: apiEndpoint});
    return {
        schduleList: () => client.request({
            method: 'GET',
            url: 'http://codex.cricloop.com/api/matches/allschedules'
        }),
        recentList: () => client.request({
            method: 'GET',
            url: 'http://codex.cricloop.com/api/matches/recentmatches'
        }),
        recentapilist: () => client.request({
            method: 'GET',
            url: 'http://codex.cricloop.com/api/matches/recentmatchfetch'
        }),
        getrecentfullcard: () => client.request({
            method: 'GET',
            url: 'http://codex.cricloop.com/api/matches/getrecentfullcard'
        }),
        login: ({key}) => client.request({
            method: 'POST',
            url: '/matchScoreCard',
            data: {
                key
            }
        }),
    };
};

