'use client'
import { useState } from 'react'
import React from 'react'
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import Image from 'next/image';
import dashboardImage from '../../public/dashboard.png'
import mattersImage from '../../public/matters.png'
import billingImage from '../../public/billing.png'
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';

function SidebarComponent() {


    const links = [
      {
        label: "Client Dashboard",
        href: "/manage/dashboard",
        icon: (
          <Image src={dashboardImage} alt='dashboardicon' className='w-10'></Image>
        ),
      },
      {
        label: "Matters",
        href: "/manage/matters",
        icon: (
          <Image src={mattersImage} alt='mattersicon' className='w-10'></Image>
        ),
      },
      {
        label: "Billing",
        href: "/manage/billing",
        icon: (
          <Image src={billingImage} alt='billingicon' className='w-10'></Image>
        ),
      }
    ];
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Sidebar open={open} setOpen={setOpen} animate={true}>
          <SidebarBody className="justify-between bg-neutral-700 gap-1">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              <>
                <Logo />
              </>
              <div className="mt-8 flex flex-col gap-5 w-full text-white">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
          </SidebarBody>
        </Sidebar>
      </div>
    );
  }
  export const Logo = () => {
    return (
      <Link
        href="#"
        className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-medium text-white dark:text-white whitespace-pre"
        >
          CMS
        </motion.span>
      </Link>
    );
  };


export default SidebarComponent