import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import userService from '../services/UserService';
  import { toast } from 'react-toastify';
const SignUp = (props) => {
  const [firstName,setFirstName]=React.useState("");
  const [lastName,setLastName]=React.useState("");
  const [email,setEmail]=React.useState("");
  const [password,setPassword]=React.useState("");
  const navigate=useNavigate();
    return ( <div>
<div className="container shadow-lg col-lg-5 col-md-6 col-sm-8 col-10" id="SignUp">
        <h1 className="text-center md-6 signUpText">SignUp</h1>    
        <div className="row justify-content-center">      
          <div className="col-md-9 col-sm-10 col-9  ">    
            <form>
              <label htmlFor="exampleInputFirstName">First Name</label>
              <input className="form-control" name="name" placeholder=" Enter Your First Name" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
              <label htmlFor="exampleInputLastName">Last Name</label>
              <input className="form-control" name="name" placeholder="Enter Your Last Name" value={lastName} onChange={e=>{setLastName(e.target.value)}} />
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={e=>{setEmail(e.target.value)}}/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={e=>{setPassword(e.target.value)}}/>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <input className="btn btn-primary" value="Create" onClick={e=>{
                console.log("Sending Api call to register user");
                userService.register(firstName,lastName,email,password).then(data=>{
                  if(data.firstName==firstName){
               toast.success("You are registered successfully!", {
        position: toast.POSITION.TOP_CENTER
      });
                  navigate("/login");}
                  else
                    toast.error(data, {
        position: toast.POSITION.TOP_LEFT
      });

                
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
    </div> );
} 
export default SignUp;