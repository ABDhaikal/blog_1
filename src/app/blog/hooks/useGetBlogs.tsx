"use client ";
import { BASE_DB_URL } from "@/app/api/blogApi/api";
import { Blog } from "@/app/types/blog";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// const useGetBlogs = async () => {
//    const [data, setData] = useState<Blog[]>([]);
//    const [isLoading, setisLoading] = useState<boolean>(true);

//    const getData = async () => {
//       try {
//          const response = await fetch(`${BASE_DB_URL}`);
//          const data: Blog[] = await response.json();
//          setData(data);
//       } catch (error) {

//       } finally {
//          setisLoading(false);
//       }
//       return data;
//    };

//    return { data, isLoading, getData };
// };

// export default useGetBlogs;

interface getBlogQuery {
   title: string;
}

const useGetBlogs = (queries: getBlogQuery) => {
   return useQuery({
      queryKey: ["blogs", queries], // consider adding a unique identifier or a dependency array to ensure the query is re-run when necessary
      queryFn: async () => {
         const { title } = queries;
         const { data } = await axios.get<Blog[]>(
            `https://givingairport-us.backendless.app/api/data/blogs?where=%60title%60%20LIKE%20'%25${title}%25'`
         ); // consider adding a specific endpoint for blogs
         return data;
      },
   });
};

export default useGetBlogs;
