const gulp = require('gulp')
const requireDir = require('require-dir')
const $ = require('gulp-load-plugins')({
  lazy: true
})

/**
 *  This will load all js files in the gulp directory
 *  in order to load all gulp tasks
 */
requireDir('./gulp')

// 任务列表
gulp.task('default', $.taskListing)
