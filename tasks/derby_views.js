/*
 * grunt-derby-views
 * 
 *
 * Copyright (c) 2014 Artur Zayats
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  var derbyViews = require('derby-views');
  var async = require('async');
  var path = require('path');

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('derby_views', 'Derby-standalone templates serializer', function () {
    var self = this;

    var done = this.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      minify: true,
      moduleName: 'views',
      cwd: process.cwd()
    });

    // Iterate over all specified file groups.
    async.forEachSeries(this.files, function (file, cb) {

      var src = file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });


      derbyViews(src, options, function(err, res){
        if (err) {
          return cb(err);
        }

        if (file.dest.charAt(0) !== '/') {
          if (options.cwd.charAt(0) !== '/') {
            file.dest = path.join(process.cwd(), options.cwd, file.dest);
          } else {
            file.dest = path.join(options.cwd, file.dest);
          }
        }

        grunt.file.write(file.dest, res);
        grunt.log.writeln('File "' + file.dest+'" was created');
        cb();
      });

    }, done);

  });

};
