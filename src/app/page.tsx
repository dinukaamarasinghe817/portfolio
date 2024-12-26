"use client";
import { useState, useRef, RefObject } from "react";
import { Swiper , SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import TypeWriter from 'typewriter-effect';
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type SocialLink = {
  name: string;
  icon: string;
  url: string;
}

type Project = {
  title: string;
  description: string;
  githubLink: string;
  icons: string[];
};

type Technology = {
  name: string;
  icon: string;
};

type Blog = {
  title: string;
  description: string;
  imagePath: string;
  url: string;
};

type Award = {
  title: string;
  name: string;
  imagePath: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Linkedin",
    icon: "/linkedin.svg",
    url: "https://www.linkedin.com/in/dinuka-amarasinghe"
  },
  {
    name: "Github",
    icon: "/github.svg",
    url: "https://github.com/dinukaamarasinghe817"
  },
  {
    name: "Email",
    icon: "/mail.svg",
    url: "mailto:dinukaamarasinghe817@gmail.com"
  },
  {
    name: "CV",
    icon: "/cv.svg",
    url: "/cv/cv.pdf"
  },
]

const projects: Project[] = [
  {
    title: "Redis for `bal persist`",
    githubLink: "https://github.com/dinukaamarasinghe817/module-ballerinax-persist.redis",
    description: "Integrated Redis as a data-store and as a cache for Ballerina’s ORM, `bal persist`. With this now you can implement your own caching solutions using Ballerina without writing database queries by hand.",
    icons: ["/projects/Java.svg", "/projects/Ballerina.svg"],
  },
  {
    title: "Ayura",
    githubLink: "https://github.com/team-ayura",
    description: "A mobile application focused towards personal health care with features including Activity monitoring, Sleep monitoring, Personalized health tips and community based health challenges.",
    icons: ["/projects/Flutter.svg", "/projects/Dart.svg", "/projects/NET.svg", "/projects/Csharp.svg", "/projects/MongoDB.svg"],
  },
  {
    title: "Sri-Tel",
    githubLink: "https://github.com/SriTel",
    description: "A UI/UX case-study and mobile application for a telecommunication app featured with package management, add-ons, tunes, billing, data/voice balance inquiry and customer support.",
    icons: ["/projects/Flutter.svg", "/projects/Dart.svg", "/projects/Figma.svg"],
  },
  {
    title: "Gasify",
    githubLink: "https://github.com/dinukaamarasinghe817/gasify",
    description: "A Web application tailored for online reservation of LP Gas. Included features are reserving LP Gas, early notifications, Automated re-ordering process, delivery with efficient space management.",
    icons: ["/projects/Php.svg", "/projects/Html.svg", "/projects/Css.svg", "/projects/JavaScript.svg"],
  },
];

const technologies: Technology[] = [
  {
    name: "React",
    icon: "/technologies/React.svg",
  },
  {
    name: "Figma",
    icon: "/technologies/Figma.svg",
  },
  {
    name: "Flutter",
    icon: "/technologies/Flutter.svg",
  },
  {
    name: ".NET Core",
    icon: "/technologies/NET.svg",
  },
  {
    name: "MongoDB",
    icon: "/technologies/MongoDB.svg",
  },
  {
    name: "Postgres",
    icon: "/technologies/Postgres.svg",
  },
  {
    name: "Redis",
    icon: "/technologies/Redis.svg",
  },
  {
    name: "Gradle",
    icon: "/technologies/Gradle.svg",
  },
  {
    name: "Java",
    icon: "/technologies/Java.svg",
  },
  {
    name: "Ballerina",
    icon: "/technologies/Ballerina.svg",
  },
];

const blogs: Blog[] = [
  {
    title: "Efficient Caching with bal persist",
    description: "In this article we will discuss on utilizing Ballerina’s `bal persist` to build a common use case encountered in most E-Commerce applications: a product catalog.",
    imagePath: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*jYiMLyhkevGNI4rHtfl-Iw.png",
    url: "https://medium.com/@dinukaamarasinghe817/efficient-caching-with-bal-persist-3599e49ea0ee"
  }
]

