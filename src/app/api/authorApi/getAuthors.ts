import { notFound } from "next/navigation";
import { cache } from "react";
import { BASE_AUTHOR_URL } from "./api";

   


export const getAuthors = cache(async (slug: string) => {
   const response = await fetch(
      `${BASE_AUTHOR_URL}?where=%60slug%60%20%3D%20'${slug}'`
   );
   const data: User[] = await response.json();
   if(!data.length){
      return notFound();
   }
   return data[0];
});
