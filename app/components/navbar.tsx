"use client";
import { useEffect, useState } from "react";

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
      <div className="w-full flex justify-between bg-white h-max py-3 px-2">
        Logo Here

        <div className="flex space-x-6">
          <button className="nav-btn" onClick={()=>{
            setCurrentPage(1)
          }}> About Us </button>
          <button className="nav-btn" onClick={() => {
            setCurrentPage(2)
          }}> Programs </button>
          <button className="nav-btn"> Upcoming Events </button>
          <button className="nav-btn"> Past Events</button>
        </div>
      </div>

      {showDropdown && (
        <div className="w-full relative top-0 flex justify-between px-8 py-4 bg-blue-400">
          {currentPage === 2 && (
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
