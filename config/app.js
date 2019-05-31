import {ENV} from './env';


export const isProduction = ENV === 'production';
export const isDebug = ENV === 'development';
export const isClient = typeof window !== 'undefined';

export const apiEndpoint = isDebug ? 'http://localhost:3000/api/' : 'http://codex.cricloop.com/api/';
console.log(apiEndpoint, "<- apiEndpoint Listening to <-")
// Replace with 'UA-########-#' or similar to enable tracking
export const trackingID = null;

