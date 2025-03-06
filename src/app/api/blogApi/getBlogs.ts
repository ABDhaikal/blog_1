import { Blog } from "../../types/blog";
import { BASE_DB_URL } from "./api";

export const getBlogs = async () => {
   const response = await fetch(`${BASE_DB_URL}`);
   const data: Blog[] = await response.json();
   return data;
};
