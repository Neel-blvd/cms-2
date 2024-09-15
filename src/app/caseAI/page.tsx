'use client'
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import send from './../../../public/send2.png'
import Image from 'next/image'
import Case from '@/components/Case'
import { useRouter } from 'next/navigation'
import GenerateCaseForm from '@/components/GenerateCaseForm'



function page() {

  const [similarCases, setSimilarCases] = useState<string[] | undefined>([]);
  const [step, setStep] = useState(1);
  const router = useRouter()

  return (
    <div className='bg-neutral-950 min-h-screen'>
        <div className="w-fit mx-auto pt-20">
          <Dialog>
            <DialogTrigger asChild>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-2xl border border-neutral-950 bg-[linear-gradient(110deg,#000103,45%,#22c55e,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Generate an argument
              </button>
            </DialogTrigger>
            <DialogContent className='bg-black'>
              <DialogHeader className='text-green-500 font-bold text-lg'>
                Enter case details
              </DialogHeader>

              <GenerateCaseForm step={step}/>

              <DialogFooter>
                {
                  step == 1 ?
                    <button onClick={() => setStep(step+1)} className='p-2 rounded-xl bg-transparent font-bold hover:scale-105 text-green-500'>
                      Next
                    </button>
                  :
                    step == 2 ?
                      <div className='flex justify-between w-full'>
                        <button onClick={() => setStep(step-1)} className='p-2 rounded-xl bg-transparent font-bold hover:scale-105 text-white'>
                          Go Back
                        </button>
                        <button onClick={() => setStep(step+1)} className='p-2 rounded-xl bg-transparent font-bold hover:scale-105 text-green-500'>
                          Next
                        </button>
                      </div>
                    :
                    <div className='flex justify-between w-full'>
                      <button onClick={() => setStep(step-1)} className='p-2 rounded-xl bg-transparent font-bold hover:scale-105 text-white'>
                          Go Back
                        </button>
                      <button onClick={() => router.push('/manage/cases')} className='p-2 rounded-xl bg-transparent text-green-500 hover:scale-105'>
                        Submit
                      </button>
                    </div>
                }
              
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className='mt-20 w-fit mx-auto'>
          <input type='text' placeholder='Enter a prompt' className='p-4 pr-60 rounded-2xl
            placeholder:text-black'></input>
            <div onClick={() => setSimilarCases([
              'https://drive.google.com/file/d/1_9Gro2R75cLqgPlKSiW7SfSka_QqkCHf/preview'
            ])} className='flex justify-center'>
              <Image src={send} alt='Send' className='scale-50' />
            </div>
        </div>
        {
          similarCases?.map(x => <Case link={x} id={28362}/>)
        }
    </div>
  )
}

export default page