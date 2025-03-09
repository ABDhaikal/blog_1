"use client ";
import { BASE_BLOG_URL } from "@/app/api/blogApi/api";
import { Blog } from "@/app/types/blog";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


interface getBlogQuery {
   search: string;
   page: number;
}

const useGetBlogs = (queries: getBlogQuery) => {
   return useQuery({
      queryKey: ["blogs", queries], // consider adding a unique identifier or a dependency array to ensure the query is re-run when necessary
      queryFn: async () => {
         const { search ,page } = queries;

        `https://givingairport-us.backendless.app/api/data/blogs?where=%60title%60%20LIKE%20'%25${search}%25'%20OR%20%60description%60%20LIKE%20'%25${search}%25'`
         const baseurl = `${BASE_BLOG_URL}?where=%60title%60%20LIKE%20'%25${search}%25'`;
         const counturl = `${BASE_BLOG_URL}/count`;

         const { data } = await axios.get<Blog[]>(baseurl); // consider adding a specific endpoint for blogs
         const { data: count } = await axios.get<number>(counturl);
         return {data,count};
      },
   });
};

export default useGetBlogs;
