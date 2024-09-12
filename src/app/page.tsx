import Image from "next/image";
import send from './../../public/send2.png'
import { BackgroundLines } from "@/components/ui/background-lines";
import { TypewriterEffect, TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import LampDemo, { LampContainer } from "@/components/ui/lamp";
import {motion} from 'framer-motion'
import { SparklesCore } from "@/components/ui/sparkles";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Link from "next/link";

export default function Home() {

  const words = [
    {
      text: 'The',
      className: 'text-green-500 text-xl'
    },
    {
      text: 'only',
      className: 'text-green-500 text-xl'
    },
    {
      text: 'case',
      className: 'text-green-500 text-xl'
    },
    {
      text: 'management',
      className: 'text-green-500 text-xl'
    },
    {
      text: 'system',
      className: 'text-green-500 text-xl'
    },
    {
      text: 'your',
      className: 'text-green-500 text-xl'
    },
    {
      text: 'firm',
      className: 'text-green-500 text-xl'
    },
    {
      text: 'needs.',
      className: 'text-green-500 text-xl'
    },
  ]

  const caseAIDrafts = [
    {
      title: 'Draft 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      link: '/caseAI'
    },
    {
      title: 'Draft 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      link: '/caseAI'
    },
    {
      title: 'Draft 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      link: '/caseAI'
    },
  ]


  return (
    <main className="min-h-screen">

      <BackgroundLines className="bg-neutral-950">
        <div className="h-full flex flex-col justify-center items-center space-y-20">
          <div className="scale-150">
            <TextHoverEffect text='The CMS' />
          </div>
          <TypewriterEffectSmooth words={words} cursorClassName="bg-green-600 "/>
        </div>
      </BackgroundLines>

      <div> 
        <LampDemo/>
      </div>
      
      <div className="bg-neutral-950">
        <p className="text-green-500 text-center text-5xl">
          CaseAI
        </p>

        <div className="border w-10 mx-auto mt-20"></div> 
        
        <div className="mt-20 flex flex-col items-center text-white">
          <p className="w-fit rounded-2xl p-3 mt-10 text-lg">
            Generate arguments with CaseAI
          </p>
          <div className="flex space-x-20">
            <div className="text-white">
              <p>Inputs -</p>
              <br />
              <p>1. Legal Case Details - Case Type, Parties Involved, Relevant Facts, Evidence</p>
              <p>2. Jurisdiction - Geographical Location</p>
              <p>3. Plaintiff's desired outcome</p>
            </div>
            <div className="text-white">
              <p>Output -</p>
              <br />
              <p> A well-tailored legal argument</p>
            </div>
          </div>
        </div>

        <div className="w-fit mx-auto mt-20">
          <Link href='/caseAI'>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-2xl border border-neutral-950 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-green-500 text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Generate
            </button>
          </Link> 
        </div>

        <div className="border w-10 mx-auto mt-20"></div>

        <div className="flex justify-center mt-20">
          <p className="text-white text-lg w-fit rounded-2xl p-3 mt-10">
            Give me cases similar to case no. 13813
          </p>
          <Image src={send} alt='Enter button' className="scale-50"/>
        </div>
        <HoverEffect items={caseAIDrafts} />
        
        <div className="flex justify-center mt-10">
          <p className="text-white text-lg w-fit rounded-2xl p-3 mt-10">
            Give me cases similar to the following argument:
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
          <Image src={send} alt='Enter button' className="scale-50"/>
        </div>
        <HoverEffect items={caseAIDrafts} />

        <div className="flex justify-center mt-10">
          <p className="text-white text-lg w-fit rounded-2xl p-3 mt-10">
            Give me cases involving these keywords:
            <br />
            Employment discrimination, Gender discrimination, Wrongful termination, Hostile work environment
          </p>
          <Image src={send} alt='Enter button' className="scale-50"/>
        </div>
        <HoverEffect items={caseAIDrafts} />

        <div className="w-fit mx-auto mt-5">
          <Link href='/caseAI'>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-2xl border border-neutral-950 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-green-500 text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Search
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
