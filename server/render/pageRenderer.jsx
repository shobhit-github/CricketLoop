import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import {RouterContext} from 'react-router';
import Helmet from 'react-helmet';
import serialize from 'serialize-javascript';
import staticAssets from './static-assets';

const createApp = (store, props) => renderToString(
    <Provider store={store}>
        <RouterContext {...props} />
    </Provider>
);

const buildPage = ({componentHTML, initialState, headAssets}) => {
    return `
<!doctype html>
<html>
  <head>
    ${headAssets.title.toString()}
    ${headAssets.meta.toString()}
    ${headAssets.link.toString()}
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <!-- Slick Carousal -->
    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    ${staticAssets.createStylesheets()}
    ${staticAssets.createTrackingScript()}
  </head>
  <body>
    <div id="app">${componentHTML}</div>
    <script>window.__INITIAL_STATE__ = ${serialize(initialState)}</script>
    ${staticAssets.createAppScript()}
  </body>
</html>`;
};

export default (store, props) => {
    const initialState = store.getState();
    const componentHTML = createApp(store, props);
    const headAssets = Helmet.renderStatic();
    return buildPage({componentHTML, initialState, headAssets});
};

