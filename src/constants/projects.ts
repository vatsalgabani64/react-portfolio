import bookingAppImg from "../assets/projects/booking.png";
import chatAppImg from "../assets/projects/chat.png";

export interface IProject {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
}

export const PROJECTS: IProject[] = [
  {
    title: "Accommodation Booking Web App",
    description:
      "A full-stack booking platform with authentication, property listings, messaging, and a clean UI.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    image: bookingAppImg,
    github: "https://github.com/vatsalgabani64/booking-app",
  },
  {
    title: "Real-Time Chat System (Socket.io)",
    description:
      "A responsive chat system with live messaging, online status, and WebSocket-powered updates.",
    tech: ["React", "Node.js", "Socket.io", "Express", "Tailwind CSS"],
    image: chatAppImg,
    github: "https://github.com/vatsalgabani64/socket-chat",
    demo: "https://socket-chat-dzal.onrender.com/",
  },
];
