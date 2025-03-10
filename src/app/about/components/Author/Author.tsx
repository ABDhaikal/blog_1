import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthorCard from "./AuthorCard";
import { getAuthors } from "@/app/api/authorApi/getAuthors";

const Author = async () => {
   const data = await getAuthors();
   return (
      <section className="container m-auto flex flex-col justify-center items-center my-10">
         <h2 className="text-4xl md:text-7xl section-title py-3.5 hover:scale-120">
            teams
         </h2>
         <p className="text-[12px] my-2 md:text-[16px]  bg-[#adf040]  text-gray-800 w-[80%] stroke-black font-medium border-2 md:border-4 border-black rounded-3xl p-2 text-center flex items-center justify-center   animate-in slide-in-from-left transform duration-1200 hover:scale-80">
            The konBlog team is a vibrant mix of developers, designers, and
            visionaries united by a passion for creativity and innovation. Each
            member brings unique skills, from coding expertise to bold design
            thinking, ensuring konBlog thrives as a hub for inspiration,
            education, and artistic expression in the pop art style.
         </p>
         <div className="grid grid-cols-2  gap-4">
            {data.map((author) => {
               return (
                  <AuthorCard
                     key={author.slug}
                     name={author.name}
                     image={author.image}
                     reference={author.slug}
                     title={author.title}
                  />
               );
            })}
         </div>
      </section>
   );
};

export default Author;
