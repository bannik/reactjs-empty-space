/* config-overrides.js */
const rewireSass = require('react-app-rewire-scss');

module.exports = function override(config, env) {
  config = rewireSass(config, env);
  //do stuff with the webpack config...
  return config;
}
