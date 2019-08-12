module.exports = function (grunt) {

  var source = ['Gruntfile.js', 'src/**/*.js'];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bumpup: ['package.json'],
    shunt: {
      build: {
        'dist/sdk.js': [
          'lib/hello.js',
          'lib/simplelogin.js',
          'src/main.js',
        ]
      }
    },
    uglify: {
      minify: {
        files: {
          'dist/sdk.min.js': ['dist/sdk.js'],
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-bumpup');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('shunt');

  grunt.registerTask('deploy', ['shunt:build', 'uglify:minify', 'bumpup',]);
  grunt.registerTask('default', ['shunt:build', 'uglify:minify']);
};
