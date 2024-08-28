import Link from "next/link";
import {
  RevealFromSides,
  RevealViaScale,
} from "@/components/animations/Reveal";
import { socialLinks, contactInfo } from "@/data/info";
import GlowingButton from "@/components/common/GlowingButton";
import MyContactsBox from "./MyContactsBox";

export default function MyContacts() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        {contactInfo.map((inf, index) => (
          <RevealFromSides
            side="left"
            delay={index + 1}
            key={index}
            classes="w-full"
          >
            <MyContactsBox
              heading={inf.heading}
              href={inf.href}
              info={inf.info}
            />
          </RevealFromSides>
        ))}
      </div>
      <div className="flex flex-col items-center md:items-start gap-4">
        <h1 className="text-center md:text-start">My Social Profiles</h1>
        <div className="flex gap-4 order-2 md:order-3">
          {socialLinks.map((link, index) => (
            <RevealViaScale key={index} delay={index + 4}>
              <a target="_blank" href={link.href}>
                <GlowingButton Icon={link.icon} size="text-xl" />
              </a>
            </RevealViaScale>
          ))}
        </div>
      </div>
    </div>
  );
}
