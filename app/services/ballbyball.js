import {apiEndpoint} from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
    const client = createRestApiClient().withConfig({baseURL: apiEndpoint});
    return {
        ballbyballover: (matchId) => client.request({
            method: 'GET',
            url: `http://codex.cricloop.com/api/ballnover/ballbyball?matchkey=${matchId}&nopaging=true`
        }),
        ballbyballliveover: ({matchkey, overkey}) => client.request({
            method: 'POST',
            url: `http://codex.cricloop.com/api/ballnover/ballbyoverkeylive`,
            data: {
                matchkey,
                overkey
            }
        })
    };
};
