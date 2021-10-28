/*
 * @Author: jinqing
 * @Date: 2021-10-28 11:55:42
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-28 14:28:23
 * @Description: app
 */

const serverHandle = ((req, res) => {
  res.setHeader('Content-type', 'application/json')

  const resData = {
    name: 'lzc',
    site: 'mooc',
    env: process.env.NODE_ENV
  }

  res.end(JSON.stringify(resData))
})

module.exports = serverHandle