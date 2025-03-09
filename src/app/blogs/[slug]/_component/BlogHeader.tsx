import { getBlog } from "@/app/api/blogApi/getBlog";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
interface BlogHeaderProps {
   slug: string;
}
const BlogHeader: FC<BlogHeaderProps> = async ({ slug }) => {
   const blog = await getBlog(slug);
   return (
      <div className="container m-auto item-center justify-center ">
            <Link href="/blogs " className="aspect-square block relative w-[50px] md:w-[75px]  left-[5%] md:left-[10%] hover:hue-rotate-180 ">
               {" "}
               <Image src="/back.svg" alt="logo" priority placeholder = 'empty' fill />
            </Link>
         <h1 className="section-title text-6xl   md:text-8xl  py-2 md:py-6 font-sans ">
            {blog.title}
         </h1>
         <div className="  flex  flex-wrap justify-center items-center gap-2">
            <p className="section-subtitle text-2xl md:text-3xl   ">
               {format(new Date(blog.created), "dd MMMM yyyy")}
            </p>
            <div className="w-fit flex justify-center items-center bg-red-200 border-2 border-black rounded-xl md:rounded-4xl p-1 md:p-2">
               <p className="font-bold">Category : </p>
               <p>{blog.category.name} </p>
            </div>
         </div>
         <div className="text-center text-3xl text-white m-4 flex items-center justify-center">
            Author:{" "}
            <Link
               href={`/about/${blog.user.slug}`}
               className="border-2 bg-blue-300 hover:bg-red-400  text-xl  border-black text-black rounded-4xl flex items-center justify-center p-1 px-2 w-fit mx-2"
            >
               {blog.user.name}
            </Link>
         </div>
      </div>
   );
};

export default BlogHeader;
