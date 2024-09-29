//src//data.js
// Hastings Gold
// 301363327
// 28-09-2024

import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiAdobexd, SiExpress, SiFiverr, SiMongodb } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const menu = [
    {name:"About Me"},
    {name:"My Services"},
    {name:"Skill"},
    {name:"Projects"},
    //{name:"Testimonial"},
    {name:"Contact"},
]



export const projects = [
    { 
      id:1,
      title: 'AI Powered School',
      image: 'http://goldhastings.com/wp-content/uploads/2024/09/project22-scaled.jpg',
      category:"UI/UX",
      data:{
         description: `Offering user-centered UX/UI design services to create intuitive and engaging 
         digital experiences. From wireframes to final interfaces, we focus on enhancing usability, 
         accessibility, and aesthetics to ensure seamless interaction and satisfaction for your users.`,
         demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"XD",
          icon: <SiAdobexd/>,
          iconColor:"skyblue",
        },
      ]
    },
    {
      id:2,
      title: 'E-Commerce Application',
      image: 'http://goldhastings.com/wp-content/uploads/2024/09/project34-scaled.jpg',
      category:"Web",
      data:{
        description:`Unlock the full potential of your business with professional eCommerce development 
        services. Lets create custom, user-friendly online stores designed to enhance customer experience, 
        drive sales, and streamline operations. From design to integration, we offer end-to-end solutions 
        tailored to your business needs, helping you thrive in the digital marketplace.`,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"ReactJs",
          icon: <DiReact/>,
          iconColor:"skyblue",
        },
        {
          name:"NodeJs",
          icon: <FaNodeJs/>,
          iconColor:"green",
        },
        {
          name:"ExpressJs",
          icon: <SiExpress/>,
        },
        {
          name:"MongoDB",
          icon: <SiMongodb/>,
          iconColor:"limegreen",
        },
      ]
    },
    {
      id:3,
      title: 'School Manager Web Application',
      image: 'http://goldhastings.com/wp-content/uploads/2024/09/project1-scaled.jpg',
      category:"Web",
      data:{
        description: ` Offering customized school manager web application development services to 
        streamline administration and enhance communication. Our solutions include features like 
        student enrollment, attendance tracking, grade management, staff coordination, and real-time 
        reporting. Tailored to meet the specific needs of educational institutions, our applications 
        are user-friendly, secure, and scalable..`,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"ReactJs",
          icon: <DiReact/>,
          iconColor:"skyblue",
        },
        {
          name:"NodeJs",
          icon: <FaNodeJs/>,
          iconColor:"green",
        },
        {
          name:"ExpressJs",
          icon: <SiExpress/>,
        },
        {
          name:"MongoDB",
          icon: <SiMongodb/>,
          iconColor:"limegreen",
        },
        {
          name:"MongoDBT",
          icon: <SiMongodb/>,
        },
        {
          name:"MongoDBT",
          icon: <SiMongodb/>,
        },
        {
          name:"MongoDBT",
          icon: <SiMongodb/>,
        },
      ]
    },
    {
      id:4,
      title: 'Maritime Claims Services Website',
      image: 'http://goldhastings.com/wp-content/uploads/2024/09/project2-scaled.jpg',
      category:"Web",
      data:{
        description: `Specializing in website design for maritime claims services, we create tailored, 
        user-friendly platforms that enhance client engagement and streamline claim processes. Our designs 
        are professional, secure, and optimized for both desktop and mobile, ensuring seamless navigation 
        and a strong online presence for your maritime business.`,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"React Native",
          icon: <TbBrandReactNative/>,
          iconColor:"skyblue",
        },
        {
          name:"NodeJs",
          icon: <FaNodeJs/>,
          iconColor:"green",
        },
        {
          name:"ExpressJs",
          icon: <SiExpress/>,
        },
        {
          name:"MongoDB",
          icon: <SiMongodb/>,
          iconColor:"limegreen",
        },
      ]
    },
    {
      id:5,
      title: 'Care Services - App Design',
      image: 'http://goldhastings.com/wp-content/uploads/2024/09/project225-scaled.jpg',
      category:"UI/UX",
      data:{
        description: `Designing innovative healthcare apps to enhance patient care and streamline 
        medical services. Our user-friendly and secure app solutions focus on improving accessibility, 
        communication, and efficiency for healthcare providers and patients alike.`,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"Figma",
          icon: <CgFigma/>,
          iconColor:"orangered",
        },
      ]
    },
    {
      id:6,
      title: 'NGO Website',
      image: 'http://goldhastings.com/wp-content/uploads/2024/09/project4-scaled.jpg',
      category:"Web",
      data:{
        description: `Specializing in NGO website design, we create impactful, user-friendly websites 
        that highlight your mission and engage your audience. Our tailored designs focus on storytelling, 
        accessibility, and seamless navigation, ensuring your organization reaches more supporters and 
        drives meaningful change..`,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"React Native",
          icon: <TbBrandReactNative/>,
          iconColor:"skyblue",
        },
        {
          name:"NodeJs",
          icon: <FaNodeJs/>,
          iconColor:"green",
        },
        {
          name:"ExpressJs",
          icon: <SiExpress/>,
        },
        {
          name:"MongoDB",
          icon: <SiMongodb/>,
          iconColor:"limegreen",
        },
      ]
    },
  ]
  


export const experience = [
    {
        title:"UI/UX",
        data:[
            {
                skill:"Figma",
                level:"Expert",
            },
            {
                skill:"Sketch",
                level:"Intermediate",
            },
            {
                skill:"XD",
                level:"Intermediate",
            },
        ]
    },
    {
        title:"Frontend Development",
        data:[
            {
                skill:"HTML",
                level:"Experienced",
            },
            {
                skill:"CSS",
                level:"Experienced",
            },
            {
                skill:"JavaScript",
                level:"Experienced",
            },
            {
                skill:"Tailwind",
                level:"Intermediate",
            },
            {
                skill:"Bootstrap",
                level:"Experienced",
            },
            {
                skill:"React",
                level:"Experienced",
            },
            {
                skill:"React Native",
                level:"Experienced",
            },
        ]
    },
    {
        title:"Backend Development",
        data:[
            {
                skill:"Node JS",
                level:"Experienced",
            },
            {
                skill:"MangoDB",
                level:"Intermediate",
            },
            {
                skill:"PHP",
                level:"Experienced",
            },
            {
                skill:"Python",
                level:"Intermediate",
            },
            {
                skill:"MySQL",
                level:"Experienced",
            },
        ]
    },
]


export const socialHandles = [
  {
    name:"Fiverr",
    icon:<SiFiverr/>,
    link:"",
  },
  {
    name:"Github",
    icon:<AiFillGithub/>,
    link:"",
  },
  {
    name:"LinkedIn",
    icon:<AiFillLinkedin/>,
    link:"",
  },
  {
    name:"Youtube",
    icon:<AiFillYoutube/>,
    link:"#",
  },
];