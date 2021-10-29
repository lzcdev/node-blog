/*
 * @Author: jinqing
 * @Date: 2021-10-28 16:28:25
 * @LastEditors: jinqing
 * @LastEditTime: 2021-10-28 19:38:06
 * @Description: blog
 */

const getList = (auth, keyword) => {
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createTime: 1635409813717,
      author: 'zhangsan',
    },
    {
      id: 2,
      title: '标题B',
      content: '内容B',
      createTime: 1635409870651,
      author: '李四',
    },
    {
      id: 3,
      title: '标题C',
      content: '内容C',
      createTime: 1635409896586,
      author: '王五',
    },
  ];
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
  return false
};
module.exports = { getList, getDetail, newBlog, updateBlog };
