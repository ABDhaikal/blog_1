import React, { FC } from "react";
import Image from "next/image";
import { getBlog } from "@/app/api/blogApi/getBlog";
import Markdown from "@/app/components/ui/Markdown";

interface BlogBodyProps {
   slug: string;
}
const BlogBody: FC<BlogBodyProps> = async ({ slug }) => {
   const blog = await getBlog(slug);

   return (
      <section className="container m-auto my-8">
         <div className="m-auto bg-white max-w-[90%] md:max-w-[80%] rounded-xl bgmd:rounded-4xl p-4 md:p-8 border-4 border-black ">
            <div className="  border-4 border-black rounded-4xl m-auto overflow-clip w-fit relative">
               <Image
                  src={blog.thumbnail}
                  alt="blog image"
                  priority
                  width={300}
                  height={300}
               />
            </div>

            <p>{blog.description}</p>
            <Markdown content={blog.content} />
         </div>
      </section>
   );
};

export default BlogBody;
