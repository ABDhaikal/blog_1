import React from "react";

const ContentPage = () => {
   return (
      <section className="container m-auto ">
         {/* history */}
         <div className="flex flex-col md:flex-row m-auto gap-4 relative max-w-[80%] place-items-center my-10">
            <h2 className="flex items-start w-full justify-start section-title text-4xl md:text-8xl  animate-in slide-in-from-left transform duration-1200 hover:scale-80">
               History
            </h2>
            <p className="text-md md:text-xl  text-gray-800 font-medium bg-[#44b414] border-8 border-black rounded-3xl p-2 text-center flex items-center justify-center min-h-[300px] animate-in slide-in-from-left transform duration-800 hover:scale-110">
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Asperiores id vitae mollitia quis! Maiores perferendis earum
               ipsum consequuntur corrupti a quod culpa delectus, praesentium
               modi alias cupiditate esse dolor incidunt et quos minus eligendi.
               Voluptates sed velit omnis deserunt culpa nostrum deleniti, quos
               dolor id dicta totam distinctio repellendus unde!
            </p>
         </div>

         {/* Vision */}
         <div className="flex flex-col md:flex-row-reverse m-auto gap-4 relative max-w-[80%] place-items-center my-10">
            <h2 className="flex items-end w-full justify-end section-title text-4xl md:text-8xl animate-in slide-in-from-left transform duration-800 hover:scale-110">
            Vision & Mission
            </h2>
            <p className="text-md md:text-xl bg-[#40b6f0]  text-gray-800  stroke-black font-bold border-8 border-black rounded-3xl p-2 text-center flex items-center justify-center min-h-[300px]  animate-in slide-in-from-left transform duration-1200 hover:scale-80">
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Asperiores id vitae mollitia quis! Maiores perferendis earum
               ipsum consequuntur corrupti a quod culpa delectus, praesentium
               modi alias cupiditate esse dolor incidunt et quos minus eligendi.
               Voluptates sed velit omnis deserunt culpa nostrum deleniti, quos
               dolor id dicta totam distinctio repellendus unde!
            </p>
         </div>
      </section>
   );
};

export default ContentPage;
