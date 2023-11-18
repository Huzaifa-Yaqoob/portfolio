"use client";

import { HiX, HiOutlineMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { type PageLinks } from "./Navbar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import BookACallButton from "../common/BookACallButton";

interface LinksBlockProps {
  links: Array<PageLinks>;
}

export default function LinksPopover({ links }: LinksBlockProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="block md:hidden">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <div
            className={`text-2xl p-1 rounded ${
              open ? "bg-greyShades-g60" : ""
            }`}
          >
            {open ? <HiX /> : <HiOutlineMenuAlt3 />}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-fit bg-peachShades-p85 border-none mt-2">
          <div className="space-y-4">
            <div className="flex flex-col items-start gap-2">
              {links.map((link) => (
                <Button
                  key={link.href}
                  asChild
                  variant={link.href === pathname ? "secondary" : "ghost"}
                  className={`w-full ${
                    link.href === pathname ? "shadow-sm" : ""
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <Link href={link.href} className="text-greyShades-g20">
                    {link.name}
                  </Link>
                </Button>
              ))}
            </div>
            <BookACallButton />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
