import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='Welcome to ADMISSION SOLUTION' title='Best Online Education Expertise' /><br/>
            {/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p> */}
            <p>Find a college that's right for you .Get Detailed Information on Top Colleges in India and Admission News only on Admission Solution. </p>
            {/* We predict your College admission chances and Ranks based on years of */}
{/* historical data and advanced Analytics to help you plan in advance */}
            {/* <a href="#footer">VIEW COURSES</a> */}
            {/* <div className='button'>
              <button className='primary-btn' href="allcourses">
              <a href="#footer">VIEW COURSES</a> <i className='fa fa-long-arrow-alt-right'></i>
              </button> */}
              {/* <a href="#allcourses">VIEW COURSES</a> */}
              {/* <a href="#allcourses">Courses</a> */}
              {/* <button href="#allcourses">
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button> */}
            {/* </div> */}
          </div>
        </div>
      </section>
       {/* <div className='button viewcourses'>
              <button className='primary-btn' href="allcourses">
              <a href="#footer">VIEW COURSES</a> <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              </div> */}

      <div className='margin'></div>
    </>
  )
}

export default Hero
