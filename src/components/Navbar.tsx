import React from 'react'
import Image from 'next/image'
import caseAI from './../../public/caseAI.png'
import home from './../../public/home.png'
import manage from './../../public/manage.png'
import help from './../../public/help.png'
import { FloatingDock } from './ui/floating-dock'

function Navbar() {
    
    const links = [
        {
          title: 'Home',
          icon: (<Image src={home} alt='Home navigation button' />),
          href:'/'
        },
        {
            title: 'Manage',
            icon: (<Image src={manage} alt='Manage navigation button' />),
            href:'/manage/dashboard'
        },
        {
            title: 'CaseAI',
            icon: (<Image src={caseAI} alt='CaseAI navigation button' />),
            href:'/caseAI'
        },
        {
            title: 'Help',
            icon: (<Image src={help} alt='Help navigation button' />),
            href:'/help'
        }
    ]


  return (
    <div className='flex justify-center'>
        <nav className='fixed bottom-0 p-3 w-fit z-50'>
            <FloatingDock items={links} desktopClassName='bg-transparent'/>
        </nav>
    </div>
  )
}

export default Navbar