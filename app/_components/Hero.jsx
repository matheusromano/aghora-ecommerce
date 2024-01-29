import React from "react";

function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-20 lg:flex ">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl text-center text-gray-800">
            Level Up Your Street Game with
            <strong className="block text-baseRed">Dope Urban Threads!</strong>
          </h1>

          <p className="text-lg text-gray-600 text-center mt-4">
            Elevate your style with the sickest pieces in the game – browse the
            site and unlock unbeatable deals!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-viaOrange px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="/products"
            >
              Explore the Collection
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-viaOrange shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="/trends"
            >
              Latest Trends
            </a>
          </div>
        </div>
      </div>
    </section>

    // <section className="bg-black text-white">
    //   <div className="mx-auto max-w-screen-xl px-4 py-24 lg:flex lg:h-screen">
    //     <div className="mx-auto max-w-3xl text-center">
    //       <h1 className="bg-gradient-to-r from-baseRed via-toOrange to-white bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
    //         Understand User Flow.
    //         <span className="sm:block"> Increase Conversion. </span>
    //       </h1>

    //       <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
    //         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
    //         illo tenetur fuga ducimus numquam ea!
    //       </p>

    //       <div className="mt-8 flex flex-wrap justify-center gap-4">
    //         <a
    //           className="block w-full rounded border border-baseRed bg-black px-12 py-3 text-sm font-medium text-white hover:bg-baseRed hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
    //           href="/get-started"
    //         >
    //           Know our products
    //         </a>

    //         <a
    //           className="block w-full rounded border border-baseRed px-12 py-3 text-sm font-medium text-white hover:bg-baseRed focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
    //           href="/about"
    //         >
    //           Best Sellers
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}

export default Hero;
