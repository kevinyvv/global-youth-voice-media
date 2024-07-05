"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link'
import logo from "../../public/logo.jpg"
import { Divider } from "@nextui-org/react";


const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(true);
  // to keep track of which dropdown to display
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY < lastScrollY || window.scrollY === 0) {
        setShowDropdown(true);
      } else {
        setShowDropdown(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full fixed top-0 left-0">
      <div className="w-full flex justify-between items-center bg-white">
        
        <Link href="/">
        <Image
          className="mx-auto"
            src={logo}
            height={96}
            alt="Picture of the author"
        />
        </Link>

        <div className="flex h-24 space-x-6 items-center">
            <Link href="/">
            <button
                className="nav-btn rounded-2xl h-4/6 text-base md:text-lg px-4"
                onClick={() => {
                setCurrentPage(1);
                }}
            >
                ABOUT US
            </button>
            </Link>


            <Link href='/NewestEvent'>
            <button
                className="nav-btn rounded-2xl h-4/6 text-base md:text-lg px-4"
                onClick={() => {
                setCurrentPage(2);
                }}
            >
                NEWS & EVENTS
            </button>
            </Link>

            <Link href="/ApplyNow">
                <button
                className="nav-btn rounded-2xl h-4/6 text-base md:text-lg px-4 mr-4"
                onClick={() => {
                    setCurrentPage(3);
                }}
                >
                APPLY NOW
                </button>
            </Link>
        </div>

      </div>

      {showDropdown && (
        <>
        <div className="w-full relative top-0 flex justify-between px-8 py-4 bg-blue-400">
            {currentPage === 0 && (
            <>
              <button className="dropdown-button"> Student Experience </button>
              <button className="dropdown-button"> Members and Alumni </button>
              <button className="dropdown-button"> 
              <Link href='/Admissions'> Admissions </Link>
                </button>
              <button className="dropdown-button"> 
              <Link href='/Directory'> Directory </Link>
               </button>
            </>
          )}
          {currentPage === 1 && (
            <>
              <button className="dropdown-button"> Student Experience </button>
              <button className="dropdown-button"> Members and Alumni </button>
              <button className="dropdown-button"> 
              <Link href='/Admissions'> Admissions </Link>
               </button>
              <button className="dropdown-button"> 
              <Link href='/Directory'> Directory </Link>
               </button>
            </>
          )}
          {currentPage === 2 && (
            <>
              <button className="dropdown-button"> UN Project </button>
              <button className="dropdown-button"> Creative Writing Program </button>
              <button className="dropdown-button"> Youth Journalist Program </button>
              <button className="dropdown-button"> Public Speaking </button>
              <button className="dropdown-button"> Debate </button>
            </>
          )}
          {currentPage === 3 && (
            <>
              <button className="dropdown-button"> Student Experience </button>
              <button className="dropdown-button"> Members and Alumni </button>
              
                <button className="dropdown-button"> 
                <Link href='/Admissions'> Admissions </Link>
                </button>
              
              <button className="dropdown-button"> 
              <Link href='/Directory'> Directory </Link>
               </button>
            </>
          )}
        </div>
        <Divider/>
        </>
      )}
      
    </div>
  );
};

export default Navbar;
