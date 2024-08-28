export type CarousalData = {
  title: string;
  images: string[];
};

// For home page My Works Section
export const carousalData: CarousalData[] = [
  {
    title: "Smart Business Directory",
    images: [
      "/assets/work/home.png",
      "/assets/work/about.png",
      "/assets/work/profile.png",
      "/assets/work/categories.png",
    ],
  },
  {
    title: "My Portfolio",
    images: [
      "/assets/work/portfolio/home.png",
      "/assets/work/portfolio/about.png",
      "/assets/work/portfolio/portfolioo.png",
      "/assets/work/portfolio/contact.png",
    ],
  },
  {
    title: "My First Project",
    images: [
      "/assets/work/first-project/home.png",
      "/assets/work/first-project/home2.png",
      "/assets/work/first-project/homeBlack.png",
      "/assets/work/first-project/form.png",
    ],
  },
];
