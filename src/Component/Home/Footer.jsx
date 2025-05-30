import React from "react";
import img1 from "/images/footer-logo.svg";

function Footer() {
  
  const Linkdata = [
    {
      id: 1,
      name: "Home",
      link: "/Home",
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

  const Social = [
    {
      id: 1,
      name: "Facebook",
      link: "https://www.facebook.com/people/MSTYEnterprises/61566355984656/",
    },
    {
      id: 2,
      name: "Instagram",
      link: "https://www.instagram.com/mstyenterprises/",
    },
    {
      id: 3,
      name: "Twitter",
      link: "https://x.com/mstyenterp89085",
    },
    {
      id: 3,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/msty-39774332a/",
    },
    {
      id: 4,
      name: "Pinterest",
      link: "https://in.pinterest.com/mstyenterprises/",
    },
    
  ];
  return (
    <>
      <footer className="bg-[#090909] text-[#8b8b8b] pt-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + Description + Social */}
          <div>
            <a href="#">
              <img src={img1} alt="Mysty Enterprises" className=" w-[100px] h-[100px]" />
            </a>
            <p className="text-[16px] leading-relaxed text-[#a1a1a1]">
              Mysty Enterprise is a global UI/UX design agency that boosts brand
              value with user-friendly, effective designs for web, mobile, and SaaS platforms.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              {Social.map((item, idx) => (
                <a key={idx} href={item.link} target="blank" className="hover:text-white transition duration-200">
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {Linkdata.map((item, idx) => (
                <li key={idx}>
                  <a href={item.link} className="hover:text-white transition duration-200">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {["Web Development", "Content Writing", "Digital Marketing", "Business Solutions", "UI UX Designing", "Social Media"].map((service, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-white transition duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:info@mstyenterprises.com" className="hover:text-white transition duration-200 block">
                  info@mstyenterprises.com
                </a>
              </li>
              <li>
                <a href="tel:+919910741417" className="hover:text-white transition duration-200 block">
                  +91 99107 41417
                </a>
              </li>
              <li>
                <span className="block hover:text-white transition duration-200">
                  33/33A, Tower No. 6, 3rd Floor, Rama Road, Industrial Area,
                  New Delhi 110015
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1f1f1f] mt-10 pt-4 text-center text-sm text-white">
          &copy; {new Date().getFullYear()} MSTY Enterprises. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
