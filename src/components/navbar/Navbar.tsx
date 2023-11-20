import LinksBlock from "./LinksBlock";
import LinksPopover from "./LinksPopover";
import NavVisibility from "../animations/NavVisibility";

// pageLinks of this website and the interface of pageLinks
export type PageLinks = {
  name: string;
  href: string;
};
export const pageLinks: PageLinks[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Me",
    href: "/about-me",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Contact Me",
    href: "/contact-me",
  },
];

export default function Navbar(): React.ReactElement {
  return (
    <NavVisibility classes="bg-background border-b-[1px] my-container flex justify-between items-center sticky top-0 z-10">
      <div className="text-primary font-semibold">Jeffery Cannon.</div>
      <div>
        <LinksBlock links={pageLinks} />
        <LinksPopover links={pageLinks} />
      </div>
    </NavVisibility>
  );
}
