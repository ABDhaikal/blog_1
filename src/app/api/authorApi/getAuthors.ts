import { notFound } from "next/navigation";
import { cache } from "react";
import { BASE_AUTHOR_URL } from "../api";

   


export const getAuthors = cache(async () => {
   const response = await fetch(
      `${BASE_AUTHOR_URL}`
   );
   const data: User[] = await response.json();
   if(!data.length){
      return notFound();
   }
   return data;
});
