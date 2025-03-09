"use client";
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
import React from "react";

const FilterButton = () => {
   const [position, setPosition] = React.useState("bottom");

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button variant="outline">Open</Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent className="w-screen max-w-[500px]">
            <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
               value={position}
               onValueChange={setPosition}
            >
               <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
               <DropdownMenuRadioItem value="bottom">
                  Bottom
               </DropdownMenuRadioItem>
               <DropdownMenuRadioItem value="right">
                  Right
               </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
         </DropdownMenuContent>
      </DropdownMenu>
   );
};

export default FilterButton;