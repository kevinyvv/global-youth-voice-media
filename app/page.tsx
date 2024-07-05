"use client"

import React from 'react'
import Image from "next/image";
import Navbar from "../app/components/navbar";
import temporaryImage from "../public/nberd.webp";
import logo from "../public/logo.jpg"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


const Hero = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])


  return (
    <div className="full">
      <div className="max-w-[800px] w-full h-screen mx-auto text-center">
        
        <span className="mt-24 inline-block justify-center ">
        <h1 className="
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
      <div className="max-w-[800px] w-full h-screen mx-auto text-center flex items-center justify-center">
        
        <span className="mt-48 flex align-top my-aut top-1/2">
        <h3 className="
         text-white  p-4 text-6xl"> 
        What's next in the program?
        </h3>
        <Image
        className="mx-auto"
          src={logo}
          width={600}
          height={600}
          alt="Picture of the author"
        />
        </span>
      </div>

      <span className="grid justify-center w-full">
        <span className="mb-16 text-3xl font-bold">
            Where young minds become the voices of today!
        </span>
        <button className="rounded-lg bg-blue-500 px-4 text-3xl font-bold mx-auto"> Apply </button>
      </span>

      <div className="max-w-[800px] w-full h-[80svh] mx-auto text-center flex items-center justify-center">
        
        <span className="mt-48 flex align-top my-aut top-1/2">
        <h3 className="
         text-white  p-4 text-6xl"> 
          Learn more about...
        </h3>
        <Image
        className="mx-auto"
          src={logo}
          width={600}
          height={600}
          alt="Picture of the author"
        />
        </span>
      </div>

      <div className="max-w-[800px] w-full h-[80svh] mx-auto text-center flex items-center justify-center">
        
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


      <div className="max-w-[800px] w-full h-[80svh] mx-auto text-center flex items-center justify-center">
        
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
      <Navbar/>
      <Hero/>
    </main>
  );
}
