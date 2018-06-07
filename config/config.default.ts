import { EggAppConfig, PowerPartial } from 'egg';
import * as path from 'path';
// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>;

// app special config scheme
export interface BizConfig {
  sourceUrl: string;
}

export default (appInfo: EggAppConfig) => {
  const config = {} as PowerPartial<EggAppConfig> & BizConfig;

  // app special config
  config.sourceUrl = `https://github.com/eggjs/examples/tree/master/${
    appInfo.name
  }`;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1527132858644_299';

  // add your config here
  config.middleware = [];

  config.view = {
    defaultViewEngine: 'nunjucks',
  };

  config.static = {
    prefix: '',
    dir: path.join(appInfo.baseDir, 'app/view'),
  };

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017/kaola',
      options: {},
    }
  };

  return config;
};
