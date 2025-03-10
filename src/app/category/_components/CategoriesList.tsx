"use client";
import { getCategories } from "@/app/api/categoryApi/getCategories";
import BestCategory from "@/app/components/HomePageComponents/BestCategory";
import { Category } from "@/app/types/category";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setGlobalCategory } from "@/redux/slices/globalCategory";
import Link from "next/link";
import { useEffect, useState } from "react";

const CategoriesList = () => {
   const [datas, setData] = useState<Category[]>([]);

   useEffect(() => {
      const getData = async () => {
         const data = await getCategories();
         setData(data);
      };
      getData();
   }, []); 

   const globalCategory = useAppSelector((state) => state.globalCategory);
   const dispatch = useAppDispatch();
   const handleSetGlobalCategory = (setcategory: string) => {
      dispatch(setGlobalCategory(setcategory));
   };

   return (
      <main className="container m-auto my-6">
         <BestCategory />

         <h2 className="section-title  text-4xl my-8  md:text-6xl  font-sans">
            - All Category -{" "}
            
         </h2>
         <div className="flex flex-wrap justify-center gap-4">
            {datas.map((data, idx) => {
               return (
                  <div
                     key={`${data} ${idx}`}
                     onClick={() => handleSetGlobalCategory(data.name)}
                     className={` hover:scale-105  border-2 md:border-3 border-black 
                        bg-[#38a246]  p-2 rounded-3xl`}
                  >
                     <Link
                        href={`/blogs`}
                        className="max-w-[250px] flex flex-col justify-center items-center gap-2 "
                     >
                        <div className="section-subtitle text-2xl md:text-4xl">
                        {data.name}
                        </div>

                        <div className="text-center bg-amber-50 rounded-2xl p-2 border-2 border-black">
                        {data.description}
                        </div>
                     </Link>
                  </div>
               );
            })}
         </div>
      </main>
   );
};

export default CategoriesList;
