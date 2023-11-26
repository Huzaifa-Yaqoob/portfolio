import { HiMiniExclamationTriangle } from "react-icons/hi2";
import GlowingButton from "@/components/common/GlowingButton";

export default function NotFound() {
  return (
    <div className="my-container flex justify-center items-center mt-32">
      <GlowingButton
        Icon={HiMiniExclamationTriangle}
        size="text-5xl"
        color="bg-otherColors-red"
      />
      <div className="text-5xl text-otherColors-red ml-4">
        404 Page Not Found
      </div>
    </div>
  );
}
