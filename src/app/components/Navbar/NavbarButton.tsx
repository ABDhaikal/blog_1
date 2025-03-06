"use client";

import Image from "next/image";
import { useState } from "react";

const NavbarButton = () => {
   const [menu, SetIsMenu] = useState(false);
   const OpenHandler = () => {
      SetIsMenu(true);
   };
   const CloseMenu = () => {
      SetIsMenu(false);
   };

   return (
      <button onClick={OpenHandler} className="hover:cursor-pointer h-[50px] w-[50px] ">
         <Image src="/hamburger.png" alt="More" width={100} height={100} />
      </button>
   );
};

export default NavbarButton;
