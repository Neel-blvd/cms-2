'use client'

import { useRouter } from 'next/navigation';
import React, { SetStateAction, useState } from 'react'
import { toast } from 'sonner';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select';


function AddClientForm( {onAddItem, clientName, setItemName}: {
    onAddItem: Function,
    clientName: string,
    setItemName: Function
} ) {
 
    const [step, setStep] = useState(1);


  return (
    <div className='flex flex-col w-full'>
        {
            step == 1 ?
                <form onSubmit={(e) => {
                    e.preventDefault()
                    setStep(step+1)
                }} className='flex flex-col p-2'>
                    <input required type='text'
                        placeholder='Enter the Client&apos;s name'
                        className='p-2 rounded-lg placeholder:text-neutral-200 text-white bg-neutral-700 focus:outline-none'
                        value={clientName}
                        onChange={(e) => setItemName(e.target.value)}
                        ></input>

                    <button className='w-fit mt-5 ml-auto p-2 rounded-xl bg-transparent font-bold 
                        hover:scale-105 text-green-500'>
                      Next
                    </button>
                    
                </form>
            :
                <form onSubmit={(e) => {
                    e.preventDefault()
                    onAddItem();
                    }} 
                    className='flex flex-col items-center p-2'>
                    
                    {/* Add select logic here */}
                    <Select required>
                        <SelectTrigger className='bg-neutral-700 text-white'>
                            <SelectValue placeholder="Select a case type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Type of Case</SelectLabel>
                                <SelectItem value="Criminal">Criminal</SelectItem>
                                <SelectItem value="Civil">Civil</SelectItem>
                                <SelectItem value="Family">Family</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <div className='flex justify-between w-full mt-5'>
                        <button onClick={() => setStep(step-1)} className='p-2 rounded-xl bg-transparent font-bold hover:scale-105 text-white'>
                            Go Back
                            </button>
                        <button className='p-2 rounded-xl bg-transparent text-green-500 hover:scale-105'>
                            Submit
                        </button>
                    </div>

                </form>
        }
        
    </div>
  )
}

export default AddClientForm