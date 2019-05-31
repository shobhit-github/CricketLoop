import {apiEndpoint} from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
    const client = createRestApiClient().withConfig({baseURL: apiEndpoint});
    return {
        newslisting: () => client.request({
            method: 'GET',
            url: `http://codex.cricloop.com/api/news/newsAggreagtion`
        }),
    };
};
