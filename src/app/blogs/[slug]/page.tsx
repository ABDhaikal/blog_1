import Loading from "@/app/components/ui/Loading"
import { Suspense } from "react"
import BlogHeader from "./_component/BlogHeader"
import BlogBody from "./_component/BlogBody"
import { getBlog } from "@/app/api/blogApi/getBlog"


export const generateMetadata = async ({params}:{params:Promise<{slug:string}>}) => {
  const slug = (await params).slug
  const blog = await getBlog(slug)
  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
        images: blog.thumbnail
    }
  }
}

const BlogDetailpage = async({params}:{params:Promise<{slug:string}>})=> {
    const slug = (await params).slug
      return (
  
      <main>
          <Suspense fallback={<Loading />}>
          <BlogHeader slug={slug}/>
          <BlogBody slug={slug} />
          </Suspense>
  
      </main>
    )
  }
  
  export default BlogDetailpage