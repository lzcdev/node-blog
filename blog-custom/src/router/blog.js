/*
 * @Author: jinqing
 * @Date: 2021-10-28 15:53:13
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-28 19:39:05
 * @Description: blog
 */

const { getList, getDetail, newBlog, updateBlog } = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');

const handleBlogRouter = (req, res) => {
  const method = req.method;
  const id = req.query.id;

  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author;
    const keyword = req.query.keyword;
    const listData = getList(author, keyword);
    return new SuccessModel(listData);
  }

  if (method === 'GET' && req.path === '/api/blog/detail') {
    const data = getDetail(id);
    return new SuccessModel(data);
  }

  if (method === 'POST' && req.path === '/api/blog/new') {
    const data = newBlog(req.body);
    return new SuccessModel(data);
  }

  if (method === 'POST' && req.path === '/api/blog/update') {
    const result = updateBlog(id, req.body);
    if (result) {
      return new SuccessModel(result);
    } else {
      return new ErrorModel('更新博客失败');
    }
  }

  if (method === 'POST' && req.path === '/api/blog/delete') {
    return {
      msg: '这是删除博客的接口',
    };
  }
};

module.exports = handleBlogRouter;
