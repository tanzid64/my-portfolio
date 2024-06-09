import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link to="/">
          <h1 className="text-4xl font-semibold">
            TH<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Desktop Nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link to="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        {/* Mobile Nav & hire me button */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
export default Header;
