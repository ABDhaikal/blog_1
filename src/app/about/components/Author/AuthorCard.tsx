import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AuthorCardProps {
   name: string;
   image: string;
   reference: string;
   title: string;
}
const AuthorCard: React.FC<AuthorCardProps> = ({
   name,
   image,
   reference,
   title,
}) => {
   return (
      <Link
         href={`/about/${reference}`}
         className="container m-auto flex flex-col justify-center items-center "
      >
         <div className="relative w-[300px] max-w-[40vw] overflow-clip aspect-square rounded-full border-8 border-black bg-amber-50  animate-spin duration-10000 hover:duration-300 ">
            <Image src={image} alt="blog image" fill sizes="40vw" className="object-cover" />
         </div>
         <div></div>
         <p className="text-2xl md:text-4xl section-subtitle hover:scale-120">
            {name}
         </p>
         <p className="text-xl md:text-2xl  section-subtitle">{title}</p>
      </Link>
   );
};

export default AuthorCard;
