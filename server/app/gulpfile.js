/**
 * Created by gem on 30/07/2017.
 */
var
    gulp                = require('gulp'),
    nodemon             = require('gulp-nodemon'),
    bunyan              = require('bunyan'),
    env                 = require('gulp-env');

var debug   = false;

gulp.task('nodemon', function () {
    nodemon({
        script: 'src/index.js',
        ext: 'js json',
        tasks: [],
        watch:    ["src/**/*.js", "src/config/*.json"],
        env: {
            'NODE_ENV': 'development'
        }
    }).on('readable', function() {

        // free memory
        bunyan && bunyan.kill();

        bunyan = spawn('./node_modules/bunyan/bin/bunyan', [
            '--output', 'short',
            '--color'
        ]);

        bunyan.stdout.pipe(process.stdout);
        bunyan.stderr.pipe(process.stderr);

        this.stdout.pipe(bunyan.stdin);
        this.stderr.pipe(bunyan.stdin);
    });
});

/**
 *
 */
gulp.task('debug', function () {
    debug = true;
    env({
        vars: {
            DEBUG: true
        }
    });
});

/**
 *
 */
gulp.task('dev', [
    'debug',
    'nodemon'
]);

/**
 *
 */
gulp.task('default', ['nodemon']);
