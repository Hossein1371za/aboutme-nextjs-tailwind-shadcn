"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpLeft, BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltioContent,
  TooltipProviderTooltipTrigger,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "فرانت اند",
    title: "پروژه اول",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "javascript" }],
    image: "/assets/work/thumb1.png",
    live:"",
    github: "",
  },
  {
    num: "02",
    category: "فرانت اند",
    title: "پروژه دوم",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "Typescript" },
    ],
    image: "/assets/work/thumb2.png",
    live:"",
    github: "",
  },
  {
    num: "03",
    category: "فرانت اند",
    title: "پروژه سوم",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان",
    stack: [{ name: "React.js" }, { name: "Bootstrap" }],
    image: "/assets/work/thumb3.png",
    live:"",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[490px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl font-extrabold font-maghreb text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[62px] font-maghreb font-bold text-white group-hover:text-accent transition-all duration-500">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {/* remove last , */}
                    {item.name} {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpLeft className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>پروژه های در حال انجام</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>ریپزیتوری گیت هاب</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">slider</div>
        </div>
      </div>
    </motion.div>
  );
};
export default Work;
