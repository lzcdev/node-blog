/*
 * @Author: jinqing
 * @Date: 2021-10-29 11:58:23
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-29 12:02:13
 * @Description: user
 */

const loginCheck = (username, password) => {
  if (username === 'zhangsan' && password === '123') {
    return true;
  }
  return false;
};

module.exports = { loginCheck };
