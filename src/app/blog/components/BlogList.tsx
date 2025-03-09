import { getBlogs } from "@/app/api/blogApi/getBlogs";
import BlogCard from "@/app/components/BlogCard/BlogCard";
import { Blog } from "@/app/types/blog";
import React from "react";

const BlogList = async () => {
   const blogs: Blog[] = await getBlogs();
   console.log(blogs);
   return (
      <main className="container m-auto my-6">
         <div className="flex flex-row items-center justify-center  text-xl md:text-4xl">
            <input
               type="text"
               className="h-full border-2 bg-white  px-2 md:px-3 mx-2 rounded-sm border-black  md:rounded-4xl"
            />
            <button className="h-full border-2 bg-green-400 hover:bg-amber-600 px-2 md:px-3 mx-2 md:rounded-4xl">
               Search
            </button>
         </div>

         <div className="flex flex-col  max-w-[80%] md:max-w-3/4 place-items-center m-auto my-9">
            {/* {blogs.map((blog, idx) => {
               return (
                  <div key={`${blog.objectId}one${idx}`} className="w-full">
                     <BlogCard data={blog} />;
                  </div>
               );
            })} */}
         </div>
         <div className="flex flex-col place-items-center m-auto my-10 "></div>
      </main>
   );
};

export default BlogList;
