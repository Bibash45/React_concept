import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import sastobazarImg from "./assets/sastobazar.png";
import foodImg from "./assets/food.png";
import ecommerceImg from "./assets/ecommerce.png";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Bootstrap",
    icon: <FaBootstrap className="h-16 w-16 text-emerald-500" />,
    text: "Expert in Bootstrap, proficient in building responsive, mobile-first web applications with a focus on clean design and seamless user experiences, leveraging pre-built components for rapid development.",
  },
  {
    id: nanoid(),
    title: "Node Js",
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in Node.js, adept at developing scalable server-side applications and RESTful APIs with a strong focus on performance, security, and efficient database interactions.",
  },
  {
    id: nanoid(),
    title: "Redux Toolkit",
    icon: <SiRedux className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in Redux Toolkit, specializing in state management for complex applications, implementing efficient data flow, and enhancing application performance through optimized state updates and a streamlined development process.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: sastobazarImg,
    url: "https://sastobazar.onrender.com/",
    github: "https://github.com/Bibash45/SastoBazar_Ecommerce_full_stack.git",
    title: "Full Stack Ecommerce Project",
    text: "Explore a sleek ecommerce platform featuring a Node.js and Express backend for secure user authentication and payment processing, paired with a responsive React and Bootstrap frontend. Enjoy seamless browsing, effortless cart management, and a smooth checkout experience.",
  },
  {
    id: nanoid(),
    img: foodImg,
    url: "https://bibash043.netlify.app/",
    github: "https://github.com/Bibash45/React_concept/tree/main/my-project",
    title: "Food Delivery",
    text: "Discover a vibrant food delivery app that brings your favorite meals to your fingertips! Built with React, this project features an intuitive interface for browsing restaurants, placing orders, and tracking deliveries in real-time. Enjoy a seamless experience from menu selection to checkout!",
  },
  {
    id: nanoid(),
    img: ecommerceImg,
    url: "https://bibash043.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "Ecommerce website with frontend only",
    text: "Discover a beautifully designed ecommerce website crafted with React, Tailwind CSS, and DaisyUI. This frontend-only project features stunning product displays, intuitive navigation, and a responsive layout, providing users with an engaging shopping experience that drives customer interaction and satisfaction.",
  },
];
