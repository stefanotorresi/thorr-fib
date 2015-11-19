var istanbul = require('browserify-istanbul');

module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['jasmine', 'browserify'],
        singleRun: true,
        files: [
            'thorr-fib*.js'
        ],
        reporters: ['spec', 'coverage'],
        preprocessors: {
            'thorr-fib*.js': [ 'browserify' ]
        },
        coverageReporter: {
            type: 'html',
            dir: '.karma-coverage/'
        },
        specReporter: {
            suppressErrorSummary: true
        },
        browserify: {
            debug: true,
            transform: [istanbul({
                ignore: ['**/node_modules/**', '**/thorr-fib.spec.js']
            })]
        }
    });
};
