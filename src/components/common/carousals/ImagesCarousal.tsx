"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { HiArrowUpRight } from "react-icons/hi2";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface WorksCarousalProps {
  images: string[];
}

export default function ImagesCarousal({ images }: WorksCarousalProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const slider = useRef<HTMLDivElement | null | any>(null);

  const goToSlide = (i: number) => {
    console.log(slider.current);
    if (slider.current) {
      slider.current.slickGoTo(i);
      setActiveSlide(i);
    }
  };

  var settings = {
    dragging: false,
    dots: false,
    infinite: true,
    speed: 500,
    swipeToSlide: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current: number) => setActiveSlide(current),
  };
  return (
    <div className="space-y-4">
      <Slider ref={slider} {...settings} draggable={false} swipeToSlide={false}>
        {images.map((image, index) => (
          <AspectRatio ratio={41 / 31} key={index}>
            <Image
              src={image}
              alt={index.toString()}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className="object-cover rounded-lg h-auto w-auto"
            />
            <Link
              href={"http://localhost:3000/" + image}
              target="_blank"
              className="absolute bottom-2 right-2 bg-peachShades-p96 rounded p-1 shadow"
            >
              <HiArrowUpRight />
            </Link>
          </AspectRatio>
        ))}
      </Slider>
      <div className="grid grid-rows-1 grid-cols-4 gap-4">
        {images.map((image, index) => (
          <AspectRatio
            ratio={41 / 31}
            key={index}
            className="rounded-lg overflow-hidden w-full h-full"
            onClick={() => goToSlide(index)}
          >
            <Image
              src={image}
              alt={index.toString()}
              sizes="(max-width: 412px) 100vw, (max-width: 412px) 50vw, 33vw"
              fill
              className="object-cover rounded-lg"
            />
            <div
              className={`absolute w-full h-full bg-greyShades-g40 transition-opacity duration-500 ${
                index === activeSlide ? "opacity-0" : "opacity-50"
              }`}
            ></div>
          </AspectRatio>
        ))}
      </div>
    </div>
  );
}
