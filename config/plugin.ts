import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  // assets: {
  //   enable: true,
  //   package: 'egg-view-assets',
  // },
  static: {
    enable: true,
    package: 'egg-static',
  },
};

export default plugin;
