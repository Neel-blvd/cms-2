'use client'
import React, { useState } from 'react'

function Case(props: {
    link: string, 
    id?: number
}) {

    const [clicked, setClicked] = useState(false)
    const link = props.link
    const id = props.id

  return (
    <div>
        {
            !clicked ?
                <div onClick={() => setClicked(!clicked)} className='text-green-500 border rounded-xl mx-auto w-fit p-2'>
                
                {
                    id ?
                        <p>Case #{id}</p>
                    :
                        <p>Case #12345</p>
                }
                        
                
                </div>
            :
                <div onClick={() => setClicked(!clicked)} className='w-full'>
                    <div className='text-green-500 border rounded-xl mx-auto w-fit p-2'>
                    {
                    id ?
                        <p>Case #{id}</p>
                    :
                        <p>Case #12345</p>
                    }
                    </div>
                    <div className='flex justify-center'>
                        <iframe src={link} className='w-1/2 h-screen'></iframe>
                    </div>
                </div>
                
        }
    </div>
  )
}

export default Case