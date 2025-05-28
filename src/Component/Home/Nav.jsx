import React, { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import { HiOutlineMailOpen } from "react-icons/hi";
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "/images/logo.png"; // Adjust path if needed

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const Linkdata = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/About" },
    { id: 3, name: "Services", link: "/Services" },
    { id: 4, name: "Portfolio", link: "/Services/uiux" },
    { id: 5, name: "Blogs", link: "/Blogs" },
    { id: 6, name: "Careers", link: "/Careers" },
  ];

  const servicesData = [
    {
      category: "Web Development",
      subServices: [
        "Frontend Development",
        "Backend Development",
        "Full Stack Development",
        "E-commerce Development",
      ],
    },
    {
      category: "Content Writing",
      subServices: [
        "Blog Writing",
        "Article Writing",
        "Copywriting",
        "SEO Writing",
      ],
    },
    {
      category: "Digital Marketing",
      subServices: [
        "SEO",
        "Social Media Marketing",
        "Email Marketing",
        "Content Marketing",
      ],
    },
    {
      category: "Business Solution",
      subServices: [
        "Website Development",
        "Software Development",
        "Mobile App Development",
        "E-commerce Development",
      ],
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
              <a
                href="mailto:info@mstyenterprises.com"
                className="hover:underline"
              >
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
          <nav className="hidden md:flex gap-10 text-[#151515] text-[16px] items-center">
            {Linkdata.map((item) => (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() =>
                  item.name === "Services" && setIsServicesOpen(true)
                }
                onMouseLeave={() =>
                  item.name === "Services" && setIsServicesOpen(false)
                }
              >
                <Link
                  to={item.link}
                  className="hover:text-[#55d0ff] transition font-normal"
                >
                  {item.name}
                </Link>
                {item.name === "Services" && isServicesOpen && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 bg-white text-white rounded-lg shadow-xl p-8 animate-fadeIn">
                    <div className="flex flex-col md:flex-row justify-between gap-8">
                      {servicesData.map((service, index) => (
                        <div key={index} className="flex-1">
                          <h3 className="text-[20px] font-bold mb-4 text-[#121212] text-nowrap">
                            {service.category}
                          </h3>
                          <ul className="space-y-2">
                            {service.subServices.map((subService, subIndex) => (
                              <li key={subIndex} className="  py-2">
                                <Link
                                  to={`/Services/${service.category
                                    .toLowerCase()
                                    .replace(" ", "-")}/${subService
                                    .toLowerCase()
                                    .replace(" ", "-")}`}
                                  className="text-[17px] font-medium hover:text-[#55d0ff] transition text-[#121212]"
                                >
                                  {subService}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              to="/Contact"
              className="flex items-center text-white gap-2 font-normal bg-[#1b1b1b] p-2 px-6 relative border border-neutral-700 transition-all duration-200 ease-in text-lg hover:text-black group overflow-hidden z-10   group   pr-6.5 get-in-touch-button "
            >
              <span>Contact Us</span>
              <GoArrowUpRight className="w-[18px] h-[18px]" />              
            </Link>
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
          <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col pt-20 px-4 overflow-y-auto">
            <nav className="flex flex-col gap-6 text-[#151515] text-[18px]">
              {Linkdata.map((item) => (
                <div key={item.id}>
                  <div className="flex justify-between items-center">
                    <Link
                      to={item.link}
                      className="hover:text-[#55d0ff] transition font-medium"
                      onClick={() =>
                        item.name !== "Services" && setIsMobileMenuOpen(false)
                      }
                    >
                      {item.name}
                    </Link>
                    {item.name === "Services" && (
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="text-[#151515] hover:text-[#55d0ff] text-xl"
                      >
                        {isServicesOpen ? "-" : "+"}
                      </button>
                    )}
                  </div>
                  {item.name === "Services" && isServicesOpen && (
                    <div className="ml-4 mt-4 flex flex-col gap-4">
                      {servicesData.map((service, index) => (
                        <div key={index}>
                          <h3 className="text-[16px] font-semibold text-[#55d0ff] mb-2">
                            {service.category}
                          </h3>
                          <ul className="space-y-2">
                            {service.subServices.map((subService, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  to={`/Services/${service.category
                                    .toLowerCase()
                                    .replace(" ", "-")}/${subService
                                    .toLowerCase()
                                    .replace(" ", "-")}`}
                                  className="text-[14px] text-[#151515] hover:text-[#55d0ff] transition"
                                  on
                                  Click={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsServicesOpen(false);
                                  }}
                                >
                                  {subService}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/Contact"
                className="mt-6 flex items-center gap-2 bg-[#1b1b1b] text-white px-5 py-3 rounded-md hover:bg-[#55d0ff] hover:text-black transition duration-200 max-w-max"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us <GoArrowUpRight className="w-5 h-5" />
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Nav;
