import React from 'react'
import Marquee from "react-fast-marquee";
import Logocard from '../../Utilites/Logocard'
import { data } from '../../Store/Logodata'
function Logo() {
  return (
    <>




      <Marquee>
        <ul className='flex'>
          {data.map((item, index) => (
            <Logocard key={index} item={item} />
          ))}
        </ul>
      </Marquee>





    </>
  )
}

export default Logo