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
  config.sequelize = {
    dialect: 'mysql', // 表示使用mysql
    host: '127.0.0.1', // 连接的数据库主机地址
    port: 3306, // mysql服务端口
    database: '3d_hotel_development', // 数据库名
    username: 'root', // 数据库用户名
    password: '123456', // 数据库密码
    timezone: '+8:00', // 由于orm用的UTC时间，这里必须加上东八区，否则取出来的时间相差8小时
    define: { // model的全局配置
      timestamps: false, // 添加create,update,delete时间戳
      freezeTableName: true, // 防止修改表名为复数
      underscored: false, // 防止驼峰式字段被默认转为下划线
    },
    dialectOptions: { // 让读取date类型数据时返回字符串而不是UTC时间
      dateStrings: true,
      typeCast(field, next) {
        if (field.type === 'DATETIME') {
          return field.string();
        }
        return next();
      },
    },
  };
  config.jwt = {
    secret: '123456',	// 自定义token的加密条件字符串，可按各自的需求填写
  };
  config.host = 'http://localhost:7001';
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
