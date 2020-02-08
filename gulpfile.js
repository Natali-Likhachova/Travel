var gulp = require('gulp');
    sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('app/scss/import.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
});
gulp.task('watch', function () {
    gulp.watch('app/scss/*.scss', gulp.parallel('sass'));
});


