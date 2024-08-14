'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const Homepage = () => {
  return (
    <motion.div className='h-full' initial={{ y: '-200vh' }} animate={{ y: '0%' }} transition={{ duration: 1 }}>
      <div className='h-full flex flex-col md:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/* IMAGE CONTAINER */}
        <div className='h-1/2 md:h-full md:w-1/2 relative'>
          <Image src='/update.png' alt='' fill className='object-contain max-w-[93%]' />
        </div>
        {/* TEXT CONTAINER */}
        <div className='h-1/2 md:h-full md:w-1/2 flex flex-col gap-5 items-center justify-center'>
          {/* TITLE */}
          <h1 className=' text-2xl md:text-4xl font-bold'>Crafting Digital Experiences, Designing Tomorrow</h1>
          {/* DESC */}
          <p className='md:text-lg'>Welcome to my digital canvas, where innovation and creativity converge. With a keen eye for aesthetics and a mastery of code, my portfolio shows a diverse collection of projects that reflect my commitment to excellence.</p>
          {/* BUTTONS */}
          <div className='w-full flex gap-4'>
            <Link href='/portfolio'><button className='p-1 md:p-4 rounded-lg ring-1 ring-black bg-black text-white'>View My Work</button> </Link>
            <Link href='/contact'><button className='p-1 md:p-4 rounded-lg ring-1 ring-black'>Contact Me</button></Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default Homepage;
