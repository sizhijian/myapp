const gulp = require("gulp");
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync').create();
const runSequence = require('run-sequence');
//temp
const app = require("./app");
//temp-end
const $ = gulpLoadPlugins();
const reload = browserSync.reload;

var dev = true;

gulp.task('default',()=> {
	
    //默认任务
    console.log("执行了默认任务!"+app);
});

gulp.task('styles', function () {
	return gulp.src('public/stylesheets/weixin/sass/index.scss')
    .pipe($.plumber())
    .pipe($.if(dev, $.sourcemaps.init()))
    .pipe($.sass.sync({
      outputStyle: 'compressed',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
    .pipe($.if(dev, $.sourcemaps.write()))
    .pipe(gulp.dest('public/stylesheets/weixin/'))
    .pipe(reload({stream: true}));
});//outputStyle:nested/compact/expanded/compressed

//gulp.task('sass',()=>{
//	return gulp.src('public/stylesheets/weixin/sass/*.scss')
//	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//	.pipe(gulp.dest('public/stylesheets/weixin/'));
//});//temp

//gulp.task('sass:watch', function () {
//	gulp.watch('public/stylesheets/weixin/sass/*.scss', ['sass']);
//});//temp

gulp.task('serve',function () {
	runSequence(['styles'], () => {
    browserSync.init({
      notify: false,
      port: 2000,
      server: {
        baseDir: './'
//      routes: {
//        '/bower_components': 'bower_components'
//      }
      }
    });

    gulp.watch([
      'app/views/weixin/flexible/*.html',
      'public/images/**/*',
      'public/javascripts/weixin/activity.js'
    ]).on('change', reload);

    gulp.watch('public/stylesheets/weixin/sass/index.scss', ['styles']);
//  gulp.watch('public/javascripts/weixin/activity.js', ['scripts']);
//  gulp.watch('app/fonts/**/*', ['fonts']);
//  gulp.watch('bower.json', ['wiredep', 'fonts']);
	});
});


