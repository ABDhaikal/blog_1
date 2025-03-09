import Image from "next/image";
import React from "react";

const BlogTitle = () => {
   return (
      <section className="container m-auto">
         <div className=" w-[90%] m-auto grid grid-cols-1 md:grid-cols-2 bg-[#3c74dd] items-center p-8 rounded-4xl border-8 justify-center  border-black animate-in slide-in-from-left transform duration-800">
            <div className="text-center flex flex-col gap-7">
               <h1 className="text-4xl md:text-8xl section-title py-3.5 hover:scale-120 animate-in slide-in-from-left transform duration-1000">
                  BLOG
               </h1>
               <p className="text-xl md:text-2xl text-white hover:scale-50 animate-in slide-in-from-left transform duration-1200 ">
                  Empowering your creative journey with vibrant pop art,
                  seamless blog navigation, and innovative design
                  solutions—where every click leads to inspiration and every
                  category tells your unique story.
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

export default BlogTitle;
