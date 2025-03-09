"use client";
import { getCategories } from "@/app/api/categoryApi/getCategories";
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
                     onClick={() => handleSetGlobalCategory(data.name)}
                     className={` hover:scale-105  border-2 md:border-3 border-black 
                        bg-[${rotate[idx % 6]}]  p-2 rounded-3xl`}
                  >
                     <Link
                        href={`/blogs`}
                        className="section-subtitle text-2xl md:text-4xl "
                     >
                        {data.name}
                     </Link>
                  </div>
               );
            })}
         </div>
      </main>
   );
};

export default CategoriesList;
