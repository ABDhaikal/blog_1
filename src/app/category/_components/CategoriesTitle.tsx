import Image from "next/image";
import React from "react";

const CategoriesTitle = () => {
   return (
      <section className="container m-auto">
         <div className=" w-[90%] m-auto grid grid-cols-1 md:grid-cols-2 bg-[#18a24b] items-center p-8 rounded-4xl border-8 justify-center  border-black animate-in slide-in-from-left transform duration-800">
            <div className="text-center flex flex-col gap-7">
               <h1 className="text-4xl md:text-8xl section-title py-3.5 hover:scale-120 animate-in slide-in-from-left transform duration-1000">
                  Categories
               </h1>
               <p className="text-xl md:text-2xl text-white hover:scale-50 animate-in slide-in-from-left transform duration-1200 ">
                  Explore diverse categories covering tech insights, design
                  inspiration, coffee culture, and more. Discover engaging
                  content tailored to fuel your curiosity and creativity, all in
                  one place.
               </p>
            </div>
            <div className="flex  items-center justify-center">
               <Image
                  src="/categoryHero.png"
                  alt="blog image"
                  width={500}
                  height={500}
               />
            </div>
         </div>
      </section>
   );
};

export default CategoriesTitle;
