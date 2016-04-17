'use strict';

module.exports = {
    css: {
        options: {
            imports: false,
            cacheBuster: true
        },
        files: [{
            expand: true,
            cwd: 'css/',
            src: ['styles.css'],
            dest: 'css/blessed',
            ext: '.css'
        }]
    }
};