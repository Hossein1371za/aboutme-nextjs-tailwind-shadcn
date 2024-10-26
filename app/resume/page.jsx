"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "درباره ی من",
  description:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان",
  info: [
    {
      fieldName: "نام",
      fieldValue: "حسین زحمتکشان",
    },
    {
      fieldName: "موبایل",
      fieldValue: "(+98) 123 456 789",
    },
    {
      fieldName: "سابقه",
      fieldValue: "+2 سال",
    },
    {
      fieldName: "اسکایپ",
      fieldValue: "hossein.71za",
    },
    {
      fieldName: "ملیت",
      fieldValue: "ایران",
    },
    {
      fieldName: "ایمیل",
      fieldValue: "hossein71@gmail.com",
    },
    {
      fieldName: "دورکاری",
      fieldValue: "قابل اجرا",
    },
    {
      fieldName: "زبان",
      fieldValue: "فارسی, انگلیسی, آلمانی",
    },
  ],
};

// experience data
const experience = {
  icon: "../../assets/resume/badge.svg",
  title: "تجربیات من",
  description:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان",
  items: [
    {
      company: "شرکت 1",
      position: "فرانت اند دولوپر",
      duration: "1398 - 1400",
    },
    {
      company: "شرکت 2",
      position: "فرانت اند دولوپر",
      duration: "1400 - 1401",
    },
    {
      company: "شرکت 3",
      position: "فرانت اند دولوپر",
      duration: "1401 - 1402",
    },
    {
      company: "شرکت 4",
      position: "فرانت اند دولوپر",
      duration: "1399 - 1401",
    },
    {
      company: "شرکت 5",
      position: "فرانت اند دولوپر",
      duration: "1398 - 1400",
    },
    {
      company: "شرکت 6",
      position: "فرانت اند دولوپر",
      duration: "1402 - 1403",
    },
  ],
};

// education data
const education = {
  icon: "../../assets/resume/cap.svg",
  title: "تحصیلات من",
  description:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان",
  items: [
    {
      institution: "دوره های آنلاین یودمی",
      degree: "بوت کمپ فرانت اند دولوپر",
      duration: "1400 - 1401",
    },
    {
      institution: "دوره های آنلاین یوتوب",
      degree: "بوت کمپ فرانت اند دولوپر",
      duration: "1401 - 1402",
    },
    {
      institution: "دوره های آنلاین",
      degree: "برنامه نویسی وب",
      duration: "1402 - 1403",
    },
    {
      institution: "موسسه فنی تهران",
      degree: "بوت کمپ فرانت اند دولوپر",
      duration: "1402 - 1403",
    },
    {
      institution: "دوره های آنلاین",
      degree: "بوت کمپ فرانت اند دولوپر",
      duration: "1400 - 1403",
    },
    {
      institution: "دوره های آنلاین",
      degree: "بوت کمپ فرانت اند دولوپر",
      duration: "1400 - 1403",
    },
  ],
};

// skills data
const skills = {
  title: "توانایی های من",
  description:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان",
  skillList: [
    { icon: <FaHtml5 />, name: "html 5" },
    { icon: <FaCss3 />, name: "css 3" },
    { icon: <FaJs />, name: "javascript" },
    { icon: <FaReact />, name: "react.js" },
    { icon: <SiNextdotjs />, name: "next.js" },
    { icon: <SiTailwindcss />, name: "tailwind.css" },
    { icon: <FaNodeJs />, name: "node.js" },
    { icon: <FaFigma />, name: "figma" },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import {motion} from "framer-motion"


const Resume = () => {
  return <div>resume page</div>;
};

export default Resume;
