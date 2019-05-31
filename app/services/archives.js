import {apiEndpoint} from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
    const client = createRestApiClient().withConfig({baseURL: apiEndpoint});
    return {
        archivesmatches: () => client.request({
            method: 'GET',
            url: `http://codex.cricloop.com/api/matches/archievedmatches`
        }),
        archiveslisting: () => client.request({
            method: 'GET',
            url: `http://codex.cricloop.com/api/seasondata/archivedseasons `
        })
    };
};
