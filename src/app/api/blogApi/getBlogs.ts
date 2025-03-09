import { Blog } from "../../types/blog";
import { BASE_BLOG_URL } from "../api";

export const getBlogs = async () => {
   // console.log("getBlogs");
   const response = await fetch(`${BASE_BLOG_URL}?loadRelations=category%2Cuser`);
   const data: Blog[] = await response.json();
   return data;
};
