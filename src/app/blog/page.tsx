
import React, { Suspense } from "react";
import BlogTitle from "./components/BlogTitle";
import BlogList from "./components/BlogList";

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
