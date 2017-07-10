const gulp = require('gulp')
const karma = require('karma')
const conf = require('./conf')

/**
 * 启动测试
 * @param singleRun
 * @param done
 */
function runTests(singleRun, done) {
  const reporters = ['progress']
  const preprocessors = {}

  if (singleRun) {
    conf.files.srcJs.forEach(function forEach(name) {
      preprocessors[name] = ['coverage']
    })
    reporters.push('coverage')
  }

  const localConfig = {
    configFile: conf.path.root('karma.conf.js'),
    singleRun,
    autoWatch: !singleRun,
    reporters,
    preprocessors
  }

  const server = new karma.Server(localConfig, function callback(failCount) {
    done(failCount ? new Error(`Unit Test Failed ${failCount} tests.`) : null)
  })
  server.start()
}

gulp.task('test', function test(done) {
  runTests(true, done)
})
