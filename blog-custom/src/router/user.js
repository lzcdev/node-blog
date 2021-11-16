/*
 * @Author: jinqing
 * @Date: 2021-10-28 15:53:06
 * @LastEditors: jinqing
 * @LastEditTime: 2021-11-16 15:43:24
 * @Description: user
 */

const { loginCheck } = require('../controller/user');
const { SuccessModel, ErrorModel } = require('../model/resModel');

const handleUserRouter = (req, res) => {
  const method = req.method;

  if (method === 'POST' && req.path === '/api/user/login') {
    const { username, password } = req.body;
    console.log(1231)
    const result = loginCheck(username, password);
    return result.then((data) => {
      if (data.username) {
        return new SuccessModel();
      }
      return new ErrorModel('登录失败');
    });
  }
};

module.exports = handleUserRouter;
