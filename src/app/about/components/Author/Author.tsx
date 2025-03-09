import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthorCard from "./AuthorCard";
import { getAuthors } from "@/app/api/authorApi/getAuthors";

const Author = async () => {
   const data = await getAuthors();
   return (
      <section className="container m-auto flex flex-col justify-center items-center my-10">
         <h2 className="text-4xl md:text-8xl section-title py-3.5 hover:scale-120">
            teams
         </h2>
         <p className="text-xl my-4 section-subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
