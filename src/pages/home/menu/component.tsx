import { ReactSVG } from "react-svg";
import Widget from "../../../components/widget";
import { Link } from "react-router-dom";

interface MenuProps {
  className?: string;
}

interface MenuLinkProps {
  icon: string;
  children: React.ReactNode;
  to: string;
}

const MenuLink = ({ icon, children, to }: MenuLinkProps) => {
  return (
    <Link
      to={to}
      className="lowercase text-sm font-semibold flex flex-col items-center justify-center hover:scale-90 transition-transform duration-300 ease-in-out cursor-pointer"
    >
      <ReactSVG src={`/svgs/${icon}.svg`} />
      {children}
    </Link>
  );
};

const Menu = ({ className = "" }: MenuProps) => {
  return (
    <Widget
      className={`flex flex-col justify-between h-full gap-8 ${className}`}
    >
      <a className="block hover:scale-90 transition-transform duration-300 ease-in-out cursor-pointer">
        <img src="/avatar.png" alt="Avatar" className="rounded-full" />
      </a>
      <nav className="flex flex-col gap-5">
        <MenuLink icon="weather" to="/">
          Weather
        </MenuLink>
        <MenuLink icon="explore" to="explore">
          Explore
        </MenuLink>
        <MenuLink icon="location" to="location">
          Location
        </MenuLink>
        <MenuLink icon="settings" to="settings">
          Settings
        </MenuLink>
      </nav>
    </Widget>
  );
};

export default Menu;
