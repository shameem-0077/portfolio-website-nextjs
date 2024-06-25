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
    meta,
    talrop,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    steyp
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Flutter Developer",
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Python Django developer",
      company_name: "Steyp",
      icon: steyp,
      iconBg: "#E6DEDD",
      date: "July 2023 - current",
      points: [
        "Proficiency in Python: Strong understanding of Python syntax, libraries, and best practices.",
        "Django Framework: Deep knowledge of Django, including its ORM, views, templates, forms, and admin interface.",
        "Web Development Fundamentals: Understanding of HTML, CSS, JavaScript, and front-end frameworks like React or Next.js.",
        "Database Management: Experience with relational databases (e.g., PostgreSQL, MySQL) and knowledge of database design, migrations, and optimization.",
        "RESTful APIs: Ability to design, implement, and consume RESTful APIs, including Django REST framework.",
        "Debugging: Proficiency in using debugging tools and techniques to identify and resolve issues.",
        "Optimization: Ability to profile and optimize code for performance and scalability.",
        "Clear Communication: Explaining technical concepts clearly to both technical and non-technical stakeholders.",
        "Documentation: Writing comprehensive documentation for code, APIs, and systems for future reference and collaboration.",
        "Version Control: Proficiency with Git, including branching, merging, and pull requests.",
        "Agile Methodologies: Understanding of Agile practices, such as Scrum or Kanban, and experience working in sprints.",
        "Task Management: Using tools like JIRA or Trello to track progress and manage tasks.",
      ],
    },
    {
      title: "Senior support engineer",
      company_name: "Steyp",
      icon: steyp,
      iconBg: "#E6DEDD",
      date: "August 2023 - Current",
      points: [
        "Analytical Thinking: Ability to logically analyze issues, identify root causes, and devise effective solutions.",
        "Attention to Detail: Careful observation and precise problem-solving to avoid overlooking critical details.",
        "Resourcefulness: Skill in using available resources (manuals, online forums, knowledge bases) to resolve issues efficiently.",
        "Clear Communication: Ability to explain technical issues and solutions clearly to non-technical users.",
        "Active Listening: Understanding user problems by listening attentively and asking clarifying questions.",
        "Patience: Remaining calm and patient, especially when dealing with frustrated users.",
        "Empathy: Understanding and empathizing with user frustrations to provide better support.",
        "Professionalism: Maintaining a professional demeanor in all interactions, whether written or verbal.",
        "Multitasking: Handling several support requests simultaneously without compromising on quality.",
        "Follow-Up: Ensuring issues are resolved to the user’s satisfaction and following up on pending cases.",
        "Teamwork: Working well within a team, sharing knowledge, and assisting colleagues when needed."
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
  
  export { services, technologies, experiences, testimonials, projects };