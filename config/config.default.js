/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_yes';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 定义版本号
  config.version = 'v1';
  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: '123456',
      // database
      database: '3d_hotel_development',
    },
    // load into app,default is open //加载到应用程序，默认为打开
    app: true,
    // load into agent,default is close //加载到代理中，默认值为“关闭”
    agent: false,
  };
  config.jwt = {
    secret: '123456',	// 自定义token的加密条件字符串，可按各自的需求填写
  };
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [ 'http://localhost:7001' ], // 允许访问接口的白名单
  };
  config.cors = {
    origin: '*', // 解决跨域问题
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  return {
    ...config,
    ...userConfig,
  };
};
