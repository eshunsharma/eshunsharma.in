const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const jshint = require('gulp-jshint');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
 
gulp.task('css', () =>
  	gulp.src('css/*.css')
  		.pipe(cleanCSS())
    	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    	.pipe(concat('style.min.css'))
    	.pipe(gulp.dest('dist'))
);

gulp.task('js', () =>
    gulp.src('js/*.js')
      	.pipe(jshint())
      	.pipe(jshint.reporter('default'))
      	.pipe(uglify())
      	.pipe(concat('app.js'))
      	.pipe(gulp.dest('dist'))
);

gulp.task('image', () =>
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

gulp.task('html', () =>
  	gulp.src('src/*.html')
    	.pipe(htmlmin({collapseWhitespace: true}))
    	.pipe(gulp.dest('dist'))
);

gulp.task('default', ['css', 'js', 'image', 'html']);