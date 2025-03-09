"use client";
import { BASE_BLOG_URL, BASE_CATEGORY_URL } from "@/app/api/api";
import { Blog } from "@/app/types/blog";
import { Category } from "@/app/types/category";
import axios from "axios";
import React, { use, useEffect } from "react";

interface HandleViewsProps {
   pageid: string;
   pageviews: number;
   categoryid: string;
   categoryviews: number;
}
const HandleViews: React.FC<HandleViewsProps> = ({
   pageid,
   pageviews,
   categoryid,
   categoryviews,
}) => {
   const sendViewPage = async () => {
      // console.log(pageid);
      try {
         await axios.put(
            `${BASE_BLOG_URL}/${pageid}`,
            {
               "views" : pageviews + 1
             }
         );
      } catch (error) {
         console.log(error);
      }
   };



   const sendViewCategory = async () => {
      try {
         await axios.put(
            `${BASE_CATEGORY_URL}/${categoryid}`,
            {
               "views": categoryviews + 1,
            }
         );
      } catch (error) {
         console.log(error);
      }
      finally{
         console.log("category views updated");
      }
   };

   useEffect(() => {
      sendViewPage();
      console.log("viewed");
      sendViewCategory();
   }, []);
   return <div></div>;
};

export default HandleViews;
