import Image from "next/image";
import React from "react";
import NavbarButton from "./NavbarButton";
import Link from "next/link";

const Navbar = () => {
   return (
      <nav className="container m-auto ">
         <div className="flex items-center justify-evenly bg-white border-4 border-black rounded-4xl m-4 py-2.5 h-[95px]">
            <Link href="/" ><Image src="/icon1.png" alt="logo" width={75} height={75} priority /></Link>
            
            <div className=" items-center justify-center gap-4 text-2xl font-medium font-sans hidden md:flex">
               <Link href="/" >Home</Link>
               <Link href="/blogs" >Blogs</Link>
               <Link href="/category" >Category</Link>
               <Link href="/about" >About US</Link>
            </div>

            <p className="text-2xl font-medium font-sans">KonBlog</p>
            <NavbarButton />
         </div>
      </nav>
   );
};

export default Navbar;
