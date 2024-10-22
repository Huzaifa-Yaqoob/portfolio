export type CarousalData = {
  title: string;
  description: string;
  gitLink: string;
  images: string[];
};

// For home page My Works Section
export const carousalData: CarousalData[] = [
  {
    title: "Smart Business Directory",
    description:
      "MERN + TypeScript for frontend/backend development; Python Django AI for smart business counseling insights.",
    gitLink: "https://github.com/GICCLBS-IT-2020-2024/Smart-Business-Directory",
    images: [
      "/assets/work/home.png",
      "/assets/work/about.png",
      "/assets/work/profile.png",
      "/assets/work/categories.png",
    ],
  },
  {
    title: "My Portfolio",
    description:
      "Built a portfolio using Next.js, TypeScript, and Tailwind CSS, seamlessly converting Figma designs to code.",
    gitLink: "https://github.com/Huzaifa-Yaqoob/portfolio",
    images: [
      "/assets/work/portfolio/home.png",
      "/assets/work/portfolio/about.png",
      "/assets/work/portfolio/portfolioo.png",
      "/assets/work/portfolio/contact.png",
    ],
  },
  {
    title: "My First Project",
    description:
      "Developed a blog website with MERN + Vite, TypeScript, and Tailwind CSS; some features are incomplete.",
    gitLink: "https://github.com/Huzaifa-Yaqoob/blogoo",
    images: [
      "/assets/work/first-project/home.png",
      "/assets/work/first-project/home2.png",
      "/assets/work/first-project/homeBlack.png",
      "/assets/work/first-project/form.png",
    ],
  },
  {
    title: "Inspirisia",
    description:
      "Converted Figma design to a one-page demo site using MERN + Vite and Tailwind CSS for the frontend.",
    gitLink: "https://github.com/Huzaifa-Yaqoob/inspirisa",
    images: [
      "/assets/work/inspirisia/hero.png",
      "/assets/work/inspirisia/features.png",
      "/assets/work/inspirisia/men_help.png",
      "/assets/work/inspirisia/community.png",
    ],
  },
  {
    title: "IT Company Portfolio",
    description:
      "Converted a Figma design into a demo IT company website only using HTML, Tailwind CSS, and JavaScript.",
    gitLink: "https://github.com/Huzaifa-Yaqoob/IT-Portfolio",
    images: [
      "/assets/work/it-portfolio/hero.png",
      "/assets/work/it-portfolio/testimonials.png",
      "/assets/work/it-portfolio/talk.png",
      "/assets/work/it-portfolio/process.png",
    ],
  },
];
