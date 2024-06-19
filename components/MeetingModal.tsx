import React, { ReactNode } from 'react'

interface MeetingModalProps{
      title:string,
      buttonText?:string,
      handleClick?:()=>void,
      className:string,
      isOpen:boolean,
      onClose:()=>void,
      image:string,
      buttonIcon?:string,
      children?:ReactNode,
      
}

const MeetingModal = ({isOpen,title,buttonText,children,onClose,handleClick,className,image,buttonIcon}:MeetingModalProps) => {
  return (
    <div>MeetingModal</div>
  )
} 

export default MeetingModal  