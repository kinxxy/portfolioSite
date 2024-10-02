// File Name: //src/components/About/index.jsx
// Hastings Gold
// 301363327
// 28-09-2024


import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'
import { profile2 } from '../../images'
import "./About.css"


const About = () => {
  const container = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useEffect(()=>{
    const el = container.current;
    gsap.fromTo(".about__container",{
      scale:0.7
    },
    {
      scale:1,
      scrollTrigger:{
        trigger:el,
        scrub:true,
      }
    }
  )
  },[])
  return (
    <section id='about' ref={container}>
      <div className="section__wrapper about__container">
        <div className="me__container blur-effect">
          <div className="photo__container">
            <img src={profile2} alt="" />
          </div>
        </div>
        <div className="section__header">
          <h2 className="primary__title">About Me</h2>
          <h1 className="title">I am <span className="color__primary">Hastings Gold</span></h1>
          <p className="text__muted description">
          I am a Full Stack Web Developer skilled in both front-end and back-end technologies, 
          capable of building dynamic and responsive web applications. Proficient in HTML, 
          CSS, JavaScript, and frameworks like React or Angular on the front end, as well 
          as Node.js, Python, or PHP on the back end. Experienced in database management, 
          RESTful APIs, and cloud deployment, they handle end-to-end development, ensuring 
          seamless integration and performance. Passionate about creating efficient, 
          scalable, and user-centric solutions for diverse projects.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
