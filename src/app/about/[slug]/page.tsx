import { getAuthor } from "@/app/api/authorApi/getAuthor";
import React, { Suspense } from "react";

const AuthorDetailpage = async ({
   params,
}: {
   params: Promise<{ slug: string }>;
}) => {
   const slug = (await params).slug;
   const author = await getAuthor(slug);

   return <main>{author.name}</main>;
};

export default AuthorDetailpage;
