var gulp = require('gulp');
var uglify = require('gulp-uglify');
var ts = require('gulp-typescript');
var runSequence = require('run-sequence');
var gulp = require('gulp');
var sass = require('gulp-sass');
var shell = require('gulp-shell');

gulp.task('sass', function () {
    gulp.src('app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});
 
gulp.task('compress', function() {
  return gulp.src('app/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build'));
});

var tsProject = ts.createProject('tsconfig.json');

gulp.task('tsc', function () {     
    var tsResult = tsProject.src()
    .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest('app/js'));
});

gulp.task('lite', shell.task([
    'lite-server'
]));

gulp.task('develop', function () {

    gulp.watch('app/sass/**/*.scss', ["sass"]);
    gulp.watch('app/**/*.ts', ["tsc"]);
    gulp.start('lite');
});

gulp.task('bundle_and_minify', function(callback) {
  runSequence('tsc','compress', callback);
});