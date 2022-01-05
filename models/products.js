const mongoose=require("mongoose");
const Joi = require("@hapi/joi");

var productSchema=mongoose.Schema(
    {
        name:String,
        description:String,
        price:Number,
        imgSrc:String
    }

);
function validateProduct(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(15).required(),
    price: Joi.number().min(0).required(),
    description:Joi.string().min(3).required(),
        imgSrc:Joi.string().min(3).required()

  });
  return schema.validate(data, { abortEarly: false });
}
var Product=mongoose.model("Product",productSchema);
module.exports.Product = Product;
module.exports.validate = validateProduct;
