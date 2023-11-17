import LinksBlock from "./LinksBlock";
import LinksPopover from "./LinksPopover";

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
    <nav className="border-b-[1px] my-container flex justify-between items-center py-2">
      <div className="text-primary font-semibold">Jeffery Cannon.</div>
      <div>
        <LinksBlock links={pageLinks} />
        <LinksPopover links={pageLinks} />
      </div>
    </nav>
  );
}
