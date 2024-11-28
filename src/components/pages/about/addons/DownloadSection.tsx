"use client";

import { Button } from "@/components/ui/button";
import { RevealViaScale } from "@/components/animations/Reveal";

export default function DownloadSection() {
  return (
    <div className="flex gap-4">
      <RevealViaScale delay={0.5}>
        <Button asChild>
          <a href="/next-dev-resume.pdf" download>
            Get My Resume
          </a>
        </Button>
      </RevealViaScale>
    </div>
  );
}
