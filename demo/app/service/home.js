'use strict';
const Service = require('egg').Service;
class HomeService extends Service {
  // 默认不需要提供构造函数。
  // constructor(ctx) {
  //   super(ctx); 如果需要在构造函数做一些处理，一定要有这句话，才能保证后面 `this.ctx`的使用。
  //   // 就可以直接通过 this.ctx 获取 ctx 了
  //   // 还可以直接通过 this.app 获取 app 了
  // }
  async find(code) {
    // const user = await this.ctx.db.query('select * from user where uid = ?', uid);
    const user = await this.getUserInfo(code);
    if (!user) {
      return false;
    }
    return user;
  }
  async getUserInfo(code) {
    // const result = await this.ctx.curl(`http://photoserver/uid=${uid}`, { dataType: 'json' });
    const result = {
      code: code,
      data: {
        userName: 'leo',
        sex: '0',
        age: 28,
        code: code,
      },
    };
    if (result.code !== 200) {
      return `url接收的query中的code为${code}travis成功了`;
    }
    return result.data;
  }
}
module.exports = HomeService;
