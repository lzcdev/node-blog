/*
 * @Author: jinqing
 * @Date: 2021-10-28 16:28:25
 * @LastEditors: jinqing
 * @LastEditTime: 2021-11-05 17:48:21
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
  const sql = `select * from blogs where id='${id}'`;
  return exec(sql).then((rows) => {
    return rows[0];
  });
};

const newBlog = (blogData = {}) => {
  const { title, content, author } = blogData;
  const createTime = Date.now();

  const sql = `
  insert into blogs (title, content, createTime, author)
  values ('${title}', '${content}', '${createTime}', '${author}')
  `;
  return exec(sql).then((insertData) => {
    return {
      id: insertData.insertId,
    };
  });
};

const updateBlog = (id, blogData = {}) => {
  return true;
};

const delBlog = (id) => {
  return true;
};
module.exports = { getList, getDetail, newBlog, updateBlog, delBlog };
