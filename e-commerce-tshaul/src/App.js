import './App.css';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from './components/PAGES/Home/Home';
import Contact from './components/PAGES/Contact/Contact';
import ProductDetails from './components/Products/singleProduct/ProductDetails';
import productsData from './components/Products/ProductsData.json';
import Cart from './components/PAGES/Cart/Cart'; 
import Sizechart from './components/size-chart/Sizechart';
import Shopall from './components/PAGES/shop-all/Shopall';
import Faq from './components/PAGES/FAQ/Faq';
import Aboutus from './components/PAGES/Aboutus/Aboutus';
import Login from './components/PAGES/Profile/Login/Login';
import Register from './components/PAGES/Profile/Register/Register';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/sizechart' element={<Sizechart/>}/>
    <Route path='/shop-all' element={<Shopall/>}/>
    <Route path='/faq' element ={<Faq/>}/>
    <Route path='/about' element={<Aboutus/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/login/register' element={<Register/>}/>
    
    {productsData.map((product, index) => (
          <Route key={index} path={`/product/${product.id}`} 
          element={<ProductDetails product={product} />}  />
     ))} 
 
  
    </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
