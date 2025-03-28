import { Category } from "@/app/types/category";
import { BASE_CATEGORY_URL } from "../api";
import { cache } from "react";


export const getCategories = cache(async () => {
   // console.log("getCategories");
   const response = await fetch(`${BASE_CATEGORY_URL}`);
   const data: Category[] = await response.json();
   return data;
});
