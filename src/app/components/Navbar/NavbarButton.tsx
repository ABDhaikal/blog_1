"use client";

import Image from "next/image";
import { useState } from "react";
import NavbarButtonCard from "./NavbarButtonCard";
import Link from "next/link";

const NavbarButton = () => {
   const [menu, SetIsMenu] = useState(false);
   const OpenHandler = () => {
      SetIsMenu(true);
   };
   const CloseMenu = () => {
      SetIsMenu(false);
   };

   return (
      <div className="md:hidden">
         <button
            onClick={OpenHandler}
            className="hover:cursor-pointer h-[50px] w-[50px] "
         >
            <Image src="/hamburger.png" alt="More" width={100} height={100} />
         </button>
         {menu && (
            <div
               onClick={CloseMenu}
               className="fixed top-0 right-0 z-50 bg-[#f69729] w-screen h-screen"
            >
               <div className="container m-auto py-8">
                  <div className="section-title text-4xl">Menu</div>
                  <div className="flex flex-col items-center justify-center gap-2  my-6">
                     <div
                        className={
                           " flex items-center p-2  rounded-xl md:rounded-2xl border-2 border-black justify-center bg-[#3c74db] "
                        }
                     >
                        <Link href="/">
                           <p className="  text-3xl text-center section-subtitle">
                              Home
                           </p>
                        </Link>
                     </div>

                     <div
                        className={
                           " flex items-center p-2  rounded-xl md:rounded-2xl border-2 border-black justify-center bg-[#cce900] "
                        }
                     >
                        <Link href="/blogs">
                           <p className="  text-3xl text-center section-subtitle">
                              Blogs
                           </p>
                        </Link>
                     </div>

                     <div
                        className={
                           " flex items-center p-2  rounded-xl md:rounded-2xl border-2 border-black justify-center bg-[#985421] "
                        }
                     >
                        <Link href="/category">
                           <p className="  text-3xl text-center section-subtitle">
                              Category
                           </p>
                        </Link>
                     </div>

                     <div
                        className={
                           " flex items-center p-2  rounded-xl md:rounded-2xl border-2 border-black justify-center bg-[#29f629] "
                        }
                     >
                        <Link href="/about">
                           <p className="  text-3xl text-center section-subtitle">
                              About Us
                           </p>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default NavbarButton;
