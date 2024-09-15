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
                <p onClick={() => setClicked(!clicked)} className='text-green-500 border rounded-xl mx-auto w-fit p-2'>
                
                {
                    id ?
                        <p>Case #{id}</p>
                    :
                        <p>Case #12345</p>
                }
                        
                
                </p>
            :
                <div onClick={() => setClicked(!clicked)} className='w-full'>
                    <p className='text-green-500 border rounded-xl mx-auto w-fit p-2'>
                    {
                    id ?
                        <p>Case #{id}</p>
                    :
                        <p>Case #12345</p>
                    }
                    </p>
                    <iframe src={link} className='w-full h-screen'></iframe>
                </div>
                
        }
    </div>
  )
}

export default Case