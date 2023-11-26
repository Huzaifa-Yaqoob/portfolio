"use client";

import { useState, useRef } from "react";
import Slider from "react-slick";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { Separator } from "@/components/ui/separator";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarousalProps {
  children: React.ReactNode;
  slideCount: number;
  carousalName: string;
  title: string;
}

export default function Carousal({
  children,
  slideCount,
  carousalName,
  title,
}: CarousalProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const slider = useRef<HTMLDivElement | null | any>(null);
  var settings = {
    dots: false,
    infinite: false,
    spaceBetween: 20,
    swipeToSlide: true,
    speed: 500,
    slidesPerRow: 3,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [{ breakpoint: 1024, settings: { slidesPerRow: 2 } }],
    afterChange: (current: number) => setActiveSlide(current),
  };
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>{title}</div>
        <div className="flex items-center gap-4">
          <div
            onClick={() => slider.current?.slickPrev()}
            className="text-lg p-2 rounded cursor-pointer transition-colors duration-200 bg-peachShades-p96"
          >
            <HiChevronLeft />
          </div>
          <div
            onClick={() => slider.current?.slickNext()}
            className="text-lg p-2 rounded cursor-pointer transition-colors duration-200 bg-peachShades-p96"
          >
            <HiChevronRight />
          </div>
        </div>
      </div>
      <Separator />
      <Slider ref={slider} {...settings} className={carousalName}>
        {children}
      </Slider>
    </div>
  );
}
