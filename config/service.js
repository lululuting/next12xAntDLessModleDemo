// 区分环境
const isProd =  process.env.NODE_ENV === 'production';
const ipUrl =  isProd ? 'https://lululuting.com/default/' : 'http://dev.lululuting.com/default/';

export default {
  uploadQiniu: 'https://upload-z2.qiniup.com',          // 上传七牛
};
