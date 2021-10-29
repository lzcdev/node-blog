/*
 * @Author: jinqing
 * @Date: 2021-10-28 15:53:06
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-29 12:01:20
 * @Description: user
 */

const { loginCheck } = require('../controller/user');
const { SuccessModel, ErrorModel } = require('../model/resModel');

const handleUserRouter = (req, res) => {
  const method = req.method;

  if (method === 'POST' && req.path === '/api/user/login') {
    const { username, password } = req.body;
    const result = loginCheck(username, password)
    if(result) {
      return new SuccessModel(result)
    } else {
      return new ErrorModel('登录失败')
    }
  }
};

module.exports = handleUserRouter;
