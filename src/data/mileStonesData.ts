export type MileStones = {
  title: string;
  when: string;
  color: string;
  from: string; // use in gradient where it starts
  to: string; // use in gradient where it ends
  description: string;
};

export const mileStonesData: MileStones[] = [
  {
    title: "Expanding Horizons",
    when: "Now",
    color: "bg-otherColors-purple",
    from: "from-otherColors-purpleLight",
    to: "to-otherColors-purple",
    description:
      "Embarking on a journey of discovery and growth, exploring new opportunities and pushing boundaries to reach new heights in both personal and professional spheres.",
  },
  {
    title: "A Collaborative Partnership",
    when: "2022",
    color: "bg-otherColors-green",
    from: "from-otherColors-greenLight",
    to: "to-otherColors-green",
    description:
      "Forging strong partnerships and collaborations, building bridges between diverse talents and skill-sets to create a synergistic environment that fosters innovation and success.",
  },
  {
    title: "Entrepreneurial Pursuits",
    when: "2021",
    color: "bg-otherColors-yellow",
    from: "from-otherColors-yellowLight",
    to: "to-otherColors-yellow",
    description:
      "Venturing into the world of entrepreneurship, navigating challenges, and seizing opportunities to build and scale impactful ventures that contribute to the ever-evolving business landscape.",
  },
  {
    title: "A Corporate Adventure",
    when: "2020",
    color: "bg-otherColors-orange",
    from: "from-otherColors-orangeLight",
    to: "to-otherColors-orange",
    description:
      "Navigating the corporate landscape, embracing challenges, and learning valuable lessons that shape a resilient and adaptable professional ready to tackle the dynamic world of business.",
  },
  {
    title: "Learning and Growing",
    when: "2019",
    color: "bg-otherColors-pink",
    from: "from-otherColors-pinkLight",
    to: "to-otherColors-pink",
    description:
      "A year dedicated to continuous learning, personal development, and skill enhancement, laying the foundation for future successes by acquiring knowledge and honing valuable skills.",
  },
  {
    title: "A World of Possibilities In 2018",
    when: "2018",
    color: "bg-otherColors-blue",
    from: "from-otherColors-blueLight",
    to: "to-otherColors-blue",
    description:
      "Entering a world brimming with possibilities and opportunities, laying the groundwork for a transformative journey filled with exploration, discovery, and the pursuit of dreams and ambitions.",
  },
];
