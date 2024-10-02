//src/components/Header/Facts/index.jsx
// Hastings Gold
// 301363327
// 28-09-2024


import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import Odometer from 'react-odometerjs';
import "./Facts.css";

const Facts = () => {
    const [experience,setExperience] = useState(0);
    const [projects,setProjects] = useState(0)
    const [clients,setClients] = useState(0)
    useEffect(()=>{
        const timeoutId = setTimeout(()=>{
            setExperience(5)
            setProjects(150);
            setClients(25);
        },3000)
        return () =>{
            clearTimeout(timeoutId)
        }
    },[])

    const container = useRef(null)
    gsap.registerPlugin(useGSAP)
    useGSAP(()=>{
      const timeline = gsap.timeline();
      timeline
      .from(".fact__item",{
        delay:1.5,
        x:-100,
        stagger:.5,
        opacity:0,
      })
    },{scope:container})
  return (
    <div className='fact__container' ref={container}>
      <div className="fact__item">
        <div className="count__container">
          <Odometer
           value={experience}
          />
          <span className="indicator">+</span>
        </div>
        <p className="name">Years Of Experience</p>
      </div>

      <div className="fact__item">
        <div className="count__container">
          <Odometer
           value={projects}
          />
          <span className="indicator">+</span>
        </div>
        <p className="name">Completed Projects</p>
      </div>

      <div className="fact__item">
        <div className="count__container">
          <Odometer
           value={clients}
          />
          <span className="indicator"></span>
        </div>
        <p className="name">Satisfied Clients</p>
      </div>
    </div>
  )
}

export default Facts
