import { ReactSVG } from "react-svg";
import Widget from "../widget";

interface MenuProps {
  className?: string;
}

interface MenuLinkProps {
  icon: string;
  children: React.ReactNode;
  href?: string;
}

const MenuLink = ({ icon, children, href }: MenuLinkProps) => {
  return (
    <a
      href={href}
      className="lowercase text-sm font-semibold flex flex-col items-center justify-center"
    >
      <ReactSVG src={`/svgs/${icon}.svg`} />
      {children}
    </a>
  );
};

const Menu = ({ className = "" }: MenuProps) => {
  return (
    <Widget
      className={`flex flex-col justify-between h-full gap-8 ${className}`}
    >
      <img src="/avatar.png" alt="Avatar" />
      <nav className="flex flex-col gap-5">
        <MenuLink icon="weather">Weather</MenuLink>
        <MenuLink icon="explore">Explore</MenuLink>
        <MenuLink icon="location">Location</MenuLink>
        <MenuLink icon="settings">Settings</MenuLink>
      </nav>
    </Widget>
  );
};

export default Menu;
