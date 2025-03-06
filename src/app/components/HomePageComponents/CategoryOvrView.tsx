import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

const CategoryOvrView = () => {
   return (
      <section className="container m-auto my-8">
         <h2 className="section-title text-6xl my-8  md:text-8xl  py-4 md:py-8 font-sans ">
            - Category -
         </h2>
         <div className="flex flex-wrap justify-center gap-4">
                <CategoryCard title="makanan sehat" color="white" />
                <CategoryCard title="makanan sehat" color="#f0f819" />
                <CategoryCard title="makanan sehat" color="white" />
                <CategoryCard title="makanan sehat" color="white" />
         </div>
      </section>
   );
};

export default CategoryOvrView;
