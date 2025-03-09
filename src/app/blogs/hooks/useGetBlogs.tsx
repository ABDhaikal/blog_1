"use client ";
import { BASE_BLOG_URL } from "@/app/api/api";
import { Blog } from "@/app/types/blog";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface getBlogQuery {
   search: string;
   page: number;
   display: number;
   category: string;

}

const useGetBlogs = (queries: getBlogQuery) => {
   return useQuery({
      queryKey: ["blogs", queries], // consider adding a unique identifier or a dependency array to ensure the query is re-run when necessary
      queryFn: async () => {
         const { search,display, page, category } = queries;
         const offset = (page - 1) * display;
         let baseurl = `${BASE_BLOG_URL}?pageSize=${display}&offset=${offset}&where=%60title%60%20LIKE%20'%25${search}%25'`;
         if (category !== "all") {
            baseurl += `%20AND%20%60category%60.%60name%60%20%3D%20'${category}'`;
         }
         baseurl += "&sortBy=%60created%60%20desc&loadRelations=category%2Cuser";
         
         const counturl = `${BASE_BLOG_URL}/count`;

         const { data } = await axios.get<Blog[]>(baseurl); // consider adding a specific endpoint for blogs
         const { data: count } = await axios.get<number>(counturl);
         return { data, count };
      },
   });
};

export default useGetBlogs;
