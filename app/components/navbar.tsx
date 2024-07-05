"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import logo from "../../public/logo.jpg";
import { Divider } from "@nextui-org/react";

const Navbar = ({ pageNumber }: { pageNumber: number }) => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(true);
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

  useEffect(() => {
    setCurrentPage(pageNumber);
  }, [])

  const handleNavigation = (page: any, url: any) => {
    setCurrentPage(page);
    router.push(url, undefined, { shallow: true });
  };

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
          <button
            className="nav-btn rounded-2xl h-4/6 text-base md:text-lg px-4"
            onClick={() => handleNavigation(1, '/')}
          >
            ABOUT US
          </button>

          <button
            className="nav-btn rounded-2xl h-4/6 text-base md:text-lg px-4"
            onClick={() => handleNavigation(2, '/NewestEvent')}
          >
            NEWS & EVENTS
          </button>

          <button
            className="nav-btn rounded-2xl h-4/6 text-base md:text-lg px-4 mr-4"
            onClick={() => handleNavigation(3, '/ApplyNow')}
          >
            APPLY NOW
          </button>
        </div>
      </div>

      {showDropdown && (
        <>
          <div className="w-full relative top-0 flex justify-between px-8 py-8 bg-blue-400">
            {currentPage === 0 && (
              <>
                <button className="dropdown-button">
                  <Link href='/StudentExperience'>Student Experience</Link>
                </button>
                <button className="dropdown-button">
                  <Link href='Members&Alumni'>Members and Alumni</Link>
                </button>
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
                <button className="dropdown-button">
                  <Link href='/StudentExperience'>Student Experience</Link>
                </button>
                <button className="dropdown-button">
                  <Link href='Members&Alumni'>Members and Alumni</Link>
                </button>
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
                <button className="dropdown-button">
                  <Link href='/StudentExperience'>Student Experience</Link>
                </button>
                <button className="dropdown-button">
                  <Link href='Members&Alumni'>Members and Alumni</Link>
                </button>
                <button className="dropdown-button">
                  <Link href='/Admissions'> Admissions </Link>
                </button>
                <button className="dropdown-button">
                  <Link href='/Directory'> Directory </Link>
                </button>
              </>
            )}
          </div>
          <Divider />
        </>
      )}
    </div>
  );
};

export default Navbar;
