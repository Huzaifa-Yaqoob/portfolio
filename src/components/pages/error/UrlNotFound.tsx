"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function UrlNotFound() {
  const pathname = usePathname();
  return (
    <div className="text-center text-lg">
      This requested url{" "}
      <b className="text-otherColors-red bg-otherColors-redLight px-1 rounded">
        {pathname}
      </b>{" "}
      is not found.Go back to{" "}
      <Button variant={"link"} asChild className="p-0 m-0 text-lg">
        <Link href={"/"}>Home</Link>
      </Button>
    </div>
  );
}
