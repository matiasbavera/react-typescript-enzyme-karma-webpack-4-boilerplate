const testWebpackConfig = require('./config/webpack.test.js')({env: 'test'});

module.exports = config => {
    config.set({

        frameworks: ['jasmine'],

        files: [
            { pattern: 'test/**/*.+(tsx|ts)' },
            { pattern: 'test/**/*.json', included: false, served: true},
        ],

        preprocessors: {
            // add webpack as preprocessor
            'src/**/*.tsx': ['sourcemap'],
            'test/**/*.tsx': ['webpack', 'sourcemap']
        },

        webpack: testWebpackConfig,

        coverageReporter: {
            reporters:[
                {type: 'html', dir:'coverage/'}, 
                {type: 'text'},
                {type: 'text-summary'}
            ],
        },

        // Webpack please don't spam the console when running in karma!
        webpackMiddleware: {
            quiet: true,
            stats: {
                colors: true
            }
        },

        reporters: ['progress', 'coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: true,
    });
};

