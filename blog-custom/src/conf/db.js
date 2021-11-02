/*
 * @Author: jinqing
 * @Date: 2021-11-02 16:59:19
 * @LastEditors: jinqing
 * @LastEditTime: 2021-11-02 17:02:23
 * @Description: db
 */

const env = process.env.NODE_ENV;

let MYSQL_CONF;

if (env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'myblog',
  };
}

if (env === 'production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'myblog',
  };
}

module.exports = MYSQL_CONF;
