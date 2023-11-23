export type ReviewData = {
  username: string;
  facebookID: string;
  linkedinID: string;
  XID: string;
  website: { name: string; href: string };
  rating: 0 | 1 | 2 | 3 | 4 | 5;
  description: string;
};

export const reviewData: ReviewData[] = [
  {
    username: "Sarah Thompson",
    facebookID: "https://www.facebook.com/",
    linkedinID: "https://www.linkedin.com/",
    XID: "https://twitter.com/",
    website: {
      name: "Nextjs",
      href: "https://nextjs.org/",
    },
    rating: 5,
    description:
      "Jeffery Cannon is an incredibly talented web designer. His attention to detail and creative flair are unmatched. He took my website from ordinary to extraordinary, capturing the essence of my brand perfectly. Working with Jeffery was a breeze, as he listened to my needs and provided expert guidance throughout the design process. I highly recommend Jeffery for anyone looking to elevate their online presence.",
  },
  {
    username: "Sarah Thompson",
    facebookID: "https://www.facebook.com/",
    linkedinID: "https://www.linkedin.com/",
    XID: "https://twitter.com/",
    website: {
      name: "Nextjs",
      href: "https://nextjs.org/",
    },
    rating: 5,
    description:
      "Jeffery Cannon is an incredibly talented web designer. His attention to detail and creative flair are unmatched. He took my website from ordinary to extraordinary, capturing the essence of my brand perfectly. Working with Jeffery was a breeze, as he listened to my needs and provided expert guidance throughout the design process. I highly recommend Jeffery for anyone looking to elevate their online presence.",
  },
  {
    username: "Alex Reynolds",
    facebookID: "https://www.facebook.com/",
    linkedinID: "https://www.linkedin.com/in/alexreynolds/",
    XID: "https://twitter.com/",
    website: {
      name: "Vue.js",
      href: "https://vuejs.org/",
    },
    rating: 5,
    description:
      "Alex Reynolds is a skilled software developer with a keen eye for design. He revamped my website with a modern touch and optimized performance. Collaborating with Alex was a pleasure; his expertise and professionalism are commendable. I highly endorse Alex for anyone seeking a seamless web development experience.",
  },
  {
    username: "Michael Evans",
    facebookID: "https://www.facebook.com/",
    linkedinID: "https://www.linkedin.com/in/michaelevans/",
    XID: "https://twitter.com/",
    website: {
      name: "React",
      href: "https://reactjs.org/",
    },
    rating: 4,
    description:
      "Michael Evans is a top-notch web developer who brought my website vision to life. His technical prowess and dedication to perfection are evident in the outstanding results. Michael was responsive to my ideas and provided valuable insights throughout the project. I highly recommend Michael for anyone seeking a dynamic and responsive website.",
  },
  {
    username: "Emily Walker",
    facebookID: "https://www.facebook.com/",
    linkedinID: "https://www.linkedin.com/in/emilywalker/",
    XID: "https://twitter.com/",
    website: {
      name: "Angular",
      href: "https://angular.io/",
    },
    rating: 3,
    description:
      "Emily Walker is a talented web designer who transformed my website into a visually stunning masterpiece. Her creative approach and attention to detail are unmatched. Emily was easy to work with, always incorporating my feedback and delivering results beyond expectations. I highly endorse Emily for anyone in need of a unique and captivating web presence.",
  },
  {
    username: "Daniel Garcia",
    facebookID: "https://www.facebook.com/",
    linkedinID: "https://www.linkedin.com/in/danielgarcia/",
    XID: "https://twitter.com/",
    website: {
      name: "Django",
      href: "https://www.djangoproject.com/",
    },
    rating: 5,
    description:
      "Daniel Garcia is an exceptional web developer who took my website to new heights. His technical skills and problem-solving abilities are remarkable. Working with Daniel was a smooth and collaborative experience; he understood my requirements and delivered a website that exceeded my expectations. I highly recommend Daniel for anyone seeking a reliable and skilled web developer.",
  },
  {
    username: "Olivia Foster",
    facebookID: "https://www.facebook.com/",
    linkedinID: "https://www.linkedin.com/in/oliviafoster/",
    XID: "https://twitter.com/",
    website: {
      name: "Svelte",
      href: "https://svelte.dev/",
    },
    rating: 4,
    description:
      "Olivia Foster is a creative genius in the world of web design. She brought a fresh and innovative perspective to my website, making it stand out from the crowd. Olivia's professionalism and commitment to quality were evident throughout the project. Working with her was a pleasure, and I highly recommend Olivia for anyone looking to elevate their online presence with a touch of uniqueness.",
  },

  {
    username: "Sarah Thompson",
    facebookID: "https://www.facebook.com/",
    linkedinID: "https://www.linkedin.com/",
    XID: "https://twitter.com/",
    website: {
      name: "Nextjs",
      href: "https://nextjs.org/",
    },
    rating: 5,
    description:
      "Jeffery Cannon is an incredibly talented web designer. His attention to detail and creative flair are unmatched. He took my website from ordinary to extraordinary, capturing the essence of my brand perfectly. Working with Jeffery was a breeze, as he listened to my needs and provided expert guidance throughout the design process. I highly recommend Jeffery for anyone looking to elevate their online presence.",
  },
  {
    username: "Alex Reynolds",
    facebookID: "https://www.facebook.com/",
    linkedinID: "https://www.linkedin.com/in/alexreynolds/",
    XID: "https://twitter.com/",
    website: {
      name: "Vue.js",
      href: "https://vuejs.org/",
    },
    rating: 5,
    description:
      "Alex Reynolds is a skilled software developer with a keen eye for design. He revamped my website with a modern touch and optimized performance. Collaborating with Alex was a pleasure; his expertise and professionalism are commendable. I highly endorse Alex for anyone seeking a seamless web development experience.",
  },
  {
    username: "Michael Evans",
    facebookID: "https://www.facebook.com/",
    linkedinID: "https://www.linkedin.com/in/michaelevans/",
    XID: "https://twitter.com/",
    website: {
      name: "React",
      href: "https://reactjs.org/",
    },
    rating: 4,
    description:
      "Michael Evans is a top-notch web developer who brought my website vision to life. His technical prowess and dedication to perfection are evident in the outstanding results. Michael was responsive to my ideas and provided valuable insights throughout the project. I highly recommend Michael for anyone seeking a dynamic and responsive website.",
  },
  {
    username: "Emily Walker",
    facebookID: "https://www.facebook.com/",
    linkedinID: "https://www.linkedin.com/in/emilywalker/",
    XID: "https://twitter.com/",
    website: {
      name: "Angular",
      href: "https://angular.io/",
    },
    rating: 3,
    description:
      "Emily Walker is a talented web designer who transformed my website into a visually stunning masterpiece. Her creative approach and attention to detail are unmatched. Emily was easy to work with, always incorporating my feedback and delivering results beyond expectations. I highly endorse Emily for anyone in need of a unique and captivating web presence.",
  },
  {
    username: "Daniel Garcia",
    facebookID: "https://www.facebook.com/",
    linkedinID: "https://www.linkedin.com/in/danielgarcia/",
    XID: "https://twitter.com/",
    website: {
      name: "Django",
      href: "https://www.djangoproject.com/",
    },
    rating: 5,
    description:
      "Daniel Garcia is an exceptional web developer who took my website to new heights. His technical skills and problem-solving abilities are remarkable. Working with Daniel was a smooth and collaborative experience; he understood my requirements and delivered a website that exceeded my expectations. I highly recommend Daniel for anyone seeking a reliable and skilled web developer.",
  },
  {
    username: "Olivia Foster",
    facebookID: "https://www.facebook.com/",
    linkedinID: "https://www.linkedin.com/in/oliviafoster/",
    XID: "https://twitter.com/",
    website: {
      name: "Svelte",
      href: "https://svelte.dev/",
    },
    rating: 4,
    description:
      "Olivia Foster is a creative genius in the world of web design. She brought a fresh and innovative perspective to my website, making it stand out from the crowd. Olivia's professionalism and commitment to quality were evident throughout the project. Working with her was a pleasure, and I highly recommend Olivia for anyone looking to elevate their online presence with a touch of uniqueness.",
  },
  {
    username: "Sophie Turner",
    facebookID: "https://www.facebook.com/",
    linkedinID: "https://www.linkedin.com/in/sophieturner/",
    XID: "https://twitter.com/",
    website: {
      name: "Laravel",
      href: "https://laravel.com/",
    },
    rating: 4,
    description:
      "Sophie Turner is an outstanding web developer with a keen eye for user experience. She enhanced my website's functionality and design, providing a seamless experience for visitors. Sophie's collaborative approach and attention to detail make her a valuable asset for any web development project. I highly recommend Sophie for her expertise and professionalism.",
  },
  {
    username: "Lucas Rodriguez",
    facebookID: "https://www.facebook.com/",
    linkedinID: "https://www.linkedin.com/in/lucasrodriguez/",
    XID: "https://twitter.com/",
    website: {
      name: "Express.js",
      href: "https://expressjs.com/",
    },
    rating: 4,
    description:
      "Lucas Rodriguez is a skilled web developer who brought innovation and efficiency to my website. His expertise in Express.js and backend development ensured a robust and scalable solution. Lucas was communicative and receptive to my ideas, making the collaboration a smooth and enjoyable experience. I highly recommend Lucas for anyone in need of a talented web developer.",
  },
  {
    username: "Emma White",
    facebookID: "https://www.facebook.com/",
    linkedinID: "https://www.linkedin.com/in/emmawhite/",
    XID: "https://twitter.com/",
    website: {
      name: "Flask",
      href: "https://flask.palletsprojects.com/",
    },
    rating: 3,
    description:
      "Emma White is a creative web designer who added a touch of elegance to my website. Her design choices and attention to user experience made my site visually appealing and easy to navigate. Emma was receptive to feedback and incorporated changes promptly. I highly recommend Emma for her creativity and commitment to delivering exceptional design.",
  },
  {
    username: "Nathan Miller",
    facebookID: "https://www.facebook.com/",
    linkedinID: "https://www.linkedin.com/in/nathanmiller/",
    XID: "https://twitter.com/",
    website: {
      name: "Spring Boot",
      href: "https://spring.io/projects/spring-boot",
    },
    rating: 5,
    description:
      "Nathan Miller is an exceptional web developer specializing in Spring Boot. He transformed my website, enhancing its performance and security. Nathan's dedication to quality and problem-solving skills were evident throughout the projects.",
  },
];
