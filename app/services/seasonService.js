import {apiEndpoint} from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
    const client = createRestApiClient().withConfig({baseURL: apiEndpoint});
    return {
        seasonsService: () => client.request({
            method: 'GET',
            url: 'http://codex.cricloop.com/api/seasondata/fetchseasons'
        }),
        seasonsbyid: ({seasonid}) => client.request({
            method: 'POST',
            url: 'http://codex.cricloop.com/api/seasondata/getseasonsbyseasonid',
            data: {
                seasonid
            },
        }),
        allmatchdetail: ({matchkey}) => client.request({
            method: 'POST',
            url: 'http://codex.cricloop.com/api/matches/getallmatchbykey',
            data: {
                matchkey
            }
        }),
        getallseasonmatch: () => client.request({
            method: 'GET',
            url: 'http://codex.cricloop.com/api/seasondata/getseasons',
        })
        /*,
        schduleList: () => client.request({
          method: 'GET',
          url: 'http://codex.cricloop.com/api/matches/allschedules'
        }),
        recentList: () => client.request({
          method: 'GET',
          url: 'http://codex.cricloop.com/api/matches/recentmatches'
        }), */
    };
};

