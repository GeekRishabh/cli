const web = require('./web');
const api = require('./api');
const mobile = require('./mobile');
const component = require('./component');
const baseApi = require('./baseApi');
const utils = require('./utils');
const app = require('./app');

module.exports = _arch => {
  switch (_arch) {
    // wdio creators
    case 'mobile':
      return mobile;
    case 'api':
      return api;
    case 'web':
      return web;
    // react creators
    case 'app':
      return app;
    case 'component':
      return component;
    case 'baseApi':
      return baseApi;
    case 'utils':
      return utils;
    default:
      return web;
  }
};
