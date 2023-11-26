import Link from "next/link";
import { FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";
import SubHeading from "../../common/SubHeading";
import RatingStars from "@/components/common/RatingStars";
import { reviewHeader } from "@/data/headingData";
import Carousal from "@/components/common/carousals/Carousal";
import { reviewData } from "@/data/reviewData";

const classesForSocialLink =
  "text-primary border border-peachShades-p90 bg-transparent p-2 rounded";

export default function ReviewSection() {
  return (
    <section className="my-container hidden md:block space-y-8">
      <SubHeading header={reviewHeader} />
      <Carousal
        slideCount={reviewData.length}
        title={reviewData.length + " Reviews"}
      >
        {reviewData.map((review, index) => (
          <article
            key={index}
            className="space-y-4 p-8 bg-peachShades-p96 rounded block"
          >
            <div className="flex justify-between items-center">
              <div className="inline">
                <span>
                  <h2 className="font-semibold text-greyShades-g20">
                    {review.username}
                  </h2>
                  <Link
                    target="_blank"
                    href={review.website.href}
                    className="text-greyShades-g40 hover:underline underline-offset-4 w-fit"
                  >
                    {review.website.name}
                  </Link>
                </span>
              </div>
              <div className="flex gap-2">
                <Link href={review.linkedinID} className={classesForSocialLink}>
                  <FaLinkedin className="text-xl" />
                </Link>
                <Link href={review.XID} className={classesForSocialLink}>
                  <FaXTwitter className="text-xl" />
                </Link>
                <Link href={review.facebookID} className={classesForSocialLink}>
                  <FaFacebook className="text-xl" />
                </Link>
              </div>
            </div>
            <RatingStars rating={review.rating} />
            <div>{review.description}</div>
          </article>
        ))}
      </Carousal>
    </section>
  );
}
