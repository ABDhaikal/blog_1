import { getBlogs } from "@/app/api/blogApi/getBlogs";
import { getCategories } from "@/app/api/categoryApi/getCategories";
import BlogCard from "@/app/components/BlogCard/BlogCard";
import { Blog } from "@/app/types/blog";
import Link from "next/link";
import React from "react";

const CategoriesList = async () => {
   const datas = await getCategories();
   const count = datas.length;
   const rotate = [
      "#FF5733",
      "#33FF57",
      "#5733FF",
      "#FF33A6",
      "#33FFF5",
      "#F5FF33",
   ];
   return (
      <main className="container m-auto my-6">
         <div className="flex flex-wrap justify-center gap-4">
            {datas.map((data, idx) => {
               return (
                  <div
                     key={`${data} ${idx}`}
                     className={`section-subtitle  hover:scale-105 text-3xl md:text-5xl  border-2 md:border-3 border-black bg-[${
                        rotate[idx % 6]
                     }]  p-2 rounded-3xl`}
                  >
                     <Link href={`/Category/${data.category}`}>
                        {data.category}
                     </Link>
                  </div>
               );
            })}
         </div>
      </main>
   );
};

export default CategoriesList;
