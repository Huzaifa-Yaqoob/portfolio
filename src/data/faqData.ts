export type FAQData = {
  question: string;
  answer: string;
};

export const faqData: FAQData[] = [
  {
    question: "What technologies and languages are you proficient in?",
    answer:
      "I am proficient in a wide range of technologies including HTML, CSS, JavaScript, and its frameworks like React and Node.js. For backend development, I have experience with Express.js and databases such as MongoDB. I also use tools like Git for version control and am comfortable with RESTful API integration.",
  },
  {
    question:
      "How do you ensure the security of the web applications you develop?",
    answer:
      "Security is a top priority in my development process. I implement best practices such as input validation, proper authentication, encryption of sensitive data, and protection against common vulnerabilities like SQL injection and cross-site scripting (XSS). I also stay updated with the latest security trends and updates to ensure the applications I build are well-protected.",
  },
  {
    question:
      "How do you handle version control and collaboration with other developers?",
    answer:
      "I use Git for version control, which allows me to track changes, manage branches, and collaborate efficiently with other developers. I follow best practices such as writing clear commit messages, creating feature branches for specific tasks, and regularly merging changes to avoid conflicts. I also participate in code reviews to maintain code quality and share knowledge within the team.",
  },
  {
    question: "What is your approach to optimizing website performance?",
    answer:
      "I optimize website performance by minimizing HTTP requests, compressing images and files, implementing lazy loading for resources, and using techniques like caching and code splitting. On the server side, I ensure efficient database queries and optimize server response times. I also use tools like Lighthouse and WebPageTest to analyze performance and identify areas for improvement.",
  },
];
