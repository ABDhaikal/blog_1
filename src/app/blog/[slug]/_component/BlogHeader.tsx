import React, { FC } from "react";
import { format } from "date-fns";
import { getBlog } from "@/app/api/blogApi/getBlog";
import Link from "next/link";
import Image from "next/image";
interface BlogHeaderProps {
   slug: string;
}
const BlogHeader: FC<BlogHeaderProps> = async ({ slug }) => {
   const blog = await getBlog(slug);
   return (
      <div className="container m-auto item-center justify-center ">
         <div className="aspect-square  w-[50px] md:w-[75px]  aspect-square relative left-[5%] md:left-[10%] ">
            <Link href="/blog ">
               {" "}
               <Image src="/back.svg" alt="logo" fill />
            </Link>
         </div>
         <h1 className="section-title text-6xl   md:text-8xl  py-2 md:py-6 font-sans ">
            {blog.title}
         </h1>
         <div className="  flex  flex-wrap justify-center items-center gap-2">
            <p className="section-subtitle text-2xl md:text-3xl   ">
               {format(new Date(blog.created), "dd MMMM yyyy")}
            </p>
            <div className="w-fit flex justify-center items-center bg-red-200 border-2 border-black rounded-xl md:rounded-4xl p-1 md:p-2">
               <p className="font-bold">Category : </p>
               <p>{blog.category} </p>
            </div>
         </div>
      </div>
   );
};

export default BlogHeader;
