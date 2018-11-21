const util = require('gulp-util');

const WP_PATH = 'C:\\Users\\dsync\\Desktop\\praca\\wordpress';

const DIRS = {
  source: `./source`,
  public: `./public`,
  build: `./theme`,
  theme: `${WP_PATH}/wp-content/themes/theme`,
};

const FILES = {
  images: {
    source: `${DIRS.public}/images/**/*`,
    destination: `${DIRS.build}/assets/images/`,
  },
  svg: {
    source: `${DIRS.public}/svg/**/*`,
    destination: `${DIRS.build}/assets/images/`,
  },
  styles: {
    source: `${DIRS.source}/styles/styles.scss`,
    watch: `${DIRS.source}/styles/**/*`,
    destination: `${DIRS.build}/assets/styles/`,
  },
  scripts: {
    source: `${DIRS.source}/scripts/index.js`,
    watch: `${DIRS.source}/scripts/**/*`,
    destination: `${DIRS.build}/assets/scripts/`,
  },
  copy: {
    source: [`${DIRS.public}/**/*`, `!${DIRS.public}/images/**/*`, `!${DIRS.public}/svg/**/*`],
    destination: `${DIRS.build}/assets/`,
  },
  wordpress: {
    source: `${DIRS.source}/wordpress/**/*`,
    destination: `${DIRS.build}`,
  },
  theme: {
    source: `${DIRS.build}/**/*`,
    destination: `${DIRS.theme}`,
  },
};

require('gulp-load-all-tasks')({
  dirs: DIRS,
  files: FILES,
  wp: WP_PATH,
  production: !!util.env.production
});
