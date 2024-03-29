/*
 * @Author: jinqing
 * @Date: 2021-10-28 15:53:13
 * @LastEditors: jinqing
 * @LastEditTime: 2021-11-05 17:45:21
 * @Description: blog
 */

const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');

const handleBlogRouter = (req, res) => {
  const method = req.method;
  const id = req.query.id;

  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || '';
    const keyword = req.query.keyword || '';
    // const listData = getList(author, keyword);
    // return new SuccessModel(listData);
    const result = getList(author, keyword);
    return result.then((listData) => {
      return new SuccessModel(listData);
    });
  }

  if (method === 'GET' && req.path === '/api/blog/detail') {
    // const data = getDetail(id);
    // return new SuccessModel(data);
    const result = getDetail(id);
    return result.then((data) => {
      return new SuccessModel(data);
    });
  }

  if (method === 'POST' && req.path === '/api/blog/new') {
    // const data = newBlog(req.body);
    req.body.author = 'lzc';
    const result = newBlog(req.body);
    return result.then((data) => {
      return new SuccessModel(data);
    });
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
    const result = delBlog(id);
    if (result) {
      return new SuccessModel(result);
    } else {
      return new ErrorModel('删除博客失败');
    }
  }
};

module.exports = handleBlogRouter;
