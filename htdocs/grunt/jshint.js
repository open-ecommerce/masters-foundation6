'use strict';

module.exports = {
    options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
    },
    dist: {
        src: [
            'grunt/*.js',
            'Gruntfile.js',
            'src/js/*.js',
            '!src/js/select-custom*.js',
            '!src/js/SearchBrokerUI*.js'
        ]
    }
};