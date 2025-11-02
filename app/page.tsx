import Navbar from '@/component/Navbar'
import Cover from "@/component/Cover";
import Footer from '@/component/Footer';
import React from 'react'

function page() {
  return (
    <div className='bg-white text-black'>
        <Navbar></Navbar>
        <div className="bg-white text-black">
        <Cover title={"Journey"} imageUrl={"/cover_image.jpg"} title_des={'Your travel companion'} />
        <Footer></Footer>
      </div>
    </div>
    
  )
}

export default page
