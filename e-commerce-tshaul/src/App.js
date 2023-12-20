import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/PAGES/Home/Home';
import Contact from './components/PAGES/Contact/Contact';
import ProductDetails from './components/Products/singleProduct/ProductDetails';
import productsData from './components/Products/ProductsData.json';
import Cart from './components/PAGES/Cart/Cart'; 
import Sizechart from './components/size-chart/Sizechart';
import Shopall from './components/PAGES/shop-all/Shopall';
import Maleproduct from './components/PAGES/male-product/Maleproduct';
import Femaleproduct from './components/PAGES/female-product/Femaleproduct';
import Faq from './components/PAGES/FAQ/Faq';
import Aboutus from './components/PAGES/Aboutus/Aboutus';
import Login from './components/PAGES/Profile/Login/Login';


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
    <Route path='/male-product' element={<Maleproduct/>}/>
    <Route path='/female-product' element={<Femaleproduct/>}/>
    <Route path='/faq' element ={<Faq/>}/>
    <Route path='/about' element={<Aboutus/>}/>
    <Route path='./login' element={<Login/>}/>
    
    {productsData.map((product, index) => (
          console.log('Product:', product),
          <Route key={index} path={`/product/${product.name}`} 
          element={<ProductDetails product={product} />}  />
     ))} 
 
  
    </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;