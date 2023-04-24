import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  soft,
  stage,
  silver,
  nextjs,
  kaspid,
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
    title: "React HackerRank",
    icon: web,
    link: "https://www.hackerrank.com/certificates/871eaef9102d",
  },
  {
    title: "Javascript HackerRank",
    icon: mobile,
    link: "https://www.hackerrank.com/certificates/f39f1e136d04?utm_medium=email&utm_source=mail_template_1393&utm_campaign=hrc_skills_certificate",
  },
  {
    title: "Algorithms and Data Structures",
    icon: backend,
    link: "https://www.udemy.com/certificate/UC-fc9f8de2-5797-4908-a20e-6b599fce9a5b/",
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Senior FrontEnd Engineer",
    company_name: "SoftConstruct",
    icon: soft,
    iconBg: "#383E56",
    date: "Jan 2022 - peresent",
    link: "https://www.softconstruct.com/",
    about:
      "BetConstruct, which is a product of SoftConstruct is a top-rated global provider of gaming solutions, with a diverse range of offerings, that have won numerous awards in the iGaming and gaming industry.",
    points: [
      "Design, develop, test and deploy design features in a timely manner.",
      "Utilized technologies such as JavaScript, React JS, Next JS, Typescript, Redux, and Web Socket in the project in Agile environments.",
      "Designed, developed, tested, and deployed design features in a timely manner.",
      "Ensured the user experience determined design choices on an ongoing basis.",
      "Solved complex challenges using modern web application development processes and standard methodologies.",
      "Collaborated with teams to solve issues and find and implement efficiencies.",
      "Collaborated with product managers to design cutting-edge features.",
    ],
    skills:
      "React.js, Next.js, TypeScript, Redux, Socket.io, React-Testing-Library, GitHub, antd",
  },
  {
    title: "Senior Frontend Developer",
    company_name: "StageTry",
    icon: stage,
    iconBg: "#fff",
    date: "Mar 2021 - Jan 2022",
    link: "https://stagetry.com/",
    about:
      "Stage Try provides online retailers with solutions and tools to implement the Try Before You Buy model, reducing returns, increasing revenue and customer loyalty.",
    points: [
      "Utilized Javascript, React JS, Next JS, TypeScript, Redux, and Tailwind CSS to develop in Agile environments and implement a  sitemap solution, resolving SEO issues caused by the marketplace's large data volume.",
      "Improved the marketplace's efficiency, speed, and functionality by implementing cutting-edge technolog",
      "Added the “Try Before You Buy” feature in the marketplace (it Achieved 20% revenue for the company).",
    ],
    skills:
      "React.js, Nextjs, TypeScript, MUI, Tailwind CSS, React Hooks, redux, Git",
  },
  {
    title: "Front-End Developer",
    company_name: "SilverAge",
    icon: silver,
    link: "https://silverage.co/",
    about:
      "SilverAge is a Digital agency company that implemented web applications for many different industries (services, bank, financial, etc.)",
    iconBg: "#383E56",
    date: "Jul 2018 - Dec 2021",
    points: [
      "Developing and maintaining web applications using React.js, Nextjs and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    skills:
      "Reactjs, Next.js, TypeScript, Tailwind CSS, react-Query, redux, Git,PWA",
  },
  {
    title: "Front-End Developer",
    company_name: " Kaspid",
    icon: kaspid,
    link: "https://kaspid.com/",
    about: "",
    iconBg: "#fff",
    date: "Jul 2015 - Apr 2018",
    points: [
      "Used html5, css3, jQuery, and Vanilla JavaScript, Created, managed, and responsive creative websites.",
      "Responsible for a team, managed to create a standard for implementing websites with the edge of technology.",
      "Developed my teamwork skills by working in close collaboration with 6 other colleagues.",
    ],
    skills:
      "Reactjs, Next.js, TypeScript, Tailwind CSS, react-Query, redux, Git,PWA",
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
