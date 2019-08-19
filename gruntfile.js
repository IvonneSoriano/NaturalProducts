// Load Grunt
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Tasks
    less: {
      development: {
        options: {
          compress: true
        },
        files: {
          "css/style.css": "less/style.less" // destination file and source file
        }
      }
    },

    watch: { // Compile everything into one task with Watch Plugin
      css: {
        files: '**/*.less',
        tasks: ['less']
      },
      //js: {
      //  files: '**/*.js',
      //  tasks: ['uglify']
      //}
    }
  });

  // Load Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  // grunt.loadNpmTasks('grunt-postcss');
  // grunt.loadNpmTasks('grunt-contrib-cssmin');grunt
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register Grunt tasks
  grunt.registerTask('default', ['watch']);
};