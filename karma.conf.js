module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        singleRun: true,
        files: ['thorr-fib.js', 'thorr-fib.spec.js'],
        reporters: ['spec', 'coverage'],
        preprocessors: {
            'thorr-fib.js': ['coverage']
        },
        coverageReporter: {
            type: 'html',
            dir: '.karma-coverage/'
        },
        specReporter: {
            suppressErrorSummary: true
        }
    });
};
