import SWorksSection from "./addons/SWorksSection";
import LWorksSection from "./addons/LWorksSection";

export default function WorksSection() {
  return (
    <section className="my-container">
      {/* Section for large devices */}
      <LWorksSection />
      {/* section for small devices */}
      <SWorksSection />
    </section>
  );
}
