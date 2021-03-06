
var gulp = require('gulp'),  
  pug = require('gulp-pug'),
  sass = require('gulp-sass');

var pugFiles = 'templates/pug/**/*.pug',
  htmlDest = '.'
// run this task by typing in gulp pug in CLI
gulp.task('pug', function() {  
  return gulp.src(pugFiles)
      .pipe(pug({
          pretty : true
      }
      )) // pipe to pug plugin
      .pipe(gulp.dest(htmlDest)); // tell gulp our output folder
//      done();
});
gulp.task('watch:pug', function(){
  return gulp.watch(pugFiles, gulp.series('pug'));
//  done();
});

var sassFiles = 'templates/sass/**/*.scss',
    cssDest = 'styles/';
gulp.task('sass', function(){
    gulp.src(sassFiles)
        .pipe(sass({
          outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
//  done();
});
gulp.task('watch:sass', function(){
  return gulp.watch(sassFiles, gulp.series('sass'));
//  done();
});

gulp.task('default', gulp.parallel('watch:sass', 'sass', 'watch:pug', 'pug'));