import React from 'react'
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


function page() {
  return (
    <div className='bg-neutral-950 min-h-screen'>
        <div className="w-fit mx-auto pt-20">
          <Dialog>
            <DialogTrigger asChild>
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-2xl border border-neutral-950 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-green-500 text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Generate an argument
              </button>
            </DialogTrigger>
            <DialogContent className='bg-black'>
              <DialogHeader className='text-white'>
                Enter case details
              </DialogHeader>

              <div className='flex flex-col'>
              <input type='text' placeholder='Enter the case type' className='p-2 rounded-lg
                placeholder:text-black bg-gray-400'></input>
              <input type='text' placeholder='Enter the name of the petitioner' className='p-2 rounded-lg
                placeholder:text-black bg-gray-400'></input>
              <input type='text' placeholder='Enter the name of the defendant' className='p-2 rounded-lg
                placeholder:text-black bg-gray-400'></input>
              <textarea placeholder='Enter facts about the case' className='p-2 rounded-lg
                placeholder:text-black bg-gray-400'></textarea>
              <textarea placeholder='Enter any sources of evidence' className='p-2 rounded-lg
                placeholder:text-black bg-gray-400'></textarea>
              <input type='text' placeholder='Which jurisdiction does the matter lie under' className='p-2 rounded-lg
                placeholder:text-black bg-gray-400'></input>
              <textarea placeholder='Enter the petitioner&apos;s desired outcome' className='p-2 rounded-lg
                placeholder:text-black bg-gray-400'></textarea>
              </div>

              <DialogFooter>
                <button className='p-2 rounded-xl bg-gray-400 font-bold hover:scale-105'>
                  Confirm
                </button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className='mt-20 w-fit mx-auto'>
          <input type='text' placeholder='Enter a prompt' className='p-4 pr-60 rounded-2xl
            placeholder:text-black'></input>
            <div className='flex justify-center'>
              <Image src={send} alt='Send' className='scale-50' />
            </div>
        </div>
    </div>
  )
}

export default page