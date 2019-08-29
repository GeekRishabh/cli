const gaWdio = require('./ga-wdio');
const react = require('./react');

module.exports = _arch => {
  switch (_arch) {
    case 'ga-wdio':
      return gaWdio;
    case 'react':
      return react;
    default:
      return react;
  }
};
