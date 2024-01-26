import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="bg-baseRed">
      <div className="mx-auto flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8 bg- shadow-md">
      <Image src='/logo-v2.png' alt='logo' width={150} height={30} className="mx-auto"/>
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-eerieBlack transition hover:text-white"
                  href="/"
                >
                  {" "}
                  Home{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-black transition hover:text-timberwolf"
                  href="/"
                >
                  {" "}
                  Products{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-black transition hover:text-timberwolf"
                  href="/"
                >
                  {" "}
                  About Us{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-black transition hover:text-timberwolf"
                  href="/"
                >
                  {" "}
                  Contact Us{" "}
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
