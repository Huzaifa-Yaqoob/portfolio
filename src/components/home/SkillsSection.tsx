import {
  HiOutlineRectangleStack,
  HiMiniDevicePhoneMobile,
  HiOutlineUsers,
  HiCursorArrowRays,
  HiWindow,
  HiCursorArrowRipple,
} from "react-icons/hi2";
import GlowingButton from "../common/GlowingButton";

const skillData = [
  {
    title: "Web Design Principles",
    description:
      "Proficiency in the fundamental principles of design, such as layout, color theory, typography, and visual hierarchy.",
    icon: HiOutlineRectangleStack,
  },
  {
    title: "User Interface - UI Design",
    description:
      "Ability to create visually appealing and intuitive user interfaces that enhance user experience and engagement.",
    icon: HiCursorArrowRays,
  },
  {
    title: "User Experience - UX Design",
    description:
      "Understanding of user behavior and psychology to design seamless and enjoyable user experiences that meet user needs and goals.",
    icon: HiOutlineUsers,
  },
  {
    title: "Responsive Web Design",
    description:
      "Knowledge of designing websites that adapt and function seamlessly across various devices and screen sizes.",
    icon: HiWindow,
  },
  {
    title: "Wireframing and Prototyping",
    description:
      "Ability to create wireframes and interactive prototypes to visualize and test website layouts and functionality.",
    icon: HiCursorArrowRipple,
  },
  {
    title: "Mobile-Friendly Optimization",
    description:
      "Proficiency in the fundamental principles of design, such as layout, color theory, typography, and visual hierarchy.",
    icon: HiMiniDevicePhoneMobile,
  },
];

export default function SkillsSection() {
  return (
    <section className="my-container space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-5xl text-greyShades-g20 font-semibold">
          Creative Skills
        </h1>
        <p>
          As a web designer, I possess a diverse set of skills and expertise to
          bring your web design visions to life
        </p>
      </div>
      <div className="grid grid-flow-row grid-cols-1 md:grid-flow-row md:grid-cols-3 md:grid-rows-2 gap-4">
        {skillData.map((skill, index) => (
          <div
            key={index}
            className="text-3xl flex flex-col justify-center items-center p-8 gap-4 bg-peachShades-p96 rounded-lg"
          >
            <GlowingButton Icon={skill.icon} />
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-greyShades-g20">
                {skill.title}
              </h3>
              <p className="text-base">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
