/*
 * @Author: jinqing
 * @Date: 2021-10-28 11:55:42
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-28 16:38:16
 * @Description: app
 */

const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');
const querystring = require('querystring')

const serverHandle = (req, res) => {
  res.setHeader('Content-type', 'application/json');

  const url = req.url;
  req.path = url.split('?')[0];

  req.query = querystring.parse(url.split('?')[1])

  // 处理 blog 路由
  const blogData = handleBlogRouter(req, res);
  if (blogData) {
    res.end(JSON.stringify(blogData));
    return;
  }

  const userData = handleUserRouter(req, res);
  if (userData) {
    res.end(JSON.stringify(userData));
    return;
  }

  // 未命中路由，返回404
  res.writeHead(404, {"Content-tyoe": "text/plain"})
  res.write('404 NOT Found\n')
  res.end()
};

module.exports = serverHandle;
