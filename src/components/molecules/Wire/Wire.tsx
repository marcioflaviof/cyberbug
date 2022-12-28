"use client";

import { FreeGodies } from "@atoms/icons/FreeGodies/FreeGodies";
import Image from "next/legacy/image";
import { useState } from "react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const videos = [
  {
    image: "/cyberbug/media/nc_wire/NC_Wire_Episode_6_EN_1x-7b5c43a9_vtxweg",
    videoLink: "https://www.youtube.com/watch?v=4WZJUxJfo9Y",
    name: "Episode 6",
  },
  {
    image: "/cyberbug/media/nc_wire/NC_Wire_Episode_5_EN_1x-adba1679_fnqq1s",
    videoLink: "https://www.youtube.com/watch?v=TCKfebVQFhU",
    name: "Episode 5",
  },
  {
    image: "/cyberbug/media/nc_wire/NC_Wire_Episode_4_EN_1x-110d892d_fm74tn",
    videoLink: "https://www.youtube.com/watch?v=TcWf0pnbfLA",
    name: "Episode 4",
  },
  {
    image: "/cyberbug/media/nc_wire/NC_Wire_Episode_3_EN_1x-3673ec4e_sly9vg",
    videoLink: "https://www.youtube.com/watch?v=c_urbl-2gV4",
    name: "Episode 3",
  },
  {
    image: "/cyberbug/media/nc_wire/NC_Wire_Episode_2_EN_1x-84256014_p2kmuq",
    videoLink: "https://www.youtube.com/watch?v=Do51eJowSyg",
    name: "Episode 2",
  },
  {
    image: "/cyberbug/media/nc_wire/NC_Wire_Episode_1_EN_1x-b7bc80f1_srltqi",
    videoLink: "https://www.youtube.com/watch?v=ToWfeUEAeeQ",
    name: "Episode 1",
  },
];

const Wire = () => {
  return (
    <section className="flex flex-col items-center py-5">
      <div className="mb-6">
        <Image
          src="/cyberbug/logo-ncwire_eyozjc.png"
          height={192}
          width={256}
        />
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        slidesPerView={1}
        navigation={false}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="max-w-full my-8"
      >
        {videos.map((video) => (
          <SwiperSlide key={video.videoLink} className="w-full pb-8 px-3">
            <a
              href={video.videoLink}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col gap-2"
            >
              <Image
                src={video.image}
                alt="Thumbnail image"
                layout="responsive"
                width={390}
                height={220}
              />

              <span className="text-xl uppercase">{video.name}</span>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <a
        className="px-20"
        href="https://www.gog.com/"
        target="_blank"
        rel="noreferrer"
      >
        <FreeGodies />
      </a>
    </section>
  );
};

export { Wire };
