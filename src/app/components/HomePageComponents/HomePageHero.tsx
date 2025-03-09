import Image from 'next/image'
import React from 'react'

const HomePageHero = () => {
  return (
    <section className='container '>
    <div className=' w-[90%] m-auto grid grid-cols-1 md:grid-cols-2 bg-white items-center p-8 rounded-4xl border-4 justify-center border-black'>
        <div className='text-center gap-1.5'>
            <h1 className='text-4xl lg:text-8xl font-bold '>THE KON BLOG</h1>
            <p className='text-2xl lg:text-4xl'>Buat blogmu tanpa disuruh</p>
        </div>
        <div className='flex items-center justify-center'>
        <Image src="/blogHero.png" alt="blog image" width={500} height={500} />

        </div>
    </div>
    </section>
  )
}

export default HomePageHero