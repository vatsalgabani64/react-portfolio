import personalImg from "../assets/introduction/photo.jpg";
import { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export interface IPersonalInfo {
  name: string;
  resume: string;
  profileImage: string;
  mailId: string;
  social: {
    name: string;
    url: string;
    icon: IconType;
  }[];
  intro: {
    line1: string;
    headline: string;
    description: string;
  };
}

export const PERSONAL_INFO: IPersonalInfo = {
  name: "Vatsal Gabani",
  profileImage: personalImg,
  resume: "https://drive.google.com/file/d/19kCp9g-V8W2uUkVEGrC14UJRTYPQDp3N/view?usp=sharing",
  mailId: "gabanivatsal17@gmail.com",
  social: [
    {
      name: "Github",
      url: "https://github.com/vatsalgabani64/",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vatsal-gabani/",
      icon: FaLinkedin,
    },
  ],

  intro: {
    line1: "Hello, I'm",
    headline: "I build full-stack web applications.",
    description: `I'm a developer passionate about creating clean, fast, and scalable digital experiences. I enjoy working across the stack — from React, Next.js, and Tailwind on the frontend to Node.js, Django, and AI-driven backend integrations.`,
  },
};
