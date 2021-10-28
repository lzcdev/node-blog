/*
 * @Author: jinqing
 * @Date: 2021-10-28 15:53:06
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-28 16:12:38
 * @Description: user
 */

const handleUserRouter = (req, res) => {
  const method = req.method;

  if (method === 'POST' && req.path === '/api/user/login') {
    return {
      msg: '这是登录接口',
    };
  }
};

module.exports = handleUserRouter;
