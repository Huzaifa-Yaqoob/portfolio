"use client";

import { Button } from "@/components/ui/button";
import { RevealViaScale } from "@/components/animations/Reveal";

export default function DownloadSection() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/next-dev-resume.pdf";
    link.download = "next-dev-resume.pdf";
    link.click();
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/next-dev-resume.pdf";
    link.download = "next-dev-resume.pdf";
    link.click();
  };

  return (
    <div className="flex gap-4">
      <RevealViaScale delay={0.5}>
        <Button onClick={handleDownloadResume}>Get My Resume</Button>
      </RevealViaScale>
      <RevealViaScale>
        <Button onClick={handleDownloadCV}>Get My CV</Button>
      </RevealViaScale>
    </div>
  );
}
