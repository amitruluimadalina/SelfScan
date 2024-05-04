import { Link } from "react-router-dom";
import { navigationItems } from "../constants/navigation";
import { Bars3Icon } from "@heroicons/react/24/outline";
import logo from "../../public/assets/logo/logo.png";
import { appName } from "../constants/info";

type NavbarProps = {
  onToggleMobileMenu: () => void;
};

export default function Navbar({ onToggleMobileMenu }: NavbarProps) {
  return (
    <nav
      className="flex items-center justify-between p-6 lg:px-8 h-[10vh]"
      aria-label="Navigation"
    >
      <div className="flex lg:flex-1 items-center">
        <img src={logo} alt="Logo" className="h-14 w-auto" />
        <span className="font-semibold text-gray-900 ml-2">{appName}</span>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={onToggleMobileMenu}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigationItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700 ml-4"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
