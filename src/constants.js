// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import DSA from './assets/tech_logo/DSA.png';
import DBMS from './assets/tech_logo/DBMS.png';
import OS from './assets/tech_logo/OS.png';
import OOPS from './assets/tech_logo/OOPS.png';
import CN from './assets/tech_logo/CN.png';

// Education Section Logo's
import dsce from './assets/education_logo/DSCE.jpeg';
import shantiNiketan from './assets/education_logo/ShantiNiketan.jpeg';
import sunshine from './assets/education_logo/sunshine.png';

// Project Section Logo's
import vyapaarSetu from './assets/work_logo/vyapaarSetu.png';
import samvaad from './assets/work_logo/samvaad.png';
import indianTourism from './assets/work_logo/indianTourism.png';
import weatherApp from './assets/work_logo/weatherApp.png';
import todo from './assets/work_logo/todo.png';

// Coding Profile Logo
import codechef from "./assets/profile_logo/codechef.webp"
import leetcode from "./assets/profile_logo/LeetCode.png"
import gfg from "./assets/profile_logo/gfg.jpg"
import codolio from "./assets/profile_logo/codolio.jpeg"

export const SkillsInfo = [
  {
    title: '{} Front/Back-end',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: '{} CS Fundamentals',
    skills: [
      { name: 'DSA', logo: DSA },
      { name: 'DBMS', logo: DBMS },
      { name: 'OOPS', logo: OOPS },
      { name: 'OS', logo: OS },
      { name: 'CN', logo: CN },
    ],
  },
  {
    title: '{} Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: dsce,
    school: "Dayananda Sagar College of Engineering, Bengaluru",
    date: "2022-2026",
    grade: "8.52 CGPA",
    degree: "B.E - CSE",
  },
  {
    id: 1,
    img: shantiNiketan,
    school: "Shanti Niketan Sr. Sec. School, Muzaffarpur",
    date: "2020-2021",
    grade: "88%",
    degree: "CBSE(XII) - PCM English",
  },
  {
    id: 2,
    img: sunshine,
    school: "Sunshine Prep. High School, Muzaffarpur",
    date: "2018-2019",
    grade: "91.4%",
    degree: "CBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "VyapaarSetu",
    description:
      "VyaaparSetu / E-commerceis a full-stack e-commerce web application that connects buyers and sellers through a modern, responsive interface. It supports user authentication, product management, cart, and order flow, built using React, Node.js, Express, and MongoDB. The project also includes image uploads, secure JWT-based login, and admin panel features. ",
    image: vyapaarSetu,
    tags: ["HTML", "CSS", "JavaScript", "Tailwind", "React JS", "Redux", "API", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Raj-Ritik/E-commerce",
    webapp: "https://e-commerce-5m2l.vercel.app/",
  },
  {
    id: 1,
    title: "Samvaad",
    description:
      "Samvaad / Chat App project is a real-time messaging application built using the MERN stack (MongoDB, Express, React, Node.js) with Socket.io for instant communication. It features a modern UI designed with TailwindCSS and Daisy UI, ensuring a sleek and responsive user experience.",
    image: samvaad,
    tags: ["HTML", "CSS", "JavaScript", "Tailwind", "React JS", "socket.io", "API", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Raj-Ritik/Chat-App",
    webapp: "https://chat-app-3-zw9q.onrender.com/login",
  },
  {
    id: 2,
    title: "Indian-Tourism",
    description:
      "The web app is a responsive and visually appealing website showcasing the rich cultural heritage of India. It highlights the country's UNESCO World Heritage sites, festivals, regional cuisine and it offers an interactive gallery, includes modern web features such as a sticky navigation bar, typewriter animations, and carousel sliders.",
    image: indianTourism,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/Raj-Ritik/Indian-Tourism",
    webapp: "https://raj-ritik.github.io/Indian-Tourism/",
  },
  {
    id: 3,
    title: "Weather-App",
    description:
      "The web app is a responsive and visually appealing website showcasing the rich cultural heritage of India. It highlights the country's UNESCO World Heritage sites, festivals, regional cuisine and it offers an interactive gallery, includes modern web features such as a sticky navigation bar, typewriter animations, and carousel sliders.",
    image: weatherApp,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/Raj-Ritik/Weather_webApp",
    webapp: "https://raj-ritik.github.io/Weather_webApp/",
  },
  {
    id: 4,
    title: "To-Do App",
    description:
      "The weather app build by me provides current weather conditions. Users can search for a location by city name, and the app displays the temperature, humidity, wind speed.The app display the climate images based on the weather condition , humidity and wind speed. The app provide a simple and clean user friendly interface. ",
    image: todo,
    tags: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/Raj-Ritik/ToDoList-Web_app",
    webapp: "https://raj-ritik.github.io/ToDoList-Web_app/",
  },
];
export const codingProfile = [
  {
    id: 0,
    title: "CodeChef",
    description:
      "3 ⭐ Max Contest Rating: 1604",
    image: codechef,
    profileLink: "https://www.codechef.com/users/ritik_raj23"
  },
  {
    id: 1,
    title: "LeetCode",
    description:
      "Max Contest Rating: 1634 Solved: 200+Qs",
    image: leetcode,
    profileLink: "https://leetcode.com/u/rajritik/"
  },
  {
    id: 2,
    title: "GFG",
    description:
      "Solved : 150+ questions",
    image: gfg,
    profileLink: "https://www.geeksforgeeks.org/user/ritikrac98b/"
  },
  {
    id: 3,
    title: "Codolio",
    description:
      "Profile Summary & Analysis",
    image: codolio,
    profileLink: "https://codolio.com/profile/ritikraj"
  },
];  