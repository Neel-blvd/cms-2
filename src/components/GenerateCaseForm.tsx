'use client'
import React, { useState } from 'react'

function GenerateCaseForm({step}: {step: number}) {

    const [formData, setFormData] = useState({
        caseType: '',
        petitionerName: '',
        defendantName: '',
        caseFacts: '',
        caseEvidences: '',
        jurisdiction: '',
        petitionerOutcome: ''
    });    

  return (
    <div className='flex flex-col'>
        {
            step == 1 ?
                <div>
                    <input type='text' placeholder='Enter the case type' className='p-2 rounded-lg
                    placeholder:text-white text-white bg-neutral-800 focus:outline-none'
                    value={formData.caseType} onChange={(e) => setFormData({...formData, caseType: e.target.value})}></input>
                    
                </div>
            :
                step == 2 ?
                    <div className='flex flex-col p-2'>
                        <input type='text' placeholder='Enter the name of the petitioner' className='p-2 rounded-lg
                        placeholder:text-white text-white bg-neutral-800 focus:outline-none'
                        value={formData.petitionerName} onChange={(e) => setFormData({...formData, petitionerName: e.target.value})}></input>
                        <input type='text' placeholder='Enter the name of the defendant' className='p-2 rounded-lg
                        placeholder:text-white text-white bg-neutral-800 focus:outline-none'
                        value={formData.defendantName} onChange={(e) => setFormData({...formData, defendantName: e.target.value})}></input>
                    </div>
                :
                    <div className='flex flex-col p-2'>
                        <textarea placeholder='Enter facts about the case' className='p-2 rounded-lg
                        placeholder:text-white text-white bg-neutral-800 focus:outline-none'
                        value={formData.caseFacts} onChange={(e) => setFormData({...formData, caseFacts: e.target.value})}></textarea>
                        <textarea placeholder='Enter any sources of evidence' className='p-2 rounded-lg
                        placeholder:text-white text-white bg-neutral-800 focus:outline-none'
                        value={formData.caseEvidences} onChange={(e) => setFormData({...formData, caseEvidences: e.target.value})}></textarea>
                        <input type='text' placeholder='Which jurisdiction does the matter lie under' className='p-2 rounded-lg
                        placeholder:text-white text-white bg-neutral-800 focus:outline-none'
                        value={formData.jurisdiction} onChange={(e) => setFormData({...formData, jurisdiction: e.target.value})}></input>
                        <textarea placeholder='Enter the petitioner&apos;s desired outcome' className='p-2 rounded-lg
                        placeholder:text-white text-white bg-neutral-800 focus:outline-none'
                        value={formData.petitionerOutcome} onChange={(e) => setFormData({...formData, petitionerOutcome: e.target.value})}></textarea>
                    </div>
        }
        
    </div>
  )
}

export default GenerateCaseForm