import React from "react"
import { price } from "../../dummydata"

const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className='items shadow'>
          <h2>{val.name}</h2>
          <h1>
            {/* <span>$</span> */}
            {val.price}
          </h1>
          <p>{val.desc}</p>
          {/* <button className='outline-btn'>GET STARTED</button> */}
        </div>
      ))}
    </>
  )
}

export default PriceCard
