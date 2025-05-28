import React from 'react'
import { NavLink } from 'react-router-dom'

function Blogcard({ item, index }) {
  return (
    <li className=' hover:bg-[#e1e1e1] group max-sm:w-full lg:w-8/25 md:w-2/5  rounded-2xl   '>
      <NavLink to={`/Blogs/${item.head}`}>
        <div className="img mb-6 overflow-hidden rounded-2xl group-hover:rounded-b-none">
          <img
            src={item.img}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="pr-[15px] transition-[padding-left] duration-300 ease-in-out group-hover:pl-[15px] ">
          <h1 className='text-2xl font-bold text-[#121212] mt-7 mb-4 border-b border-solid border-[#b6b6b6] pb-4'>{item.head}</h1>

          <div className="flex justify-between group-hover:pl-[15px] pr-[15px]">
            <h5 className='text-[#121212] text-[18px]  transition-all duration-300 mb-6 '>{item.date}</h5>
            <h6 className='text-[#121212]  text-sm  transition-all duration-300 mb-6 underline'>Read More</h6>
          </div>
        </div>


      </NavLink>
    </li>
  )
}

export default Blogcard