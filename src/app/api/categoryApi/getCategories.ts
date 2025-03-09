import { Category } from "@/app/types/category";
import { BASE_CATEGORY_URL } from "../blogApi/api";


export const getCategories = async () => {
   const response = await fetch(`${BASE_CATEGORY_URL}`);
   const data: Category[] = await response.json();
   return data;
};
