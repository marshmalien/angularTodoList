module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'lib/styles/main.css': 'src/styles/**/*.scss'
                }
            }
        },
        concat: {
          options: {
            separator: ';\n',
          },
          dist: {
            src: ['node_modules/angular/angular.min.js', 'node_modules/angular-local-storage/dist/angular-local-storage.min.js', 'node_modules/ng-inline-edit/dist/ng-inline-edit.min.js', 'src/js/**/*.js'],
            dest: 'lib/js/bundle.js'
          },
        },
        cssmin: {
          target: {
            files: {
              'lib/styles/bundle.css': ['lib/styles/reset.css', 'node_modules/ng-inline-edit/dist/ng-inline-edit.min.css', 'lib/styles/main.css']
            }
          }
        },
        watch: {
            css: {
                files: ['src/styles/**/*'],
                tasks: ['sass']
            },

            javascript: {
                files: [
                    'src/js/**/*'
                ],
                tasks: []
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', [
        'sass',
        'cssmin',
        'concat',
        'watch',
    ]);
};
