const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
    return (gulp.src('./src/css/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(gulp.dest('./doc/css/')));
});

gulp.task('default', function(){

    return (gulp.watch(
        './src/css/*.scss',
        gulp.series('sass')));
    
});