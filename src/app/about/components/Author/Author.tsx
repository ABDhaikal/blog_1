import Image from "next/image";
import Link from "next/link";
import React from "react";

const Author = () => {
   return (
      <section className="container m-auto flex flex-col justify-center items-center my-32">
         <h2 className="text-4xl md:text-8xl section-title py-3.5 hover:scale-120">
            Author
         </h2>
         <Image
            src="/blogHero.png"
            alt="blog image"
            width={500}
            height={500}
            className="rounded-full border-8 border-black bg-amber-50 aspect-square max-w-[70%]  animate-spin duration-10000"
         />
         <div className="bg-white rounded-4xl border-4 justify-center  border-black p-4 md:p-8 my-4 max-w-[80%]">
            <p className="text-md md:text-2xl  my-4 text-center">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
               iste repudiandae harum culpa unde! Odit fuga culpa assumenda,
               aliquam obcaecati incidunt quae necessitatibus quaerat debitis
               mollitia rem modi similique asperiores corrupti veniam laborum
               cumque voluptates, esse vitae accusantium iste at et deserunt.
               Harum, eligendi sed eius iusto perferendis cum, commodi aliquid
               nemo placeat doloribus explicabo odio impedit eum soluta optio?
            </p>
            <hr />
            <p className="text-md md:text-2xl  my-4 text-center font-bold">
               Contact Information
            </p>
            <div className="flex justify-center items-center gap-3">
               <Link href="https://www.instagram.com/" target="_blank">Instagram</Link>
               <Link href="https://www.linkedin.com/"  target="_blank">Linkedin</Link>
               <Link href="https://github.com/ABDhaikal"  target="_blank">Github</Link>
            </div>
         </div>
      </section>
   );
};

export default Author;
