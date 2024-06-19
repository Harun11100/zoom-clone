import MeetingTypes from '@/components/MeetingTypes'
import React from 'react'

const Home = () => {
  
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
    <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>

    <div className='h-full flex flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
       <h2 className='glassmorphism max-w-[270px] rounded px-3 py-2 text-base font-normal '>
         Upcoming Meeting at :12:30 AM
       </h2>
       <div className='flex flex-col items-end gap-2'>
         
         <h1 className='text-4xl font-extrabold lg:text-7xl'>
          11:00 AM
         </h1>
         <p className='text-lg font-medium text-#C9DDFF'>
          Wednesday,June 19 ,2024
         </p>
       </div>
    </div>
    </div>
    <MeetingTypes/>
    </section>
  )
}

export default Home