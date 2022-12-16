import Image from "next/legacy/image";
import { useState } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { ImageOverlay } from "@molecules/ImageOverlay/ImageOverlay";
import { ImageType } from "@molecules/Media/ConceptArt";

type CarousellType = {
  images: ImageType;
};

const Carousell = ({ images }: CarousellType) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  const showModal = (initialSlide: number) => {
    setShowOverlay(true);
    setInitialSlide(initialSlide);
  };

  return (
    <>
      {showOverlay && (
        <ImageOverlay
          images={images}
          initialSlide={initialSlide}
          setShowOverlay={setShowOverlay}
        />
      )}
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={16}
        slidesPerView={2.3}
        navigation={false}
        pagination={{ clickable: false }}
        scrollbar={{ draggable: true }}
        className="flex flex-col text-white mt-10 max-w-full"
      >
        {images.map((image, i) => (
          <SwiperSlide key={image.partial}>
            <button onClick={() => showModal(i)}>
              <Image
                src={image.partial}
                alt="Thumbnail image"
                width={161}
                height={280}
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export { Carousell };
