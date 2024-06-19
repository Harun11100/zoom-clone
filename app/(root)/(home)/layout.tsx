import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React, { ReactNode } from 'react'

const HomeLayout = ({children}:{children:ReactNode}) => {
  return (
   <main className='relative'>
    
    <Sidebar/>
    <Navbar/>
      <section className='flex min-h-screen flex-1  flex-col pax-6 pb-6 pt-28 max-md:pd-14 text-white sm:px-14'>
            <div className='w-full '>
                  {children}
            </div>
      </section>
   </main>
  )
}

export default HomeLayout
