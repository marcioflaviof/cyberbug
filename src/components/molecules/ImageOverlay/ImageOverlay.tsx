import Image from "next/legacy/image";
import { Dispatch, SetStateAction, useEffect } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { ImageType } from "@molecules/Media/ConceptArt";

import "swiper/css";
import "swiper/css/navigation";

type ImagesOverlayType = {
  images: ImageType;
  initialSlide: number;
  setShowOverlay: Dispatch<SetStateAction<boolean>>;
};

const ImageOverlay = ({
  images,
  initialSlide,
  setShowOverlay,
}: ImagesOverlayType) => {
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      const key = e.key;
      if (key === "Esc" || key === "Escape") setShowOverlay(false);
    };

    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [setShowOverlay]);

  return (
    <>
      <div className="before:content-{' '} w-full h-full overflow-hidden fixed z-10 bg-gray-900 opacity-80" />

      <div
        onClick={() => setShowOverlay(false)}
        className="before:content-{' '} w-full h-full fixed z-10"
      />

      <button
        onClick={() => setShowOverlay(false)}
        className="bg-yellow-200 absolute  h-9 w-9 right-0 top-0 text-2xl z-20"
      >
        X
      </button>

      <div className="m-auto absolute h-fit w-full top-0 bottom-0 z-20">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          navigation
          loop
          initialSlide={initialSlide}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {images.map((image) => (
            <SwiperSlide key={image.full}>
              <Image
                src={image.full}
                alt="Thumbnail image"
                layout="responsive"
                width={65}
                height={47}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export { ImageOverlay };
