const gulp = require('gulp')
const eslint = require('gulp-eslint')
const conf = require('./conf')

gulp.task('lint', function lint() {
  gulp.src(conf.files.lint)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})
