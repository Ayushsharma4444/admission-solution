import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      {/* <Head /> */}

      <header>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
          <img src="/logo3.png" height={80} weight={90}/>
          </div>
        </div>
      </section>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
            <a href="#allcourses">Courses</a>
              {/* <Link to='/courses'>All Courses</Link> */}
            </li>
            <li>
              <a href="#colleges">Colleges</a>
              {/* <Link to='/about' >Colleges</Link> */}
            </li>
            {/* <li>
              <Link to='/team'>Team</Link>
            </li> */}
            {/* <li>
              <Link to='/pricing'>Pricing</Link>
            </li> */}
            {/* <li>
              <Link to='/journal'>Journal</Link>
            </li> */}
            <li>
            <a href="#footer">Contact us</a>
              {/* <Link to='/contact'>Contact</Link> */}
            </li>
          </ul>
          {/* <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div> */}
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
