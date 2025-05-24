import React from 'react'
import { FaArrowRight } from "react-icons/fa";

function Projectcard({ item, index }) {
  return (
    <>

      <li className="hover:bg-[#e1e1e1] group md:w-6/13 lg:w-8/25 max-sm:w-full   [&:nth-child(3n+3)]:mr-0 rounded-2xl">
        <a href="#">
          <div className="img mb-6 overflow-hidden rounded-2xl group-hover:rounded-b-none">
            <img
              src={item.img}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <h2 className="text-{#121212} text-lg font-medium group-hover:pl-[15px] transition-all duration-300">{item.name}</h2>
          <h3 className="text-[#121212] text-sm group-hover:pl-[15px] transition-all duration-300 mb-6 underline ">Explore Now</h3>
        </a>
      </li>

    </>
  )
}

export default Projectcard