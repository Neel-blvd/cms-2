'use client'
import DndHeroComponent from '@/components/dndComponents/DndHeroComponent'
import React, {useState} from 'react'

function Page() {

  const [clientCategory, setClientCategory] = useState('Case Status')

  return (
    <div className='min-h-screen bg-neutral-500 w-full'>
      <div className='mt-5'>
        <nav className='w-fit mx-auto'>
          <ul className='flex space-x-10 text-white'>
            <li className={`${clientCategory == 'Case Status' ? 'bg-red-700' : ''} p-1 px-2 rounded-xl
              hover:cursor-pointer`}
              onClick={() => setClientCategory('Case Status')}>
              Case Status
            </li>
            <li className={`${clientCategory == 'Client Relationship' ? 'bg-red-700' : ''} p-1 px-2 rounded-xl
              hover:cursor-pointer`}
              onClick={() => setClientCategory('Client Relationship')}>
              Client Relationship
            </li>
            <li className={`${clientCategory == 'Client Priority' ? 'bg-red-700' : ''} p-1 px-2 rounded-xl
              hover:cursor-pointer`}
              onClick={() => setClientCategory('Client Priority')}>
              Client Priority
            </li>
            <li className={`${clientCategory == 'Miscellaneous' ? 'bg-red-700' : ''} p-1 px-2 rounded-xl
              hover:cursor-pointer`}
              onClick={() => setClientCategory('Miscellaneous')}>
              Miscellaneous
            </li>
          </ul>
        </nav>
      </div>

      <DndHeroComponent clientCategory={clientCategory} />

    </div>
  )
}

export default Page