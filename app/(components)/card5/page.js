import React from 'react'
import Image from 'next/image'
function Card2(props) {
    return (
      <div className="courses">
   <div className="imge1">
   <Image
      src={props.source}
      width={50}
      height={50}
      alt="Picture of the author"
    />
   </div>
     
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    
  </div>
  
    )
  }
  export default Card2