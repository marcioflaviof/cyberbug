import Image from "next/legacy/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

type CarousellType = {
  images: string[];
};

const Carousell = ({ images }: CarousellType) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={16}
      slidesPerView={2.3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="flex flex-col text-white mt-10 max-w-full"
    >
      {images.map((image) => (
        <SwiperSlide key={image}>
          <button>
            <Image src={image} alt="Thumbnail image" width={161} height={280} />
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export { Carousell };
