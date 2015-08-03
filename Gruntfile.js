module.exports = function(grunt) {

require('time-grunt')(grunt);
require('load-grunt-tasks')(grunt);

grunt.initConfig({

pkg: grunt.file.readJSON('package.json'),

  // CSS Build
  postcss: {
    options: {
      map: {
          inline: false, 
          annotation: 'dist/css/maps/'
      },
      processors: [
        require('postcss-import')(),
        require('postcss-simple-vars')(),
        require('pixrem')(),
        require('postcss-color-function')(),
        require('postcss-color-rgba-fallback')(),
        require('postcss-simple-extend')(),
        require('postcss-nested')(),
        require('postcss-merge-rules')(),
        require('postcss-center')(),
        require('autoprefixer-core')('last 1 version'),
        require('postcss-discard-comments')({removeAll: true}),
        // require('cssnano')()
        ]
    },
    dist: {
      src: 'css/main.css',
      dest: 'build/css/styles.css'
        }
    },

    //Javascript build 
    jshint: {
      all: ['Gruntfile.js', 'js/*.js', '!js/grunticon-load.js',]
    },
    concat: {
      basic: {
        src: ['js/grunticon-load.js', 'js/fizz-buzz.js','js/run-slick.js'],
        dest: 'build/js/custom-build.js',
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> <%= grunt.template.today("longTime") %> */\n'
      },
      build: {
        src: 'build/js/custom-build.js',
        dest: 'build/js/custom-build.min.js'
      }
    }, 

    // SVG and fallback build - Grunticon
    grunticon: {
      projectIcons: {
        files: [{
            expand: true,
            cwd: 'icons/svg',
            src: ['*.svg', '*.png'],
            dest: "build/svg"
        }],
        options: {
        }
      }
    }

});

grunt.registerTask('default', ['postcss', 'jshint', 'concat', 'uglify', 'grunticon:projectIcons']);

};

