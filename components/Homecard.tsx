import { cn } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'

interface HomeCardProps{
      bg:string,
      img:string,
      title:string,
      des:string,
      handleClick:()=>void;
}

const Homecard = ({img,bg,title,des, handleClick}:HomeCardProps) => {
  return (
      <div className={cn('px-4 py-3 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer ',bg)} onClick={()=>{}}>
      <div className='flex-center glassmorphism size-14 rounded-[10px]'>
      <Image 
      src={img}
      alt={img}
      width={35}
      height={35}/>
      </div>
      <div className='flex flex-col gap-2'>
       <h1 className='text-2xl font-semibold'>
         {title}
       </h1>
       <p className='text-lg font-normal'>{des}</p>
      </div>
   </div>
  )
}

export default Homecard