const component = require('./component');
const baseApi = require('./baseApi');
const utils = require('./utils');
const app = require('./app');

module.exports = _arch => {
  switch (_arch) {
    case 'component':
      return component;
    case 'baseApi':
      return baseApi;
    case 'utils':
      return utils;
    default:
      return app;
  }
};
