import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import MenuItems from "./components/MenuItems";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Cart from "./components/Cart";

function App() {
  return (
  <Router>
  <div>
    <Navbar></Navbar>
    <ToastContainer/>
    <Header/>
    <Routes>
      
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
            <Route path="/cart" element={<Cart/>}/>

    <Route path="/contactus" element={<Contact/>}/>
       <Route path="/menu" element={<MenuItems/>}/>
    <Route path="/aboutus" element={<About/>}/>
    <Route path="/" element={<HomePage/>}/>
    </Routes>
    <Footer></Footer>
  </div></Router>
  );
}

export default App;
