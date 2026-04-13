import { ArrowUpRight } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const navLinks = ["Home", "Services", "Work", "Process", "Pricing"];

const Navbar = () => (
  <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3 flex items-center justify-between">
    <img src={logoIcon} alt="Studio" className="h-12 w-12" />
    <div className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1">
      {navLinks.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className="px-3 py-2 text-sm font-medium text-foreground/90 font-body hover:text-foreground transition-colors"
        >
          {link}
        </a>
      ))}
      <button className="bg-foreground text-background rounded-full px-3.5 py-1.5 text-sm font-medium font-body flex items-center gap-1 ml-1">
        Get Started <ArrowUpRight className="h-3.5 w-3.5" />
      </button>
    </div>
    <div className="md:hidden" />
  </nav>
);

export default Navbar;
