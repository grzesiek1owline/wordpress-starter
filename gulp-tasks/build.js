module.exports = function (done) {
  const gulp = this.gulp;

  return gulp.series('clean', gulp.parallel('static:wordpress', 'static:scripts', 'static:styles', 'static:images', 'static:svg', 'copy'))(done);
};
