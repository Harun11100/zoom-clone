'use client'

import React from 'react'
import Homecard from './Homecard'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import MeetingModal from './MeetingModal'

const MeetingTypes = () => {
      const router=useRouter();
      const [meetingState,setMeetingState]=useState<'isScheduleMeeting'|'isJoiningMeeting'|'isInstantMeeting'|undefined>();
      const createMeeting=()=>{ }

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