import { Blog } from "../../types/blog";
import { BASE_BLOG_URL } from "../blogApi/api";

interface Category {
    category:string
}
export const getCategories = async () => {
   const response = await fetch(`${BASE_BLOG_URL}?property=%60category%60&groupBy=%60category%60`);
   const data: Category[] = await response.json();
   return data;
};
