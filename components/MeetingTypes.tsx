'use client'

import React from 'react'
import Homecard from './Homecard'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import MeetingModal from './MeetingModal'
import { useUser } from '@clerk/nextjs'
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk'
import { Toaster } from "@/components/ui/toaster"
import { useToast } from './ui/use-toast'

const MeetingTypes = () => {
      const router=useRouter();
      const [meetingState,setMeetingState]=useState<'isScheduleMeeting'|'isJoiningMeeting'|'isInstantMeeting'|undefined>();
      const {user}=useUser(); 
      const client=useStreamVideoClient()
      const [value,setValues]=useState({
        dateTime:new Date(),
        description:'',
        link:'',
      })
      const [callDetails,setCallDetails]=useState<Call>()
      const { toast } = useToast()

      const createMeeting= async()=>{

         if (!user||!client)return 
         try{

          if(!value.dateTime){
            toast({
              title: "Please select a date and time" })
            return;
          }
        

          const id=crypto.randomUUID();
          const call=client.call('default',id);
          if(!call) throw new Error ('Failed to create call')
          
            const startsAt=value.dateTime.toISOString()||
            new Date(Date.now()).toISOString();

            const description=value.description||'Instant meeting'

          await call.getOrCreate({
            data:{
              starts_at:startsAt,
              custom:{
                description
              }
            }
          })
           
          setCallDetails(call)

          if(!value.description){
            router.push(`/meeting/${call.id}`)
          }
          
           toast({title:'Meeting Created'})


         }catch(err){
          console.log(err)
          toast({
            title: "Failed to create Meeting",
           
          })
         }
       }

  return (
   <section className='grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4'>
     <Homecard 
     img='/icons/add-meeting.svg' 
     bg='bg-red-1' 
     title='New Meetings'
     des='Start an instant meeting'
     handleClick={()=>setMeetingState('isInstantMeeting')}/>

     <Homecard img='/icons/schedule.svg' 
     bg='bg-pink-1' 
     title='Schedule Meetings'
     des='Plan your meeting'
     handleClick={()=>setMeetingState('isScheduleMeeting')}/>

     <Homecard img='/icons/recordings.svg' 
     bg='bg-yellow-1' 
     title='View Recordings'
     des='checkout your recordings'
     handleClick={()=>router.push('/recordings')}/>

     <Homecard img='/icons/join-meeting.svg' 
     bg='bg-orange-1' 
     title='Join Meetings'
     des='via invitation link'
     handleClick={()=>setMeetingState('isJoiningMeeting')}/>
     
     
     <MeetingModal
      isOpen={meetingState ==='isInstantMeeting'}
      onClose={()=>setMeetingState(undefined)}      
      title='Start an Instant Meeting'
      className='text-center'
      buttonText='Start Meeting'
      handleClick={createMeeting}
     
     />
   </section>
  )
}

export default MeetingTypes