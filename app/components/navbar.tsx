"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.jpg"

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
      <div className="w-full flex justify-between bg-white">
        
        <Image
          className="mx-auto pl-16"
            src={logo}
            width={200}
            alt="Picture of the author"
        />

        <div className="flex w-11/12 h-24 space-x-6 bg-white rounded justify-center pt-6">
          <button className="nav-btn rounded-2xl h-4/6 text-lg" onClick={()=>{
            setCurrentPage(1)
          }}> ABOUT US </button>
          <button className="nav-btn rounded-2xl h-4/6 text-lg" onClick={() => {
            setCurrentPage(2)
          }}> NEWS & EVENTS </button>
          <button className="nav-btn rounded-2xl h-4/6 text-lg" onClick={() => {
            setCurrentPage(2)
          }}> 
          APPLY NOW </button>
        </div>
      </div>

      {showDropdown && (
        <div className="w-full relative top-0 flex justify-between px-8 py-4 bg-blue-400">
            {currentPage === 0 && (
            <>
              <button className="dropdown-button"> Student Experience </button>
              <button className="dropdown-button"> Members and Alumni </button>
              <button className="dropdown-button"> Admissions </button>
              <button className="dropdown-button"> Directory </button>
            </>
          )}
          {currentPage === 1 && (
            <>
              <button className="dropdown-button"> UN Project </button>
              <button className="dropdown-button"> Creative Writing Program </button>
              <button className="dropdown-button"> Youth Journalist Program </button>
              <button className="dropdown-button"> Public Speaking </button>
              <button className="dropdown-button"> Debate </button>
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
              <button className="dropdown-button"> UN Project </button>
              <button className="dropdown-button"> Creative Writing Program </button>
              <button className="dropdown-button"> Youth Journalist Program </button>
              <button className="dropdown-button"> Public Speaking </button>
              <button className="dropdown-button"> Debate </button>
            </>
          )}
        </div>
      )}
      
    </div>
  );
};

export default Navbar;
