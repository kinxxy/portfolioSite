//src/components/Skills/index.jsx
// Hastings Gold
// 301363327
// 28-09-2024

import React from 'react'
import { experience } from '../../data'
import SkillCard from './SkillCard'
import "./Skills.css"

const Skills = () => {
  return (
    <section id='skill'>
       <div className="section__wrapper">
        <div className="section__header center">
          <h2 className="primary__title">My Skills Set</h2>
        </div>
        <div className="skill__container">
           {
            experience.map((list,index)=>(
              <SkillCard
              {...list}
              key={index}
              />
            ))
           }
        </div>
       </div>
    </section>
  )
}

export default Skills
