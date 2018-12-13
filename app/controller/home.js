'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let code = 200;
    if (this.ctx.query.code) {
      code = this.ctx.query.code;
    }
    this.ctx.body = await this.ctx.service.home.find(code);
    // this.ctx.body = this.ctx.query;
  }
  async userId() {
    let id = this.ctx.params.id;
    this.ctx.body = id;
  }
}

module.exports = HomeController;
