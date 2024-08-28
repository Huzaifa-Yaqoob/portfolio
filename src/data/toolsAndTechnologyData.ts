import { type IconType } from "react-icons";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs, TbBrandGit, TbBrandVscode } from "react-icons/tb";

export type ToolsAndTechnology = {
  name: string;
  icon: IconType;
  color: string;
};

export const toolsAndTechnologies: ToolsAndTechnology[] = [
  { name: "HTML", icon: FaHtml5, color: "bg-[#E34F26]" },
  { name: "CSS", icon: FaCss3Alt, color: "bg-[#1572B6]" },
  { name: "Java Script", icon: FaJsSquare, color: "bg-[#F7DF1E]" },
  { name: "Type Script", icon: BiLogoTypescript, color: "bg-[#3178C6]" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "bg-[#06B6D4]" },
  { name: "ReactJs", icon: FaReact, color: "bg-[#61DAFB]" },
  { name: "NodeJs", icon: FaNodeJs, color: "bg-[#339933]" },
  { name: "ExpressJs", icon: SiExpress, color: "bg-[#000]" },
  { name: "MongoDB", icon: SiMongodb, color: "bg-[#47A248]" },
  { name: "NextJs", icon: TbBrandNextjs, color: "bg-[#000]" },
  { name: "VSCode", icon: TbBrandVscode, color: "bg-[#007ACC]" },
  { name: "Git", icon: TbBrandGit, color: "bg-[#F05032]" },
  { name: "GitHub", icon: FaGithub, color: "bg-[#181717]" },
];
