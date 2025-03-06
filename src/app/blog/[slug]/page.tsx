import Loading from '@/app/components/ui/Loading'
import React, { Suspense } from 'react'
import BlogHeader from './_component/BlogHeader'
import BlogBody from './_component/BlogBody'

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