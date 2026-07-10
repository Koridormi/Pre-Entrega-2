import gulpSass from 'gulp-sass';
import { src, dest, watch, series } from 'gulp';
import * as dartSass from 'sass';
import terser from 'gulp-terser';
import plumber from 'gulp-plumber';

const sass = gulpSass(dartSass);

export function js() {
    return src('./src/js/**/*.js')
        .pipe(plumber())
        .pipe(terser())
        .pipe(dest('./build/js'));
};

export function css() {
    return src('./src/scss/style.scss', { sourcemaps: true })
        .pipe(plumber())
        .pipe(sass({
            style: 'compressed'
        }).on('error', sass.logError))
        .pipe(dest('./build/css', { sourcemaps: '.' }));
};

export function dev() {
    watch('./src/scss/**/*.scss', css);
    watch('./src/js/**/*.js', js);
};

export default series(js, css, dev);