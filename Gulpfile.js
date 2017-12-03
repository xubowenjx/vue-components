/*
 * @Author: xubowen
 * @Date: 2017-12-03 21:37:41
 * @Last Modified by:   xubowen
 * @Last Modified time: 2017-12-03 21:37:41
 */

const gulp = require('gulp')
const less = require('gulp-less')
const cssmin = require('gulp-clean-css') // css压缩
const rename = require('gulp-rename') // rename

/*
    定义编译less的任务
 */
gulp.task('cless', function () {
  // 如果需要给其他任务引用 需要return出来
  return gulp
    .src('src/assets/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist'))
})
// 进行压缩
gulp.task('mincss', ['cless'], function () {
  gulp
    .src(['dist/!(*.min).css'])
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist'))
})

/**
 * 监听文件变化并执行相应动作
 */
gulp.task('watch', function () {
  gulp.watch('src/css/*.less', ['mincss'])
})

gulp.task('default', ['mincss'])
