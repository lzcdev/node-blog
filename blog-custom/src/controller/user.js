/*
 * @Author: jinqing
 * @Date: 2021-10-29 11:58:23
 * @LastEditors: jinqing
 * @LastEditTime: 2021-11-16 15:35:45
 * @Description: user
 */

const { exec } = require('../db/mysql')

const loginCheck = (username, password) => {
  const sql = `
    select username, realname from users where username='${username}' and password ='${password}'
  `
  return exec(sql).then(rows => {
    return rows[0] || {}
  })
};

module.exports = { loginCheck };
