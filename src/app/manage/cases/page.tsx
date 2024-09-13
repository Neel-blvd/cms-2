import React from 'react'
import Image from 'next/image'
import filter from '../../../../public/filter.png'
import Case from '@/components/Case'


function page() {
  return (
    <div className='min-h-screen bg-neutral-950 flex justify-around'>
      <div className='p-20 w-full'>
        <p className='text-white mb-10'>You have 1 case :</p>
        <Case link='https://drive.google.com/file/d/1Ynx2Go-fvE4vH71c69ouJO1lUDsTpmnt/preview'/>
      </div>
      <div className='p-20'>
        <Image src={filter} alt='Filter' />
      </div>
    </div>
  )
}

export default page