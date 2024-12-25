"use client";
import { useEffect, useState } from "react";
import { getMediumCoverImage } from '../utils/helper'

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
    icon: "/technologies/Flutter.svg",
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

const initialBlogs: Blog[] = [
  {
    title: "Efficient Caching with bal persist",
    description: "In this article we will discuss on utilizing Ballerina’s `bal persist` to build a common use case encountered in most E-Commerce applications: a product catalog.",
    imagePath: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*jYiMLyhkevGNI4rHtfl-Iw.png",
    url: "https://medium.com/@dinukaamarasinghe817/efficient-caching-with-bal-persist-3599e49ea0ee"
  }
]


export default function Home() {

  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);

  useEffect(() => {
    const fetchBlogImages = async () => {
      const updatedBlogs = await Promise.all(
        initialBlogs.map(async (blog) => {
          const imagePath = await getMediumCoverImage(blog.url);
          return {
            ...blog,
            imagePath: imagePath || "",
          };
        })
      );
      setBlogs(updatedBlogs);
    };

    // fetchBlogImages();
  }, []);

  return (
    <div className="flex flex-col gap-12 pt-32 max-w-[640px]">
      <div className="fixed top-1/2 left-0 transform -translate-y-1/2 flex flex-col items-center bg-black bg-opacity-80 rounded-r-lg py-4 px-2 z-50">
        <a href="#home" className="group flex flex-col items-center justify-center mb-4 p-3 hover:bg-gray-700 rounded-full transition">
          <div className="text-white text-xl">⌘</div>
          <span className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity mt-2">Home</span>
        </a>
        <a href="#write" className="group flex flex-col items-center justify-center mb-4 p-3 hover:bg-gray-700 rounded-full transition">
          <div className="text-white text-xl">✏️</div>
          <span className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity mt-2">Write</span>
        </a>
        <a href="#layers" className="group flex flex-col items-center justify-center mb-4 p-3 hover:bg-gray-700 rounded-full transition">
          <div className="text-white text-xl">📦</div>
          <span className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity mt-2">Layers</span>
        </a>
        <a href="#email" className="group flex flex-col items-center justify-center mb-4 p-3 hover:bg-gray-700 rounded-full transition">
          <div className="text-white text-xl">📧</div>
          <span className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity mt-2">Email</span>
        </a>
        <a href="#support" className="group flex flex-col items-center justify-center mb-4 p-3 hover:bg-gray-700 rounded-full transition">
          <div className="text-white text-xl">🎧</div>
          <span className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity mt-2">Support</span>
        </a>
      </div>

      <section className="max-w-[660px] w-full">
        <img src="/picture.png" alt="" />
      </section>

      <section className="max-w-[660px] w-full flex flex-col">
        <h1 className="font-medium text-[60px]">Hey, I’m Dinuka</h1>
        <h1 className="font-medium text-[60px] -mt-4
        bg-gradient-to-br from-gradientOrange to-gradientPurple bg-clip-text text-transparent
        ">Fullstack Developer.</h1>
      </section>

      <section className="max-w-[660px] w-full flex flex-col">
        <ul className="flex flex-row gap-9">
          {socialLinks.map((socialLink, index) => (
            <li className="flex" key={index}>
              <a href={socialLink.url} 
              className="flex flex-row gap-2.5 py-2.5 px-6 bg-grey rounded-[50px] hover:bg-lightGrey transition-colors duration-200 ease-in-out">
                <img src={socialLink.icon} alt="" className="w-4 h-auto"/>
                <p>{socialLink.name}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-[660px] w-full">
        <p>
          Hi, I’m Dinuka, Experienced full-stack developer from Sri Lanka,
          with 3 years of expertise in React, Flutter, .NET, MySQL, and Redis.
          Ready to create innovative web and mobile solutions.
        </p>
      </section>

      <hr className="border-lightGrey"/>

      <section className="max-w-[640px] w-full">
        <h2 className="font-semibold text-[20px]">My Timeline</h2>
        
        <div className="relative mt-8">
          <div className="absolute left-1/2 top-0 h-[calc(100%-70px)] w-0.5 bg-white transform -translate-x-1/2"></div>

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
                    <a href="https://ucsc.cmb.ac.lk/"> @UCSC</a>
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

      <section className="max-w-[640px] w-full">
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

      <section>
        <h2 className="font-semibold text-[20px]">Technologies</h2>
        <div className="grid gap-3 rounded-lg sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-8">
          {technologies.map((technology, index) => (
              <div key={index} className="flex flex-col justify-center items-center bg-grey p-4 rounded-md w-[118px] h-[118px] hover:bg-lightGrey transition-colors duration-300">
                <img src={technology.icon} alt="React" className="w-12 h-12 mb-2" />
                <p className="text-white">{technology.name}</p>
              </div>
          ))}
        </div>
      </section>

      <section>
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

      <section className="mb-12">

      </section>

    </div>
  );
}
