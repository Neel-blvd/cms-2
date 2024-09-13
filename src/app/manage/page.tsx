import React from 'react'
import Image from 'next/image'
import dashboard from './../../../public/dashboard.png'
import cases from './../../../public/cases.png'
import billing from './../../../public/billing.png'
import Link from 'next/link'

function page() {
  return (
    <div className='min-h-screen bg-neutral-600'>
      <div className='flex p-10 justify-around pt-40'>
        <div>
          <Link href='/manage/dashboard'>
            <Image src={dashboard} alt='Dashboard' className='hover:cursor-pointer hover:scale-105'/>
          </Link>
          <p className='text-center text-white'>Dashboard</p>
        </div>
        <div>
          <Link href='/manage/cases'>
            <Image src={cases} alt='Cases' className='hover:cursor-pointer hover:scale-105'/>
          </Link>
          <p className='text-center text-white'>Cases</p>
        </div>
        <div>
          <Link href='/manage/billing'>
            <Image src={billing} alt='Billing' className='hover:cursor-pointer hover:scale-105'/>
          </Link>
          <p className='text-center text-white'>Billing</p>
        </div>
      </div>
  
    </div>
  )
}

export default page