'use strict';

module.exports = {
    src: {
        files: [{
            dot: true,
            src: [
                '.sass-cache',
                '.tmp'
            ]
        }]
    },
    distJs: {
        files: [{
            dot: true,
            src: 'js'
        }]
    },
    distCss: {
        files: [{
            dot: true,
            src: [
                'css/styles.css',
                'css/blessed'
            ]
        }]
    },
    distMdicons: {
        files: [{
            dot: true,
            src: [
                'md-icons/material-design-iconic-font.css'
            ]
        }]
    }
};
