'use strict';

module.exports = function(grunt)
{
    require('time-grunt')(grunt);
    // require('load-grunt-config')(grunt);

    /**
     * Custom config if you want to use jit-grunt as your task loader.
     * 
     * You also need to open `node_modules/load-grunt-config/index.js`,
     * go to line 40, and change this:
     *
     * require('load-grunt-tasks')(grunt, opts.loadGruntTasks);
     *
     * To this:
     *
     * require('jit-grunt')(grunt, opts.loadGruntTasks);
     */
    
    require('load-grunt-config')(grunt, {
        loadGruntTasks: {
            replace: 'grunt-text-replace'
        }
    });
};