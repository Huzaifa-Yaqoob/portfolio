import { HiMiniExclamationTriangle } from "react-icons/hi2";
import GlowingButton from "@/components/common/GlowingButton";
import UrlNotFound from "@/components/pages/error/UrlNotFound";

export default function NotFound() {
  return (
    <div className="my-container flex flex-col gap-8 items-center justify-center">
      <div className="flex flex-col md:flex-row justify-center items-center mt-32 gap-4">
        <GlowingButton
          Icon={HiMiniExclamationTriangle}
          size="text-5xl"
          color="bg-otherColors-red"
        />
        <div className="text-5xl text-otherColors-red md:text-start text-center font-semibold">
          404 Page Not Found
        </div>
      </div>
      <UrlNotFound />
    </div>
  );
}
