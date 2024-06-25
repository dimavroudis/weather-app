import { Link } from "react-router-dom";
import Widget from "../../../components/widget";
import Weather from "../../../assets/svgs/weather.svg?react";
import Explore from "../../../assets/svgs/explore.svg?react";
import Location from "../../../assets/svgs/location.svg?react";
import Settings from "../../../assets/svgs/settings.svg?react";

interface MenuProps {
  className?: string;
}

interface MenuLinkProps {
  Icon: React.ElementType;
  children: React.ReactNode;
  to: string;
}

const MenuLink = ({ Icon, children, to }: MenuLinkProps) => {
  return (
    <Link
      to={to}
      className="lowercase text-sm font-semibold flex flex-col items-center justify-center hover:scale-90 transition-transform duration-300 ease-in-out"
    >
      <Icon />
      {children}
    </Link>
  );
};

const Menu = ({ className = "" }: MenuProps) => {
  return (
    <Widget
      className={`flex flex-col justify-between h-full gap-8 ${className}`}
    >
      <Link
        to="profile"
        className="block hover:scale-90 transition-transform duration-300 ease-in-out"
      >
        <img src="/avatar.png" alt="Avatar" className="rounded-full" />
      </Link>
      <nav className="flex flex-col gap-5">
        <MenuLink Icon={Weather} to="/">
          Weather
        </MenuLink>
        <MenuLink Icon={Explore} to="explore">
          Explore
        </MenuLink>
        <MenuLink Icon={Location} to="location">
          Location
        </MenuLink>
        <MenuLink Icon={Settings} to="settings">
          Settings
        </MenuLink>
      </nav>
    </Widget>
  );
};

export default Menu;
