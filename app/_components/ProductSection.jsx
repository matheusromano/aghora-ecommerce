
"use client"
import React, { useEffect, useState} from 'react'
import GlobalApi from '../_utils/GlobalApi'
import ProductList from './ProductList'

function ProductSection() {

    const [productList, setProductList] = useState([])
    
    useEffect(()=>{
        getLatestProducts_();
    }, [])


    const getLatestProducts_=()=> {
        GlobalApi.getLatestProducts().then(resp=>{
            console.log(resp.data.data);
            setProductList(resp.data.data)
        })
    }

  return (
    <div>
      <ProductList productList={productList}/>
    </div>
  )
}

export default ProductSection

