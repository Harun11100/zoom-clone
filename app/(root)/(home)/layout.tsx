import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "Zoom-clone",
  description: "Video calling application",
  icons:{
    icon:'/icons/logo/svg'
  }
};
const HomeLayout = ({children}:Readonly<{children:ReactNode}>) => {
  return (
   <main className='relative'>
    
   

    <Navbar/>
    <div className='flex'>
    <Sidebar />
    <section className='flex min-h-screen flex-1  flex-col pax-6 pb-6 pt-28 max-md:pd-14 sm:px-14'>
            <div className='w-full '>
                  {children}
            </div>
      </section>
    </div>
     
   </main>
  )
}

export default HomeLayout
