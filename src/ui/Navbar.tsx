// ::: React
//
import React from "react";

// ::: Next
//
import Image from "next/image";
import NextLink from "next/link";

// :::
//
export const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-around h-24 bg-umayuru text-white px-2">
        <div>
          <NextLink href="/">
            <Image src={"/logo.png"} alt={"logo"} width={300} height={95} />
          </NextLink>
        </div>
        <div>
          <NextLink href="/">
            <span className="mx-4 font-lato">Inicio</span>
          </NextLink>
          <NextLink href="/">
            <span className="mx-4 font-lato">Capítulos</span>
          </NextLink>
          <NextLink href="/">
            <span className="mx-4 font-lato">Pág. Principal</span>
          </NextLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
