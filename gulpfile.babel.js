import path from 'path';

import gulp from 'gulp';
import sass from 'gulp-sass';
import insert from 'gulp-insert';

import whitelabelSass from './build/whitelabel-sass';
import { styles as whitelabelStyles } from './whitelabel.json';

const sassOptions = {
};

const whitelabeledSassVariables = whitelabelSass.sassVariables(whitelabelStyles);

gulp.task('styles', () => {
    return gulp.src(path.join('sass', '*.scss'))
        .pipe(insert.prepend(whitelabeledSassVariables))
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(gulp.dest('css'));
});