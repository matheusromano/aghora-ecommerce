import Image from "next/image";
import React from "react";

function ProductBanner({ product }) {
  return (
    <div className="relative overflow-hidden shadow-md">
      <Image
        src={product?.attributes?.banner.data.attributes.url}
        alt="banner"
        width={400}
        height={350}
        className="rounded-lg mx-auto 
        text-center
        object-cover"
      />
    </div>
  );
}

export default ProductBanner;
