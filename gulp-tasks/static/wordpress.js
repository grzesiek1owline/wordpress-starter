const newer = require('gulp-newer');

module.exports = function () {
  const { files } = this.context;
  const gulp = this.gulp;

  return gulp.src(files.wordpress.source, { nodir: true })
             .pipe(newer(files.wordpress.destination))
             .pipe(gulp.dest(files.wordpress.destination));
};
