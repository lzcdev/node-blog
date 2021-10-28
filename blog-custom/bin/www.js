/*
 * @Author: jinqing
 * @Date: 2021-10-28 11:55:36
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-28 12:03:44
 * @Description: www
 */

const http = require('http')

const PORT = 8000
const serverHandle = require('../app')

const server = http.createServer(serverHandle)
server.listen(PORT, () => {
  console.log(`The site running at port ${PORT}`)
})

