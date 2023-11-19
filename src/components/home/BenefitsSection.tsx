const BenefitsData = [
  {
    title: "Customized Designs Tailored to Your Brand",
    description:
      "I understand the importance of creating a unique and memorable brand identity. By collaborating closely with you, I ensure that your website reflects your brand's personality, values, and objectives. The result is a customized design that sets you apart from the competition and resonates with your target audience.",
  },
  {
    title: "Creative Excellence that Captivates Visitors",
    description:
      "With a keen eye for aesthetics and a passion for creativity, I excel in designing visually stunning and engaging websites. By combining beautiful visuals, captivating typography, and strategic use of color, I create an immersive and impactful user experience. Your website will leave a lasting impression on visitors, enhancing your brand's credibility and professionalism.",
  },
  {
    title: "User-Centric Approach for Optimal Experience",
    description:
      "I prioritize user experience (UX) design, placing your visitors at the center of the design process. By conducting in-depth research and employing user testing techniques, I ensure that your website is intuitive, easy to navigate, and seamlessly guides users towards their goals. The result is a satisfying user journey that increases engagement and conversions.",
  },
  {
    title: "Mobile-Friendly Designs for Broad Accessability",
    description:
      "In today's mobile-dominated landscape, having a responsive website is crucial. I specialize in creating mobile-friendly designs that adapt flawlessly across different devices and screen sizes. Your website will look and perform beautifully, whether accessed from a desktop, smartphone, or tablet, ensuring that you reach and engage your audience effectively.",
  },
  {
    title: "Expertise in Cutting-Edge Technologies",
    description:
      "With a strong command of HTML, CSS, JavaScript, and other front-end technologies, I possess the technical skills to bring your design concepts to life. From seamless animations to interactive elements, I leverage the latest web technologies to enhance user engagement and create a dynamic user experience.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="my-container space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-semibold text-greyShades-g20">Benefits</h1>
        <p>
          By choosing my web design service, you'll enjoy the following benefits
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          {BenefitsData.slice(0, 2).map((benefit, index) => (
            <article key={index} className="p-8 bg-peachShades-p96 rounded-lg">
              <h3 className="text-2xl font-semibold text-greyShades-g20">
                {benefit.title}
              </h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          {BenefitsData.slice(2, 5).map((benefit, index) => (
            <article key={index} className="p-8 bg-peachShades-p96 rounded-lg">
              <h3 className="text-2xl font-semibold text-greyShades-g20">
                {benefit.title}
              </h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
