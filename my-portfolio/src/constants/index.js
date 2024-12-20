import {
  // mobile,
  // web,
  // backend,
  // creator,
  DisplayPhoto,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  tnp,
  dsa,
  // carrent,
  // jobit,
  // tripguide,
  hackit,
  hackitClub,
  amazonApi,
  cloudinaryApi,
  cloudIde,
  djangoApp,
  smsPython,
  cLang,
  cplusplus,
  java,
  threejs,
  // github,
  // mobilePhone,
  // linkedin,
  // gmail,
  // whatsapp,
} from "../assets";

import { IoBookSharp } from "react-icons/io5";
import { BsStack } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const navLinks = [
  {
    id: "#skills",
    title: "Skills",
  },
  {
    id: "#work",
    title: "Work Experience",
  },
  {
    id: "#projects",
    title: "Projects",
  },
  {
    id: "#contact",
    title: "Contact",
  },
];

const portfolio = {
  name: "Hariom Shivhare",
  description: "Age: 20\t| @Developer",
  image: DisplayPhoto
};

const myId = [
  "Developer",
  "Problem Solver",
  "Student",

]

const services = [
  {
    title: "Core Subjects",
    icon: IoBookSharp,
    tags: [
      "DSA",
      "OS",
      "Computer Networks",
      "DBMS",
      "OOPs",
    ],
  },
  {
    title: "Mern Stack Development",
    icon: BsStack,
    tags: ["Reactjs", "Nextjs", "Nodejs", "Expressjs", "MongoDB"],
  },
  {
    title: "Programming Languages",
    icon: FaCode,
    tags: ["C", "C++", "Python", "Java", "Javascript", "SQL"],
  },
  {
    title: "Tools & Tech",
    icon: FaTools,
    tags: ["Git", "GitHub", "Netlify", "Heroku", "Linux", "MongoDB", "Docker"],
  },
  {
    title: "Frameworks & Libraries",
    icon: IoLibrary,
    tags: ["Bootstrap", "TailwindCSS", "ExpressJs", "React", "NextJs"],
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "C",
    icon: cLang,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "java",
    icon: java,
  },

];

const experiences = [
  {
    title: "Hackit Club Web Coordinator",
    company_name: "SGGSIE&T",
    icon: hackitClub,
    iconBg: "#383E56",
    date: "Jan 2024 - August 2024",
    points: [
      "Developed a web applications using Next.js with Aceternity UI and TailwindCSS",
      "Showcasing Cybersecurity events and Hackathons held during college events and related activities effectively.",
      "Implementing responsive design and ensuring cross-browser compatibility",
    ],
  },
  {
    title: "Website Executive",
    company_name: "T&P Cell, SGGSIE&T",
    icon: tnp,
    iconBg: "#383E56",
    date: "Aug 2023 - Aug 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies",
      "Collaborating with cross-functional teams including HR team, DBMS team, and other developers to create high-quality website",
      "Implementing responsive design and ensuring cross-browser compatibility",
    ],
  },
  {
    title: "Java Developer",
    company_name: "Self-Paced",
    icon: java,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - May 2023",
    points: [
      "Understanding and implementing various operations to deliver robust and high-performance software solutions",
      "A strong foundation in core Java concepts, including object-oriented programming, inheritance, polymorphism, encapsulation, and abstraction",
      "Understanding of multithreading and GUI development",
    ],
  },
  {
    title: "Data Structures & Algo(C++)",
    company_name: "Self-Paced",
    icon: dsa,
    iconBg: "#383E56",
    date: "Aug 2022 - Sept 2023",
    points: [
      "Extends to data structures and algorithms, enabling me to implement efficient solutions for complex problems, using data structures such as lists, trees, and queues, and employing algorithms for optimal performance",
      "Applied various algorithms for searching, sorting, and optimization, consistently achieving high-performance results",
      "Participating in code reviews",
    ],
  },
  {
    title: "Git and Version Control",
    company_name: "Self-Paced",
    icon: git,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Jan 2023",
    points: [
      "Effectively manage source code, track changes, and collaborate seamlessly with development teams",
      "Creating and managing repositories, branching and merging strategies, resolving conflicts, and leveraging Git's extensive set of commands",
      "Applied Git and version control in various projects, ensuring the integrity and traceability of code changes.",
    ],
  },
];

const socialMedia = [
  {
    name: "gmail",
    type: "mail",
    icon: SiGmail,
    // link: 'https://mail.google.com/mail/u/?authuser=2021bit046@sggs.ac.in'
    link: "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=2021bit046@sggs.ac.in",
  },
  {
    name: "linkedin",
    type: "link",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/hariom-shivhare-a32803290/",
  },
  {
    name: "github",
    type: "link",
    icon: FaGithub,
    link: "https://github.com/HarromPS",
  },
  {
    name: "Leetcode",
    type: "link",
    icon: SiLeetcode,
    link: "https://leetcode.com/u/d6m1zTHqHj/",
  },
];
const testimonials = [
  {
    testimonial:
      "thought",
    name: "",
    designation: "",
    company: "",
    image: "",
  }
];

const projects = [
  {
    name: "Hackit Event Site",
    description:
      "Developed the Hackit Club website using Next.js and Aceternity UI, serving as a platform to showcase cybersecurity hackathon events and related activities effectively.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "aceternity ui",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hackit,
    source_code_link: "https://github.com/HarromPS/Hackit",
  },
  {
    name: "Online Cloud IDE",
    description:
      "An Online Cloud IDE enabling users to write, edit, and execute code directly in the browser with real-time collaboration and terminal integration for an enhanced development experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "xterm_terminal",
        color: "green-text-gradient",
      },
      {
        name: "websockets",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "orange-text-gradient",
      },
      {
        name: "pty_pseudo_terminal",
        color: "pink-text-gradient",
      },
    ],
    image: cloudIde,
    source_code_link: "https://github.com/HarromPS/CloudIde",
  },
  {
    name: "SMS Sending APIs Python",
    description:
      "A Python-based SMS notification system that sends market price updates via the SMS Chef API. It includes data fetching, processing, and SMS sending functionality.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "beautiful_soup",
        color: "green-text-gradient",
      },
      {
        name: "sms_chef_api",
        color: "pink-text-gradient",
      },
    ],
    image: smsPython,
    source_code_link: "https://github.com/HarromPS/sms_python",
  },
  {
    name: "Cloudinary API Web App",
    description:
      "A Cloudinary API Demo application showcasing key features like image and video uploads, transformations, and real-time content delivery.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "cloudinary_api",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: cloudinaryApi,
    source_code_link: "https://github.com/HarromPS/Cloud-App",
  },
  {
    name: "Amazon Business APIs",
    description:
      "An Express.js application leveraging Amazon Selling Partner (SP) API to provide seamless integration for sellers, enabling operations through multiple API endpoints.",
    tags: [
      {
        name: "expressjs",
        color: "blue-text-gradient",
      },
      {
        name: "rest_apis",
        color: "green-text-gradient",
      },
      {
        name: "amazon_data_api",
        color: "pink-text-gradient",
      },
    ],
    image: amazonApi,
    source_code_link: "https://github.com/HarromPS/Video-calling-App",
  },
  {
    name: "Django @Zegacloud Video Call App",
    description:
      "A Django-powered video calling application leveraging ZegoCloud SDK to enable seamless real-time communication and advanced video conferencing.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "zegacloud_api",
        color: "pink-text-gradient",
      },
    ],
    image: djangoApp,
    source_code_link: "https://github.com/HarromPS/Video-calling-App",
  },
];

export { services, technologies, experiences, testimonials, projects, portfolio, myId, socialMedia };