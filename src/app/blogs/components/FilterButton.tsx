"use client";
import { getCategories } from "@/app/api/categoryApi/getCategories";
import { Category } from "@/app/types/category";
import { Button } from "@/components/ui/button";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuLabel,
   DropdownMenuRadioGroup,
   DropdownMenuRadioItem,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setGlobalCategory } from "@/redux/slices/globalCategory";
import Image from "next/image";
import React, { FC, use, useEffect, useState } from "react";

interface FilterButtonProps {
   nowCategory: string;
   changeCategory: (category: string) => void;
}
const FilterButton: FC<FilterButtonProps> = ({
   nowCategory,
   changeCategory,
}) => {


   const globalCategory = useAppSelector((state) => state.globalCategory);
   const dispatch = useAppDispatch();
   const handleSetGlobalCategory = (setcategory: string) => {
      dispatch(setGlobalCategory(setcategory));
   };

   const [position, setPosition] = useState(nowCategory);
   const [data, setData] = useState<Category[]>([]);

   useEffect(() => {
      handleSetGlobalCategory(position);
      changeCategory(position);
   }, [position]);

   useEffect(() => {
      const getData = async () => {
         const data = await getCategories();
         setData(data);
      };
      getData();
   }, []);




  









   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <div className="h-full  flex gap-2 items-center justify-center border-2 text-2xl  bg-white  px-2 md:px-3 mx-2 rounded-sm border-black  md:rounded-4xl">
               
               <Image
                  src="/filter.png"
                  alt="filter"
                  width={20}
                  height={20}
               />
               
            </div>
         </DropdownMenuTrigger>
         <DropdownMenuContent className="w-screen max-w-[500px] bg-[#f8b000] border-2 border-black p-0">
            <DropdownMenuLabel className="font-bold">Set Category</DropdownMenuLabel>
            <DropdownMenuRadioGroup
               value={position}
               onValueChange={setPosition}
               className="bg-white p-1 border-t-2 border-black"
            >
               <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
               {
               data.length > 0 &&
               data.map((category) => (
                  <DropdownMenuRadioItem
                     key={category.name}
                     value={category.name}
                  >
                     {category.name}
                  </DropdownMenuRadioItem>
               ))}
            </DropdownMenuRadioGroup>
         </DropdownMenuContent>
      </DropdownMenu>
   );
};

export default FilterButton;
