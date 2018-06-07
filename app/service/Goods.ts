import { Service } from 'egg';

interface GoodInstance {
  actualCurrentPrice: number | null;
  goodsId: number | null;
  title: number | null;
  [propName: string]: any;
}

export default class Goods extends Service {
  public async findGoods(page: number, perpage: number) {
    const { ctx } = this;
    const goods: GoodInstance = await ctx.model.Goods.find({}, null, {
      limit: perpage,
      skip: (page - 1) * perpage,
      sort: {
        _id: -1
      }
    });
    return goods;
  }
}
