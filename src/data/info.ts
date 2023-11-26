import { type IconType } from "react-icons";
import {
  HiMiniSparkles,
  HiChartBar,
  HiUserGroup,
  HiCheckBadge,
  HiChatBubbleLeftRight,
  HiBolt,
  HiClock,
} from "react-icons/hi2";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FiDribbble } from "react-icons/fi";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { type Header, portfolioHeader, contactMeHeader } from "./headingData";

export type AchievementInfo = {
  quantity: string;
  title: string;
};

export type Info = { text: string; icon: IconType };

export type Intro = {
  MainIcon: IconType;
  header: Header;
  info: Info[];
};

export type SocialLinks = {
  name: string;
  href: string;
  icon: IconType;
};

export const socialLinks: SocialLinks[] = [
  { name: "Linkedin", href: "/", icon: FaLinkedin },
  { name: "X", href: "/", icon: FaXTwitter },
  { name: "Dribbble", href: "/", icon: FiDribbble },
];

export type ContactInfo = {
  heading: string;
  info: string;
  href: string;
  icon: IconType;
};

export const contactInfo: ContactInfo[] = [
  {
    heading: "You can Email Me Here",
    href: "",
    info: "nextdev@gmail.com",
    icon: HiMail,
  },
  {
    heading: "Give Me a Call on",
    href: "",
    info: "+92 1234567899",
    icon: HiPhone,
  },
  {
    heading: "Location",
    href: "",
    info: "Somewhere in the World",
    icon: HiLocationMarker,
  },
];

// Achievement Info use in hero section at home page and about page
export const achievementInfo: AchievementInfo[] = [
  {
    quantity: "55",
    title: "Completed Projects",
  },
  {
    quantity: "20",
    title: "Happy Customers",
  },
  {
    quantity: "08",
    title: "Years of Experience",
  },
];

// Intro section data for portfolio page
export const portfolioInfo: Intro = {
  header: portfolioHeader,
  MainIcon: HiMiniSparkles,
  info: [
    {
      text:
        achievementInfo[0].quantity.toString() +
        "+ " +
        achievementInfo[0].title,
      icon: HiCheckBadge,
    },
    {
      text:
        achievementInfo[1].quantity.toString() +
        "+ " +
        achievementInfo[1].title,
      icon: HiUserGroup,
    },
    {
      text:
        achievementInfo[2].quantity.toString() +
        "+ " +
        achievementInfo[2].title,
      icon: HiChartBar,
    },
  ],
};

export const contactMeInfo: Intro = {
  header: contactMeHeader,
  MainIcon: HiChatBubbleLeftRight,
  info: [
    { text: "24 / 7 Assistance", icon: HiClock },
    { text: "Quick Change Resolutions", icon: HiBolt },
    { text: "Flexible Working hours", icon: HiMiniSparkles },
  ],
};
