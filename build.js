({
  baseUrl: 'js/src/',
  out: 'js/dist/main.js',
  name: 'main',
  paths: {
    requireLib: 'vendor/require',
    jquery: 'vendor/jquery',
    jqueryPlugin: 'vendor/jqueryPlugin',
    logger: 'utils/logger',
    app: 'modules/app'
  },
    include: ['requireLib']
})