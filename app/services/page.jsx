"use client"

import {BsArrowDownLeft} from "react-icons/bs"
import Link from "next/link"

const services = [
  {
    num:"01",
    title:"توسعه دهنده ی وب",
    description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان",
    href:""
  },
  {
    num:"02",
    title:"طراحی زابط کاربری",
    description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان",
    href:""
  },
  {
    num:"03",
    title:"طراحی لوگو",
    description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان",
    href:""
  },
  {
    num:"04",
    title:"سئو",
    description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان",
    href:""
  },
]

import { motion } from "framer-motion"

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
        initial={{opacity:0}}
        animate={{
          opacity:1,
          transition:{delay:2.4,duration:0.4,ease:"easeIn"}
        }}
        >
          {services.map((service)=>(
            <div key={service.num}>
              <div>
                <div>{service.num}</div>
                <Link href={service.href}>
                  <BsArrowDownLeft />
                </Link>
              </div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services