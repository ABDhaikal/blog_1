import React from "react";

const ContentPage = () => {
   return (
      <section className="container m-auto ">
         {/* history */}
         <div className="flex flex-col md:flex-row m-auto gap-4 relative max-w-[80%] place-items-center my-10">
            <h2 className="flex items-start w-full justify-start section-title text-4xl md:text-7xl  animate-in slide-in-from-left transform duration-1200 hover:scale-80">
               History
            </h2>
            <p className="text-[12px] md:text-[16px]  text-gray-800 font-medium bg-[#44b414] border-4 border-black rounded-3xl p-2 text-center flex items-center justify-center  animate-in slide-in-from-left transform duration-800 hover:scale-110">
               konBlog is a vibrant web blog inspired by the energy of pop art.
               It blends bold, eye-catching designs with practical content for
               developers and creatives. Combining aesthetics and technical
               expertise, it offers tutorials, design insights, and inspiration.
               konBlog isn't just a blog—it's a creative hub where
               individuality, learning, and innovation shine.
            </p>
         </div>

         {/* Vision */}
         <div className="flex flex-col md:flex-row-reverse m-auto gap-4 relative max-w-[80%] place-items-center ">
            <h2 className="flex  w-full  section-title text-4xl md:text-7xl  animate-in slide-in-from-left transform duration-800 hover:scale-110">
               Vision & Mission
            </h2>
            <p className="text-[12px] md:text-[16px]  bg-[#40b6f0]  text-gray-800  stroke-black font-medium border-2 md:border-4 border-black rounded-3xl p-2 text-center    animate-in slide-in-from-left transform duration-1200 hover:scale-80">
            <span className="font-bold"> Vision:</span> To become a leading platform that celebrates creativity
               and technical expertise, where developers and creatives unite to
               learn, inspire, and express individuality through bold, pop
               art-inspired designs. 
               <br />
               <span className="font-bold"> Mission:</span> konBlog strives to deliver
               engaging, visually captivating content that bridges the gap
               between technical knowledge and artistic innovation. By fostering
               a vibrant community, it aims to empower individuals to explore
               coding, design, and creativity while embracing their unique
               styles and perspectives.
            </p>
         </div>
      </section>
   );
};

export default ContentPage;
