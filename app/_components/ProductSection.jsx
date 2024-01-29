"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import ProductList from "./ProductList";

function ProductSection() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getLatestProducts_();
  }, []);

  const getLatestProducts_ = () => {
    GlobalApi.getLatestProducts().then((resp) => {
      console.log(resp.data.data);
      setProductList(resp.data.data);
    });
  };
  // render the products only the products are available
  return (
    productList && (
      <div className='px-10 md:px-20'>
        <h2 className='font-thin text-[30px] mt-5 text-black text-center'>S N E A K E R S</h2>
        <ProductList productList={productList} />

        <h2 className='font-thin text-[30px] mt-5 text-black text-center'>T - S H I R T S</h2>
        <ProductList productList={productList} />
      </div>

      
      
    )
  );
}

export default ProductSection;
