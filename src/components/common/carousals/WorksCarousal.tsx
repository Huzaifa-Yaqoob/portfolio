"use client";

import { useState, useRef } from "react";
import Slider from "react-slick";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { CarousalData } from "@/data/carousalData";
import ImagesCarousal from "./ImagesCarousal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface WorksCarousalProps {
  carousalData: CarousalData[];
}

export default function WorksCarousal({ carousalData }: WorksCarousalProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideCount = carousalData.length;
  const slider = useRef<HTMLDivElement | null | any>(null);

  const goToSlide = (i: number) => {
    if (slider.current) {
      slider.current.slickGoTo(i);
      setActiveSlide(i);
    }
  };
  var settings = {
    dots: false,
    infinite: true,
    spaceBetween: 20,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current: number) => setActiveSlide(current),
  };

  return (
    <div className="block space-y-4 md:hidden">
      <Slider ref={slider} {...settings} className="">
        {carousalData.map((images, index) => (
          <div
            key={index}
            className="bg-peachShades-p96 rounded w-full p-4 space-y-4"
          >
            <h3 className="font-semibold text-greyShades-g20">
              {images.title}
            </h3>
            <ImagesCarousal images={images.images} />
          </div>
        ))}
      </Slider>
      <div className="flex justify-between items-center ">
        <div
          onClick={() => slider.current?.slickPrev()}
          className="text-lg p-2 rounded cursor-pointer transition-colors duration-200 bg-peachShades-p96"
        >
          <HiChevronLeft />
        </div>
        <div className="flex gap-2">
          {carousalData.map((d, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-6 h-1 rounded-lg cursor-pointer transition-colors duration-200 ${
                index === activeSlide
                  ? "bg-purpleShades-p50"
                  : "bg-peachShades-p85"
              }`}
            ></div>
          ))}
        </div>
        <div
          onClick={() => slider.current?.slickNext()}
          className="text-lg p-2 rounded cursor-pointer transition-colors duration-200 bg-peachShades-p96"
        >
          <HiChevronRight />
        </div>
      </div>
    </div>
  );
}
