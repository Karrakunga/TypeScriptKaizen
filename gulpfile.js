var gulp = require('gulp');
var uglify = require('gulp-uglify');
var ts = require('gulp-typescript');
var runSequence = require('run-sequence');
 
gulp.task('compress', function() {
  return gulp.src('app/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build'));
});

var tsProject = ts.createProject('tsconfig.json');

gulp.task('tsc', function () {     
    var tsResult = tsProject.src()
    .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest('build'));
});

gulp.task('tscw', function () {
    gulp.watch('app/**/*.ts', ["tsc"]);
});

gulp.task('develop', function () {
    gulp.watch('app/**/*.ts', ["tscw"]);
    gulp.watch('app/**/*.js', ["compress"]);
});

gulp.task('bundle_and_minify', function(callback) {
  runSequence('tsc','compress', callback);
});