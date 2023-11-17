import { Button } from "../ui/button";
import { HiPhone } from "react-icons/hi";

export default function BookACallButton() {
  return (
    <Button className="space-x-1 shadow ">
      <HiPhone />
      <span>Book a call</span>
    </Button>
  );
}
