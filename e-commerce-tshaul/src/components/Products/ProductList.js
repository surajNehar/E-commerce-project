import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productsData from "./ProductsData.json";
import "./ProductList.css";
import { usePagination } from "../../hooks/Pagination";
import { Pagination } from "@mui/material";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  // Pagination state
  const [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    displayPage,
  ] = usePagination(10, filteredProducts.length);

  useEffect(() => {
    // Update filtered products based on search term
    const updatedFilteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(updatedFilteredProducts);

  }, [searchTerm, products]);

  useEffect(() => {
    // Update filtered products based on price range
    const updatedFilteredProducts = products.filter((product) => {
      const price = parseFloat(product.price);
      return price >= priceRange[0] && price <= priceRange[1];
    });
    setFilteredProducts(updatedFilteredProducts);

  }, [priceRange, products]);

  const filterProducts = () => {
    // Update filtered products based on search term and price range
    const updatedFilteredProducts = products.filter((product) => {
      const price = parseFloat(product.price);
      return (
        price >= priceRange[0] &&
        price <= priceRange[1] &&
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredProducts(updatedFilteredProducts);

  
  };

  const resetFilter = () => {
    setPriceRange([0, 120]);
    setProducts(productsData);
    setSearchTerm("");
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="What type of T-shirts are you looking for ..."
        />
      </div>

      
        <div className="slider-section">
          <p className="filter-text">Filter:<span>price</span></p>
          <Slider
            range
            min={0}
            max={120}
            value={priceRange}
            onChange={(value) => setPriceRange(value)}
            step={1}
            className="rc-slider"
          />

          <div className="price-range-display">
            Price Range: ${priceRange[0]} - ${priceRange[1]}
          </div>

          <div className="filter-buttons">
            <button type="button" onClick={filterProducts}>
              Apply Filter
            </button>
            <button type="button" onClick={resetFilter}>
              Reset Filter
            </button>
          </div>
        </div>

        <div className="porduct-box">
          <div className="product-top">
            <h6>{products.length + " "} Products </h6>
            <div class="dropdown">
              <button
                class="btn btn-secondary btn-sm dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By 
              </button>
              <ul class="dropdown-menu">
                <li> Featured</li>
                <li> Best selling </li>
                <li> Alphabetically, A-Z</li>
                <li> Best selling</li>
                <li> Alphabetically, Z-A</li>
                <li> Price, low to high</li>
                <li> Date, old to new</li>
                <li> Price, high to low</li>
                <li>Date, new to old</li> 
              </ul>
            </div>
          </div>

          <div className="product-list">
            {filteredProducts
              .slice(startPageIndex, endPageIndex + 1)
              .map((product, index) => (
                <Link
                  key={index}
                  to={`/product/${product.id}`}
                  className="product-item-link"
                >
                  <div className="product-item">
                    <img
                      src={product.image}
                      alt={product.name}
                      height={250}
                      width={250}
                      className="product-image"
                    />
                    <p className="product-name">{product.name}</p>
                    <div className="price-section">
                      <p className="price">${product.price}</p>
                      <p className="prev-price">$255</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          <div className="pagination-container">
            <Pagination
              count={totalPages}
              page={currentPageIndex}
              variant="outlined"
              onChange={(event, page) => displayPage(page)}
              color="primary"
            />
          </div>
        
      </div>
    </div>
  );
};

export default ProductList;
