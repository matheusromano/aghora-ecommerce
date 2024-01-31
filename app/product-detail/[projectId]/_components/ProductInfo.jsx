import React, { useContext } from "react";
import { ShoppingBag, BadgeCheck, AlertOctagon } from "lucide-react";
import SkeletonEffect from "./SkeletonEffect";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import GlobalApi from "../../../_utils/GlobalApi";
import { CartContext } from "../../../_context/CartContext";

function ProductInfo({ product }) {
  const { user } = useUser();
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);

  // Use to add product to cart
  const onAddToCartClick = () => {
    if (!user) {
      router.push("/sign-in");
      return;
    } else {
      const data = {
        //On data you need to map exactly the names of the tables on strapi or any cms software.
        data: {
          userName: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: [product?.id],
        },
      };
      GlobalApi.addToCart(data).then(
        (resp) => {
          console.log("Add to cart", resp);
          setCart(cart => [...cart, product]);
        },
        (error) => {
          console.log("Error", error);
        }
      );
    }
  };
  return (
    <div>
      {product ? (
        <div>
          <h2 className="text-[20px]">{product?.attributes?.title}</h2>
          <h2 className="text-[15px] text-gray-400">
            {product?.attributes?.category}
          </h2>
          <h2 className="text-[15px] mt-5 text-gray-700">
            {product?.attributes?.desc}
          </h2>
          {/* <h2 className='flex gap-2 mt-5'>{product?.attributes?.instantDelivery?
      <BadgeCheck/>:<AlertOctagon/>}
      Elegível para Envio Imediato</h2> */}
          <h2 className="flex gap-2 mt-5 text-[16px]">
            <BadgeCheck className="text-green-600 h-5 w-5" />
            Elegível para Envio Imediato
          </h2>

          <h2 className="text-[35px] mt-5 text-baseRed font-medium">
            R${product?.attributes?.pricing}
          </h2>
          <button
            className=" flex gap-2 p-3
      px-10 mt-5 bg-black text-white rounded-lg hover:bg-baseRed"
            onClick={() => onAddToCartClick()}
          >
            <ShoppingBag /> Add to Bag
          </button>
        </div>
      ) : (
        <SkeletonEffect />
      )}
    </div>
  );
}

export default ProductInfo;
