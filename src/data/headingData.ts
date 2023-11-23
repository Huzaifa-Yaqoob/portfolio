import { Head } from "next/document";

export type Header = {
  heading: string;
  paragraph: string;
};

export const skillsHeader: Header = {
  heading: "Creative Skills",
  paragraph:
    "As a web designer, I possess a diverse set of skills and expertise to bring your web design visions to life",
};

export const benefitsHeader: Header = {
  heading: "Benefits",
  paragraph:
    "By choosing my web design service, you'll enjoy the following benefits",
};

export const worksHeader: Header = {
  heading: "My Works",
  paragraph: "Here's some of my works for my clients",
};

export const reviewHeader: Header = {
  heading: "What My Clients say About Me",
  paragraph:
    "Here's what some of my satisfied clients have to say about my work",
};

export const FAQHeader: Header = {
  heading: "Frequently Asked Questions ",
  paragraph: "Here are answers to some common questions",
};
