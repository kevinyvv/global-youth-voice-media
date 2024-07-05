"use client"

import React from 'react'
import Image from "next/image";
import Link from 'next/link';

import Navbar from "../app/components/navbar";
import logo from "../public/logo.jpg"

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


const Hero = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])


  return (
    <div className="w-full">
      <div className="w-full h-[70svh] mx-auto text-center">
        
        <span className="mt-24 justify-center ">
        <h1 className=" mt-16
         text-white  p-4 text-6xl"> 
        Welcome to 
        </h1>
        <b className="text-white  p-4 text-6xl">
           Global Youth Voice Media
        </b>  
        <Image
        className="mt-16 mx-auto mb-16"
          src={logo}
          width={600}
          height={600}
          alt="Picture of the author"
        />
        </span>


        <span className="mt-96 text-white text-3xl">
          We're a dynamic platform empowering kids to step into the spotlight as interviewers, journalists, and cultural commentators.
        </span>   
      </div>
      <div className="w-full h-[60svh] mx-auto text-center flex items-center justify-center">
        
        <span className="mt-48 flex align-top my-auto top-1/2">
        <span className='bg-slate-100 rounded-xl py-4 mr-4 min-w-[30svw] grid justify-items-center items-center'>
        <h3 className="
           p-4 text-5xl font-bold"> 
        What's next in the program?
        </h3>
        <p className=''> 
          Take a look at our available programs!
        </p>
        <button className='bg-blue-500 self-center rounded-lg text-white font-bold py-2 px-4 mt-auto max-w-fit'>
        Programs
        </button>
        </span>
        <Image
        className="mx-auto"
          src={logo}
          width={500}
          alt="Picture of the author"
        />
        </span>
      </div>

      <span className="grid justify-center w-full bg-blue-400 rounded-2xl py-16">
        <span className="mb-16 text-3xl font-bold text-center">
            Where young minds become the voices of today!
        </span>
        <Link href='/ApplyNow' className="rounded-lg bg-blue-500 px-4 py-2 text-3xl font-bold mx-auto"> Apply Now! </Link>
      </span>

      <div className="w-full h-[60svh] mx-auto text-center flex items-center justify-center">
        
        <span className="mt-48 flex align-top my-aut top-1/2">
        <span>
        <h3 className="
         text-white  p-4 text-6xl"> 
          Learn more about...
        </h3>
        <Link href='/Admissions' className='text-white bg-blue-500,'> Click Here </Link>
        </span>
        <Image
        className="mx-auto"
          src={logo}
          width={600}
          height={600}
          alt="Picture of the author"
        />
        </span>
      </div>

      <div className="w-full h-[60svh] mx-auto text-center flex items-center justify-center">
        
        <span className="mt-48 flex align-top my-aut top-1/2">

        <Image
        className="mx-auto"
          src={logo}
          width={600}
          height={600}
          alt="Picture of the author"
        />
        <h3 className="
         text-white  p-4 text-6xl"> 
          Our Values
        </h3>

        </span>
      </div>


      <div className="w-full h-[60svh] mx-auto text-center flex items-center justify-center">
        
        <span className="mt-48 flex align-top my-aut top-1/2">

        <Image
        className="mx-auto"
          src={logo}
          width={600}
          height={600}
          alt="Picture of the author"
        />
        <h3 className="
         text-white  p-4 text-6xl"> 
          Diversity
        </h3>

        </span>
      </div>

      <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"> 
        <div className='text-center text-white'>
        <Image
        className="mx-auto"
          src={logo}
          width={600}
          height={600}
          alt="Picture of the author"
        />
        <p className='mt-4'>Text below</p>
        </div>
        </div>
        <div className="embla__slide">
        
        <Image
        className="mx-auto"
          src={logo}
          width={600}
          height={600}
          alt="Picture of the author"
        />

        </div>
        <div className="embla__slide">
        <Image
        className="mx-auto"
          src={logo}
          width={600}
          height={600}
          alt="Picture of the author"
        />
        </div>

        <div className="embla__slide">
        <Image
        className="mx-auto"
          src={logo}
          width={600}
          height={600}
          alt="Picture of the author"
        />
        </div>
        
        <div className="embla__slide">
        <Image
        className="mx-auto"
          src={logo}
          width={600}
          height={600}
          alt="Picture of the author"
        />
        </div>


      </div>
    </div>
    </div>
  )
}


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar pageNumber={0}/>
      <Hero/>
    </main>
  );
}
