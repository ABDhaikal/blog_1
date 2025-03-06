import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CategoryCardProps {
    title:string;
    color:string
}
const CategoryCard: React.FC<CategoryCardProps> = ({title,color}) => {
   return (
      <Link href={`/Category/${title}`} className={`hover:scale-110 h-full flex flex-col justify-center items-center border-4 border-black rounded-xl`}>
         <p className="text-2xl md:text-3xl xl:text-4xl font-bold text-center section-subtitle p-2 ">
            {title}
         </p>
      </Link>
   );
};

export default CategoryCard;
