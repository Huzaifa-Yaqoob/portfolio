import { type IconType } from "react-icons";
import {
  HiMiniSparkles,
  HiChartBar,
  HiChatBubbleLeftRight,
} from "react-icons/hi2";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { GiBoltShield } from "react-icons/gi";
import { MdPublishedWithChanges } from "react-icons/md";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { type Header, portfolioHeader, contactMeHeader } from "./headingData";
import { BiSolidCommentCheck } from "react-icons/bi";
import { GiStairsGoal } from "react-icons/gi";
import { MdOutlineGolfCourse } from "react-icons/md";

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
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/huzaifa-yaqoob-67b9a0242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/Huzaifa-Yaqoob",
    icon: FaGithub,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/huzaifa_next_dev?igsh=eGQ2dWQ5ZDl1NHN1",
    icon: FaInstagram,
  },
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
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=muhammadhuzaifayaqoob3@gmail.com&su=Portfolio%20Inquiry&body=Hello,%20I%20am%20interested%20in%20learning%20more%20about%20your%20work.",
    info: "muhammadhuzaifayaqoob3@gmail.com",
    icon: HiMail,
  },
  {
    heading: "Give Me a Call on",
    href: "https://wa.me/message/3ID6XTAYGOFNN1",
    info: "+92 317 0422046",
    icon: HiPhone,
  },
  {
    heading: "Location",
    href: "https://www.google.com/maps/place/Shahdara,+Lahore,+Punjab,+Pakistan/@31.624365,74.2412519,13.01z/data=!4m6!3m5!1s0x39191c47be50fcdb:0x3cf241986ed44db5!8m2!3d31.6211127!4d74.2823662!16s%2Fm%2F02z6qgb?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D",
    info: "Shahdara Town, Lahore, Punjab, Pakistan",
    icon: HiLocationMarker,
  },
];

// Achievement Info use in hero section at home page and about page
export const achievementInfo: AchievementInfo[] = [
  {
    quantity: "03",
    title: "Completed Projects",
  },
  {
    quantity: "01",
    title: "Ongoing Projects",
  },
  {
    quantity: "01",
    title: "Years of Experience",
  },
];

// Intro section data for portfolio page
export const portfolioInfo: Intro = {
  header: portfolioHeader,
  MainIcon: HiMiniSparkles,
  info: [
    {
      text: achievementInfo[0].quantity.toString() + achievementInfo[0].title,
      icon: MdOutlineGolfCourse,
    },
    {
      text: achievementInfo[1].quantity.toString() + achievementInfo[1].title,
      icon: GiStairsGoal,
    },
    {
      text: achievementInfo[2].quantity.toString() + achievementInfo[2].title,
      icon: HiChartBar,
    },
  ],
};

export const contactMeInfo: Intro = {
  header: contactMeHeader,
  MainIcon: HiChatBubbleLeftRight,
  info: [
    { text: "Reliability", icon: GiBoltShield },
    { text: "Adaptability", icon: MdPublishedWithChanges },
    { text: "Strong Communication Skills", icon: BiSolidCommentCheck },
  ],
};
