const { exec } = require('child_process');
const browserSync = require('browser-sync').create();

module.exports = function (done) {
  const { wp, files } = this.context;
  const gulp = this.gulp;

  const browsersyncConfig = {
    notify: false,
    files: [`${files.theme.destination}`],
    proxy: '127.0.0.1:3002',
  };

  exec(`php -S ${browsersyncConfig.proxy} -t ${wp}`);
  gulp.watch(`${files.theme.source}`, gulp.series('deploy'));
  browserSync.init(browsersyncConfig, done);
};
