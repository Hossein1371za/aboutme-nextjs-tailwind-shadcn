"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "خانه", path: "/" },
  { name: "خدمات", path: "/services" },
  { name: "رزومه", path: "/resume" },
  { name: "کارها", path: "/work" },
  { name: "ارتباط با من", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname()
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-accent border-b-2 "}font-medium hover:text-accent transition-all text-4xl`}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
  
export default Nav;
