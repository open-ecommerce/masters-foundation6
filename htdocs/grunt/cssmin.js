'use strict';

module.exports = {
    dist: {
        expand: true,
        cwd: 'css',
        src: 'styles.css',
        dest: 'css',
        ext: '.css'
    },
    distMdicons: {
        expand: true,
        cwd: 'mdicons',
        src: 'material-design-iconic-font.css',
        dest: 'mdicons',
        ext: '.css'
    }    
};