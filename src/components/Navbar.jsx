import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link } from "react-router-dom";

const Navbar = ({
  onFeatureSectionScroll,
  onWorkFlowRef,
  onPricingRef,
  onTestimonialsRef,
}) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  const handlers = {
    Features: onFeatureSectionScroll,
    Workflow: onWorkFlowRef,
    Pricing: onPricingRef,
    Testimonials: onTestimonialsRef,
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </a>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map(({ title, label }, index) =>
              handlers[title] ? (
                <li key={index}>
                  <div onClick={handlers[title]} className="cursor-pointer">
                    {label}
                  </div>
                </li>
              ) : null
            )}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="/"
              className="py-2 px-3 border rounded-md hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-800 hover:scale-105 hover:duration-200"
            >
              Sign In
            </a>
            <a
              href="/"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="/"
                className="py-2 px-3 border rounded-md hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-800"
              >
                Sign In
              </a>
              <a
                href="/"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
