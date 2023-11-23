import { HiStar } from "react-icons/hi";

interface RatingStarsProps {
  rating: number;
}

export default function RatingStars({ rating }: RatingStarsProps) {
  const stars: React.ReactElement | any = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      <HiStar
        key={i}
        className={i < rating ? "text-primary" : "text-greyShades-g80"}
      />
    );
  }
  return <div className="flex gap-1 items-center">{stars}</div>;
}
