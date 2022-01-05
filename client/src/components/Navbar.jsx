import React from 'react';
import { Link } from 'react-router-dom';
import userService from '../services/UserService';
const Navbar = () => {
    return ( <div>
        <nav className="navbar navbar-dark navbar-expand-sm fixed-top">
    <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
        <Link className="navbar-brand" to="/">Ristorante Con Fusion</Link>
                    <div className="collapse navbar-collapse" id="Navbar">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active"><Link  className="nav-link" to="/"><span className="fa fa-home fa-lg"></span> Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/aboutus"><span className="fa fa-info fa-lg"></span> About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/menu"><span className="fa fa-list fa-lg"></span> Menu</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contactus"><span className="fa fa-address-card fa-lg"></span> Contact</Link></li>
             <li className="nav-item"><Link className="nav-link" to="/cart"><span className="fa fa-address-card fa-lg"></span> My orders</Link></li>
            {!userService.isLoggedIn()?  <>
            <li className="nav-item"><Link className="nav-link" to="/login"><span className="fa fa-sign-in-alt fa-lg"></span> Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/signup"><span className="fa fa-user-plus fa-lg"></span> Register</Link></li>
            </> : <li className="nav-item"><Link className="nav-link" to="/login" onClick={e=>{userService.logout();
            window.location.href="/login"}}><span className="fa fa-sign-out-alt fa-lg"></span> LogOut</Link></li>}
           
        </ul>
                    </div>
    </div>
</nav></div> );
}
 
export default Navbar;