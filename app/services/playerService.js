import {apiEndpoint} from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
    const client = createRestApiClient().withConfig({baseURL: apiEndpoint});
    return {
        playerslist: ({countrykey}) => client.request({
            method: 'POST',
            url: 'http://codex.cricloop.com/api/players/getplayersbyteam/',
            data: {
                countrykey
            }
        }),
        playerdetails: ({playerid}) => client.request({
            method: 'POST',
            url: 'http://codex.cricloop.com/api/players/getplayersbyid/',
            data: {
                playerid
            }
        }),
    };
};

