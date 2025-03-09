import { notFound } from "next/navigation";
import { cache } from "react";
import { Blog } from "../../types/blog";
import { BASE_BLOG_URL } from "./api";

   


export const getBlog = cache(async (slug: string) => {
   const response = await fetch(
      `${BASE_BLOG_URL}?where=%60slug%60%20%3D%20'${slug}'&loadRelations=category%2Cuser`
   );
   const data: Blog[] = await response.json();
   if(!data.length){
      return notFound();
   }
   return data[0];
});
