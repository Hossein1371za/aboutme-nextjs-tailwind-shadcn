"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "خانه", path: "/" },
  { name: "خدمات", path: "/services" },
  { name: "رزومه", path: "/resume" },
  { name: "کارها", path: "/work" },
  { name: "ارتباط با من", path: "/contact" },
];

const NavMobile = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent>content</SheetContent>
    </Sheet>
  );
};

export default NavMobile;
