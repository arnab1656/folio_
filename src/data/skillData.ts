import { FaReact, FaNode, FaPython, FaDocker, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiPrisma,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiFastapi,
  SiFirebase,
  SiFigma,
  SiCplusplus,
  SiWebrtc,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
}

export const skills: Skill[] = [
  { name: "React.js", icon: FaReact, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "Node.js", icon: FaNode, color: "text-[#339933]" },
  { name: "WebRTC", icon: SiWebrtc, color: "text-[#00599C]" },
  { name: "Express.js", icon: SiExpress, color: "text-white" },
  { name: "Python", icon: FaPython, color: "text-[#3776AB]" },
  { name: "Docker", icon: FaDocker, color: "text-[#2496ED]" },
  { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" },
  { name: "Prisma", icon: SiPrisma, color: "text-white" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#336791]" },
  { name: "Redis", icon: SiRedis, color: "text-[#DC382D]" },
  { name: "FastAPI", icon: SiFastapi, color: "text-[#009688]" },
  { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
  { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },
  { name: "C++", icon: SiCplusplus, color: "text-[#00599C]" },
];
