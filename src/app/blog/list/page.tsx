"use client";
import {
   Pagination,
   PaginationContent,
   PaginationEllipsis,
   PaginationItem,
   PaginationLink,
   PaginationNext,
   PaginationPrevious,
} from "@/components/ui/pagination";

import BlogCard from "@/app/components/BlogCard/BlogCard";
import React, { useState } from "react";
import useGetBlogs from "../hooks/useGetBlogs";
import { useDebounceValue } from "usehooks-ts";
import Image from "next/image";

const page = () => {
   const [search, setSearch] = useState<string>("");
   const [debouncedSearch] = useDebounceValue(search, 500);

   const [page, setPage] = useState(1);
   const { data: blogs } = useGetBlogs({ search: debouncedSearch, page: page });

   const handlePreviousPage = () => {
      if (page > 1) {
         setPage((prevPage) => prevPage - 1);
      }
   };
   const handleNextPage = () => {
      const totalPages = Math.ceil(blogs?.count || 0 / 10);
      if (page < totalPages) {
         setPage((prevPage) => prevPage + 1);
      }
   };

   return (
      <main className="container m-auto p-4">
         {/* Blog list header */}

         <section>
            <div className="flex flex-row items-center justify-center  text-xl md:text-4xl">
               <input
                  type="text"
                  placeholder="Search..."
                  className="h-full border-2 placeholder:text-center bg-white  px-2 md:px-3 mx-2 rounded-sm border-black  md:rounded-4xl"
                  onChange={(e) => setSearch(e.target.value)}
               />
               
               <Image src="/search.svg" alt="search" width={50} height={50} /> 
            </div>
         </section>

         {/* Blog list body */}
         <section className=" my-8 w-[90%] md:w-[80%] m-auto flex flex-col gap-4 md:gap-6 ">
            {Array.isArray(blogs?.data) && blogs.data.length > 0 ? (
               blogs.data.map((blog, idx) => (
                  <div key={`${blog.objectId}one${idx}`}>
                     <BlogCard data={blog} />
                  </div>
               ))
            ) : (
               <p className="text-center text-xl text-white">No blogs found.</p>
            )}
         </section>

         {/* pagination */}
         <section className="m-8">
            <Pagination>
               <PaginationContent>
                  {/* button Prev */}
                  <PaginationItem>
                     <PaginationPrevious  className="bg-amber-400 border-2 border-black" onClick={handlePreviousPage} />
                  </PaginationItem>

                  <PaginationItem>
                     <PaginationLink   className="bg-amber-400 border-2 border-black">{page}</PaginationLink>
                  </PaginationItem>
                  {/* Button Next  */}
                  <PaginationItem>
                     <PaginationNext   className="bg-amber-400 border-2 border-black" onClick={handleNextPage} />
                  </PaginationItem>
               </PaginationContent>
            </Pagination>
         </section>
      </main>
   );
};

export default page;
