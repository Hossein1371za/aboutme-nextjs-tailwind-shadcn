import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import NavMobile from "./NavMobile";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto">
        <Link href="/">
          <h1 className="text-4xl font-semibold font-maghreb">
            حسین <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex">
          <Nav />
          <Link href="/contact">
            <Button>ارتباط با من</Button>
          </Link>
        </div>
        {/* mobile nav */}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
