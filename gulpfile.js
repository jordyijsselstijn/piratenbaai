var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('default', function() {
    return gulp.src([   'bower_components/jquery/dist/jquery.js',
                        'bower_components/angular/angular.js',
                        'bower_components/angular-ui/build/angular-ui.js',
                        'bower_components/angular-ui-router/release/angular-ui-router.js'])
            .pipe(uglify())
            .pipe(concat('build.js'))
            .pipe(gulp.dest('dist'));
});