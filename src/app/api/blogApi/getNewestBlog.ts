import { notFound } from "next/navigation";
import { cache } from "react";
import { Blog } from "../../types/blog";
import { BASE_BLOG_URL } from "../api";

   


export const getNewestBlog = cache(async () => {
   console.log("getNewestBlog");
   const response = await fetch(
      `${BASE_BLOG_URL}?sortBy=%60created%60%20desc&loadRelations=category%2Cuser&relationsPageSize=1`
   );
   const data: Blog[] = await response.json();
   if(!data.length){
      return notFound();
   }
   return data[0];
});
