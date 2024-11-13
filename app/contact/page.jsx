"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "شماره تماس",
    description: "(+98)123456789",
  },
  {
    icon: <FaEnvelope />,
    title: "ایمیل",
    description: "abc@gamil.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "آدرس",
    description: "تهران,میرداماد....",
  },
];

const contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-6xl text-accent font-maghreb">
                شروع کنیم با هم
              </h3>
              <p className="text-white/60">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان استفاده از طراحان
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="نام..."/>
                <Input type="lastname" placeholder="نام خانوادگی..."/>
                <Input type="email" placeholder="ایمیل..."/>
                <Input type="phone" placeholder="شماره تماس..."/>
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="سرویس مورد نظر را انتخاب کنید"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>انتخاب خدمات</SelectLabel>
                    <SelectItem value="est">طراحی سایت</SelectItem>
                    <SelectItem value="cst">دیزاین ui/ux</SelectItem>
                    <SelectItem value="mst">طراحی لوگو</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className="h-[200px]" placeholder="پیام خو را اینجا بنوسید."/>
              <Button size="md" className="max-w-40">ارسال پیام</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            info
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default contact;
