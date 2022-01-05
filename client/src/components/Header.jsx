import React from 'react';
import {useLocation}from "react-router-dom";
const Header = () => {
    const loc=useLocation().pathname;
     if(loc=="/signup" || loc=="/login" || loc=='/cart'){
return null;
     }
    return ( <div>
         <header>
        <div className="jumbotron">
            <div className="container">
                <div className="row row-header">
                <div className="col-12 col-sm-6">
                    <h1>Ristorante con Fusion</h1>
                    <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                </div>
                <div className="col col-sm">
                </div>
            </div>
            </div>
        </div>
    </header>
    </div> );
  
}
 
export default Header;