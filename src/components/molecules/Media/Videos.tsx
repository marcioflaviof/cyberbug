import Image from "next/legacy/image";
import { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const videos = [
  {
    image: "/cyberbug/media/thumbnail/firstImage_yhim0z",
    videoLink: "https://www.youtube.com/embed/PbVKBoDuhZ0",
  },
  {
    image: "/cyberbug/media/thumbnail/secondImage_numl30",
    videoLink: "https://www.youtube.com/embed/InrHVskqJsE",
  },
  {
    image: "/cyberbug/media/thumbnail/thirdImage_i9zmti",
    videoLink: "https://www.youtube.com/embed/Sbc9QWvuNIo",
  },
  {
    image: "/cyberbug/media/thumbnail/fourthImage_luyevy",
    videoLink: "https://www.youtube.com/embed/MGiINo9Zvi0",
  },
  {
    image: "/cyberbug/media/thumbnail/fifithImage_so9hj1",
    videoLink: "https://www.youtube.com/embed/xDU9x3rW1k8",
  },
];

const Videos = () => {
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <>
      <div className="mt-7 aspect-w-16 aspect-h-9 w-full">
        <iframe id="ytplayer" src={activeVideo.videoLink} />
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={16}
        slidesPerView={3}
        navigation={false}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="flex flex-col text-white mt-10 max-w-full"
      >
        {videos.map((video) => (
          <SwiperSlide
            key={video.videoLink}
            className={`${
              activeVideo.videoLink === video.videoLink
                ? "opacity-100"
                : "opacity-50"
            }`}
          >
            <button onClick={() => setActiveVideo(video)}>
              <Image
                src={video.image}
                alt="Thumbnail image"
                width={128}
                height={72}
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export { Videos };
