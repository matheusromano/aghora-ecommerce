import React from 'react'
import { ShoppingBag, BadgeCheck, AlertOctagon } from 'lucide-react';


function ProductInfo({product}) {
  return (
    <div>
      <h2 className='text-[20px]'>{product?.attributes?.title}</h2>
      <h2 className='text-[15px] text-gray-400'>{product?.attributes?.category}</h2>
      <h2 className='text-[15px] mt-5 text-gray-700'>{product?.attributes?.desc}</h2>
      {/* <h2 className='flex gap-2 mt-5'>{product?.attributes?.instantDelivery?
      <BadgeCheck/>:<AlertOctagon/>}
      Elegível para Envio Imediato</h2> */}
      <h2 className='flex gap-2 mt-5 text-[16px]'>
      <BadgeCheck className='text-green-600 h-5 w-5'/>
      Elegível para Envio Imediato</h2>

      <h2 className='text-[35px] mt-5 text-baseRed font-medium'>R${product?.attributes?.pricing}</h2>
      <button className=' flex gap-2 p-3
      px-10 mt-5 bg-black text-white rounded-lg hover:bg-baseRed'><ShoppingBag/> Add to Bag</button>
    </div>
  )
}

export default ProductInfo
