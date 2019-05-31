import {apiEndpoint} from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
    const client = createRestApiClient().withConfig({baseURL: apiEndpoint});
    return {
        wagonbyid: ({matchId}) => client.request({
            method: 'POST',
            url: `http://codex.cricloop.com/api/wagonwheel/getwagonid`,
            data: {
                matchId
            }
        })
    };
};
