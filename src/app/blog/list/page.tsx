"use client";

import BlogCard from "@/app/components/BlogCard/BlogCard";
import { Blog } from "@/app/types/blog";
import React, { useState } from "react";
import useGetBlogs from "../hooks/useGetBlogs";
import { useDebounceValue } from "usehooks-ts";

const blogsdummy: Blog[] = [
   {
      thumbnail:
         "https://givingairport-us.backendless.app/api/files/thumbnailbg/image1.png",
      created: 1741237482178,
      description:
         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem molestiae minus omnis enim veniam tempora labore libero ea, consequatur dolorum, perspiciatis inventore sed repellendus optio animi maxime officia id, quibusdam doloremque sint nostrum mollitia pariatur odio? Quidem iusto dignissimos, ipsa incidunt corporis quam, possimus cumque accusamus in error fugit rerum?",
      title: "makanan 1",
      content:
         '<h2>What is Lorem Ipsum?</h2><p class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2>Why do we use it?</h2><p class="ql-align-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><br></p><h2>Where does it come from?</h2><p class="ql-align-justify">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p><p class="ql-align-justify">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p><p><br></p>',
      category: "minuman",
      views: null,
      objectId: "498D2798-7375-47B9-8606-27EAA50F0AFF",
      slug: "makanan",
   },
   {
      thumbnail:
         "https://givingairport-us.backendless.app/api/files/thumbnailbg/image1.png",
      created: 1741243379004,
      description:
         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem molestiae minus omnis enim veniam tempora labore libero ea, consequatur dolorum, perspiciatis inventore sed repellendus optio animi maxime officia id, quibusdam doloremque sint nostrum mollitia pariatur odio? Quidem iusto dignissimos, ipsa incidunt corporis quam, possimus cumque accusamus in error fugit rerum?",
      title: "minuman",
      content:
         '<h2>What is Lorem Ipsum?</h2><p class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2>Why do we use it?</h2><p class="ql-align-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><br></p><h2>Where does it come from?</h2><p class="ql-align-justify">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p><p class="ql-align-justify">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p><p><br></p>',
      category: "makanan",
      views: null,
      objectId: "E10ED625-DC07-4AA6-927E-F1D68EBD88D6",
      slug: "minuman",
   },
];
const page = () => {
   const [search, setSearch] = useState<string>("");
   const [debouncedSearch] = useDebounceValue(search, 500);
   const { data: blogs } = useGetBlogs({ title: debouncedSearch });

   return (
      <main className="container m-auto p-4">
         {/* Blog list header */}

         <section>
            <div className="flex flex-row items-center justify-center  text-xl md:text-4xl">
               <input
                  type="text"
                  className="h-full border-2 bg-white  px-2 md:px-3 mx-2 rounded-sm border-black  md:rounded-4xl"
                  onChange={(e) => setSearch(e.target.value)}
               />
               <button className="h-full border-2 bg-green-400 hover:bg-amber-600 px-2 md:px-3 mx-2 md:rounded-4xl">
                  Search
               </button>
            </div>
         </section>

         {/* Blog list body */}
         <section className=" my-8 w-[90%] md:w-[80%] m-auto flex flex-col gap-4 md:gap-6 ">
            {Array.isArray(blogs) && blogs.length > 0 ? (
               blogs.map((blog, idx) => (
                  <div key={`${blog.objectId}one${idx}`}>
                     <BlogCard data={blog} />
                  </div>
               ))
            ) : (
               <p className="text-center">No blogs found.</p>
            )}
         </section>
      </main>
   );
};

export default page;
