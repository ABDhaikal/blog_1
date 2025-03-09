import React, { Suspense } from "react";
import BlogList from "./components/BlogList";
import BlogTitle from "./components/CategoriesTitle";

const page = () => {
   return (
      <main>
         <BlogTitle />
         <Suspense fallback={<div className="text-red-500 ">Loading...</div>}>
            <BlogList />
         </Suspense>
      </main>
   );
};

export default page;
