//src/components/Header/index.jsx
// Hastings Gold
// 301363327
// 28-09-2024


import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { profile1 } from "../../images"
import Facts from './Facts'
import "./Header.css"

const Header = () => {
  const container = useRef(null)
  gsap.registerPlugin(useGSAP)

  useGSAP(()=>{
    gsap.fromTo(".profile__photo__container",{
      scale:.5,
      duration:1,
      opacity:0.5,
    },
    {
      scale:1,
      duration:1,
      ease:"sine.in",
      opacity:1,
    }
    )

    gsap.from(".intro__text",{
      fontSize:100,
      duration:1,
      delay:1,
      ease:"sine.in",
    })

    const timeline = gsap.timeline();
    timeline
    .from(".header__info__top",{
      opacity:0,
    })
    .from(".header__title",{
      opacity:0,
      y:-30,
    })
    .from(".header__description",{
      opacity:0,
    })
    .from(".btn",{
      x:-40,
      opacity:0,
      stagger:.5
    })
  },{scope:container})
  return (
    <header id='header' className='blur-effect' ref={container}>
       <div className="stroke__text intro__text">HELLO</div>
       <div className="section__wrapper header__container">
        <div className="column intro__container blur-effect">
          <div className="header__info">
            <div className="header__info__top">
              Hello and welcome. My name is <span className="color__primary">Hastings Gold</span>
            </div>
            <div className="header__info__middle">
               <h1 className="primary__title header__title">I'M A FullStack WEB DEVELOPER</h1>
               <p className="text__muted header__description">
               A skilled full-stack web developer with expertise in building dynamic, 
               responsive, and user-friendly web applications.With proficiency in both 
               front-end and back-end technologies like JavaScript, React, Node.js, and databases such as MongoDB and SQL 
               </p>
            </div>
            <Facts/>
            <div className="header__info__bottom">
            <a href="https://drive.google.com/file/d/1_myaTZQ7P0btsLBQ5zWArm5ZE0JzMM3F/view?usp=drive_link" download>
            <button className="btn">Download CV</button></a>
              <a href="hastingsgold@gmail.com" className="btn">Email Me</a>
            </div>
          </div>
        </div>
        <div className="column profile__wrapper">
          <div className="profile__photo__container">
            <img src={profile1} className='profile__photo' alt="" />
          </div>
        </div>
       </div>
    </header>
  )
}

export default Header
