module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ["app/js/lib"],

    uglify: {
      js: {
        files: {
          'app/js/lib/require.js': [
            'node_modules/requirejs/require.js'
          ],
          'app/js/lib/text.js': [
            'node_modules/requirejs-text/text.js'
          ]
        }
      }
    },

    copy: {
      js: {
        files: [
          { 
             expand: true, 
             cwd: 'node_modules/underscore', 
             src: 'underscore-min.map', 
             dest: 'app/js/lib' 
          },
          { 
             expand: true, 
             cwd: 'node_modules/backbone', 
             src: 'backbone-min.map', 
             dest: 'app/js/lib' 
          },
          { 
             expand: true, 
             cwd: 'node_modules/jquery/dist', 
             src: 'jquery.min.js', 
             dest: 'app/js/lib' 
          },
          { 
             expand: true, 
             cwd: 'node_modules/jquery/dist', 
             src: 'jquery.min.map', 
             dest: 'app/js/lib' 
          },
          { 
             expand: true, 
             cwd: 'node_modules/underscore', 
             src: 'underscore-min.js', 
             dest: 'app/js/lib' 
          },
          { 
             expand: true, 
             cwd: 'node_modules/backbone/', 
             src: 'backbone-min.js', 
             dest: 'app/js/lib' 
          },
          { 
             expand: true, 
             cwd: 'node_modules/iso-3166-country-list/', 
             src: 'country-list.js', 
             dest: 'app/js/lib' 
          },
          { 
             expand: true, 
             cwd: 'node_modules/jquery-serializejson/', 
             src: 'jquery.serializejson.min.js', 
             dest: 'app/js/lib' 
          }
        ]
      }
    },

    // --------------------------------------
    // Sass Configuration
    // --------------------------------------

    sass: {
      options: {
        loadPath: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          sourcemap: 'none',
          style: 'nested'
        },
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['*.scss'],
          dest: 'app/css',
          ext: '.css'
        }]
      }
    }
  });

  grunt.registerTask('build', function(target) {
    grunt.task.run('clean');
    grunt.task.run('uglify');
    grunt.task.run('copy');
  });

  // -----------------------------------------
  // Load Grunt tasks
  // -----------------------------------------

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // -----------------------------------------
  // Register Grunt tasks
  // -----------------------------------------
  grunt.registerTask('buildCss', ['sass']);
  grunt.registerTask('default',  ['buildCss']);

};