const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const browserSync = require('browser-sync').create();

gulp.task('styles', () => {
    gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('scss/*.scss', gulp.series('styles'));
    gulp.watch('scss').on('change', browserSync.reload)
    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('clean', () => {
    del.sync(['./css']);
});
