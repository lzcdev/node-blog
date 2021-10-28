/*
 * @Author: jinqing
 * @Date: 2021-10-28 15:53:13
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-28 16:35:55
 * @Description: blog
 */

const { getList } = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');

const handleBlogRouter = (req, res) => {
  const method = req.method;

  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author;
    const keyword = req.query.keyword;
    const listData = getList(author, keyword);
    return new SuccessModel(listData)
  }

  if (method === 'GET' && req.path === '/api/blog/detail') {
    return {
      msg: '这是获取博客详情的接口',
    };
  }

  if (method === 'POST' && req.path === '/api/blog/new') {
    return {
      msg: '这是新建博客的接口',
    };
  }

  if (method === 'POST' && req.path === '/api/blog/update') {
    return {
      msg: '这是更新博客的接口',
    };
  }

  if (method === 'POST' && req.path === '/api/blog/delete') {
    return {
      msg: '这是删除博客的接口',
    };
  }
};

module.exports = handleBlogRouter;
