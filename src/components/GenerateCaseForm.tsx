'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'sonner';


function GenerateCaseForm() {

    const [formData, setFormData] = useState({
        caseType: '',
        petitionerName: '',
        defendantName: '',
        caseFacts: '',
        caseEvidences: '',
        jurisdiction: '',
        petitionerOutcome: ''
    });    
    const router = useRouter()
    const [step, setStep] = useState(1);


  return (
    <div className='flex flex-col'>
        {
            step == 1 ?
                <form onSubmit={(e) => {
                    e.preventDefault()
                    setStep(step+1)
                }} className='flex flex-col p-2'>
                    <input required type='text' placeholder='Enter the case type' className='p-2 rounded-lg
                    placeholder:text-white text-white bg-neutral-800 focus:outline-none'
                    value={formData.caseType} onChange={(e) => setFormData({...formData, caseType: e.target.value})}></input>

                    <button className='w-fit mt-5 ml-auto p-2 rounded-xl bg-transparent font-bold hover:scale-105 text-green-500'>
                      Next
                    </button>
                    
                </form>
            :
                step == 2 ?
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        setStep(step+1)
                        }} className='flex flex-col p-2'>
                        <input required type='text' placeholder='Enter the name of the petitioner' className='p-2 rounded-lg
                        placeholder:text-white text-white bg-neutral-800 focus:outline-none'
                        value={formData.petitionerName} onChange={(e) => setFormData({...formData, petitionerName: e.target.value})}></input>
                        <input required type='text' placeholder='Enter the name of the defendant' className='p-2 rounded-lg
                        placeholder:text-white text-white bg-neutral-800 focus:outline-none'
                        value={formData.defendantName} onChange={(e) => setFormData({...formData, defendantName: e.target.value})}></input>

                        <div className='flex justify-between w-full mt-5'>
                            <div onClick={() => setStep(step - 1)} className='p-2 rounded-xl bg-transparent font-bold hover:scale-105 text-white cursor-pointer'>
                            Go Back
                            </div>
                            <button className='p-2 rounded-xl bg-transparent font-bold hover:scale-105 text-green-500'>
                            Next
                            </button>
                        </div>

                    </form>
                :
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        toast('Generated case draft #12345', {
                        action: {
                            label: "View",
                            onClick: () => router.push('/manage/cases')
                        },
                        className:'text-green-500 bg-black border-neutral-500'
                        })
                        }} className='flex flex-col p-2'>
                        <textarea required placeholder='Enter facts about the case' className='p-2 rounded-lg
                        placeholder:text-white text-white bg-neutral-800 focus:outline-none'
                        value={formData.caseFacts} onChange={(e) => setFormData({...formData, caseFacts: e.target.value})}></textarea>
                        <textarea required placeholder='Enter any sources of evidence' className='p-2 rounded-lg
                        placeholder:text-white text-white bg-neutral-800 focus:outline-none'
                        value={formData.caseEvidences} onChange={(e) => setFormData({...formData, caseEvidences: e.target.value})}></textarea>
                        <input required type='text' placeholder='Which jurisdiction does the matter lie under' className='p-2 rounded-lg
                        placeholder:text-white text-white bg-neutral-800 focus:outline-none'
                        value={formData.jurisdiction} onChange={(e) => setFormData({...formData, jurisdiction: e.target.value})}></input>
                        <textarea required placeholder='Enter the petitioner&apos;s desired outcome' className='p-2 rounded-lg
                        placeholder:text-white text-white bg-neutral-800 focus:outline-none'
                        value={formData.petitionerOutcome} onChange={(e) => setFormData({...formData, petitionerOutcome: e.target.value})}></textarea>

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

export default GenerateCaseForm