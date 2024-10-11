import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import NavMobile from "./NavMobile";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white font-maghreb">
      <div className="container mx-auto flex justify-between items-center">
        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="text-3xl">تماس با من</Button>
          </Link>
        </div>
        {/* mobile nav */}
        <div className="lg:hidden">
          <NavMobile />
        </div>
        <Link href="/">
          <h1 className="text-6xl font-semibold">
            حسین <span className="text-accent">.</span>
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
