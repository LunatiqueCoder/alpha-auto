const { override, fixBabelImports, /* addLessLoader, */ addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addWebpackAlias({
    '@components': path.resolve(__dirname, './src/components'),
    '@images': path.resolve(__dirname, './src/images'),
  })
)