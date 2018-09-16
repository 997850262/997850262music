<<<<<<< HEAD
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" },
  })(config, env);
  return config;
=======
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" },
  })(config, env);
  return config;
>>>>>>> 0c6edde90f520a769c2599bb8280a3155721c8fd
};