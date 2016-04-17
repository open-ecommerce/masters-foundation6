'use strict';

module.exports = {
    options: {
        livereload: true
    },
    scripts: {
        files: ['src/js/*.js'],
        tasks: [
            'jshint',
            'concat',
            'uglify'
        ]
    },
    compass: {
        files: ['src/assets/scss/**/*.scss'],
        tasks: [
            'clean:distCss',
            'clean:distJs',
            'replace',
            'concat',
            'copy',
            'rename',
            'compass',
            'autoprefixer',
            'cssmin',
            'modernizr',
            'clean:src'
        ]
    }
};
