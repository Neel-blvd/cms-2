'use client'
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import send from './../../../public/send2.png'
import Image from 'next/image'
import Case from '@/components/Case'
import GenerateCaseForm from '@/components/GenerateCaseForm'



function Page() {

  const [similarCases, setSimilarCases] = useState<string[] | undefined>([]);

  return (
    <div className='bg-neutral-900 min-h-screen'>
        <div className="w-fit mx-auto pt-20">
          <Dialog>
            <DialogTrigger asChild>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-2xl border border-neutral-950 bg-[linear-gradient(110deg,#000103,90%,#22c55e,91%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Generate an argument
              </button>
            </DialogTrigger>
            <DialogContent className='bg-black'>
              <DialogHeader className='text-green-500 font-bold text-lg'>
                Enter case details
              </DialogHeader>
              <DialogTitle></DialogTitle>

              <GenerateCaseForm/>

            </DialogContent>
          </Dialog>
        </div>
        

        <div className='mt-20 w-full flex flex-col items-center'>
          <textarea placeholder='Enter a prompt' className='rounded-2xl w-1/2 max-h-72 p-2
            placeholder:text-black focus:outline-none'></textarea>
            <div onClick={() => setSimilarCases([
              'https://drive.google.com/file/d/1_9Gro2R75cLqgPlKSiW7SfSka_QqkCHf/preview'
            ])} className='flex justify-center'>
              <Image src={send} alt='Send' className='scale-50' />
            </div>
        </div>
        {
          similarCases?.map((x, idx) => <Case key={idx} link={x} id={28362}/>)
        }
    </div>
  )
}

export default Page