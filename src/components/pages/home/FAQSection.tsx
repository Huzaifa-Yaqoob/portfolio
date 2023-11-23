import SubHeading from "../../common/SubHeading";
import { FAQHeader } from "@/data/headingData";

export default function FAQSection() {
  return (
    <section className="my-container space-y-8">
      <SubHeading header={FAQHeader} />
    </section>
  );
}
