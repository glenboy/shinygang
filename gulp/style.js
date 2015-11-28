/**
 * 处理样式构建
 * @Author shinygang
 */

'use strict'

import path from 'path';
import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import browser from 'browser-sync';
import conf from './conf';

let $ = loadPlugins()
	, browserSync = browser.get('shinygang');


gulp.task('styles', () => {
	return gulp.src([path.join(conf.paths.src,'**/*.scss')])
		.pipe($.sass()).on('error', conf.errorLog('sass'))
		.pipe($.autoprefixer()).on('error', conf.errorLog('sass'))
		.pipe($.sourcemaps.write())
		.pipe(gulp.dest('./server'))
		.pipe(browserSync.reload({ stream: true }));
});
