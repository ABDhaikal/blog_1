import Image from "next/image";
import React from "react";
import NavbarButton from "./NavbarButton";
import Link from "next/link";

const Navbar = () => {
   return (
      <nav className="container m-auto ">
         <div className="flex items-center justify-evenly bg-white border-4 border-black rounded-4xl m-4 py-2.5 h-[95px]">
            <Link href="/" ><Image src="/icon1.png" alt="logo" width={75} height={75} /></Link>
            Hallo DUNYA
            <NavbarButton />
         </div>
      </nav>
   );
};

export default Navbar;
