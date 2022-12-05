"use client";

import { useState } from "react";
import Image from "next/legacy/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { SectionTitle } from "@atoms/SectionTitle/SectionTitle";
import { MediaButton } from "./MediaButton";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Videos } from "./Videos";

const Media = () => {
  return (
    <section className="flex flex-col items-center h-full w-full bg-black pb-4 px-4">
      <SectionTitle title="Media" />
      <div className="text-gray-200 font-blender-bold flex flex-wrap max-w-xl w-full">
        <MediaButton title="Videos" active />
        <MediaButton title="Screenshots" roundedBorder="topRight" />
        <MediaButton title="Wallpapers" roundedBorder="bottonLeft" />
        <MediaButton title="Concept Art" />
      </div>
      <Videos />
    </section>
  );
};

export { Media };
