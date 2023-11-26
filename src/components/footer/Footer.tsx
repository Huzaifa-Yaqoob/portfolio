import Link from "next/link";
import { socialLinks, contactInfo } from "@/data/info";
import { pageLinks } from "../navbar/Navbar";
import { Button } from "../ui/button";
import GlowingButton from "../common/GlowingButton";

export default function Footer() {
  return (
    <footer className="my-container border-t-[1px] space-y-4 ">
      <div className="flex flex-col md:flex-row gap-4 md:justify-between items-center">
        <div className="text-primary font-semibold order-1">
          Jeffery Cannon.
        </div>
        <div className="order-3 md:order-2 space-x-4">
          {pageLinks.map((link) => (
            <Button
              key={link.href}
              asChild
              variant="link"
              className="text-greyShades-g20 p-0"
            >
              <Link href={link.href}>{link.name}</Link>
            </Button>
          ))}
        </div>
        <div className="flex gap-4 order-2 md:order-3">
          {socialLinks.map((link) => (
            <Link target="_blank" key={link.name} href={link.href}>
              <GlowingButton Icon={link.icon} />
            </Link>
          ))}
        </div>
      </div>
      <div className="hidden justify-center md:flex">
        <div className="p-2 flex gap-6 items-center border-[1px] rounded">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex gap-2 items-center">
              <item.icon className="text-primary" />
              <span className="">{item.info}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-greyShades-g50 text-center">
        Copyright © 2023 Jeffery Cannon. All rights reserved.
      </div>
    </footer>
  );
}
