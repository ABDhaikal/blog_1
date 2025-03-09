import { Category } from "@/app/types/category";
import { BASE_CATEGORY_URL } from "../api";
import { cache } from "react";

export const getBestCategory = cache(async () => {
   // console.log("getBestCategory");
   const response = await fetch(
      `${BASE_CATEGORY_URL}?pageSize=1&sortBy=%60views%60%20desc`
   );
   const data: Category[] = await response.json();
   return data;
});
