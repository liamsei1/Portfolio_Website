import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cpsImg from "@/public/CPS_image.jpeg";
import actImg from "@/public/ACT_image.png";
import portfolioImg from "@/public/Portfolio_image.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Bar Ilan math program for students",
    location: "",
    description:
      "I graduated Bar Ilan math program for excellent high school students",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Graduated School",
    location: "Alliance High School",
    description:
      "I studied software development class",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Graduated B.Sc. in Computer Science",
    location: "Haifa University",
    description:
      "I finished Etgar program for excellent high school students, and got a first degree in computer science",
      icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Gym website",
    description:
      "I worked on this project for 2 years at school. Implemented various features such as user registration, training programs builder, online shop, membership management and more.",
    tags: ["C#", "ASP.NET", "Microsoft SQL Server", "XML"],
    imageUrl: actImg,
  },
  {
    title: "Parking lot application",
    description:
      "I developed with a team of students this application. I was responsible for: writing code, reviewing other members' code, and creating the algorithm for the parking management.",
    tags: ["Java", "Maven", "JavaFX", "MySQL", "Hibernate"],
    imageUrl: cpsImg,
  },
  {
    title: "Portfolio",
    description:
      "This webpage :). I used Next.js v14 to develop this website, and Tailwind and Framer Motion to design it.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Framer Motion", "Email API"],
    imageUrl: portfolioImg,
  },
] as const;

export const skillsData = [
  "C#",
  "C++",
  "Java",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "GitHub",
  "Tailwind",
  "MySql",
  "Microsoft SQL Server",
  "ASP.NET",
  "JavaFx",
  "Tensorflow",
  "OpenCv",
] as const;