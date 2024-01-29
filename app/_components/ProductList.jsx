import React from 'react'
import ProductItem from './ProductItem'

function ProductList({productList}) {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-3'>
       {productList.map((item, index) =>(
        // The elements should have a prop unique Key, like, index [0,1,2,3]*/}
        <div key={index}>
          <ProductItem product={item}/>
        </div>
        ))}
    </div>
  )
}

export default ProductList
