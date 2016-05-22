var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

var js = [
    'bower_components/jquery/dist/jquery.js',
    'bower_components/angular/angular.js',
    'bower_components/angular-ui/build/angular-ui.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js',
    'bower_components/socket.io-client/socket.io.js',
    'source/js/**/*.js',
    'source/js/*.js'
];

gulp.task('default', function () {
    gulp.start('js');
    gulp.start('sass');
});


gulp.task('sass', function () {
    return gulp.src('source/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('../app/css/'));
});

gulp.task('js', function () {
    return gulp.src(js)
        .pipe(concat('final.min.js'))
        .pipe(gulp.dest('../app/js'));
});