const awards: Award[] = [
  {
    title: 'Merit Award 🎖️',
    name: 'NBQSA 2023',
    imagePath: 'awards/nbqsa.png'
  },
  {
    title: 'Champions 🏆',
    name: 'Openhack 2.0 by IIT',
    imagePath: 'awards/openhack.png'
  },
  {
    title: 'Finalist 🚀',
    name: 'Tech-Triathlon 2024 by Rootcode',
    imagePath: 'awards/techtriathlon.png'
  },
  {
    title: 'Runners up 🥈',
    name: 'PyHack 2.0 by IIT',
    imagePath: 'awards/pyhack.png'
  },
  {
    title: '2nd Runners up 🥉',
    name: 'Cypher by KDU',
    imagePath: 'awards/cypher.png'
  },
  {
    title: 'Finalist 🚀',
    name: 'RealHack 4.0 by UOK',
    imagePath: 'awards/realhack.png'
  },
  {
    title: 'Merit Award 🎖️',
    name: 'ReidXtream 2021 by UCSC',
    imagePath: 'awards/reidxtream.png'
  },
  {
    title: 'Finalist 🚀',
    name: 'CodeFest CTF by SLIIT',
    imagePath: 'awards/codefest.png'
  },
  {
    title: 'Participant',
    name: 'IEEEXtream 17',
    imagePath: 'awards/ieeextream.png'
  },
  {
    title: 'Participant',
    name: 'Aces Coders v9 by UOP',
    imagePath: 'awards/acescoders.png'
  },
]

type Section = "home" | "projects" | "stack" | "blogs" | "awards";

