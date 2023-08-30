import React from 'react'
import Image from 'next/image'

function Card(props) {
  return (
    <div className="course-col">
    <Image
      src={props.source}
      width={50}
      height={50}
      alt="Picture of the author"
    />
    
    <h3>{props.title}</h3>
    <p>{props.text}</p>
</div>
  )
}
export default Card