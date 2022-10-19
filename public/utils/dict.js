/*
 * @Author: TingGe
 * @Date: 2021-05-26 14:14:18
 * @LastEditTime: 2022-02-21 16:34:41
 * @LastEditors: TingGe
 * @Description: 字典 懂的都懂
 * @FilePath: /ting_ge_blog/public/utils/dict.js
 */
import _ from 'lodash';


const yes_no_dict = {
  // 通用是否的字典
  yes: 1,
  ___yes: '是',
  no: 0,
  ___no: '否'
};

// 用大写会合适一点， 但小写可读性高
export const dict = {
  searchType: {
    article: 'article',
    user: 'user',
    ___article: '文章',
    ___user: '用户'
  },
  articleType: {
    all: 0,
    skill: 1,
    photography: 2,
    life: 3,
    ___all: '全部',
    ___skill: '技术',
    ___photography: '摄影',
    ___life: '生活'
  },
  articleSort: {
    ...yes_no_dict,
    ___no: '按时间',
    ___yes: '按热门'
  },
  articleStatus: {
    ...yes_no_dict,
    ___no: '公开',
    ___yes: '隐藏',
    frozen: 2,
    ___frozen: '冻结'
  },
  // 1普通博主 23普通用户
  auth: {
    user: 3,
    blogger: 1,
    super: 2,
    ___user: '普通用户',
    ___blogger: '普通博主',
    ___super: '超级管理员 '
  },
  bannerType: {
    rotation: 3,
    recommend: 2,
    advertisement: 1,
    home: 4,
    list: 5,
    detail: 6,
    search: 7,
    msg: 8,
    release: 9,
    ___rotation: '轮播',
    ___recommend: '推荐',
    ___advertisement: '广告',
    ___home: '首页',
    ___list: '列表页',
    ___detail: '详情页',
    ___search: '搜索页',
    ___msg: '消息页',
    ___release: '发布页'
  }
};

/**
 * @description: 字典变数组
 * @param { path } 相对于dict的路径
 * @return { result}
 */
export const dictToArr = (path) => {
  const strKey = '___'; // 约定字典变量 为 ___ 开头；
  const dictObj = _.get(dict, path, []);
  let result = [];
  for (const [k] of _.entries(dictObj)) {
    if (dictObj[`${strKey}${k}`]) {
      result.push({
        label: dictObj[`${strKey}${k}`],
        value: dictObj[k.replace(strKey, '')]
      });
    }
  }
  return result;
};


/**
 * @description: 编译字典/反编译字典（isRe）
 * @param { path, value isRe}
 * @return { result }
 */
export const filtersDict = (path, value, isRe) => {
  const strKey = '___'; // 约定字典变量 为 ___ 开头；
  const dictObj = _.get(dict, path, []);
  let result;

  for (const [k, v] of _.entries(dictObj)) {
    if (isRe) {
      if (v === value) {
        result = dictObj[k.replace(strKey, '')];
      }
    } else {
      if (v === value) {
        result = dictObj[`${strKey}${k}`];
      }
    }
  }
  return result;
};
