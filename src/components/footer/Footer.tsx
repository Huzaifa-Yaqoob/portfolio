import Link from "next/link";
import { socialLinks, contactInfo } from "@/data/info";
import { pageLinks } from "../navbar/Navbar";
import { Button } from "../ui/button";
import GlowingButton from "../common/GlowingButton";

export default function Footer() {
  return (
    <footer className="my-container border-t-[1px] space-y-4 ">
      <div className="flex flex-col md:flex-row gap-4 md:justify-between items-center">
        <div className="text-primary font-semibold order-1">Next_Dev</div>
        <div className="order-3 md:order-2 space-x-4">
          {pageLinks.map((link) => (
            <Button
              key={link.href}
              asChild
              variant="link"
              className="text-greyShades-g20 p-0"
              name={link.name}
            >
              <Link href={link.href} area-label={link.name}>
                {link.name}
              </Link>
            </Button>
          ))}
        </div>
        <div className="flex gap-4 order-2 md:order-3">
          {socialLinks.map((link) => (
            <Link
              target="_blank"
              key={link.name}
              href={link.href}
              area-label={link.name}
            >
              <GlowingButton Icon={link.icon} />
            </Link>
          ))}
        </div>
      </div>
      <div className="text-greyShades-g50 text-center">
        Copyright © 2023 Muhammad Huzaifa Yaqoob. All rights reserved. <br />
        The design is highly inspired from{" "}
        <Button variant="link" className="m-0 p-0">
          <a
            href="https://www.figma.com/community/file/1296111343561954166/portfolio-website-ui-template-design-in-light-theme-beige-free-editable-figma"
            target="_blank"
            rel="noopener noreferrer"
          >
            Praha | Produce UI
          </a>
        </Button>
      </div>
    </footer>
  );
}
