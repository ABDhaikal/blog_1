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
import React, { FC, use, useEffect, useState } from "react";

interface FilterButtonProps {
    nowCategory : string
    changeCategory : (category : string) => void
}
const FilterButton: FC<FilterButtonProps> = ({nowCategory,changeCategory}) => {
    // const data = await getCategories();
    const [position, setPosition] = useState(nowCategory);
    const [data, setData] = useState<Category[]>([]);


    useEffect(() => {
        changeCategory(position)
    }, [position])
    
    
    useEffect(() => {
        const getData = async () => {
            const data = await getCategories();
            setData(data);
        };
        getData();
   }, [])


   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button variant="outline">{position}</Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent className="w-screen max-w-[500px]">
            <DropdownMenuLabel>Set Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
               value={position}
               onValueChange={setPosition}
            >
               <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
            
               {data.map((category) => (
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