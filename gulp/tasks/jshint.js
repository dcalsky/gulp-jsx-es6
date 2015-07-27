var gulp = require('gulp');
var shell = require('gulp-shell');
var handleErrors = require('../util/handleErrors');

gulp.task('jshint', shell.task([
  ''
])).on('error', handleErrors);
