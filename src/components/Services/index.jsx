//src/components/Services/index.jsx
// Hastings Gold
// 301363327
// 28-09-2024

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'
import { BsCodeSquare } from 'react-icons/bs'
import { FaPaintBrush } from 'react-icons/fa'
import { TfiWrite } from 'react-icons/tfi'
import "./Services.css"

const Services = () => {
  const container = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(()=>{
    const el= container.current
    gsap.fromTo('.service__head',{
      opacity:0,
    },
    {
      opacity:1,
      scrollTrigger:{
        trigger:el,
      }
    }
  )

  gsap.fromTo(".service",{
    y:-50,
    opacity:0,
  },
  {
    y:0,
    opacity:1,
    duration:1,
    scrollTrigger:{
      trigger:el,
      start:"-100% bottom",
      end:"bottom 20%",
      scrub:true
    }
  }
  )
  },[])
  return (
    <section id='services' ref={container}>
       <div className="section__wrapper services__wrapper">
          <div className="section__header center">
            <h2 className="primary__title">Services</h2>
            <p className="text__muted description">
            Transforming Your Ideas into Reality with Expert Full Stack Web Development – 
            From Stunning Front-End Designs to Powerful Back-End Solutions, I Build Seamless, 
            Scalable Web Applications Tailored for Success!
            </p>
          </div>

          <div className="services__group">
            <article className="service">
              <div className="service__top">
                <div className="icon__container">
                  <FaPaintBrush className="icon"/>
                </div>
                <h3 className="title">UI/UX Design</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                Transforming ideas into intuitive, user-centered designs that not 
                only enhance user experiences but also drive engagement and 
                satisfaction. Our UX/UI services focus on crafting visually 
                appealing interfaces that seamlessly connect with users, 
                ensuring every interaction is memorable and impactful.
                </p>
              </div>
              <div className="service__bottom">
                <button className="btn btn__primary">Read more</button>
              </div>
            </article>
            {/* End ui/ux */}


            <article className="service" style={{"--color-primary":"var(--color-success)"}}>
              <div className="service__top">
                <div className="icon__container">
                  <BsCodeSquare className="icon"/>
                </div>
                <h3 className="title">Web Development</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                Building robust, scalable websites that empower your business and 
                enhance user experiences. Our web development services combine 
                cutting-edge technology with creative design to deliver tailored 
                solutions that meet your unique needs. Let us turn your vision 
                into reality and help you stand out in the digital landscape!
                </p>
              </div>
              <div className="service__bottom">
                <button className="btn btn__primary">Read more</button>
              </div>
            </article>
            {/* End Web development */}


            <article className="service" style={{"--color-primary":"blueviolet"}}>
              <div className="service__top">
                <div className="icon__container">
                  <TfiWrite className="icon"/>
                </div>
                <h3 className="title">Videography and Photography</h3>
              </div>
              <div className="service__middle">
                <p className="text__muted description">
                Bringing your vision to life with expert videography and photography 
                services. From events to corporate projects, we capture every moment 
                with creativity, precision, and professionalism, ensuring your story 
                is told in the most captivating way
                </p>
              </div>
              <div className="service__bottom">
                <button className="btn btn__primary">Read more</button>
              </div>
            </article>
            {/* End content creation */}
          </div>
       </div>
    </section>
  )
}

export default Services
