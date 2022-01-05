import axios from 'axios';
import React from 'react';
  import { toast } from 'react-toastify';
const Cart = () => {
     function getData(){
       axios.get('http://localhost:5000/api/products/cart',{withCredentials:true}).then((res)=>{
            console.log(res.data.cart);
           setItems(res.data.cart);
        }).catch((err)=>{
            console.log(err);
        });
    }
    function removeItem(_id){
      {axios.get("http://localhost:5000/api/products/cart/remove/"+_id,{withCredentials:true}).then(res=>{
         console.log(res);
        // window.location.reload();
             toast.success("Item removed fom Cart", {
        position: toast.POSITION.TOP_CENTER
      });
       }).catch(err=>console.log(err.message))}
    }
    const [items,setItems]=React.useState([]);
   React.useEffect(getData,[]);
    return ( <div id='page' className='container'>
      <h1>My orders</h1>
        <table className="table shadow-lg">
  <thead>
    <tr>
      <th scope="col">Item name</th>
      <th scope="col">Price</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    
     { items.map(item=>
       <tr>
       <td>{item.name}</td>
       <td>{item.price}</td>
       <td><input type="button" value="Remove" className='btn btn-danger' onClick={e=>{removeItem(item._id)}}/></td>
       </tr>
     )}
   
    
  </tbody>
</table>
    </div> );
}
 
export default Cart;