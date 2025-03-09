import { getBestBlog } from "@/app/api/blogApi/getBestBlog";
import BlogCard from "../BlogCard/BlogCard";

const BestPostCard = async () => {
   const data = await getBestBlog();
   // console.log(data);
   return (
      <section className="container m-automy-8">
         <h2 className="section-title md:big-screen-title text-5xl my-8  md:text-7xl  font-sans">
            - Best Post -{" "}
         </h2>
         <div className="w-[90%] m-auto">
            <BlogCard data={data} />
         </div>
      </section>
   );
};

export default BestPostCard;
