import GenericService from "./GenericService";
class CartService extends GenericService {
  constructor() {
    super();
  }
  addProductToCart = (_id) => this.get("products/cart/"+_id);
  deleteProduct = (_id) => this.delete("products/" + _id);
  updateProduct = (_id, data) => this.put("products/" + _id, data);
  getProducts = () => this.get("products/cart");
  getSingleProduct = (id) => this.get("products/" + id);
}

let cartService = new CartService();
export default cartService;
