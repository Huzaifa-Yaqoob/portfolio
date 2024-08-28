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
    title: "Ready for the Market",
    when: "Now",
    color: "bg-otherColors-purple",
    from: "from-otherColors-purpleLight",
    to: "to-otherColors-purple",
    description:
      "I am now ready to enter the market and showcase my skills in web development. With hands-on experience in the MERN stack and a solid foundation in full-stack development, I am prepared to take on new challenges, contribute effectively to projects, and gain valuable industry experience.",
  },
  {
    title: "A Collaborative Partnership",
    when: "2023",
    color: "bg-otherColors-green",
    from: "from-otherColors-greenLight",
    to: "to-otherColors-green",
    description:
      "I worked on several projects using the MERN stack & NextJS to hone my skills in full-stack web development. These projects allowed me to apply my knowledge in MongoDB, Express.js, React, and Node.js, helping me to refine my abilities in building dynamic and responsive web applications.",
  },
  {
    title: "Mastering Web Development with the MERN Stack",
    when: "2022",
    color: "bg-otherColors-yellow",
    from: "from-otherColors-yellowLight",
    to: "to-otherColors-yellow",
    description:
      "This year, I learned web development and practiced the MERN stack, gaining proficiency in MongoDB, Express.js, React, and Node.js for building dynamic full-stack applications",
  },
  {
    title: "Grooming and Learning",
    when: "2021",
    color: "bg-otherColors-orange",
    from: "from-otherColors-orangeLight",
    to: "to-otherColors-orange",
    description:
      "During the pandemic, I learned the basics of programming in C and C++ and created several small projects. This experience helped me grasp foundational coding concepts and fueled my interest in software development.",
  },
  {
    title: "My Bachelor Life",
    when: "2020",
    color: "bg-otherColors-pink",
    from: "from-otherColors-pinkLight",
    to: "to-otherColors-pink",
    description:
      "I joined Government Islamia Graduate College Civil Lines Lahore to pursue a BS in Information Technology, a program that I am set to complete in 2024. This degree has allowed me to deepen my understanding of various IT concepts and technologies, equipping me with the skills needed to thrive in the rapidly evolving tech industry.",
  },
  {
    title: "My Intermediate",
    when: "2020",
    color: "bg-otherColors-blue",
    from: "from-otherColors-blueLight",
    to: "to-otherColors-blue",
    description:
      "I completed my FSC (Pre-Engineering) from Government Islamia Graduate College Civil Lines Lahore, graduating with a score of 79.55%. This program provided me with a solid grounding in engineering principles and technical skills, which have been essential in my continued academic and professional development.",
  },
];
