import React, { useContext } from "react";
import { CartContext } from "../_context/CartContext";

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  return (
    <div className="h-[300px] w-[250px] md:block  bg-gray-100 z-10 rounded-md border shadow-md absolute mx-10 mt-3 right-10 top-20 p-5 overflow-auto">
      <div class="mt-4 space-y-6">
        <ul class="space-y-4">
          {cart.map((item, index) => (
            <li class="flex items-center gap-4">
              <img
                src={item?.attributes?.banner?.data?.attributes?.url}
                alt=""
                class="h-16 w-16 rounded object-cover"
              />

              <div>
                <h3 class="text-sm text-gray-900 line-clamp-1">{item?.attributes.title}</h3>

                <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt class="inline">{item?.attributes?.category}</dt>
                  </div>

                  <div>
                    <dt class="inline">{item?.attributes?.pricing}</dt>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div class="space-y-4 text-center mt-5">
        <a
          href="#"
          class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
        >
          View my cart ({cart?.length})
        </a>

        <a
          href="#"
          class="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
        >
          Continue shopping
        </a>
      </div>
    </div>
  );
}

export default Cart;
