import Image from "next/image";
import Link from "next/link";
import React from "react";

const BestPostCard = () => {
   return (
      <section className="container m-automy-8">
         <h2 className="section-title md:big-screen-title text-6xl my-8  md:text-8xl  font-sans">
            - Best Post -{" "}
         </h2>

         <div className="  w-fit m-auto grid grid-cols-3 max-w-[80%] xl:max-w-[50%]  bg-white items-center p-4 md:p-8 rounded-4xl border-4 justify-center  border-black relative hover:scale-110">
            <div className=" shrink flex flex-col items-center justify-center  ">
               <div className="items-center justify-center border-4  border-black rounded-2xl md:rounded-4xl overflow-clip mx-3">
                  <Image
                     src="/blogHero.png"
                     alt="blog image"
                     width={200}
                     height={200}
                     className=" object-cover"
                  />
               </div>
               <p>tanggal</p>
            </div>
            
            <div className="col-span-2 h-full text-center  gap-1.5 md:gap-3 my-2 ">
               <p className="text-md md:text-2xl font-bold ">
                  Minuman Karbonasi ternyata dioplos !!
               </p>
               <p className="text-[11px] md:text-xl">
                  ceritanya demi mendapat cuan PT Pertama mengoplos produk
                  mengoplos produkmengoplos produkmengoplos produkmengoplos
                  produk
               </p>
            </div>
            <Link
               href="#"
               className="text-sm  md:text-xl absolute bottom-1 md:bottom-3 right-3"
            >
               Read More
            </Link>
         </div>
      </section>
   );
};

export default BestPostCard;
