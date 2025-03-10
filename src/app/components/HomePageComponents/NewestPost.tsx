import { getNewestBlog } from "@/app/api/blogApi/getNewestBlog";
import BlogCard from "../BlogCard/BlogCard";

const NewestPost = async () => {
   const data = await getNewestBlog();
   // console.log(data);
   return (
      <section className="container m-automy-8">
         <h2 className="section-title md:big-screen-title text-5xl my-8  md:text-7xl  font-sans">
            - Newest Post -{" "}
         </h2>
         <div className="w-[90%] m-auto">
            <BlogCard data={data} />
         </div>
      </section>
   );
};

export default NewestPost;
