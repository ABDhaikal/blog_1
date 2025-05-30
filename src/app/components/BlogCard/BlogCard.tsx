import { Blog } from "@/app/types/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { format } from "date-fns";

interface BlogCardProps {
   data: Blog;
}
const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
   return (
      <Link
         href={`/blogs/${data.slug}`}
         className="   mx-auto grid grid-cols-3  bg-white items-center p-2   rounded-xl md:rounded-2xl border-4 justify-center  border-black relative hover:scale-110"
      >
         <div className=" shrink flex flex-col items-center justify-center  ">
            <div className="items-center justify-center border-4  border-black rounded-2xl md:rounded-4xl overflow-clip mx-3">
               <Image
                  src={data.thumbnail}
                  alt="data image"
                  width={150}
                  height={150}

                  className=" object-cover"
               />
            </div>
            <p className="text-[11px] md:text-xl ">
               {format(new Date(data.created), "dd MMMM yyyy")}
            </p>
            <p>{data.category.name}</p>
         </div>

         <div className="col-span-2 h-full text-center  gap-1.5 md:gap-3 my-2 ">
            <p className="text-md md:text-2xl font-bold ">{data.title}</p>
            <p className="text-[12px] md:text-lg line-clamp-4 ">
               {data.description}
            </p>
            <p className="text-[11px] md:text-xl">Read more</p>
         </div>

      </Link>
   );
};

export default BlogCard;
