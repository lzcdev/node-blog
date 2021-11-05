/*
 * @Author: jinqing
 * @Date: 2021-10-28 16:28:25
 * @LastEditors: jinqing
 * @LastEditTime: 2021-11-05 17:10:04
 * @Description: blog
 */

const { exec } = require('../db/mysql');

const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `;
  if (author) {
    sql += `and author='${author}' `;
  }
  if (keyword) {
    sql += `and title like '%${keyword}' `;
  }
  sql += `order by createtime desc;`;
  return exec(sql);
};

const getDetail = (id) => {
  return {
    id: 1,
    title: '标题A',
    content: '内容A',
    createTime: 1635409813717,
    author: 'zhangsan',
  };
};

const newBlog = (blogData = {}) => {
  return {
    id: 3,
  };
};

const updateBlog = (id, blogData = {}) => {
  return true;
};

const delBlog = (id) => {
  return true;
};
module.exports = { getList, getDetail, newBlog, updateBlog, delBlog };
