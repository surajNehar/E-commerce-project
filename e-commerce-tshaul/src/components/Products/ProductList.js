import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from './ProductsData.json';
import './ProductList.css';
import { usePagination } from '../../hooks/Pagination';
import { Pagination} from "@mui/material";



const ProductList = () => {
  
  
  const [searchTerm, setSearchTerm] = useState('');
  

  const [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    displayPage,
  ] = usePagination(10, productsData.length);

  
  // Calculate the range of products to display based on the current page
  const startIndex = startPageIndex;
  const endIndex = endPageIndex + 1;

  const productsToDisplay = productsData
  .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
  .slice(startIndex, endIndex);

  return (
    
    <div>
       <div className='search-container'>
       <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="What type of T-shirts you are looking for ... "
       />
       </div>
     
  
      <div className='product-list'>
        {productsToDisplay.map((product, index) => (
          <Link key={index} to={`/product/${product.id}`} className='product-item-link'>
            <div className='product-item'>
              <img src={product.image} 
              alt={product.name} height={250} 
              width={250} 
              className='product-image'
               />
              <p className='product-name'>{product.name}</p>
              <div className='price-section'>
                <p className='price'>${product.price}</p>
                <p className='prev-price'>$255</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className='pagination-container'>
        <Pagination
          count={totalPages}
          page={currentPageIndex}
          variant="outlined"
          onChange={(event, page) => {
            displayPage(page)
            setSearchTerm("")
          }}
          color='primary'
        />
      </div>
    </div>
  );
}

export default ProductList;
