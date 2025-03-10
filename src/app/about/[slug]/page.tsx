import { getAuthor } from "@/app/api/authorApi/getAuthor";
import Markdown from "@/app/components/ui/Markdown";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

const AuthorDetailpage = async ({
   params,
}: {
   params: Promise<{ slug: string }>;
}) => {
   const slug = (await params).slug;
   const author = await getAuthor(slug);

   return (
      <main>
         <section className="container m-auto flex flex-col justify-center items-center ">
            <div className="relative w-[300px]  overflow-clip aspect-square rounded-full border-8 border-black bg-amber-50  animate-spin duration-10000 hover:duration-300 ">
               <Image
                  src={author.image}
                  alt="blog image"
                  width={300}
                  height={300}
                  className="object-cover"
               />
            </div>
            <div></div>
            <p className="text-2xl md:text-4xl section-subtitle hover:scale-120">
               {author.name}
            </p>
            <p className="text-xl md:text-2xl  section-subtitle">
               {author.title}
            </p>
            <div className="bg-white rounded-4xl border-4 justify-center  border-black p-4 md:p-8 my-4 max-w-[80%]">
               <div className="text-md   my-4 text-center ">
                  <Markdown content={author.description} />
               </div>
               <hr />
               <p className="text-md md:text-2xl  my-4 text-center font-bold">
                  Contact Information
               </p>
               <div className="flex justify-center items-center gap-3">
                  <Link href={`mailto:${author.email}`} target="_blank">
                     Email
                  </Link>
                  <Link href="https://www.linkedin.com/" target="_blank">
                     Linkedin
                  </Link>
                  <Link href="https://github.com/ABDhaikal" target="_blank">
                     Github
                  </Link>
               </div>
            </div>
         </section>
      </main>
   );
};

export default AuthorDetailpage;
