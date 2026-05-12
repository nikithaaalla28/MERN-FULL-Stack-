import { BrowserRouter , Route , Routes } from 'react-router-dom'

import NavBar from './Components/NavBar';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Home from './pages/Home';
import "./assets/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/LandingPage';
import { createContext } from 'react';
 
export const CarContext=createContext();
export const CartProvider=({childern})=>{
  const [items,setItems]=useState([])
const addToCart=(products)=>{
}
  return(
    <CartContext.provider values={}>
       {children}
    </CartContext.provider>
  )
}; 
const  App=()=>{
 const productDetails={name:"laptop",price:5000}
  return(
    
    <BrowserRouter> 
    
    <CarContext.Provider>
      <NavBar/>
    <Routes>
    <Route path="" element={<LandingPage/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="register" element={<Register/>}/>
    <Route path="dashboard" element={<Dashboard/>}/>
    <Route path="products" element={<Products/>}/>
    <Route path="home" element={<Home/>}/>
    </Routes>
    </CarContext.Provider>
    </BrowserRouter>
  )
}
export default App;