export default function Home() {

  const [activeLink, setActiveLink] = useState<Section>("home");
  const sectionsRef: Record<Section, RefObject<HTMLDivElement | null>> = {
    home: useRef<HTMLDivElement | null>(null),
    projects: useRef<HTMLDivElement | null>(null),
    stack: useRef<HTMLDivElement | null>(null),
    blogs: useRef<HTMLDivElement | null>(null),
    awards: useRef<HTMLDivElement | null>(null),
  };

  const handleNavigation = (section: Section) => {
    setActiveLink(section);

    const sectionRef = sectionsRef[section]?.current;
    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: "smooth" });
    }

    setTimeout(() => {
    }, 500);
  };

  return (
    <div className="w-full flex items-center justify-center bg-gradient-to-r from-transparent via-black to-transparent">
    <div className="flex flex-col gap-8 starter:gap-12 pt-32 max-w-[640px] mx-4">
      <nav className="fixed left-1/2 bg-opacity-50 backdrop-blur-md bottom-4 navdesktop:top-1/2 navdesktop:max-w-[52px] bg-lightGrey navdesktop:left-[50px] navwide:left-[150px] transform -translate-x-1/2 navdesktop:h-fit navdesktop:-translate-y-1/2 flex navdesktop:flex-col gap-3 items-start overflow-x-show rounded-[50px] p-[6px] z-10">
        <a 
        onClick={() => handleNavigation("home" as Section)}
        className="flex flex-row gap-2 starter:gap-4 items-center justify-start rounded-full transition cursor-pointer">
          <div className={`group text-white min-w-10 text-xl rounded-[50px]  p-2 ${activeLink === 'home' ? 'bg-white' : 'bg-transparent'} hover:bg-white transition-colors duration-200 ease-in-out`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className={`${activeLink === 'home' ? 'stroke-black' : 'stroke-white'} group-hover:stroke-black transition-colors duration-200 ease-in-out`} d="M18 3C17.2044 3 16.4413 3.31607 15.8787 3.87868C15.3161 4.44129 15 5.20435 15 6V18C15 18.7956 15.3161 19.5587 15.8787 20.1213C16.4413 20.6839 17.2044 21 18 21C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18C21 17.2044 20.6839 16.4413 20.1213 15.8787C19.5587 15.3161 18.7956 15 18 15H6C5.20435 15 4.44129 15.3161 3.87868 15.8787C3.31607 16.4413 3 17.2044 3 18C3 18.7956 3.31607 19.5587 3.87868 20.1213C4.44129 20.6839 5.20435 21 6 21C6.79565 21 7.55871 20.6839 8.12132 20.1213C8.68393 19.5587 9 18.7956 9 18V6C9 5.20435 8.68393 4.44129 8.12132 3.87868C7.55871 3.31607 6.79565 3 6 3C5.20435 3 4.44129 3.31607 3.87868 3.87868C3.31607 4.44129 3 5.20435 3 6C3 6.79565 3.31607 7.55871 3.87868 8.12132C4.44129 8.68393 5.20435 9 6 9H18C18.7956 9 19.5587 8.68393 20.1213 8.12132C20.6839 7.55871 21 6.79565 21 6C21 5.20435 20.6839 4.44129 20.1213 3.87868C19.5587 3.31607 18.7956 3 18 3Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className={`${activeLink === 'home' ? 'flex' : 'hidden'} text-[14px] starter:text-16px`}>Home</span>
        </a>
        <a 
        onClick={() => handleNavigation("projects" as Section)}
        className="flex flex-row gap-2 starter:gap-4 items-center justify-start mb-0 rounded-full transition cursor-pointer">
          <div className={`group text-white min-w-10 text-xl rounded-[50px]  p-2 ${activeLink === 'projects' ? 'bg-white' : 'bg-transparent'} hover:bg-white transition-colors duration-200 ease-in-out`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className={`${activeLink === 'projects' ? 'fill-black' : 'fill-white'} group-hover:fill-black transition-colors duration-200 ease-in-out`} fill="white" fillRule="evenodd" clipRule="evenodd" d="M9.11226 4.97114C8.49688 5.53789 8 6.47301 8 8C8 8.92872 8.06316 9.46011 8.13193 9.76728C8.1886 10.0204 8.24081 10.0867 8.25153 10.1003L8.25286 10.1021C8.30316 10.1698 8.32516 10.191 8.38697 10.2508L8.38698 10.2508L8.38699 10.2508C8.44706 10.3089 8.54475 10.4034 8.74255 10.6121C9.07553 10.9636 9.446 11.4199 9.78885 12.1056C10.1542 12.8362 10.4103 13.4678 10.5896 14H13.4104C13.5897 13.4678 13.8458 12.8362 14.2111 12.1056C14.554 11.4199 14.9245 10.9636 15.2575 10.6121C15.4552 10.4034 15.5529 10.3089 15.613 10.2508L15.613 10.2508L15.613 10.2508L15.613 10.2508L15.613 10.2508C15.6748 10.191 15.6968 10.1698 15.7471 10.1021L15.7485 10.1003C15.7592 10.0867 15.8114 10.0204 15.8681 9.76728C15.9368 9.46011 16 8.92872 16 8C16 6.47301 15.5031 5.53789 14.8877 4.97114C14.2454 4.37957 13.2658 4 12 4C10.7342 4 9.75457 4.37957 9.11226 4.97114ZM6 8C6 4 8.68629 2 12 2C15.3137 2 18 4 18 8C18 10.6936 17.5196 11.1738 16.9185 11.7746C16.627 12.0659 16.3072 12.3857 16 13C15.5714 13.8571 15.3265 14.5306 15.1866 15.0204C15.0349 15.5514 14.5523 16 14 16H10C9.44772 16 8.96513 15.5514 8.81341 15.0204C8.67346 14.5306 8.42857 13.8571 8 13C7.69283 12.3857 7.37296 12.0659 7.08146 11.7746C6.48044 11.1738 6 10.6936 6 8ZM9 17.5C9 17.2239 9.22386 17 9.5 17H14.5C14.7761 17 15 17.2239 15 17.5V19.741C15 19.9034 14.9217 20.0554 14.7855 20.1439C14.4235 20.3789 13.6706 20.8342 13.0532 20.9875C13.0178 20.9963 12.9812 21 12.9448 21H11.0549C11.0184 21 10.9822 20.9963 10.9468 20.9875C10.3294 20.8342 9.57651 20.3789 9.21455 20.1439C9.07833 20.0554 9 19.9034 9 19.741V17.5ZM11 7.50846L11 7.50837C10.9955 8.05679 10.5495 8.49999 10 8.49999C9.44771 8.49999 9 8.05227 9 7.49999C9 6.98675 9.22666 6.39714 9.59413 5.9378C9.98695 5.44678 10.6283 5 11.5 5C12.0523 5 12.5 5.44772 12.5 6C12.5 6.55228 12.0523 7 11.5 7C11.3717 7 11.263 7.05321 11.1559 7.18719C11.1001 7.2569 11.0564 7.33682 11.0282 7.41068C11.008 7.4639 11.0021 7.4968 11.0005 7.50588C11.0002 7.5076 11.0001 7.50847 11 7.50846Z"/>
            </svg>
          </div>
          <span className={`${activeLink === 'projects' ? 'flex' : 'hidden'} text-[14px] starter:text-16px`}>Projects</span>
        </a>
        <a 
        onClick={() => handleNavigation("stack" as Section)}
        className="flex flex-row gap-2 starter:gap-4 items-center justify-start mb-0 rounded-full transition cursor-pointer">
          <div className={`group text-white min-w-10 text-xl rounded-[50px]  p-2 ${activeLink === 'stack' ? 'bg-white' : 'bg-transparent'} hover:bg-white transition-colors duration-200 ease-in-out`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className={`${activeLink === 'stack' ? 'stroke-black' : 'stroke-white'} group-hover:stroke-black transition-colors duration-200 ease-in-out`} d="M12 2L2 7L12 12L22 7L12 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path className={`${activeLink === 'stack' ? 'stroke-black' : 'stroke-white'} group-hover:stroke-black transition-colors duration-200 ease-in-out`} d="M2 17L12 22L22 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path className={`${activeLink === 'stack' ? 'stroke-black' : 'stroke-white'} group-hover:stroke-black transition-colors duration-200 ease-in-out`} d="M2 12L12 17L22 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className={`${activeLink === 'stack' ? 'flex' : 'hidden'} text-[14px] starter:text-16px`}>Stack</span>
        </a>
        <a 
        onClick={() => handleNavigation("blogs" as Section)}
        className="flex flex-row gap-2 starter:gap-4 items-center justify-start mb-0 rounded-full transition cursor-pointer">
          <div className={`group text-white min-w-10 text-xl rounded-[50px]  p-2 ${activeLink === 'blogs' ? 'bg-white' : 'bg-transparent'} hover:bg-white transition-colors duration-200 ease-in-out`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className={`${activeLink === 'blogs' ? 'stroke-black' : 'stroke-white'} group-hover:stroke-black transition-colors duration-200 ease-in-out`} d="M13.228 7.29901L17.3995 11.4706L10.1147 18.7554L4.25981 20.3676L5.87201 14.5128L15.5741 4.81071C15.7208 4.71895 16.1496 4.48531 16.7236 4.45162C17.2964 4.41801 18.1304 4.57406 19.0919 5.53553C20.0534 6.49701 20.2094 7.33099 20.1758 7.90381C20.1421 8.47783 19.9085 8.90663 19.8167 9.05335L18.8137 10.0564L14.6422 5.88479L13.228 7.29901ZM15.5924 4.79238C15.5928 4.79197 15.5928 4.79203 15.5923 4.79248L15.5924 4.79238ZM19.8351 9.03502L19.835 9.03512C19.8352 9.03487 19.8353 9.03474 19.8353 9.03474C19.8353 9.03474 19.8352 9.03483 19.8351 9.03502Z" strokeWidth="2"/>
            </svg>
          </div>
          <span className={`${activeLink === 'blogs' ? 'flex' : 'hidden'} text-[14px] starter:text-16px`}>Blogs</span>
        </a>
        <a 
        onClick={() => handleNavigation("awards" as Section)}
        className="flex flex-row gap-2 starter:gap-4 items-center justify-start mb-0 rounded-full transition cursor-pointer">
          <div className={`group text-white min-w-10 text-xl rounded-[50px]  p-2 ${activeLink === 'awards' ? 'bg-white' : 'bg-transparent'} hover:bg-white transition-colors duration-200 ease-in-out`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className={`${activeLink === 'awards' ? 'stroke-black' : 'stroke-white'} group-hover:stroke-black transition-colors duration-200 ease-in-out`} d="M12.5 17C10.8264 17 9.36971 18.265 8.61766 20.1312C8.25846 21.0225 8.77389 22 9.45877 22H15.5412C16.2261 22 16.7415 21.0225 16.3823 20.1312C15.6303 18.265 14.1736 17 12.5 17Z" strokeWidth="2" strokeLinecap="round"/>
              <path className={`${activeLink === 'awards' ? 'stroke-black' : 'stroke-white'} group-hover:stroke-black transition-colors duration-200 ease-in-out`} d="M19 5H20.2022C21.4031 5 22.0035 5 22.3168 5.37736C22.63 5.75473 22.4998 6.32113 22.2393 7.45395L21.8485 9.15307C21.2609 11.7086 19.1109 13.6088 16.5 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path className={`${activeLink === 'awards' ? 'stroke-black' : 'stroke-white'} group-hover:stroke-black transition-colors duration-200 ease-in-out`} d="M6 5H4.79779C3.59692 5 2.99649 5 2.68324 5.37736C2.36999 5.75473 2.50024 6.32113 2.76075 7.45395L3.15148 9.15307C3.73914 11.7086 5.88912 13.6088 8.5 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path className={`${activeLink === 'awards' ? 'stroke-black' : 'stroke-white'} group-hover:stroke-black transition-colors duration-200 ease-in-out`} d="M12.5 17C15.5208 17 18.065 12.3379 18.8297 5.99089C19.0412 4.23558 19.147 3.35793 18.5868 2.67896C18.0267 2 17.1223 2 15.3134 2H9.68658C7.87775 2 6.97333 2 6.41317 2.67896C5.85301 3.35793 5.95875 4.23558 6.17025 5.99089C6.935 12.3379 9.47923 17 12.5 17Z" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span className={`${activeLink === 'awards' ? 'flex' : 'hidden'} text-[14px] starter:text-16px`}>Awards</span>
        </a>
      </nav>

      <section id="home" ref={sectionsRef.home} className="flex justify-center">
        <img className="h-[200px] starter:h-[300px] w-auto rounded-b-[150px]" src="/picture.png" alt="" />
      </section>

      <section className="flex flex-col -mb-4 items-center starter:items-start">
        <h1 className="font-medium text-[36px] starter:text-[60px]">Hey, I’m Dinuka</h1>
        <h1 className="font-medium text-[32px] starter:text-[60px] -mt-2 starter:-mt-4
        bg-gradient-to-br from-gradientOrange to-gradientPurple bg-clip-text text-transparent
        ">
          <TypeWriter
          onInit={(typewriter) =>{
            typewriter
            .typeString("Fullstack Developer.")
            .pauseFor(2000)
            .deleteAll()
            .typeString("Illustrator Artist.")
            .pauseFor(2000)
            .deleteAll()
            .start();
          }}
          options={{ loop: true }}
          />
        </h1>
      </section>

      <section className="flex flex-col">
        <ul className="flex flex-row gap-2 starter:gap-4 justify-center starter:justify-start">
          {socialLinks.map((socialLink, index) => (
            <li className="flex" key={index}>
              <a href={socialLink.url} 
              className="flex flex-row gap-1.5 starter:gap-2.5 starter3:py-2.5 starter:py-2.5 py-2 px-3 starter3:px-[16px] starter:px-6 bg-grey rounded-[50px] hover:bg-lightGrey transition-colors duration-200 ease-in-out">
                <img src={socialLink.icon} alt="" className="w-4 h-auto"/>
                <p className="text-[12px] starter:text-[14px]">{socialLink.name}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <p>
          Hi, I’m Dinuka, Experienced full-stack developer from Sri Lanka,
          with 3 years of expertise in React, Flutter, .NET, MySQL, and Redis.
          Ready to create innovative web and mobile solutions.
        </p>
      </section>

      <hr className="border-lightGrey"/>

      <section>
        <h2 className="font-semibold text-[20px]">My Timeline</h2>
        
        <div className="relative mt-8">
          <div className="absolute left-1/2 top-0 h-[calc(100%-150px)] starter3:h-[calc(100%-130px)] starter2.75:h-[calc(100%-108px)] starter2.5:h-[calc(100%-86px)] starter2:h-[calc(100%-86px)] starter1:h-[calc(100%-70px)] w-0.5 bg-white transform -translate-x-1/2"></div>

          <div className="flex items-start mb-12">
            <div className="w-1/2"></div>
            <div className="relative">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="w-1/2 text-left pl-4 -mt-2">
              <div className="flex flex-col items-start">
                <div className="flex flex-row gap-1.5 w-full justify-start items-center">
                  <img src="/calendar.svg" alt="" />
                  <p className="text-white text-[12px]">Present</p>
                </div>
                <p className="text-[14px]">A final year Computer Science undergraduate 
                  <span className="text-linkColor">
                    <a href="https://ucsc.cmb.ac.lk/"> @UCSC </a>
                  </span> with 3.92 GPA
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start mb-12">
            <div className="w-1/2 text-right pr-4 -mt-2">
              <div className="flex flex-col items-end">
                <div className="flex flex-row gap-1.5 w-full justify-end items-center">
                  <img className="w-3.5 h-3.5" src="/calendar.svg" alt="" />
                  <p className="text-white text-[12px]">June,2024 - Nov,2024</p>
                </div>
                <p className="text-[14px]">Worked as a software developer (part&nbsp;time)  
                  <span className="text-linkColor">
                    <a href="https://www.phinexa.io/"> @Phinexa</a>
                  </span>
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="w-1/2"></div>
          </div>

          <div className="flex items-start mb-12">
            <div className="w-1/2"></div>
            <div className="relative">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="w-1/2 text-left pl-4 -mt-2">
              <div className="flex flex-col items-start">
                <div className="flex flex-row gap-1.5 w-full justify-start items-center">
                  <img src="/calendar.svg" alt="" />
                  <p className="text-white text-[12px]">Nov,2023 - May,2024</p>
                </div>
                <p className="text-[14px]">Worked as a Software Engineering intern
                  <span className="text-linkColor">
                    <a href="https://wso2.com/"> @WSO2 </a>
                  </span>
                  under the product
                  <span className="text-linkColor">
                    <a href="https://ballerina.io/"> Ballerina</a>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start mb-12">
            <div className="w-1/2 text-right pr-4 -mt-2">
              <div className="flex flex-col items-end">
                <div className="flex flex-row gap-1.5 w-full justify-end items-center">
                  <img className="w-3.5 h-3.5" src="/calendar.svg" alt="" />
                  <p className="text-white text-[12px]">Feb,2020</p>
                </div>
                <p className="text-[14px]">Got selected fot the Computer Science degree 
                  <span className="text-linkColor">
                    <a href="https://ucsc.cmb.ac.lk/"> @UCSC</a>
                  </span>
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="w-1/2"></div>
          </div>

          <div className="flex items-start mb-12">
            <div className="w-1/2"></div>
            <div className="relative">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="w-1/2 text-left pl-4 -mt-2">
              <div className="flex flex-col items-start">
                <div className="flex flex-row gap-1.5 w-full justify-start items-center">
                  <img src="/calendar.svg" alt="" />
                  <p className="text-white text-[12px]">Jan,2020 - Aug,2020</p>
                </div>
                <p className="text-[14px]">Worked as a Data Entry Operator
                  <span className="text-linkColor">
                    <a href="https://www.orelit.com/"> @OREL IT </a>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start mb-12">
            <div className="w-1/2 text-right pr-4 -mt-2">
              <div className="flex flex-col items-end">
                <div className="flex flex-row gap-1.5 w-full justify-end items-center">
                  <img className="w-3.5 h-3.5" src="/calendar.svg" alt="" />
                  <p className="text-white text-[12px]">2016 - 2019</p>
                </div>
                <p className="text-[14px]">
                  Completed G.C.E Advance Level examination on Physical Science stream 
                  <span className="text-linkColor">
                    <a href="https://www.linkedin.com/school/d-s-senanayake/"> @DSSC </a>
                  </span>
                  and obtained a Zscore of 1.77.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="w-1/2"></div>
          </div>
        </div>
      </section>

      <section id="projects" ref={sectionsRef.projects}>
        <h2 className="font-semibold text-[20px]">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative project-card bg-grey p-4 rounded-[16px] flex flex-col gap-3 hover:bg-lightGrey transition-colors duration-300 overflow-hidden"
            >
              <h2 className="font-medium text-[20px]">{project.title}</h2>
              <p className="text-white opacity-70">{project.description}</p>
              <ul className="flex flex-wrap gap-4 items-center">
                {project.icons.map((icon, idx) => (
                  <li key={idx}>
                    <img src={icon} alt={`${project.title} icon`} />
                  </li>
                ))}
              </ul>
              <a href={project.githubLink} className="absolute top-3 right-3 transform opacity-0 group-hover:opacity-100 -translate-y-3 group-hover:translate-y-0 translate-x-3 group-hover:translate-x-0 transition-all duration-300 ease-in-out">
                <img src="/arrow-up-right.svg" alt="" />
              </a>
            </div>
          ))}
        </div>

      </section>

      <section id="stack" ref={sectionsRef.stack}>
        <h2 className="font-semibold text-[20px]">Technologies</h2>
        <div className="grid gap-3 rounded-lg grid-cols-3 starter2:grid-cols-4 starter:grid-cols-5 mt-8">
          {technologies.map((technology, index) => (
              <div key={index} className="flex flex-col justify-center items-center bg-grey p-4 rounded-md  starter3:w-[118px] starter3:h-[118px] hover:bg-lightGrey transition-colors duration-300">
                <img src={technology.icon} alt="React" className="w-7 h-7 starter3:w-12 starter3:h-12 mb-2" />
                <p className="text-white text-[12px] starter3:text-[16px]">{technology.name}</p>
              </div>
          ))}
        </div>
      </section>

      <section id="blogs" ref={sectionsRef.blogs}>
        <h2 className="font-semibold text-[20px]">Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group relative project-card bg-grey rounded-[16px] flex flex-col hover:bg-lightGrey transition-colors duration-300 overflow-hidden"
            >
              <img src={blog.imagePath} 
              alt="" 
              className="max-h-[180px]"
              />
              <div className="relative p-4">
                <h2 className="font-medium text-[20px]">{blog.title}</h2>
                <p className="text-white opacity-70 mt-4">{blog.description}</p>
                
                <a href={blog.url} className="absolute top-3 right-3 transform opacity-0 group-hover:opacity-100 -translate-y-3 group-hover:translate-y-0 translate-x-3 group-hover:translate-x-0 transition-all duration-300 ease-in-out">
                  <img src="/arrow-up-right.svg" alt="" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="awards" className="overflow-visible" ref={sectionsRef.awards}>
        <h2 className="font-semibold text-[20px]">Awards</h2>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 10,
            depth: 150,
            modifier: 6.5,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="swiper_container mt-8"
        >
          {awards.map((award, index) => (
            <SwiperSlide 
            key={index}
            className={`w-fit relative`}
            >
              <img className="rounded-[8px] w-[300px] h-[200px] starter:w-[400px] starter:h-[250px]" src={award.imagePath} alt="slide_image" />
              <div className="absolute rounded-b-[8px] left-0 bottom-0 p-2 bg-gradient-to-b from-transparent to-black w-full h-[150px] flex flex-col items-start justify-end">
                <h3>{award.title}</h3>
                <p className="text-[12px]">{award.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="mb-[90px] navdesktop:mb-12">

      </section>

    </div>
    </div>
  );
}
