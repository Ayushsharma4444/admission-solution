import React from "react"

const Heading = ({ subtitle, title }) => {
  return (
    <>
      <div id='heading'>
        <h1 style={{color:"rgb(0 50 58 / 79%)"}}>{subtitle} </h1>
        <h2 style={{color:"rgb(0 50 58 / 79%)"}}>{title} </h2>
      </div>
    </>
  )
}

export default Heading
