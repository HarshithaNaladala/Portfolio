import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "testimonnials",
      title: "Testimonials",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Full Stack Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Software Developer",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "java",
      icon: '/java.png',
    },
    {
      name: "python",
      icon: '/python.png',
    },
    {
      name: "bootstrap",
      icon: '/bootstrap.svg',
    },
    {
      name: "angular",
      icon: '/angular.png',
    }
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "CETLOE",
      icon: '/gsu.jpg',
      iconBg: "#383E56",
      date: "August 2023 - Present",
      points: [
        "Engineered an advanced admin dashboard using JavaScript, React, HTML, CSS and Node.js, enhancing user experience with responsive design via CSS Flexbox and Grid, and achieved 95% code coverage using Jest for robust testing.",
        "Developed interactive forms with React Hook Form and Yup, and refined FERPA-compliant data tables using Material-UI for efficient course management.",
        "Improved application performance by 73% through strategic data fetching and caching with Tanstack Query (React Query) as part of my research assistant duties.",
        "Led the Front-End Development of a student portal, enabling course access, material submissions, and quizzes, increasing student engagement by 40% using JavaScript and React.",
        "Implemented secure authentication and authorization protocols, reducing unauthorized access by 85% and safeguarding data.",
        "Crafted an efficient data management framework using React Context, which improved the accuracy of log tracking and shortened server response time by 46%, enabling faster access to critical course information.",
        "Managed tasks and workflows using Jira to ensure timely completion of research deliverables.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "SoulPage IT Solutions",
      icon: './soulpage.jpg',
      iconBg: "#E6DEDD",
      date: "August 2022 - May 2023",
      points: [
        "Increased manager tracking efficiency by 54% through the development of the Hugo Attendance Tracker, featuring a responsive and intuitive UI built with HTML and Bootstrap, ensuring seamless cross-device usage.",
        "Developed scalable back-end REST APIs using Python and Django REST Framework, implementing POST, PUT, GET and DELETE operations, seamlessly integrated with PostgreSQL for efficient data management and reliable performance.",
        "Systematized attendance management by integrating leave balances and project tracking, improving team oversight by 63% and reducing manual intervention.",
        "Led system testing and debugging efforts as part of the co-op program, identifying and resolving critical performance bottlenecks, which enhanced application reliability by 35% and minimized downtime.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "LMS Learn",
      description:
        "LMS Learn is a learning management system that offers a seamless platform for users to browse, purchase, and engage with educational courses, featuring secure payment integration and multimedia content handling.",
      tags: [
        {
          name: "ReactJS",
        },
        {
          name: "Tailwind CSS",
        },
        {
          name: "ShadcnUI",
        },
        {
          name: "NodeJS",
        },
        {
          name: "ExpressJS",
        },
        {
          name: "MongoDB",
        },
      ],
      image: '/lms_learn.png',
      source_code_link: "https://github.com/HarshithaNaladala/LMSLearn",
      live_server_link: "https://lms-learn-tawny.vercel.app"
    },
    {
      name: "Coffee Website",
      description:
        "The Coffee Website is a visually engaging platform that showcases a coffee shop's offerings, from diverse beverage menus to customer testimonials, providing users with both online ordering and contact information.",
      tags: [
        {
          name: "HTML",
        },
        {
          name: "CSS",
        },
        {
          name: "JavaScript",
        },
      ],
      image: '/coffee_website.png',
      source_code_link: "https://github.com/HarshithaNaladala/CoffeeWebsite",
      live_server_link: "https://harshithanaladala.github.io/CoffeeWebsite"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };