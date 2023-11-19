"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { type PageLinks } from "./Navbar";
import { Button } from "../ui/button";
import BookACallButton from "../common/BookACallButton";

interface LinksBlockProps {
  links: Array<PageLinks>;
}
export default function LinksBlock({
  links,
}: LinksBlockProps): React.ReactElement {
  const pathname = usePathname();
  return (
    <div className="hidden md:block sm:space-x-2 lg:space-x-4">
      {links.map((link) => (
        <Button
          key={link.href}
          asChild
          variant={link.href === pathname ? "default" : "ghost"}
          className={`transition-colors duration-500 ${
            link.href === pathname ? "shadow-sm" : ""
          }`}
        >
          <Link href={link.href} className="text-greyShades-g20">
            {link.name}
          </Link>
        </Button>
      ))}
      <BookACallButton />
    </div>
  );
}
