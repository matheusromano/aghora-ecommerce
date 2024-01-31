import Image from "next/image";
import React from "react";

function ProductBanner({ product }) {
  return (
    <div className="relative overflow-hidden shadow-md">
      {product ? (
        <Image
          src={product?.attributes?.banner.data.attributes.url}
          alt="banner"
          width={400}
          height={350}
          className="rounded-lg mx-auto 
        text-center
        object-cover"
        />
      ) : (
        <div className="h-[350px] w-[400px] bg-slate-200 animate-pulse"></div>
      )}
    </div>
  );
}

export default ProductBanner;
