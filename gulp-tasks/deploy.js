const newer = require('gulp-newer');

module.exports = function () {
  const { files } = this.context;
  const gulp = this.gulp;

  return gulp.src(`${files.theme.source}`, { nodir: true })
             .pipe(newer(files.theme.destination))
             .pipe(gulp.dest(files.theme.destination));
};
