import Button from "../button/page"
import React from 'react'
import Image from 'next/image'
import Card from "../card/page"

function Pricing(props) {
    return (
        <div className="data3">
        
            <h2>{props.text}</h2>
            <Image
                src="/55.png"
                width={50}
                height={50}
                alt="Picture of the author"
            />
            <h1>{props.rate}</h1>
            <p>Filler text is text that shares some characteristics of a real written text, but is random </p>
            <div className="btn22"> <Button text="Start Now"/></div>


        </div>
    )
}

export default Pricing