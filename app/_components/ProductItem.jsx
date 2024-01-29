import Image from "next/image";

function ProductItem({ product }) {
  return (
    <div>
      <div className="mb-4 text-center hover:border m-1 p-1 rounded-lg border-platinum">
        <Image
          src={product?.attributes?.banner.data.attributes.url}
          alt="banner"
          width={400}
          height={350}
          className="round-t-lg mx-auto"
        />
        <div className=" bg-gray-50 p-3 rounded-b-lg">
        <h2 className="text-lg font-medium line-clamp-2 mt-2">
          {product.attributes.title}
        </h2>
        <div className="mt-1">
          <h2 className="font-thin text-xl">R${product.attributes?.pricing}</h2>
          <p className="text-s text-gray-500">
            ou 10x de R${(product.attributes?.pricing / 10).toFixed(2)}
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
