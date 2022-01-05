const express=require("express");
const router=express.Router();
const {Product}=require("../../models/products");
const validateProduct = require("../../middlewares/validateProduct");
const { response } = require("../../app");

router.get("/cart/:id", async function (req, res, next) {
  let product = await Product.findById(req.params.id);
  console.log("Add This Product in cart/"+req.params.id);
  let cart = [];
  if (req.cookies.cart) cart = req.cookies.cart;
  cart.push(product);
  console.log("added to cart");
  res.cookie("cart",cart);
  res.send(cart);
  
});

router.get("/cart/remove/:id", async function (req, res, next) {
  let cart = [];
  if (req.cookies.cart) cart = req.cookies.cart;
  cart.splice(
    cart.findIndex((c) => c._id == req.params.id),
    1
  );
  res.cookie("cart", cart);
  res.send(cart);
});

router.get("/cart", async function (req, res, next) {
  let cart =req.cookies.cart;
  if (!cart) cart = [];
  console.log({cart});
    res.send({cart});
});


//To get all products
router.get("/",async (req,res)=>{
     let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let products = await Product.find().skip(skipRecords).limit(perPage);
    return res.send(products);
});

//To get the single product by id
router.get("/:id",async (req,res)=>{
    try {
        let product=await Product.findById(req.params.id);
        if(!product)  return res.send("Product with this ID not found").status(400);
        return res.send(product);
    } catch (err) {
        return res.send("INVLAID ID").status(400);
    }
});
//To UPdate the single product by id
router.put("/:id",validateProduct,async (req,res)=>{
    try {
        let product=await Product.findById(req.params.id);
        if(!product)  return res.send("Product with this ID not found").status(400);
        product.name=req.body.name;
        product.price=req.body.price;
        product.description=req.body.description;
        product.imgSrc=req.body.imgSrc;
        await product.save();
        return res.send(product);
    } catch (err) {
        return res.send("INVLAID ID").status(400);
    }
});
//To delete the single product by id
router.delete("/:id",async (req,res)=>{
    try {
        let product=await Product.findByIdAndDelete(req.params.id);
        return res.send(product);
    } catch (err) {
        return res.send("INVLAID ID").status(400);
    }
});

//To create new product by id
router.post("/", validateProduct,async (req,res)=>{
        let product=new Product();
        product.name=req.body.name;
        product.price=req.body.price;
        product.description=req.body.description;
        product.imgSrc=req.body.imgSrc;
        await product.save();
        return res.send(product);
   
});



module.exports=router;