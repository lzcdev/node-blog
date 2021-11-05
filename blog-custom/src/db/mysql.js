/*
 * @Author: jinqing
 * @Date: 2021-11-02 17:03:34
 * @LastEditors: jinqing
 * @LastEditTime: 2021-11-05 17:22:55
 * @Description: mysql
 */

const mysql = require('mysql');
const MYSQL_CONF = require('../conf/db');

const con = mysql.createConnection(MYSQL_CONF);
con.connect();

const exec = (sql) => {
  return new Promise((resolve, reject) => {
    con.query(sql, (err, res) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(res);
    });
  });
};

module.exports = { exec };
