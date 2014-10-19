# grunt-derby-views

> Derby-standalone templates serializer

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-derby-views --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-derby-views');
```

## The "derby_views" task

### Overview
In your project's Gruntfile, add a section named `derby_views` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  derby_views: {
    default: {
      options: {
        // Task-specific options go here.
      },
      files: {
        // Target-specific file lists and/or options go here.
      }
    }
  }
})
```

### Options

#### options.minify
Type: `Boolean`
Default value: `true`

#### options.moduleName
Type: `String`
Default value: `views`

Name of the resulting module (you should use it in your derby-app like this require('moduleName'))

#### options.cwd
Type: `String`
Default value: `Gruntfile dir`

Base dir.

#### options.compilers
Type: `Object`
Default value: `{}`

Hash of compilers. For example: `{'.jade': require('derby-jade')}`

### Usage Examples

#### Default Options
In this example, the default options are used to serialize derby-templates. 
Additional `watch`-task is used to live-reload.  

```js
module.exports = function (grunt) {

  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    derby_views: {
      default: {
        options:{
          cwd: 'example'
        },
        files: {
          'views.js': ['views/templates.html']
        }
      }
    },
    watch: {
      css: {
        files: 'example/views/templates.html',
        tasks: ['derby_views'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-derby-views');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['derby_views', 'watch']);

};```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Artur Zayats. Licensed under the MIT license.
