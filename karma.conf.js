const conf = require('./gulp/conf')

module.exports = function (config) {
  const configuration = {
    files: [
      conf.path.src('**/*.js')
    ],
    singleRun: true,
    autoWatch: false,
    frameworks: ['phantomjs-shim', 'jasmine'],
    browers: ['PhantomJS'],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-phantomjs-shim',
      'karma-coverage',
      'karma-jasmine'
    ],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },
    reporters: ['progress']
  }

  configuration.preprocessors = {}
  config.set(configuration)
}
