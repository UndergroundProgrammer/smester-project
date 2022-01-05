import axios from 'axios';
import React from 'react';
import userService from '../services/UserService';
  import { toast } from 'react-toastify';

const Login = () => {
  const [email,setEmail]=React.useState("");
  const [password,setPassword]=React.useState("");
    return ( <div>
        <div className="container shadow-lg col-lg-4 col-md-5 col-sm-7 col-9" id="Login"> 
        <h2 className="text-center md-6 signUpText">Login</h2>   
        <div className="row justify-content-center">          
          <div className="col-md-9 col-sm-10 col-9 ">    
            <form>
              <label htmlFor="exampleInputUserName">UserName</label> <br/> 
              <input className="form-control" name="username" placeholder=" Enter Your UserName" value={email} onChange={e=>{setEmail(e.target.value)}}/><br/>
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={e=>{setPassword(e.target.value)}}/><br />
              <input className="btn btn-primary col-3"  value="Login" onClick={e=>{
               userService.login(email,password).then((data)=>{
               toast.success("You are loged in successfully!", {
        position: toast.POSITION.TOP_CENTER
      });
                console.log(data);
                window.location.href='/';
                }).catch(err=>{
                     toast.error(err.message, {
        position: toast.POSITION.TOP_LEFT
      });
                });
                 
              }}/><br /><br />
              
            </form>
          </div>
    </div> 
    </div>
    </div>);
}
 
export default Login;