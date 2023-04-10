import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"
import {FaWhatsappSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      {/* <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section> */}
      <footer id="footer"
      >
        <div className='container padding footer_section'>
          <div className='box logo'>
            <h1>Admission Solution</h1>
            {/* <span>ONLINE EDUCATION & LEARNING</span> */}
            <p>We provide the awareness about Indian educational Institutes in the streams MBBS , Engineering , Pharmacy , Biotech . </p>

            {/* <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i> */}
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li href="home"><a href="#">Home</a></li>
              <li href="#allcourses"><a href="#allcourses">Courses</a></li>
              <li href="#colleges"><a href="#colleges">Colleges</a></li>
              <li href="#footer"><a href="#footer">Contact Us</a></li>
            </ul>
          </div>
          {/* <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div> */}
          {/* <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div> */}
          <div className='box last'>
            <h2> Admission Open</h2><br/>
            <h2>Contact Us</h2><br/>
            <ul>
              <li>
                <i className='fa fa-map'></i>
               Gulabbagh , Purnea (Bihar)
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91 6299781758
              </li>

              <li>
                <i className='fa fa-phone-alt'></i>
                +91 8553378804
              </li>
              {/* <li>
                <i className='fa fa-paper-plane'></i>
                info@yourdomain.com
              </li> */}
            </ul>
            <div style={{display:"flex"  , alignItems:"center"}}>
            <a  style={{padding:"1rem" , fontWeight:"600" , backgroundColor:"#1eb2a6" , color:"white",borderRadius:"10px"}} href="https://wa.me/+916299781758">How May I Help You.</a>
            {/* <small style={{fontSize:"22px" , textAlign:"center"}}>How Can I Help You</small> */}
             </div>
          </div>
        </div>
      
      </footer>
    
    </>
  )
}

export default Footer
