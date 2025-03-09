import { notFound } from "next/navigation";
import { cache } from "react";
import { Blog } from "../../types/blog";
import { BASE_BLOG_URL } from "../api";

   


export const getBestBlog = cache(async () => {
   // console.log("getBestBlog");
   const response = await fetch(
      `${BASE_BLOG_URL}?pageSize=1&sortBy=%60views%60%20desc&loadRelations=category%2Cuser`
   );
   const data: Blog[] = await response.json();
   if(!data.length){
      return notFound();
   }
   return data[0];
});
