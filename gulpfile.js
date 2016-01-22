var gulp = require('gulp');
var uglify = require('gulp-uglify');
var ts = require('gulp-typescript');
var webserver = require('gulp-webserver');
 
gulp.task('compress', function() {
 return gulp.src('build/**/*.js')
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
    gulp.watch('app/**/*.ts', gulp.series("tsc"));
});

gulp.task('server', function(){
    gulp.src('./', '!/**/*.ts')
        .pipe(webserver({
        livereload: true,
        directoryListing: true,
        open: 'index.html'
        }));
});

gulp.task('develop', 
    gulp.series('tsc', 
        gulp.parallel('server','tscw')
    )
);

gulp.task('build',
    gulp.series('tsc','compress')
);