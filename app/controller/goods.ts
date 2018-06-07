import { Controller } from "egg";

interface GoodInstance {
  actualCurrentPrice: number | null;
  goodsId: number | null;
  title: number | null;
  [propName: string]: any;
}

export default class GoodsController extends Controller {
  public async index() {
    const { ctx } = this;
    const { page = 1, perpage = 20 } = ctx.query;
    const goods: GoodInstance = await ctx.model.Goods.find({}, null, {
      limit: perpage,
      skip: (page - 1) * perpage,
      sort: {
        _id: -1
      }
    });
    ctx.body = goods;
  }

  public async addLike() {}
}
