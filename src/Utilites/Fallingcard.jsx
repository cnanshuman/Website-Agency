import React from 'react'
import FallingText from '../Component/Home/Fallingtext'

function Fallingcard() {
  return (
   <>
    <div className="flex items-center justify-center p-6 ">
     <FallingText
  text="Creative Visions UI/UX Digital Marketing Website Design Business Solution Content Writting"
  highlightWords={["Creative Visions", "UI/UX", "Digital Marketing", "Website Design","Business Solution" ,"Content Writting"]}
  trigger="scroll"
  backgroundColor="transparent"
  wireframes={false}
  gravity={0.5}
  fontSize="3.75rem "
  fontWeight={800}
  mouseConstraintStiffness={0.9}
/>

      </div>
   </>

  )
}

export default Fallingcard