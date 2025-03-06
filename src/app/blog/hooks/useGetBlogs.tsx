"use client ";
import { BASE_DB_URL } from "@/app/api/blogApi/api";
import { Blog } from "@/app/types/blog";
import { tr } from "date-fns/locale";
import React, { useState } from "react";

const useGetBlogs = async () => {
   const [data, setData] = useState<Blog[]>([]);
   const [isLoading, setisLoading] = useState<boolean>(true);

   const getData = async () => {
      try {
         const response = await fetch(`${BASE_DB_URL}`);
         const data: Blog[] = await response.json();
         setData(data);
      } catch (error) {
         
      } finally {
         setisLoading(false);
      }
      return data;
   };

   return { data, isLoading, getData };
};

export default useGetBlogs;
