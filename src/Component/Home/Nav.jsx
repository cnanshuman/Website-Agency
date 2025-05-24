import React, { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import { HiOutlineMailOpen } from "react-icons/hi";
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // Hamburger & Close
import logo from "/images/logo.png"; // Adjust path if needed

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const Linkdata = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "/About",
    },
    {
      id: 3,
      name: "Services",
      link: "/Services",
    },
    {
      id: 3,
      name: "Portfolio",
      link: "/Portfolio",
    },
    {
      id: 4,
      name: "Blogs",
      link: "/Blogs",
    },
    {
      id: 5,
      name: "Careers",
      link: "/Careers",
    },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#55d0ff] text-slate-700 py-3 px-4 text-sm max-sm:hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <IoIosNotificationsOutline className="w-6 h-6" />
            <span className="font-medium">
              We Will Grow Your Small Business To The Next Level
            </span>
          </div>
          <ul className="flex flex-col sm:flex-row gap-2 sm:gap-6 font-medium text-sm">
            <li className="flex items-center gap-2">
              <HiOutlineMailOpen className="w-5 h-5" />
              <a href="mailto:info@mstyenterprises.com" className="hover:underline">
                info@mstyenterprises.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <LuPhone className="w-5 h-5" />
              <a href="tel:+919910741417" className="hover:underline">
                +91 991 0741 417
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Nav */}
      <header className="border-b border-[#e3e3e3] py-6 px-4 relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div>
            <a href="/" aria-label="Home">
              <img src={logo} alt="MSTY Logo" className="h-10 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10 text-[#151515] text-[16px]">
            {Linkdata.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="hover:text-[#55d0ff] transition font-normal"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href="/Contact"
              className=" flex items-center text-white gap-2 btn  font-normal bg-[#1b1b1b] group  p-2  pr-6.5 get-in-touch-button relative  border border-neutral-700  transition-all duration-200 ease-in text-lg hover:text-black overflow-hidden z-10 "
            >
              Contact Us{" "}
              <GoArrowUpRight className="w-[18px] h-[18px] rotate-0" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-2xl text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white px-4 py-4 rounded-md shadow-md">
            <nav className="flex flex-col gap-4 text-[#151515] text-[16px]">
              {Linkdata.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="hover:text-[#55d0ff] transition font-medium"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/Contact"
                className="mt-2 flex items-center gap-2 bg-black text-white px-5 py-2 rounded-md hover:bg-[#55d0ff] hover:text-black transition duration-200"
              >
                Contact Us <GoArrowUpRight className="w-5 h-5" />
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Nav;
