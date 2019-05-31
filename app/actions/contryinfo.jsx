import {push} from 'react-router-redux';
import {country} from '../services';

import * as types from '../types';

const countryApi = [
    {
        'name': 'India',
        'key': 'ind'
    },
    {
        'name': 'Pakistan',
        'key': 'pak'
    },
    {
        'name': 'Australia',
        'key': 'aus'
    },
    {
        'name': 'Kenya',
        'key': 'ken'
    },
    {
        'name': 'New_Zealand',
        'key': 'nz'
    },
    {
        'name': 'England',
        'key': 'eng'
    },
    {
        'name': 'South_Africa',
        'key': 'rsa'
    },
    {
        'name': 'West_Indies',
        'key': 'wi'
    },
    {
        'name': 'Sri_Lanka',
        'key': 'sl'
    },
    {
        'name': 'Bangladesh',
        'key': 'ban'
    },
    {
        'name': 'Zimbabwe',
        'key': 'zim'
    },
    {
        'name': 'Ireland',
        'key': 'ire'
    },
    {
        'name': 'Afghanistan',
        'key': 'afg'
    },
    {
        'name': 'United_Arab',
        'key': 'uae'
    },
    {
        'name': 'Scotland',
        'key': 'sco'
    },
    {
        'name': 'Hong_Kong',
        'key': 'hk'
    },
    {
        'name': 'United_States',
        'key': 'usa'
    }
];

export function Getcountry(countryname) {
    /* const fountkey = countryApi.findIndex(n => n.name === countryname); */
    return {
        type: types.COUNTRYINFO,
        countrykey: countryApi
    }
}

export default {Getcountry};



