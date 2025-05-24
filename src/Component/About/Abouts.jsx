import React from "react";
import img from "/images/abt.jpg";
import vision from "/images/our-vision-img.jpg";
import { SiTicktick } from "react-icons/si";

function Abouts() {
  return (
    <>
      <div className="frst pt-14 pb-14 bg-[#f1f1f1] mb-18">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl max-sm:text-3xl text-[#121212] font-extrabold mb-10 leading-tight">
            We create design for businesses with our
            <br className="max-sm:hidden md:hidden" /> elevated digital experiences
          </h1>
          <img src={img} className="w-full max-sm:h-[320px] max-sm:rounded-xl object-cover h-auto mb-13" alt="About Us" />

          <p className="text-[2.5rem] max-sm:text-[1.8rem] max-sm:leading-12 font-medium leading-[55px] md:max-w-[61.3125rem] text-[#121212] mb-15">
            Our secret sauce ensures scalability and attracts talented, creative
            people who aspire to achieve incredible things together—while having
            some fun along the way.
          </p>

          <p className="text-[2.5rem] max-sm:text-[1.8rem] max-sm:leading-12 font-medium leading-[55px] md:max-w-full text-[#121212] mb-15 md:text-right">
            We're a global multi-specialty design experts of strategists,
            designers, and engineers building unicorn brands and creating people
            -friendly experiences.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-18">
        <p className="text-sm sm:text-base md:text-lg leading-7 font-medium">
          <span className="bg-[#55d0ff] px-1.5 py-1.5 mr-1.5 ml-1.5">MSTY Enterprises</span> come into existence? A real one customarily
          delivering much-needed support in the field of web development, social
          media management, digital marketing, and webpage services. Our team of
          skilled professionals provides solutions that help your business
          flourish and shine online. At MSTY Enterprises, we provide the latest
          in digital advancements to embrace creativity and also support key
          client management at every stage of the digital journey. We are here
          to help employers establish an enduring online presence. Let us be
          your trusted representatives setting you up for an exciting online
          future for your brand.
        </p>
      </div>


      <div className="container mx-auto px-4 w-full">
        <ul className="w-full mb-18">
          <li className="flex flex-col lg:flex-row justify-between items-center bg-[#f2f2f2] border border-[#dadada] my-20 rounded-[70px] max-sm:pb-5">
            <div className="lft w-full lg:w-10/21 overflow-hidden  ">
              <img
                className="max-sm:rounded-t-[70px] max-sm:rounded-l-[70px] rounded-l-[70px]"
                src={vision}
                alt="Vision"
              />
            </div>

            <div className="rgt flex flex-col gap-1 w-full lg:w-10/21 p-4 sm:p-10">

              <span className="text-lg sm:text-xl font-medium">Our Vision</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">                
                Driving the Future of{" "}
                <span className="text-[#21b0e9]">Creativity</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-medium text-[#121212] mt-1">
                We envision a world where every business, regardless of size or
                industry, can harness the full potential of digital innovation
                to achieve their goals. We strive to be a leading force in
                shaping the future of digital transformation.
              </p>
              <ul className="flex gap-2 flex-col mt-3 font-medium">
                <li className="flex gap-3 items-center">
                  <SiTicktick className="text-[#21b0e9]" />
                  <span>Creativity and Innovation</span>
                </li>
                <li className="flex gap-3 items-center">
                  <SiTicktick className="text-[#21b0e9]" />
                  <span>Client-Centricity</span>
                </li>
                <li className="flex gap-3 items-center">
                  <SiTicktick className="text-[#21b0e9]" />
                  <span>Integrity and Transparency</span>
                </li>
                <li className="flex gap-3 items-center">
                  <SiTicktick className="text-[#21b0e9]" />
                  <span>Excellence and Quality</span>
                </li>
              </ul>
            </div>
          </li>

          <li className="flex flex-col lg:flex-row-reverse justify-between items-center bg-[#f2f2f2] border my-20 border-[#dadada] rounded-[70px] max-sm:pb-5">
            <div className="lft w-full  lg:w-10/21 overflow-hidden">
              <img
                className="max-sm:rounded-t-[70px] max-sm:rounded-r-[70px] rounded-r-[70px]"
                src={vision}
                alt="Mission"
              />
            </div>

            <div className="rgt flex flex-col pl-4 sm:pl-10 gap-1 w-full lg:w-10/21 p-4 sm:p-10">
              <span className="text-lg sm:text-xl font-medium">
                Our Mission
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Bringing ideas to life through{" "}
                <span className="text-[#21b0e9]">Creativity</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-medium text-[#121212] mt-1">
                Our mission is simple: to deliver exceptional digital solutions
                that not only meet but exceed our clients' expectations. We aim
                to foster long-term partnerships by combining creativity,
                technical expertise, and customer-centricity to help businesses
                thrive in the digital age.
              </p>
              <ul className="flex gap-2 flex-col mt-3 font-medium">
                <li className="flex gap-3 items-center">
                  <SiTicktick className="text-[#21b0e9]" />
                  <span>Creativity and Innovation</span>
                </li>
                <li className="flex gap-3 items-center">
                  <SiTicktick className="text-[#21b0e9]" />
                  <span>Client-Centricity</span>
                </li>
                <li className="flex gap-3 items-center">
                  <SiTicktick className="text-[#21b0e9]" />
                  <span>Integrity and Transparency</span>
                </li>
                <li className="flex gap-3 items-center">
                  <SiTicktick className="text-[#21b0e9]" />
                  <span>Excellence and Quality</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Abouts;
