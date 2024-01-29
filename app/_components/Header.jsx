"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Header() {
  const carouselTexts = [
    "PRODUTOS ORIGINAIS!",
    "PARCELE EM ATÉ 10X SEM JUROS",
    "A MELHOR LOJA DE STREETWARE DE CWB",
    "1º TROCA GRÁTIS",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === carouselTexts.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentTextIndex]);

  return (
    <header className="bg-white">
      <div className="h-8 bg-black text-platinum flex items-center justify-center overflow-hidden relative">
        {carouselTexts.map((text, index) => (
          <span
            key={index}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block text-center text-xs sm:text-sm lg:text-base ${
              currentTextIndex === index ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000 ease-in-out ${
              currentTextIndex === index ? "hover:underline" : ""
            }`}
          >
            {text}
          </span>
        ))}
      </div>

      <div className="mx-auto flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8 bg- shadow-md">
        <Image
          src="/aghora-v2.svg"
          alt="logo"
          width={100}
          height={10}
          className="mx-auto"
        />
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav
            aria-label="Global"
            className="hidden md:block pl-[25px]" // Remove ml-auto for left-center alignment
          >
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-eerieBlack transition hover:text-white"
                  href="/"
                >
                  {" "}
                  SHOP{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-black transition hover:text-timberwolf"
                  href="/"
                >
                  {" "}
                  LOOKBOOK{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-black transition hover:text-timberwolf"
                  href="/"
                >
                  {" "}
                  INSIDE AGHORA{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-black transition hover:text-timberwolf"
                  href="/"
                >
                  {" "}
                  FALE CONOSCO{" "}
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="block rounded-md bg-eerieBlack px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-black"
                href="/"
              >
                Login
              </a>

              <a
                className="hidden rounded-md bg-white  px-5 py-2.5 text-sm font-medium text-black transition hover:text-white hover:bg-black sm:block"
                href="/"
              >
                Register
              </a>
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
