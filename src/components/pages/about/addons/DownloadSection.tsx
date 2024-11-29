"use client";

import { Button } from "@/components/ui/button";
import { RevealViaScale } from "@/components/animations/Reveal";

export default function DownloadSection() {
  return (
    <div className="flex gap-4 items-center justify-center md:justify-start">
      <RevealViaScale delay={0.5}>
        <Button asChild className="active:scale-95">
          <a href="/Huzaifa_Yaqoob.pdf" download>
            Get My Resume
          </a>
        </Button>
      </RevealViaScale>
    </div>
  );
}
