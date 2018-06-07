export default (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const GoodsSchema = new Schema({
    title: String,
    actualCurrentPrice: Number,
    goodsId: Number,
    imageUrl: String,
    interestLabels: String,
    marketPrice: Number,
    discount: Number,
    isCollected: Boolean
  });
  return mongoose.model("goods", GoodsSchema);
}
