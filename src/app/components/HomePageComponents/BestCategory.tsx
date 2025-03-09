"use client";
import { getBestCategory } from "@/app/api/categoryApi/getBestCategory";
import { Category } from "@/app/types/category";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setGlobalCategory } from "@/redux/slices/globalCategory";
import Link from "next/link";
import { useEffect, useState } from "react";

const BestCategory = () => {
   const [data, setData] = useState<Category[]>([]);

   useEffect(() => {
      const getData = async () => {
         const response = await getBestCategory();
         setData(response);
      };
      getData();
   }, []);

   const globalCategory = useAppSelector((state) => state.globalCategory);
   const dispatch = useAppDispatch();
   const handleSetGlobalCategory = (setcategory: string) => {
      dispatch(setGlobalCategory(setcategory));
   };
   if (data.length === 0) return null;
   return (
      <section className="container m-auto my-8">

         <h2 className="section-title lg:big-screen-title text-5xl my-8  lg:text-7xl  font-sans">
            - Best Category -{" "}
         </h2>

         <div
            key={`${data[0].name}`}
            onClick={() => handleSetGlobalCategory(data[0].name)}
            className=" hover:scale-105  border-2 md:border-3 border-black 
                        bg-gradient-to-r from-[#b5d117] to-[#f06501]  p-2 rounded-3xl flex items-center justify-center w-fit m-auto hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group "
         >
            <Link
               href={`/blogs`}
               className="section-subtitle text-3xl lg:text-5xl group-hover:top-[150%] duration-500 "
            >
               {data[0].name}
            </Link>
         </div>
      </section>
   );
};

export default BestCategory;

