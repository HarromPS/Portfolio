import {
  profile,
  mobile,
  backend,
  creator,
  web,
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
  carrent,
  jobit,
  tripguide,
  cLang,
  cplusplus,
  java,
  threejs,
  github,
  mobilePhone,
  linkedin,
  gmail,
  whatsapp,
} from "../assets";

export const navLinks = [
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#work",
    title: "Work",
  },
  {
    id: "#contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "resume",
  },
];

const portfolio = {
  name: "Hariom Shivhare",
  description: "Age: 20\t| @Developer",
  image: profile
}
const myId = [
  "Developer",
  "Problem Solver",
  "Student",

]

const services = [
  {
    title: "Social Media & Poster Designing",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Structure & Algos",
    icon: creator,
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
    title: "Website Executive",
    company_name: "SGGSIE&T",
    icon: tnp,
    iconBg: "#383E56",
    date: "Aug 2023 - Present",
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
    name: 'mobilenumber',
    icon: mobilePhone,
    link: 8767008518
  },
  {
    name: 'gmail',
    icon: gmail,
    // link: 'https://mail.google.com/mail/u/?authuser=2021bit046@sggs.ac.in'
    link: 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=2021bit046@sggs.ac.in'
  },
  {
    name: 'linkedin',
    icon: linkedin,
    link: 'https://www.linkedin.com/in/hariom-shivhare-a32803290/'
  },
  {
    name: 'github',
    icon: github,
    link:'https://github.com/HarromPS'
  },
  {
    name: 'whatsapp',
    icon: whatsapp,
    link:'https://wa.me/918767008518'
  }
]
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects, portfolio, myId, socialMedia };